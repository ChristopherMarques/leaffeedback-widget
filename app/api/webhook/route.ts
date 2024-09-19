import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import User from "@/models/User";
import dbConnect from "@/lib/mongodb";
import Stripe from "stripe";

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(request: NextRequest) {
  console.log("Stripe Webhook received");

  let event: Stripe.Event;

  try {
    // Get raw request body as a string
    const body = await request.text();
    const sig = request.headers.get("stripe-signature")!;

    // Verify webhook signature to ensure authenticity
    console.log("Verifying Stripe webhook signature");
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
    console.log(`Event verified and processed: ${event.type}`);
  } catch (err: any) {
    console.error("Webhook signature verification failed.", err);
    return NextResponse.json(
      { error: `Webhook signature verification failed: ${err.message}` },
      { status: 400 }
    );
  }

  // Ensure DB connection is established before proceeding with event handling
  await dbConnect();

  try {
    switch (event.type) {
      case "customer.subscription.created":
      case "customer.subscription.updated": {
        const subscription = event.data.object as Stripe.Subscription;

        // Update user subscription details in DB
        const updatedUser = await User.findOneAndUpdate(
          { stripeCustomerId: subscription.customer },
          {
            subscriptionId: subscription.id,
            subscriptionStatus: subscription.status,
            subscriptionPlan: subscription.items.data[0]?.price.id,
          },
          { new: true, upsert: false } // Return the updated document
        );

        if (updatedUser) {
          console.log(`User subscription updated for ${subscription.customer}`);
        } else {
          console.warn(
            `User not found for Stripe customer ID: ${subscription.customer}`
          );
        }

        break;
      }

      case "customer.subscription.deleted": {
        const deletedSubscription = event.data.object as Stripe.Subscription;

        // Update user subscription status to canceled
        const canceledUser = await User.findOneAndUpdate(
          { stripeCustomerId: deletedSubscription.customer },
          {
            subscriptionId: null,
            subscriptionStatus: "canceled",
            subscriptionPlan: null,
          },
          { new: true, upsert: false }
        );

        if (canceledUser) {
          console.log(
            `Subscription canceled for customer ID: ${deletedSubscription.customer}`
          );
        } else {
          console.warn(
            `No user found for canceled subscription: ${deletedSubscription.customer}`
          );
        }

        break;
      }

      case "invoice.payment_succeeded": {
        const invoice = event.data.object as Stripe.Invoice;

        // Handle successful invoice payment and update user subscription
        if (invoice.subscription) {
          const paymentUser = await User.findOneAndUpdate(
            { stripeCustomerId: invoice.customer },
            {
              subscriptionId: invoice.subscription,
              subscriptionStatus: "active",
              subscriptionPlan: invoice.lines.data[0]?.price?.id,
            },
            { new: true, upsert: false }
          );

          if (paymentUser) {
            console.log(
              `Invoice payment succeeded, updated user: ${invoice.customer}`
            );
          } else {
            console.warn(
              `No user found for successful payment: ${invoice.customer}`
            );
          }
        } else {
          console.error(
            `Invoice does not contain subscription information: ${invoice.id}`
          );
        }

        break;
      }

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

          // Upsert user data (create if not exist, update if exists)
          const updatedUser = await User.findOneAndUpdate(
            { email: checkoutSession.customer_email },
            {
              stripeCustomerId: customerId,
              subscriptionId: subscriptionId,
              subscriptionStatus: subscriptionDetails.status,
              subscriptionPlan: planId,
            },
            { new: true, upsert: true } // Upsert ensures creation if the document doesn’t exist
          );

          console.log(`Checkout session completed for customer: ${customerId}`);
        } else {
          console.error(
            "Invalid subscriptionId or customerId in checkout session",
            {
              subscriptionId,
              customerId,
            }
          );
        }

        break;
      }

      default:
        console.warn(`Unhandled event type: ${event.type}`);
    }

    console.log("Stripe Webhook processed successfully");
    return NextResponse.json({ received: true });
  } catch (err: any) {
    // Log error details for further investigation
    console.error(
      `Webhook error during ${event.type} processing:`,
      err.message,
      err.stack
    );
    return NextResponse.json(
      { error: `Webhook error: ${err.message}` },
      { status: 500 }
    );
  }
}
