"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import EmbeddableFeedback from "@/components/EmbedableFeedback";

export default function Dashboard() {
  const [config, setConfig] = useState({
    position: "bottom-right" as
      | "top-left"
      | "top-right"
      | "bottom-left"
      | "bottom-right",
    primaryColor: "#3b82f6",
    companyName: "My Company",
  });

  const handleConfigChange = (key: string, value: string) => {
    setConfig((prev) => ({ ...prev, [key]: value }));
  };

  const { toast } = useToast();

  const generateEmbedCode = () => {
    const code = `<script src="http://localhost:3000/embed.js"></script>
          <script>
            FeedbackWidget.init({
              position: "${config.position}",
              primaryColor: "${config.primaryColor}",
              companyName: "${config.companyName}"
            });
          </script>`;

    navigator.clipboard
      .writeText(code)
      .then(() => {
        toast({
          title: "Embed code copied to clipboard",
          variant: "default",
          description:
            "Paste this code into your website to add the feedback widget.",
        });
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
        toast({
          title: "Failed to copy embed code",
          variant: "destructive",
          description: "Please try again or copy the code manually.",
        });
      });
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Feedback App Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-6">
          <div>
            <Label htmlFor="companyName">Company Name</Label>
            <Input
              id="companyName"
              value={config.companyName}
              onChange={(e) =>
                handleConfigChange("companyName", e.target.value)
              }
            />
          </div>
          <div>
            <Label htmlFor="primaryColor">Primary Color</Label>
            <Input
              id="primaryColor"
              type="color"
              value={config.primaryColor}
              onChange={(e) =>
                handleConfigChange("primaryColor", e.target.value)
              }
            />
          </div>
          <div>
            <Label>Position</Label>
            <RadioGroup
              value={config.position}
              onValueChange={(value) => handleConfigChange("position", value)}
              className="grid grid-cols-2 gap-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="top-left" id="top-left" />
                <Label htmlFor="top-left">Top Left</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="top-right" id="top-right" />
                <Label htmlFor="top-right">Top Right</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="bottom-left" id="bottom-left" />
                <Label htmlFor="bottom-left">Bottom Left</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="bottom-right" id="bottom-right" />
                <Label htmlFor="bottom-right">Bottom Right</Label>
              </div>
            </RadioGroup>
          </div>
          <Button onClick={generateEmbedCode}>Generate Embed Code</Button>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg relative h-96">
          <h2 className="text-xl font-semibold mb-4">Preview</h2>
          <EmbeddableFeedback {...config} />
        </div>
      </div>
    </div>
  );
}
