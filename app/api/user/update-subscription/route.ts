import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import User from "@/models/User";
import dbConnect from "@/lib/mongodb";
import { PLANS } from "@/lib/plans";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const sessionId = request.nextUrl.searchParams.get("session_id");

  if (!sessionId) {
    return NextResponse.json(
      { error: "No session ID provided" },
      { status: 400 }
    );
  }

  try {
    await dbConnect();

    const session = await stripe.checkout.sessions.retrieve(sessionId);
    const subscription = await stripe.subscriptions.retrieve(
      session.subscription as string
    );
    const productId = subscription.items.data[0].price.product;
    const productName = (await stripe.products.retrieve(productId.toString()))
      .name;

    const subscriptionExpirationDate = new Date(
      subscription.current_period_end * 1000
    );

    await User.findOneAndUpdate(
      { stripeCustomerId: session.customer },
      {
        subscriptionId: subscription.id,
        subscriptionStatus: subscription.status,
        subscriptionPlan: subscription.items.data[0].price.id,
        subscriptionPlanName: productName,
        subscriptionExpirationDate: subscriptionExpirationDate, // Add the expiration date
      }
    );

    return NextResponse.redirect(
      `${process.env.NEXT_PUBLIC_BASE_URL}/dashboard?success=true`
    );
  } catch (error) {
    console.error("Error updating user subscription:", error);
    return NextResponse.redirect(
      `${process.env.NEXT_PUBLIC_BASE_URL}/dashboard?error=true`
    );
  }
}

export async function POST(request: NextRequest) {
  const { sessionId } = await request.json();

  if (!sessionId) {
    return NextResponse.json(
      { error: "No session ID provided" },
      { status: 400 }
    );
  }

  try {
    await dbConnect();

    const session = await stripe.checkout.sessions.retrieve(sessionId);
    const subscription = await stripe.subscriptions.retrieve(
      session.subscription as string
    );
    const productId = subscription.items.data[0].price.product;
    const productName = (await stripe.products.retrieve(productId.toString()))
      .name;

    const subscriptionExpirationDate = new Date(
      subscription.current_period_end * 1000
    );

    await User.findOneAndUpdate(
      { stripeCustomerId: session.customer },
      {
        subscriptionId: subscription.id,
        subscriptionStatus: subscription.status,
        subscriptionPlan: subscription.items.data[0].price.id,
        subscriptionPlanName: productName,
        subscriptionExpirationDate: subscriptionExpirationDate, // Add the expiration date
      }
    );

    return NextResponse.redirect(
      `${process.env.NEXT_PUBLIC_BASE_URL}/dashboard?success=true`
    );
  } catch (error) {
    console.error("Error updating user subscription:", error);
    return NextResponse.redirect(
      `${process.env.NEXT_PUBLIC_BASE_URL}/dashboard?error=true`
    );
  }
}
