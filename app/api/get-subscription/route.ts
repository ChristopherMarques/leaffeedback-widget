import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";

export async function GET(request: NextRequest) {
  try {
    const { db } = await dbConnect();
    const userId = request.nextUrl.searchParams.get("userId");

    if (!db) {
      return NextResponse.json(
        { message: "Failed to connect to the database" },
        { status: 500 }
      );
    }

    const user = await db.collection("users").findOne({ clerkId: userId });

    if (user && user.subscriptionId) {
      return NextResponse.json({
        subscriptionId: user.subscriptionId,
        subscriptionStatus: user.subscriptionStatus,
        subscriptionPlan: user.subscriptionPlan,
        subscriptionPlanName: user.subscriptionPlanName,
        subscriptionExpirationDate: user.subscriptionExpirationDate,
      });
    } else {
      return NextResponse.json(
        { message: "User or subscription not found" },
        { status: 404 }
      );
    }
  } catch (error) {
    console.error("Error fetching user subscription:", error);
    return NextResponse.json(
      { message: "Error fetching user subscription" },
      { status: 500 }
    );
  }
}
