import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { getAuth } from "firebase-admin/auth";
import { db } from "@/lib/firebaseAdmin";
import Stripe from "stripe";

export async function POST(request: NextRequest) {
  if (!process.env.NEXT_PUBLIC_BASE_URL) {
    throw new Error(
      "NEXT_PUBLIC_BASE_URL is not set in the environment variables"
    );
  }

  const userId = request.nextUrl.searchParams.get("userId");
  if (!userId) {
    return NextResponse.json({ error: "UserId is required" }, { status: 400 });
  }

  const { priceId } = await request.json();

  try {
    const userDoc = await db.collection("users").doc(userId).get();
    let stripeCustomerId = userDoc.data()?.stripeCustomerId;

    if (!stripeCustomerId) {
      const customer = await stripe.customers.create({
        metadata: { userId },
      });
      stripeCustomerId = customer.id;
      await db
        .collection("users")
        .doc(userId)
        .set({ stripeCustomerId }, { merge: true });
    }

    const session: Stripe.Checkout.Session =
      await stripe.checkout.sessions.create({
        customer: stripeCustomerId,
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
