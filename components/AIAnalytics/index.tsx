import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ThumbsUp, Star, ThumbsDown, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { generateAIAnalytics, getAIAnalytics } from "@/lib/api";
import { Textarea } from "../ui/textarea";
import { useTranslations } from "next-intl";

interface AIAnalyticsProps {
  projectId: string;
}

export default function AIAnalytics({
  projectId,
}: AIAnalyticsProps): JSX.Element {
  const [analytics, setAnalytics] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const t = useTranslations();

  const handleGenerateAnalytics = async () => {
    setLoading(true);
    try {
      const generatedAnalytics = await generateAIAnalytics(projectId);
      setAnalytics(generatedAnalytics);
      toast({
        title: t("aiAnalytics.success"),
        description: t("aiAnalytics.successDescription"),
      });
    } catch (error) {
      console.error("Error generating analytics:", error);
      toast({
        title: "Error",
        description: t("aiAnalytics.error"),
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const fetchAnalytics = async () => {
    if (!projectId) return;
    setLoading(true);
    try {
      const existingAnalytics = await getAIAnalytics(projectId);
      if (existingAnalytics) {
        setAnalytics(existingAnalytics);
      } else {
        setAnalytics(null);
      }
    } catch (error) {
      console.error("Error fetching analytics:", error);
      toast({
        title: "Error",
        description: t("aiAnalytics.error"),
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAnalytics();
  }, [projectId]);

  return (
    <Card className="h-full pb-10">
      <CardHeader>
        <CardTitle>{t("aiAnalytics.title")}</CardTitle>
        <CardDescription>
          {loading ? t("aiAnalytics.loading") : t("aiAnalytics.noData")}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {analytics ? (
          <ul className="space-y-2">
            <li className="flex items-center">
              <ThumbsUp className="mr-2 h-4 w-4 text-green-500" />
              <span>
                {analytics.positiveFeedbackPercentage}%{" "}
                {t("aiAnalytics.positiveFeedback")}
              </span>
            </li>
            <li className="flex items-center">
              <Star className="mr-2 h-4 w-4 text-yellow-500" />
              <span>
                {t("aiAnalytics.topFeature")}: {analytics.topFeature}
              </span>
            </li>
            <li className="flex items-center">
              <ThumbsDown className="mr-2 h-4 w-4 text-red-500" />
              <span>
                {t("aiAnalytics.mainConcern")}: {analytics.mainConcern}
              </span>
            </li>
            <li className="flex items-center">
              <MessageSquare className="mr-2 h-4 w-4 text-primary" />
              <span>
                {t("aiAnalytics.mainSuggestion")}: {analytics.mainSuggestion}
              </span>
            </li>
            <li className="flex flex-col gap-2 mt-4 items-start justify-center w-full">
              <span>{t("aiAnalytics.productImprovementSuggestion")}: </span>
              <Textarea
                value={analytics.productImprovementSuggestion}
                className="w-full h-32 resize-none overflow-y-auto"
              />
            </li>
          </ul>
        ) : (
          <p>{t("aiAnalytics.noData")}</p>
        )}
        <Button
          onClick={handleGenerateAnalytics}
          disabled={loading || !projectId}
          className="mt-4 float-end"
        >
          {loading ? t("aiAnalytics.loading") : t("aiAnalytics.generate")}
        </Button>
      </CardContent>
    </Card>
  );
}
