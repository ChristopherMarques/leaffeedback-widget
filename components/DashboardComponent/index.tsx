"use client";

import React, { useState, useEffect } from "react";
import { TabsContent } from "@/components/ui/tabs";
import { Feedback, Project, User } from "@/lib/types";
import FeedbackList from "../FeedbackList";
import FeedbackDetails from "../FeedbackDetails";
import AIAnalytics from "../AIAnalytics";
import FeedbackOverview from "../FeedbackOverview";
import ReportGenerator from "../ReportGenerator";
import { hasAccess } from "@/lib/subscriptionUtils";
import ProFeatureOverlay from "../ProFeatureOverlay";
import { useAuth } from "@/contexts/auth-context";
import { Skeleton } from "@/components/ui/skeleton";
import { useTranslations } from "next-intl";

export default function Dashboard(): JSX.Element {
  const [selectedFeedback, setSelectedFeedback] = useState<Feedback | null>(
    null
  );
  const [selectedProject, setSelectedProject] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [proFeatures, setProFeatures] = useState({
    aiAnalytics: false,
    reportGenerator: false,
  });
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [loadingFeedbacks, setLoadingFeedbacks] = useState<boolean>(false);

  const { user } = useAuth();

  const fetchUserData = async () => {
    if (user) {
      try {
        setLoading(true);
        if (user.subscriptionPlan) {
          const hasPro = hasAccess(
            user,
            process.env.NEXT_PUBLIC_PRO_PRICE_ID || ""
          );
          setProFeatures({
            aiAnalytics: hasPro,
            reportGenerator: hasPro,
          });
        } else {
          console.error("Failed to fetch user data");
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }
  };

  const fetchFeedbacks = async () => {
    setLoadingFeedbacks(true);
    if (!user) {
      return;
    }
    const response = await fetch(`/api/feedback?userId=${user?.id}`).finally(
      () => {
        setLoadingFeedbacks(false);
      }
    );
    const data = await response.json();
    setFeedbacks(data);
  };

  useEffect(() => {
    fetchUserData();
    fetchFeedbacks();
  }, [user]);

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

  const t = useTranslations();

  return (
    <TabsContent value="dashboard">
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {renderSkeletons()}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FeedbackList
            onSelectProject={setSelectedProject}
            onSelectFeedback={setSelectedFeedback}
          />
          <FeedbackDetails feedback={selectedFeedback} />

          <ProFeatureOverlay hasPro={proFeatures.aiAnalytics}>
            <AIAnalytics projectId={selectedProject} />
          </ProFeatureOverlay>

          <div className="space-y-6">
            <FeedbackOverview
              feedbacks={feedbacks}
              projectId={selectedProject}
              loading={loadingFeedbacks}
            />
            <ProFeatureOverlay hasPro={proFeatures.reportGenerator}>
              <ReportGenerator />
            </ProFeatureOverlay>
          </div>
        </div>
      )}
    </TabsContent>
  );
}
