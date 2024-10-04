import React from "react";
import { Bug, Lightbulb, MessageSquare } from "lucide-react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { WidgetConfig } from "@/lib/types";

interface FeedbackOptionsProps {
  widgetConfig: WidgetConfig;
  onOptionSelect: (option: "idea" | "issue" | "feedback") => void;
}

export function FeedbackOptions({
  widgetConfig,
  onOptionSelect,
}: FeedbackOptionsProps) {
  const options = [
    { option: "idea", icon: Lightbulb, label: "Idea" },
    { option: "issue", icon: Bug, label: "Issue" },
    { option: "feedback", icon: MessageSquare, label: "Feedback" },
  ];

  return (
    <TooltipProvider>
      <div className="flex flex-row gap-4 w-full items-center justify-center">
        {options.map(({ option, icon: Icon, label }) => (
          <Card
            key={option}
            className="cursor-pointer hover:scale-105 flex-1 p-4"
            style={{
              borderColor: widgetConfig.primaryColor,
              borderWidth: "1px",
              backgroundColor: widgetConfig.secondaryColor,
            }}
            onClick={() =>
              onOptionSelect(option as "idea" | "issue" | "feedback")
            }
          >
            <Tooltip>
              <TooltipTrigger asChild>
                <CardHeader className="text-center p-4 w-20">
                  <CardTitle
                    className="flex flex-col items-center justify-center"
                    aria-label={`Send ${label}`}
                  >
                    <Icon
                      className="w-8 h-8 mb-2"
                      style={{ color: widgetConfig.primaryColor }}
                    />
                  </CardTitle>
                  <span
                    className="text-xs sm:text-sm"
                    style={{ color: widgetConfig.primaryColor }}
                  >
                    {label}
                  </span>
                </CardHeader>
              </TooltipTrigger>
              <TooltipContent
                style={{
                  color: widgetConfig.primaryColor,
                  backgroundColor: widgetConfig.backgroundColor,
                }}
              >
                Send {label}
              </TooltipContent>
            </Tooltip>
          </Card>
        ))}
      </div>
    </TooltipProvider>
  );
}
