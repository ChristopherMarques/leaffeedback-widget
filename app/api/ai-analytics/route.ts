import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/firebaseAdmin";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export async function POST(request: NextRequest) {
  try {
    const { projectId } = await request.json();

    const feedbacksSnapshot = await db
      .collection("feedbacks")
      .where("projectId", "==", projectId)
      .get();

    const feedbacks = feedbacksSnapshot.docs.map((doc) => doc.data().content);

    let analysis;

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      const prompt = `Analyze the following user feedbacks and provide insights:
1. What percentage of feedbacks are positive?
2. What percentage of feedbacks are negative?
3. What is the top feature mentioned?
4. What is the main concern or issue mentioned?
5. What is the main suggestion for improvement mentioned?
6. How can the product team improve the product based on the feedbacks?

Feedbacks:
${feedbacks.join("\n")}

Provide the analysis in the following JSON format, without any markdown formatting or additional text:
{
  "positiveFeedbackPercentage": number,
  "negativeFeedbackPercentage": number,
  "topFeature": "string",
  "mainConcern": "string",
  "mainSuggestion": "string",
  "productImprovementSuggestion": "string"
}`;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      let text = response.text();

      text = text.replace(/```json\n?|\n?```/g, "").trim();

      try {
        analysis = JSON.parse(text);
      } catch (jsonError) {
        console.error("JSON parsing error:", jsonError);
        throw new Error("Invalid JSON response from Gemini");
      }
    } catch (geminiError) {
      console.error("Gemini API error:", geminiError);

      analysis = {
        positiveFeedbackPercentage:
          calculatePositiveFeedbackPercentage(feedbacks),
        topFeature: "Unable to determine due to API limitations",
        mainConcern: "Unable to determine due to API limitations",
        mainSuggestion: "Unable to determine due to API limitations",
        productImprovementSuggestion:
          "Unable to determine due to API limitations",
      };
    }

    await db
      .collection("aiAnalytics")
      .doc(projectId)
      .set({
        ...analysis,
        projectId,
        createdAt: new Date(),
      });

    return NextResponse.json(analysis);
  } catch (error) {
    console.error("Error generating AI analytics:", error);
    return NextResponse.json(
      { error: "Failed to generate AI analytics" },
      { status: 500 }
    );
  }
}

// Helper function to calculate positive feedback percentage
function calculatePositiveFeedbackPercentage(feedbacks: string[]): number {
  const positiveKeywords = [
    "good",
    "great",
    "excellent",
    "amazing",
    "love",
    "like",
  ];
  const positiveFeedbacks = feedbacks.filter((feedback) =>
    positiveKeywords.some((keyword) => feedback.toLowerCase().includes(keyword))
  );
  return (positiveFeedbacks.length / feedbacks.length) * 100;
}

export async function GET(request: NextRequest) {
  try {
    const projectId = request.nextUrl.searchParams.get("projectId");

    if (!projectId) {
      return NextResponse.json(
        { error: "Project ID is required" },
        { status: 400 }
      );
    }

    const analyticsDoc = await db
      .collection("aiAnalytics")
      .where("projectId", "==", projectId)
      .orderBy("createdAt", "desc")
      .limit(1)
      .get();

    if (analyticsDoc.empty) {
      return NextResponse.json(null);
    }

    return NextResponse.json(analyticsDoc.docs[0].data());
  } catch (error) {
    console.error("Error fetching AI analytics:", error);
    return NextResponse.json(
      { error: "Failed to fetch AI analytics" },
      { status: 500 }
    );
  }
}
