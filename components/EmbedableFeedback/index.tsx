"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";
import { createRoot } from "react-dom/client";
import "../../public/dist/output.css";
import { useToast } from "@/hooks/use-toast";

interface FeedbackProps {
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  primaryColor: string;
  secondaryColor: string;
  companyName: string;
  projectId: string;
}

if (typeof window !== "undefined") {
  (window as any).initializeFeedbackWidget = (
    elementId: string,
    props: any
  ) => {
    const rootElement = document.getElementById(elementId);
    if (rootElement) {
      const root = createRoot(rootElement);
      root.render(<EmbeddableFeedback {...props} />);
    }
  };
}

export default function EmbeddableFeedback({
  position,
  primaryColor,
  secondaryColor,
  companyName,
  projectId,
}: FeedbackProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const positionClasses = {
    "top-left": "top-4 left-4",
    "top-right": "top-4 right-4",
    "bottom-left": "bottom-4 left-4",
    "bottom-right": "bottom-4 right-4",
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/feedback/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ content: feedback, email, projectId }),
        }
      );
      if (response.ok) {
        toast({
          variant: "default",
          title: "Feedback submitted",
          description: "Thank you for your feedback!",
        });
        setIsOpen(false);
        setFeedback("");
        setEmail("");
      } else {
        console.error("Failed to submit feedback");
      }
    } catch (error) {
      console.error("Error submitting feedback:", error);
    }
  };

  return (
    <>
      <div className={`fixed ${positionClasses[position]} z-50`}>
        {!isOpen && (
          <Button
            onClick={() => setIsOpen(true)}
            style={{ backgroundColor: primaryColor, color: secondaryColor }}
          >
            Feedback
          </Button>
        )}
        {isOpen && (
          <div className="bg-white rounded-lg shadow-lg p-6 w-80">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">
                Send Feedback to {companyName}
              </h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Textarea
                placeholder="Your feedback..."
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                required
                className="w-full resize-none overflow-y-auto"
                style={{ height: "100px" }}
              />
              <Input
                type="email"
                placeholder="Your email (optional)"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full"
              />
              <Button
                type="submit"
                style={{ backgroundColor: primaryColor, color: secondaryColor }}
                className="w-full"
              >
                Send Feedback
              </Button>
            </form>
          </div>
        )}
      </div>
    </>
  );
}
