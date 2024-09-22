import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/firebaseAdmin";
import { getAuth } from "firebase-admin/auth";

export async function GET(request: NextRequest) {
  const userId = request.nextUrl.searchParams.get("userId");

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const userDoc = await db
      .collection("users")
      .doc(userId as string)
      .get();
    if (!userDoc.exists) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    return NextResponse.json(userDoc.data());
  } catch (error) {
    console.error("Error fetching user:", error);
    return NextResponse.json(
      { error: "Failed to fetch user" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  const { userId, email, name } = await request.json();
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const userDocRef = db.collection("users").doc(userId);
    const userDoc = await userDocRef.get();
    if (!userDoc.exists) {
      const newUser = {
        id: userId,
        name,
        email,
        subscriptionStatus: "inactive",
        subscriptionPlan: "",
        subscriptionPlanName: "",
        subscriptionExpirationDate: "",
        createdAt: new Date(),
      };
      await userDocRef.set(newUser);
      return NextResponse.json(newUser);
    }
    return NextResponse.json(userDoc.data());
  } catch (error) {
    console.error("Error creating/fetching user:", error);
    return NextResponse.json(
      { error: "Failed to create/fetch user" },
      { status: 500 }
    );
  }
}
