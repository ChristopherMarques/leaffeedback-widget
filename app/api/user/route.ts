import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import User from "@/models/User";
import { auth } from "@clerk/nextjs/server";

export async function GET(request: NextRequest) {
  const { userId } = auth();
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  await dbConnect();

  try {
    let user = await User.findOne({ clerkId: userId });

    if (!user) {
      // If the user doesn't exist, create a new one
      user = await User.create({ clerkId: userId });
    }

    return NextResponse.json(user);
  } catch (error) {
    console.error("Error fetching or creating user:", error);
    return NextResponse.json(
      { error: "Failed to fetch or create user" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  const { userId } = auth();
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  await dbConnect();

  try {
    const {
      stripeCustomerId,
      subscriptionId,
      subscriptionStatus,
      subscriptionPlan,
    } = await request.json();

    let user = await User.findOne({ clerkId: userId });

    if (!user) {
      // If the user doesn't exist, create a new one
      user = new User({ clerkId: userId });
    }

    // Update user fields if provided
    if (stripeCustomerId) user.stripeCustomerId = stripeCustomerId;
    if (subscriptionId) user.subscriptionId = subscriptionId;
    if (subscriptionStatus) user.subscriptionStatus = subscriptionStatus;
    if (subscriptionPlan) user.subscriptionPlan = subscriptionPlan;

    await user.save();

    return NextResponse.json(user);
  } catch (error) {
    console.error("Error updating user:", error);
    return NextResponse.json(
      { error: "Failed to update user" },
      { status: 500 }
    );
  }
}
