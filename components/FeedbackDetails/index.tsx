import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FeedbackDetailsProps } from "@/lib/types";

export default function FeedbackDetails({
  feedback,
}: FeedbackDetailsProps): JSX.Element {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Feedback Details</CardTitle>
      </CardHeader>
      <CardContent>
        {feedback ? (
          <div>
            <p className="font-medium">{feedback.content}</p>
            <p className="text-sm text-gray-500">
              Date: {new Date(feedback.createdAt).toLocaleString()}
            </p>
            {feedback.email && (
              <p className="text-sm text-gray-500">Email: {feedback.email}</p>
            )}
          </div>
        ) : (
          <p>Select a feedback to view details</p>
        )}
      </CardContent>
    </Card>
  );
}
