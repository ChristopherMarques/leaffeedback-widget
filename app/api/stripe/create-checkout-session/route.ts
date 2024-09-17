import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { auth } from "@clerk/nextjs/server";
import User from "@/models/User";
import dbConnect from "@/lib/mongodb";
import Stripe from "stripe";

export async function POST(request: NextRequest) {
  if (!process.env.NEXT_PUBLIC_BASE_URL) {
    throw new Error(
      "NEXT_PUBLIC_BASE_URL is not set in the environment variables"
    );
  }

  const { userId } = auth();
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  await dbConnect();

  const { priceId } = await request.json();

  try {
    const user = await User.findOne({ clerkId: userId });

    if (!user.stripeCustomerId) {
      const customer = await stripe.customers.create({
        metadata: { clerkId: userId },
      });
      user.stripeCustomerId = customer.id;
      await user.save();
    }

    const session: Stripe.Checkout.Session =
      await stripe.checkout.sessions.create({
        customer: user.stripeCustomerId,
        line_items: [{ price: priceId, quantity: 1 }],
        mode: "subscription",
        success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/user/update-subscription?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/dashboard?canceled=true`,
      });

    return NextResponse.json({ sessionId: session.id });
  } catch (error) {
    console.error("Error creating checkout session:", error);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
