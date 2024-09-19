import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ThumbsUp, Star, ThumbsDown } from "lucide-react";

export default function AIAnalytics(): JSX.Element {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>AI-Generated Analytics</CardTitle>
        <CardDescription>Insights based on feedback analysis</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          <li className="flex items-center">
            <ThumbsUp className="mr-2 h-4 w-4 text-green-500" />
            <span>75% positive feedbacks</span>
          </li>
          <li className="flex items-center">
            <Star className="mr-2 h-4 w-4 text-yellow-500" />
            <span>Top feature: User Interface</span>
          </li>
          <li className="flex items-center">
            <ThumbsDown className="mr-2 h-4 w-4 text-red-500" />
            <span>Main concern: Loading times</span>
          </li>
        </ul>
      </CardContent>
    </Card>
  );
}
