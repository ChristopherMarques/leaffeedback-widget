"use client";

import React, { useState } from "react";
import { TabsContent } from "@/components/ui/tabs";
import { mockFeedbacks } from "@/lib/mockData";
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

  return (
    <>
      <TabsContent value="feedbacks">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FeedbackList
            feedbacks={mockFeedbacks}
            onSelectFeedback={setSelectedFeedback}
          />
          <FeedbackDetails feedback={selectedFeedback} />
        </div>
      </TabsContent>
      <TabsContent value="analytics">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AIAnalytics />
          <FeedbackOverview feedbacks={mockFeedbacks} />
        </div>
      </TabsContent>
      <TabsContent value="reports">
        <ReportGenerator />
      </TabsContent>
    </>
  );
}
