import React from "react";
import { Button } from "@/components/ui/button";
import { WidgetConfig } from "@/lib/types";

interface FeedbackButtonProps {
  widgetConfig: WidgetConfig;
  onClick: () => void;
}

export function FeedbackButton({ widgetConfig, onClick }: FeedbackButtonProps) {
  return (
    <Button
      onClick={onClick}
      className={`${widgetConfig.buttonAnimation}`}
      style={{
        backgroundColor: widgetConfig.primaryColor,
        color: widgetConfig.secondaryColor,
      }}
    >
      {widgetConfig.buttonText || "Feedback"}
    </Button>
  );
}
