"use client";

import React, { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LayoutDashboard, Settings, CreditCard } from "lucide-react";
import ConfigTab from "@/components/ConfigTab";
import DashboardComponent from "@/components/DashboardComponent";
import { useAuth } from "@clerk/nextjs";
import { useRouter, useSearchParams } from "next/navigation";
import SubscriptionManager from "@/components/SubscriptionManager";
import { Skeleton } from "@/components/ui/skeleton";
import { hasAccess } from "@/lib/subscriptionUtils";
import { User } from "@/lib/types";
import { useUserData } from "@/hooks/use-user-data";

export default function DashboardPage(): JSX.Element {
  const { isLoaded, userId } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [userData, setUserData] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState(
    searchParams.get("tab") || "dashboard"
  );

  useEffect(() => {
    if (isLoaded && !userId) {
      router.replace("/");
      return;
    }

    if (userId) {
      useUserData(userId)
        .then(setUserData)
        .catch((error) => {
          console.error("Error fetching user data:", error);
          router.push("/");
        })
        .finally(() => setLoading(false));
    }
  }, [isLoaded, userId, router]);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    router.push(`/dashboard?tab=${value}`, { scroll: false });
  };

  if (!isLoaded || loading) {
    return <DashboardSkeleton />;
  }

  if (!userData) {
    return <DashboardSkeleton />;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Feedback Dashboard</h1>
      <Tabs
        value={activeTab}
        onValueChange={handleTabChange}
        className="space-y-4"
      >
        <TabsList>
          <TabsTrigger value="dashboard" className="flex items-center">
            <LayoutDashboard className="mr-2 h-4 w-4" />
            Dashboard
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
        <TabsContent value="dashboard">
          <DashboardComponent />
        </TabsContent>
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

function DashboardSkeleton() {
  return (
    <div className="container mx-auto p-6">
      <Skeleton className="h-10 w-64 mb-6" />
      <div className="space-y-4">
        <Skeleton className="h-8 w-full" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Skeleton className="h-64 w-full" />
          <Skeleton className="h-64 w-full" />
          <Skeleton className="h-64 w-full" />
          <Skeleton className="h-64 w-full" />
        </div>
      </div>
    </div>
  );
}
