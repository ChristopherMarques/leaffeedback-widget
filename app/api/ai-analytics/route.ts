import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/firebaseAdmin";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  organization: process.env.OPENAI_ORGANIZATION,
});

console.log(openai);

export async function POST(request: NextRequest) {
  try {
    const { projectId } = await request.json();

    // Fetch feedbacks for the project
    const feedbacksSnapshot = await db
      .collection("feedbacks")
      .where("projectId", "==", projectId)
      .get();

    const feedbacks = feedbacksSnapshot.docs.map((doc) => doc.data().content);

    let analysis;

    try {
      // Generate AI analysis
      const prompt = `Analyze the following user feedbacks and provide insights:
1. What percentage of feedbacks are positive?
2. What is the top feature mentioned?
3. What is the main concern or issue mentioned?

Feedbacks:
${feedbacks.join("\n")}

Provide the analysis in the following JSON format:
{
  "positiveFeedbackPercentage": number,
  "topFeature": "string",
  "mainConcern": "string"
}`;

      const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
      });

      analysis = JSON.parse(completion.choices[0].message?.content || "{}");
    } catch (openaiError) {
      console.error("OpenAI API error:", openaiError);

      // Fallback to a simple analysis
      analysis = {
        positiveFeedbackPercentage:
          calculatePositiveFeedbackPercentage(feedbacks),
        topFeature: "Unable to determine due to API limitations",
        mainConcern: "Unable to determine due to API limitations",
      };
    }

    // Save the analysis to the database
    await db
      .collection("aiAnalytics")
      .doc(projectId)
      .set({
        ...analysis,
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
      .doc(projectId)
      .get();

    if (!analyticsDoc.exists) {
      return NextResponse.json(null);
    }

    return NextResponse.json(analyticsDoc.data());
  } catch (error) {
    console.error("Error fetching AI analytics:", error);
    return NextResponse.json(
      { error: "Failed to fetch AI analytics" },
      { status: 500 }
    );
  }
}
