import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/firebaseAdmin";
import { getAuth } from "firebase-admin/auth";

export async function POST(request: NextRequest) {
  try {
    const { content, email, projectId } = await request.json();
    if (!content || !projectId) {
      return NextResponse.json(
        { error: "Content and projectId are required" },
        { status: 400 }
      );
    }

    const newFeedback = {
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
  const userId = request.nextUrl.searchParams.get("userId");
  if (!userId) {
    return NextResponse.json({ error: "UserId is required" }, { status: 400 });
  }

  try {
    const feedbacksSnapshot = await db
      .collection("feedbacks")
      .where("userId", "==", userId)
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
