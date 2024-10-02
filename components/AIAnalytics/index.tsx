import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ThumbsUp, Star, ThumbsDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { generateAIAnalytics, getAIAnalytics } from "@/lib/api";

interface AIAnalyticsProps {
  projectId: string;
}

export default function AIAnalytics({ projectId }: AIAnalyticsProps): JSX.Element {
  const [analytics, setAnalytics] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleGenerateAnalytics = async () => {
    setLoading(true);
    try {
      const generatedAnalytics = await generateAIAnalytics(projectId);
      setAnalytics(generatedAnalytics);
      toast({
        title: "Analytics generated successfully",
        description: "Your project's feedback has been analyzed.",
      });
    } catch (error) {
      console.error("Error generating analytics:", error);
      toast({
        title: "Error",
        description: "Failed to generate analytics. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const existingAnalytics = await getAIAnalytics(projectId);
        if (existingAnalytics) {
          setAnalytics(existingAnalytics);
        }
      } catch (error) {
        console.error("Error fetching analytics:", error);
      }
    };

    fetchAnalytics();
  }, [projectId]);

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>AI-Generated Analytics</CardTitle>
        <CardDescription>Insights based on feedback analysis</CardDescription>
      </CardHeader>
      <CardContent>
        {analytics ? (
          <ul className="space-y-2">
            <li className="flex items-center">
              <ThumbsUp className="mr-2 h-4 w-4 text-green-500" />
              <span>{analytics.positiveFeedbackPercentage}% positive feedbacks</span>
            </li>
            <li className="flex items-center">
              <Star className="mr-2 h-4 w-4 text-yellow-500" />
              <span>Top feature: {analytics.topFeature}</span>
            </li>
            <li className="flex items-center">
              <ThumbsDown className="mr-2 h-4 w-4 text-red-500" />
              <span>Main concern: {analytics.mainConcern}</span>
            </li>
          </ul>
        ) : (
          <p>No analytics available. Generate them to see insights.</p>
        )}
        <Button
          onClick={handleGenerateAnalytics}
          disabled={loading}
          className="mt-4"
        >
          {loading ? "Generating..." : "Generate AI Analytics"}
        </Button>
      </CardContent>
    </Card>
  );
}
