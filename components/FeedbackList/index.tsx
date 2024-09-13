import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FeedbackListProps } from "@/lib/types";

export default function FeedbackList({
  feedbacks,
  onSelectFeedback,
}: FeedbackListProps): JSX.Element {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Feedbacks</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {feedbacks.map((feedback) => (
            <li
              key={feedback.id}
              className="p-2 hover:bg-gray-100 rounded cursor-pointer"
              onClick={() => onSelectFeedback(feedback)}
            >
              <p className="font-medium">{feedback.message}</p>
              <p className="text-sm text-gray-500">{feedback.date}</p>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
