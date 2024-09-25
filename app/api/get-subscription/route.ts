import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/firebaseAdmin";

export async function GET(request: NextRequest) {
  const userId = request.nextUrl.searchParams.get("userId");
  if (!userId) {
    return NextResponse.json({ error: "UserId is required" }, { status: 400 });
  }

  try {
    const userDoc = await db.collection("users").doc(userId).get();
    if (!userDoc.exists) {
      return NextResponse.json(
        { error: "Subscription not found" },
        { status: 404 }
      );
    }

    const userData = userDoc.data();
    return NextResponse.json({
      subscriptionId: userData?.subscriptionId,
      subscriptionStatus: userData?.subscriptionStatus,
      subscriptionPlan: userData?.subscriptionPlan,
      subscriptionPlanName: userData?.subscriptionPlanName,
      subscriptionExpirationDate: userData?.subscriptionExpirationDate,
    });
  } catch (error) {
    console.error("Error fetching subscription:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
