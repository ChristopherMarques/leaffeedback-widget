import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { WidgetConfig } from "@/lib/types";

export function useFeedbackSubmission() {
  const [feedback, setFeedback] = useState("");
  const [email, setEmail] = useState("");
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const { toast } = useToast();

  const handleSubmit = async (
    e: React.FormEvent,
    widgetConfig: WidgetConfig,
    selectedOption: string | null
  ) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/feedback/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            content: feedback,
            email,
            projectId: widgetConfig.projectId,
            widgetId: widgetConfig.widgetId,
            type: selectedOption,
            screenshot,
          }),
        }
      );
      if (response.ok) {
        toast({
          variant: "default",
          title: "Feedback submitted",
          description: "Thank you for your feedback!",
        });
        resetForm();
      } else {
        console.error("Failed to submit feedback");
      }
    } catch (error) {
      console.error("Error submitting feedback:", error);
    }
  };

  const resetForm = () => {
    setFeedback("");
    setEmail("");
    setScreenshot(null);
  };

  return {
    feedback,
    setFeedback,
    email,
    setEmail,
    screenshot,
    setScreenshot,
    handleSubmit,
  };
}
