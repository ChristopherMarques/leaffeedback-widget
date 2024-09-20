"use client";

import React, { useState, useEffect } from "react";
import { TabsContent } from "@/components/ui/tabs";
import { Feedback, User } from "@/lib/types";
import FeedbackList from "../FeedbackList";
import FeedbackDetails from "../FeedbackDetails";
import AIAnalytics from "../AIAnalytics";
import FeedbackOverview from "../FeedbackOverview";
import ReportGenerator from "../ReportGenerator";
import { hasAccess } from "@/lib/subscriptionUtils";
import ProFeatureOverlay from "../ProFeatureOverlay";
import { useAuth } from "@clerk/nextjs";
import { Skeleton } from "@/components/ui/skeleton";

export default function Dashboard(): JSX.Element {
  const [selectedFeedback, setSelectedFeedback] = useState<Feedback | null>(
    null
  );
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [_, setUserData] = useState<User | null>(null);
  const [proFeatures, setProFeatures] = useState({
    aiAnalytics: false,
    reportGenerator: false,
  });

  const { userId } = useAuth();

  useEffect(() => {
    fetchFeedbacks();
    fetchUserData();
  }, []);

  const fetchFeedbacks = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/feedback");
      if (response.ok) {
        const data = await response.json();
        setFeedbacks(data);
      } else {
        console.error("Failed to fetch feedbacks");
      }
    } catch (error) {
      console.error("Error fetching feedbacks:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchUserData = async () => {
    if (userId) {
      try {
        const response = await fetch(`/api/user/`);
        if (response.ok) {
          const data: User = await response.json();
          setUserData(data);
          const hasPro = hasAccess(
            data,
            process.env.NEXT_PUBLIC_PRO_PRICE_ID || ""
          );
          setProFeatures({
            aiAnalytics: hasPro,
            reportGenerator: hasPro,
          });
        } else {
          console.error("Failed to fetch user data");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }
  };

  const renderSkeletons = () => (
    <>
      <div className="space-y-4">
        <Skeleton className="h-8 w-3/4" />
        <Skeleton className="h-32 w-full" />
        <Skeleton className="h-32 w-full" />
      </div>
      <div className="space-y-4">
        <Skeleton className="h-8 w-3/4" />
        <Skeleton className="h-64 w-full" />
      </div>
    </>
  );

  return (
    <TabsContent value="dashboard">
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {renderSkeletons()}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FeedbackList
            feedbacks={feedbacks}
            onSelectFeedback={setSelectedFeedback}
            loading={loading}
          />
          <FeedbackDetails feedback={selectedFeedback} />

          <ProFeatureOverlay hasPro={proFeatures.aiAnalytics}>
            <AIAnalytics />
          </ProFeatureOverlay>

          <div className="space-y-6">
            <FeedbackOverview feedbacks={feedbacks} loading={loading} />
            <ProFeatureOverlay hasPro={proFeatures.reportGenerator}>
              <ReportGenerator />
            </ProFeatureOverlay>
          </div>
        </div>
      )}
    </TabsContent>
  );
}
