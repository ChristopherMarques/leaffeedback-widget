import { stripe } from "@/lib/stripe";
import { db } from "@/lib/firebaseAdmin";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(request: NextRequest) {
  const sig = request.headers.get("stripe-signature");

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      await request.text(),
      sig || "",
      process.env.STRIPE_WEBHOOK_SECRET || ""
    );
  } catch (err) {
    const error = err as Error;
    console.error("Webhook signature verification failed.", error.message);
    return NextResponse.json(
      { error: "Webhook signature verification failed." },
      { status: 400 }
    );
  }

  switch (event.type) {
    case "checkout.session.completed": {
      const checkoutSession = event.data.object as Stripe.Checkout.Session;
      const subscriptionId = checkoutSession.subscription;
      const customerId = checkoutSession.customer;

      if (
        typeof subscriptionId === "string" &&
        typeof customerId === "string"
      ) {
        const subscriptionDetails = await stripe.subscriptions.retrieve(
          subscriptionId
        );
        const planId = subscriptionDetails.items.data[0]?.price.id;

        const userRef = db.collection("users").doc(customerId);
        await userRef.set(
          {
            stripeCustomerId: customerId,
            subscriptionId: subscriptionId,
            subscriptionStatus: subscriptionDetails.status,
            subscriptionPlan: planId,
          },
          { merge: true }
        );

        console.log(`Checkout session completed for customer: ${customerId}`);
      } else {
        console.error(
          "Invalid subscriptionId or customerId in checkout session",
          { subscriptionId, customerId }
        );
      }

      break;
    }
    default:
      console.warn(`Unhandled event type ${event.type}`);
  }

  return NextResponse.json({ received: true });
}
