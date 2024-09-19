import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import { User } from "@/lib/types";

// Set a timeout for the database operation (e.g., 10 seconds)
const DB_OPERATION_TIMEOUT = 10000; // 10 seconds

export async function GET(request: NextRequest) {
  try {
    // Get userId from the query parameters
    const userId = request.nextUrl.searchParams.get("userId");

    // Return early if userId is not provided
    if (!userId) {
      return NextResponse.json(
        { message: "Missing or invalid userId" },
        { status: 400 }
      );
    }

    // Start the DB operation
    const dbOperation = async () => {
      const { db } = await dbConnect();

      // Check if database connection is established
      if (!db) {
        throw new Error("Failed to connect to the database");
      }

      // Find the user in the database by clerkId
      const user = await db
        .collection<User>("users")
        .findOne({ clerkId: userId });
      return user;
    };

    // Set up a timeout mechanism to avoid long waits
    const user = await Promise.race([
      dbOperation(),
      new Promise<User | null>((_, reject) =>
        setTimeout(
          () => reject(new Error("Database operation timed out")),
          DB_OPERATION_TIMEOUT
        )
      ),
    ]);

    // If user is found and has a subscription, return the subscription details
    if (user && user.subscriptionId) {
      return NextResponse.json({
        subscriptionId: user.subscriptionId,
        subscriptionStatus: user.subscriptionStatus,
        subscriptionPlan: user.subscriptionPlan,
        subscriptionPlanName: user.subscriptionPlanName,
        subscriptionExpirationDate: user.subscriptionExpirationDate,
      });
    } else {
      // User or subscription not found
      return NextResponse.json(
        { message: "User or subscription not found" },
        { status: 404 }
      );
    }
  } catch (error: unknown) {
    // Handle errors of type `unknown` safely
    let errorMessage = "An unknown error occurred";
    let statusCode = 500;

    // Type check if the error is an instance of Error
    if (error instanceof Error) {
      errorMessage = error.message;

      // If the error is related to timeout, set appropriate status code
      if (errorMessage.includes("timed out")) {
        statusCode = 504;
        errorMessage = "Request timed out. Please try again later.";
      }
    }

    // Enhanced error logging for easier debugging
    console.error("Error fetching user subscription:", {
      error: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : null,
      requestUrl: request.nextUrl.toString(),
    });

    // Respond with the appropriate error message and status code
    return NextResponse.json({ message: errorMessage }, { status: statusCode });
  }
}
