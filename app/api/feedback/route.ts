import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/firebaseAdmin";
import { Feedback } from "@/lib/types";

export async function POST(request: NextRequest) {
  try {
    const { content, email, projectId, widgetId, type, screenshot } =
      await request.json();
    if (!content || !projectId) {
      return NextResponse.json(
        { error: "Content and projectId are required" },
        { status: 400 }
      );
    }

    const newFeedback: Partial<Feedback> = {
      content,
      email,
      projectId,
      widgetId,
      type,
      screenshot,
      createdAt: new Date(),
    };

    const docRef = await db.collection("feedbacks").add(newFeedback);
    return NextResponse.json(
      { ...newFeedback, id: docRef.id },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating feedback:", error);
    return NextResponse.json(
      { error: "Failed to create feedback" },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  const projectId = request.nextUrl.searchParams.get("projectId");
  const userId = request.nextUrl.searchParams.get("userId");
  if (!projectId && !userId) {
    return NextResponse.json(
      { error: "ProjectId or userId are required" },
      { status: 400 }
    );
  }

  if (userId) {
    try {
      const feedbacksSnapshot = await db
        .collection("feedbacks")
        .orderBy("createdAt", "desc")
        .get();

      return NextResponse.json(
        feedbacksSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      );
    } catch (error) {
      console.error("Error fetching feedbacks:", error);
      return NextResponse.json(
        { error: "Failed to fetch feedbacks" },
        { status: 500 }
      );
    }
  }

  try {
    const feedbacksSnapshot = await db
      .collection("feedbacks")
      .where("projectId", "==", projectId)
      .orderBy("createdAt", "desc")
      .get();

    console.log(`Found ${feedbacksSnapshot.size} feedbacks`);

    const feedbacks = feedbacksSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return NextResponse.json(feedbacks);
  } catch (error) {
    console.error("Error fetching feedbacks:", error);
    return NextResponse.json(
      { error: "Failed to fetch feedbacks" },
      { status: 500 }
    );
  }
}
