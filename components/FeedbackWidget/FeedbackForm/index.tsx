import React from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import ScreenshotCapture from "../ScreenshotCapture";
import { WidgetConfig } from "@/lib/types";

interface FeedbackFormProps {
  widgetConfig: WidgetConfig;
  selectedOption: "idea" | "issue" | "feedback" | null;
  feedback: string;
  setFeedback: (value: string) => void;
  email: string;
  setEmail: (value: string) => void;
  setScreenshot: (screenshot: string | null) => void;
  onSubmit: (e: React.FormEvent) => void;
  onBack: () => void;
}

export function FeedbackForm({
  widgetConfig,
  selectedOption,
  feedback,
  setFeedback,
  email,
  setEmail,
  setScreenshot,
  onSubmit,
  onBack,
}: FeedbackFormProps) {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <Textarea
        placeholder={`Your ${selectedOption}...`}
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        required
        className="w-full resize-none overflow-y-auto"
        style={{
          height: "100px",
          borderColor: widgetConfig.primaryColor,
          borderWidth: "1px",
          color: widgetConfig.primaryColor,
          backgroundColor: widgetConfig.secondaryColor,
        }}
      />
      <div className="flex items-center justify-between gap-2">
        <Input
          type="email"
          placeholder="Your email (optional)"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full"
          style={{
            borderColor: widgetConfig.primaryColor,
            borderWidth: "1px",
            color: widgetConfig.primaryColor,
            backgroundColor: widgetConfig.secondaryColor,
          }}
        />
        {selectedOption === "issue" && (
          <ScreenshotCapture onScreenshotCapture={setScreenshot} />
        )}
      </div>
      <Button
        type="submit"
        style={{
          backgroundColor: widgetConfig.primaryColor,
          color: widgetConfig.secondaryColor,
        }}
        className="w-full"
      >
        Send {selectedOption}
      </Button>
      <Button
        type="button"
        variant="outline"
        onClick={onBack}
        className="w-full"
        style={{
          borderColor: widgetConfig.primaryColor,
          color: widgetConfig.primaryColor,
        }}
      >
        Back
      </Button>
    </form>
  );
}
