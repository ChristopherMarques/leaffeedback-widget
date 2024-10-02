import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FeedbackDetailsProps, FirebaseTimestamp } from "@/lib/types";
import { formatFirestoreTimestamp } from "@/lib/utils";

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
            <p className="font-medium break-words text-wrap">
              {feedback.content}
            </p>
            <p className="text-sm text-gray-500">
              Date: {formatFirestoreTimestamp(feedback.createdAt as FirebaseTimestamp)}
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
