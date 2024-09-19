import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FeedbackOverviewProps } from "@/lib/types";

export default function FeedbackOverview({
  feedbacks,
}: FeedbackOverviewProps): JSX.Element {
  const totalFeedbacks = feedbacks.length;
  const positiveFeedbacks = 5;
  const negativeFeedbacks = 3;
  const neutralFeedbacks =
    totalFeedbacks - positiveFeedbacks - negativeFeedbacks;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Feedback Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center">
            <p className="text-2xl font-bold">{totalFeedbacks}</p>
            <p className="text-sm text-gray-500">Total Feedbacks</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-green-500">
              {((positiveFeedbacks / totalFeedbacks) * 100).toFixed(0)}%
            </p>
            <p className="text-sm text-gray-500">Positive</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-red-500">
              {((negativeFeedbacks / totalFeedbacks) * 100).toFixed(0)}%
            </p>
            <p className="text-sm text-gray-500">Negative</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-yellow-500">
              {((neutralFeedbacks / totalFeedbacks) * 100).toFixed(0)}%
            </p>
            <p className="text-sm text-gray-500">Neutral</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
