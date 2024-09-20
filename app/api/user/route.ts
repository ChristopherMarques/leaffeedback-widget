import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import User from "@/models/User";
import { auth, clerkClient } from "@clerk/nextjs/server";
import { User as UserType } from "@/lib/types";

export async function GET(request: NextRequest) {
  const { userId } = auth();
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  await dbConnect();

  try {
    const user: UserType | null = await User.findOne({ clerkId: userId });
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    return NextResponse.json(user);
  } catch (error) {
    console.error("Error fetching user:", error);
    return NextResponse.json(
      { error: "Failed to fetch user" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  const { userId } = await request.json();
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { db } = await dbConnect();

  try {
    const clerkUser = await clerkClient.users.getUser(userId);
    const result = await db?.collection("users").findOneAndUpdate(
      { clerkId: userId },
      {
        $setOnInsert: {
          name: `${clerkUser.firstName} ${clerkUser.lastName}`,
          email: clerkUser.emailAddresses[0].emailAddress,
        },
      },
      { upsert: true, returnDocument: "after" }
    );

    if (!result) {
      throw new Error("Failed to create/fetch user");
    }

    const user: UserType = result as unknown as UserType;
    return NextResponse.json(user);
  } catch (error) {
    console.error("Error creating/fetching user:", error);
    return NextResponse.json(
      { error: "Failed to create/fetch user" },
      { status: 500 }
    );
  }
}
