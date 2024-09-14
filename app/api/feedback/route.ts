import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Feedback from "@/models/Feedback";
import { auth } from "@clerk/nextjs/server";

export async function POST(request: NextRequest) {
  const { userId } = auth();
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  await dbConnect();

  try {
    const { content, email, projectId } = await request.json();
    if (!content || !projectId) {
      return NextResponse.json(
        { error: "Content and projectId are required" },
        { status: 400 }
      );
    }
    const feedback = await Feedback.create({
      content,
      email,
      userId,
      projectId,
    });
    return NextResponse.json(feedback, { status: 201 });
  } catch (error) {
    console.error("Error creating feedback:", error);
    return NextResponse.json(
      { error: "Failed to create feedback" },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  const { userId } = auth();
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  await dbConnect();

  try {
    const feedbacks = await Feedback.find({ userId }).sort({ createdAt: -1 });
    return NextResponse.json(feedbacks);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch feedbacks" },
      { status: 400 }
    );
  }
}
