import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FeedbackOverviewProps } from "@/lib/types";

export default function FeedbackOverview({
  feedbacks,
}: FeedbackOverviewProps): JSX.Element {
  const totalFeedbacks = feedbacks.length;
  const positiveFeedbacks = feedbacks.filter(
    (f) => f.sentiment === "positive"
  ).length;
  const negativeFeedbacks = feedbacks.filter(
    (f) => f.sentiment === "negative"
  ).length;
  const neutralFeedbacks =
    totalFeedbacks - positiveFeedbacks - negativeFeedbacks;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Feedback Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span>Total Feedbacks</span>
            <span className="font-bold">{totalFeedbacks}</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Positive Feedbacks</span>
            <span className="font-bold text-green-500">
              {((positiveFeedbacks / totalFeedbacks) * 100).toFixed(0)}%
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span>Negative Feedbacks</span>
            <span className="font-bold text-red-500">
              {((negativeFeedbacks / totalFeedbacks) * 100).toFixed(0)}%
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span>Neutral Feedbacks</span>
            <span className="font-bold text-yellow-500">
              {((neutralFeedbacks / totalFeedbacks) * 100).toFixed(0)}%
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
