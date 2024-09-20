import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import User from "@/models/User";

export async function GET(request: NextRequest) {
  const userId = request.nextUrl.searchParams.get("userId");
  if (!userId) {
    return NextResponse.json({ error: "UserId is required" }, { status: 400 });
  }

  await dbConnect();

  try {
    const user = await User.findOne({ clerkId: userId });
    if (!user || !user.subscriptionId) {
      return NextResponse.json({ error: "Subscription not found" }, { status: 404 });
    }

    return NextResponse.json({
      subscriptionId: user.subscriptionId,
      subscriptionStatus: user.subscriptionStatus,
      subscriptionPlan: user.subscriptionPlan,
      subscriptionPlanName: user.subscriptionPlanName,
      subscriptionExpirationDate: user.subscriptionExpirationDate,
    });
  } catch (error) {
    console.error("Error fetching subscription:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
