"use client";

import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useAuth } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { PLANS } from "@/lib/plans";
import { Skeleton } from "@/components/ui/skeleton";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || ""
);

interface Subscription {
  subscriptionId: string;
  subscriptionStatus: string;
  subscriptionPlan: string;
  subscriptionPlanName: string;
  subscriptionExpirationDate: string;
}

const SubscriptionManager: React.FC = () => {
  const { userId } = useAuth();
  const [subscription, setSubscription] = useState<Subscription | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSubscription = async () => {
      if (!userId) return;

      const response = await fetch(`/api/get-subscription?userId=${userId}`);
      const data = await response.json();
      setSubscription(data);
      setLoading(false);
    };

    fetchSubscription();
  }, [userId]);

  const handleSubscribe = async (priceId: string) => {
    try {
      const stripe = await stripePromise;
      if (!stripe) {
        throw new Error("Stripe failed to load. Please try again.");
      }

      const response = await fetch("/api/stripe/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ priceId }),
      });

      if (!response.ok) {
        throw new Error("Failed to create checkout session.");
      }

      const { sessionId } = await response.json();
      const result = await stripe.redirectToCheckout({ sessionId });

      if (result.error) {
        throw new Error(result.error.message);
      }
    } catch (err) {
      console.error("Error during subscription process:", err);
      setError("Subscription process failed. Please try again.");
    }
  };

  if (loading) {
    return <SubscriptionSkeleton />;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Subscription Information</CardTitle>
        <CardDescription>Manage your subscription plan</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {error && (
          <Alert variant="destructive">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        {subscription ? (
          <Alert>
            <AlertTitle>Current Subscription</AlertTitle>
            <AlertDescription>
              Plan: {subscription.subscriptionPlanName}
              <br />
              Status: {subscription.subscriptionStatus}
              <br />
              Expiration Date:{" "}
              {new Date(
                subscription.subscriptionExpirationDate
              ).toLocaleDateString() || "-"}
            </AlertDescription>
          </Alert>
        ) : (
          <Alert variant="destructive">
            <AlertTitle>No Active Subscription</AlertTitle>
            <AlertDescription>
              You currently don't have an active subscription. Choose a plan
              below to subscribe.
            </AlertDescription>
          </Alert>
        )}
        <Button
          className="w-full"
          onClick={() =>
            handleSubscribe(process.env.NEXT_PUBLIC_STARTER_PRICE_ID!)
          }
        >
          {subscription?.subscriptionPlan === PLANS.STARTER.priceId
            ? "Renew Starter Plan"
            : "Subscribe to Starter Plan"}
        </Button>
        <Button
          className="w-full"
          onClick={() => handleSubscribe(process.env.NEXT_PUBLIC_PRO_PRICE_ID!)}
        >
          {subscription?.subscriptionPlan === PLANS.PRO.priceId
            ? "Renew Pro Plan"
            : "Subscribe to Pro Plan"}
        </Button>
      </CardContent>
    </Card>
  );
};

function SubscriptionSkeleton() {
  return (
    <Card>
      <CardHeader>
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-4 w-1/2 mt-2" />
      </CardHeader>
      <CardContent className="space-y-4">
        <Skeleton className="h-20 w-full" />
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-full" />
      </CardContent>
    </Card>
  );
}

export default SubscriptionManager;
