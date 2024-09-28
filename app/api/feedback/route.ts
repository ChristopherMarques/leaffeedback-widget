import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/firebaseAdmin";
import { getAuth } from "firebase-admin/auth";
import { Feedback } from "@/lib/types";

export async function POST(request: NextRequest) {
  try {
    const { content, email, projectId } = await request.json();
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
      createdAt: new Date(),
    };

    await db.collection("feedbacks").add(newFeedback);
    return NextResponse.json(newFeedback, { status: 201 });
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
  if (!projectId) {
    return NextResponse.json(
      { error: "ProjectId is required" },
      { status: 400 }
    );
  }

  try {
    const feedbacksSnapshot = await db
      .collection("feedbacks")
      .where("projectId", "==", projectId)
      .orderBy("createdAt", "desc")
      .get();
    const feedbacks = feedbacksSnapshot.docs.map((doc) => doc.data());
    return NextResponse.json(feedbacks);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch feedbacks" },
      { status: 400 }
    );
  }
}
