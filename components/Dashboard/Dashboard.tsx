"use client";

import React, { useState, useEffect } from "react";
import { TabsContent } from "@/components/ui/tabs";
import { Feedback } from "@/lib/types";
import FeedbackList from "../FeedbackList";
import FeedbackDetails from "../FeedbackDetails";
import AIAnalytics from "../AIAnalytics";
import FeedbackOverview from "../FeedbackOverview";
import ReportGenerator from "../ReportGenerator";

export default function Dashboard(): JSX.Element {
  const [selectedFeedback, setSelectedFeedback] = useState<Feedback | null>(
    null
  );
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const fetchFeedbacks = async () => {
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
    }
  };

  return (
    <>
      <TabsContent value="feedbacks">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FeedbackList
            feedbacks={feedbacks}
            onSelectFeedback={setSelectedFeedback}
          />
          <FeedbackDetails feedback={selectedFeedback} />
        </div>
      </TabsContent>
      <TabsContent value="analytics">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AIAnalytics />
          <FeedbackOverview feedbacks={feedbacks} />
        </div>
      </TabsContent>
      <TabsContent value="reports">
        <ReportGenerator />
      </TabsContent>
    </>
  );
}
