import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FeedbackOverviewProps } from "@/lib/types";
import { Skeleton } from "@/components/ui/skeleton";

export default function FeedbackOverview({
  feedbacks,
  loading = false,
}: FeedbackOverviewProps): JSX.Element {
  const totalFeedbacks = feedbacks.length;
  const positiveFeedbacks = 5;
  const negativeFeedbacks = 3;
  const neutralFeedbacks =
    totalFeedbacks - positiveFeedbacks - negativeFeedbacks;

  const calculatePercentage = (count: number) => {
    return totalFeedbacks === 0
      ? 0
      : ((count / totalFeedbacks) * 100).toFixed(0);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Feedback Overview</CardTitle>
      </CardHeader>
      <CardContent>
        {loading ? (
          <FeedbackOverviewSkeleton />
        ) : (
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <p className="text-2xl font-bold">{totalFeedbacks}</p>
              <p className="text-sm text-gray-500">Total Feedbacks</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-green-500">
                {calculatePercentage(positiveFeedbacks)}%
              </p>
              <p className="text-sm text-gray-500">Positive</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-red-500">
                {calculatePercentage(negativeFeedbacks)}%
              </p>
              <p className="text-sm text-gray-500">Negative</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-yellow-500">
                {calculatePercentage(neutralFeedbacks)}%
              </p>
              <p className="text-sm text-gray-500">Neutral</p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

function FeedbackOverviewSkeleton() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {[...Array(4)].map((_, index) => (
        <div key={index} className="text-center">
          <Skeleton className="h-8 w-16 mx-auto mb-1" />
          <Skeleton className="h-4 w-24 mx-auto" />
        </div>
      ))}
    </div>
  );
}
