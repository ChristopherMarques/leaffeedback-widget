"use client";

import React, { useState, useEffect, Suspense } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LayoutDashboard, Settings, CreditCard } from "lucide-react";
import ConfigTab from "@/components/ConfigTab";
import DashboardComponent from "@/components/DashboardComponent";
import { useRouter, useSearchParams } from "next/navigation";
import SubscriptionManager from "@/components/SubscriptionManager";
import { Skeleton } from "@/components/ui/skeleton";
import { useAuth } from "@/contexts/auth-context";
import { useTranslations } from "next-intl";

function DashboardContent(): JSX.Element {
  const t = useTranslations("dashboard");
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState(
    searchParams.get("tab") || "dashboard"
  );
  const { user, loading } = useAuth();

  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/");
    }
  }, [user, loading, router]);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    router.push(`/dashboard?tab=${value}`, { scroll: false });
  };

  if (loading) {
    return <DashboardSkeleton />;
  }

  if (!user) {
    return <DashboardSkeleton />;
  }

  return (
    <div className="container  mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">{t("feedbackDashboard")}</h1>
      <Tabs
        value={activeTab}
        onValueChange={handleTabChange}
        className="space-y-4"
      >
        <TabsList className="border-primary">
          <TabsTrigger value="dashboard" className="flex items-center">
            <LayoutDashboard className="mr-2 h-4 w-4" />
            {t("title")}
          </TabsTrigger>
          <TabsTrigger value="config" className="flex items-center">
            <Settings className="mr-2 h-4 w-4" />
            {t("widgetConfig")}
          </TabsTrigger>
          <TabsTrigger value="manage-plan" className="flex items-center">
            <CreditCard className="mr-2 h-4 w-4" />
            {t("managePlan")}
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

export default function DashboardPage(): JSX.Element {
  const router = useRouter();
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/");
    }
  }, [user, loading, router]);

  if (loading || !user) {
    return <DashboardSkeleton />;
  }

  return (
    <Suspense fallback={<DashboardSkeleton />}>
      <DashboardContent />
    </Suspense>
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
