"use client";

import React, { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Toaster } from "../../ui/toaster";
import { useWidgetConfig } from "@/hooks/use-widget-config";
import { useFeedbackSubmission } from "@/hooks/use-feedback-submission";
import { FeedbackButton } from "../FeedbackButton";
import { FeedbackOptions } from "../FeedbackOptions";
import { FeedbackForm } from "../FeedbackForm";
import { WidgetConfig } from "@/lib/types";
import { createRoot } from "react-dom/client";
import "../../../public/dist/output.css";

if (typeof window !== "undefined") {
  (window as any).initializeFeedbackWidget = (
    elementId: string,
    props: WidgetConfig
  ) => {
    const rootElement = document.getElementById(elementId);
    if (rootElement) {
      const root = createRoot(rootElement);
      root.render(<EmbeddableFeedback {...props} />);
    }
  };
}

export default function EmbeddableFeedback(initialConfig: WidgetConfig) {
  const { widgetConfig } = useWidgetConfig(initialConfig);
  const {
    feedback,
    setFeedback,
    email,
    setEmail,
    setScreenshot,
    handleSubmit,
  } = useFeedbackSubmission();

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<
    "idea" | "issue" | "feedback" | null
  >(null);

  const positionClasses = {
    "top-left": "top-4 left-4",
    "top-right": "top-4 right-4",
    "bottom-left": "bottom-4 left-4",
    "bottom-right": "bottom-4 right-4",
  };

  return (
    <>
      <div className={`fixed ${positionClasses[widgetConfig.position]} z-50`}>
        <Toaster />
        {!isOpen && (
          <FeedbackButton
            widgetConfig={widgetConfig}
            onClick={() => setIsOpen(true)}
          />
        )}
        {isOpen && (
          <div
            className="rounded-lg shadow-lg p-6 w-auto"
            style={{ backgroundColor: widgetConfig.backgroundColor }}
          >
            <div className="flex justify-between items-center mb-4">
              <h3
                className="text-lg font-semibold"
                style={{ color: widgetConfig.primaryColor }}
              >
                Send {selectedOption} to {widgetConfig.companyName}
              </h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                style={{ color: widgetConfig.primaryColor }}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            {!selectedOption ? (
              <FeedbackOptions
                widgetConfig={widgetConfig}
                onOptionSelect={setSelectedOption}
              />
            ) : (
              <FeedbackForm
                widgetConfig={widgetConfig}
                selectedOption={selectedOption}
                feedback={feedback}
                setFeedback={setFeedback}
                email={email}
                setEmail={setEmail}
                setScreenshot={setScreenshot}
                onSubmit={(e) => handleSubmit(e, widgetConfig, selectedOption)}
                onBack={() => setSelectedOption(null)}
              />
            )}
          </div>
        )}
      </div>
    </>
  );
}
