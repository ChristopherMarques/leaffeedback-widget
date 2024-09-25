import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FeedbackListProps } from "@/lib/types";
import { Skeleton } from "@/components/ui/skeleton";

export default function FeedbackList({
  feedbacks,
  onSelectFeedback,
  loading = false,
}: FeedbackListProps): JSX.Element {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Feedbacks</CardTitle>
      </CardHeader>
      <CardContent>
        {loading ? (
          <FeedbackListSkeleton />
        ) : (
          <ul className="space-y-2">
            {feedbacks.map((feedback) => (
              <li
                key={feedback.id}
                className="p-2 hover:bg-gray-100 rounded cursor-pointer"
                onClick={() => onSelectFeedback(feedback)}
              >
                <p className="font-medium">
                  {feedback.content.substring(0, 50)}...
                </p>
                <p className="text-sm text-gray-500">
                  {new Date(feedback.createdAt).toLocaleString()}
                </p>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
}

function FeedbackListSkeleton() {
  return (
    <div className="space-y-2">
      {[...Array(5)].map((_, index) => (
        <div key={index} className="p-2">
          <Skeleton className="h-4 w-3/4 mb-1" />
          <Skeleton className="h-3 w-1/2" />
        </div>
      ))}
    </div>
  );
}
