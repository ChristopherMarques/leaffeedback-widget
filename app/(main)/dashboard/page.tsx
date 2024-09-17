"use client";

import React, { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  MessageSquare,
  BarChart,
  FileText,
  Settings,
  CreditCard,
} from "lucide-react";
import ConfigTab from "@/components/ConfigTab";
import Dashboard from "@/components/Dashboard/Dashboard";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import SubscriptionManager from "@/components/SubscriptionManager";
import {
  SubscriptionProvider,
  useSubscription,
} from "@/contexts/subscription-context";

async function getUserData() {
  const response = await fetch(`/api/user`);
  if (!response.ok) {
    throw new Error("Failed to fetch user data");
  }
  return response.json();
}

export default function DashboardPage(): JSX.Element {
  const { isLoaded, userId } = useAuth();
  const { subscription } = useSubscription();
  const router = useRouter();
  const [_, setUserData] = useState<any>(null);

  useEffect(() => {
    if (isLoaded && !userId) {
      router.push("/");
    } else if (userId) {
      getUserData()
        .then((data) => setUserData(data))
        .catch((error) => console.error("Error fetching user data:", error));
    }
  }, [isLoaded, userId, router]);

  if (!isLoaded || !userId) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Feedback Dashboard</h1>
      <Tabs defaultValue="feedbacks" className="space-y-4">
        <TabsList>
          <TabsTrigger value="feedbacks" className="flex items-center">
            <MessageSquare className="mr-2 h-4 w-4" />
            Feedbacks
          </TabsTrigger>
          {subscription?.subscriptionPlan ===
            process.env.NEXT_PUBLIC_PRO_PLAN && (
            <TabsTrigger value="analytics" className="flex items-center">
              <BarChart className="mr-2 h-4 w-4" />
              Analytics
            </TabsTrigger>
          )}
          <TabsTrigger value="reports" className="flex items-center">
            <FileText className="mr-2 h-4 w-4" />
            Reports
          </TabsTrigger>
          <TabsTrigger value="config" className="flex items-center">
            <Settings className="mr-2 h-4 w-4" />
            Widget Config
          </TabsTrigger>
          <TabsTrigger value="manage-plan" className="flex items-center">
            <CreditCard className="mr-2 h-4 w-4" />
            Manage Plan
          </TabsTrigger>
        </TabsList>
        <Dashboard />
        <TabsContent value="config">
          <ConfigTab />
        </TabsContent>
        <TabsContent value="manage-plan">
          <SubscriptionManager />
        </TabsContent>
      </Tabs>
    </div>
  );
}
