import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import User from "@/models/User";
import dbConnect from "@/lib/mongodb";
import Stripe from "stripe";

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(request: NextRequest) {
  console.log("Webhook received");

  try {
    const body = await request.text();
    const sig = request.headers.get("stripe-signature")!;

    console.log("Verifying webhook signature");
    const event = stripe.webhooks.constructEvent(body, sig, webhookSecret);

    console.log(`Event processed: ${event.type}`);

    await dbConnect();

    switch (event.type) {
      case "customer.subscription.created":
      case "customer.subscription.updated":
        const subscription = event.data.object as Stripe.Subscription;
        await User.findOneAndUpdate(
          { stripeCustomerId: subscription.customer },
          {
            subscriptionId: subscription.id,
            subscriptionStatus: subscription.status,
            subscriptionPlan: subscription.items.data[0].price.id,
          }
        );
        break;
      case "customer.subscription.deleted":
        const deletedSubscription = event.data.object;
        await User.findOneAndUpdate(
          { stripeCustomerId: deletedSubscription.customer },
          {
            subscriptionId: null,
            subscriptionStatus: "canceled",
            subscriptionPlan: null,
          }
        );
        break;
      case "invoice.payment_succeeded":
        const invoice = event.data.object as Stripe.Invoice;
        if (invoice.subscription) {
          await User.findOneAndUpdate(
            { stripeCustomerId: invoice.customer },
            {
              subscriptionId: invoice.subscription,
              subscriptionStatus: "active",
              subscriptionPlan: invoice.lines.data[0].price?.id,
            }
          );
        }
        break;
      case "checkout.session.completed":
        const checkoutSession = event.data.object;
        const subscriptionId = checkoutSession.subscription;
        const customerId = checkoutSession.customer;

        if (
          typeof subscriptionId === "string" &&
          typeof customerId === "string"
        ) {
          const subscriptionDetails = await stripe.subscriptions.retrieve(
            subscriptionId
          );
          const planId = subscriptionDetails.items.data[0].price.id;

          // Update the user's subscription details in the database
          await User.findOneAndUpdate(
            { email: checkoutSession.customer_email },
            {
              stripeCustomerId: customerId,
              subscriptionId: subscriptionId,
              subscriptionStatus: subscriptionDetails.status,
              subscriptionPlan: planId,
            },
            { upsert: true }
          );
        } else {
          console.error("Invalid subscriptionId or customerId:", {
            subscriptionId,
            customerId,
          });
        }
        break;
      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    console.log("Webhook processing completed");
    return NextResponse.json({ received: true });
  } catch (err: any) {
    console.error(`Webhook error: ${err.message}`);
    return NextResponse.json(
      { error: `Webhook error: ${err.message}` },
      { status: 500 }
    );
  }
}
