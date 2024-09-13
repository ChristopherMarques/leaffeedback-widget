"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Config, Position } from "@/lib/types";
import { generateEmbedCode } from "@/lib/utils";
import ConfigInput from "@/components/Dashboard/ConfigInput";
import PositionRadioGroup from "@/components/Dashboard/PositionRadioGroup";
import PreviewSection from "@/components/Dashboard/PreviewSection";

export default function ConfigTab(): JSX.Element {
  const [config, setConfig] = useState<Config>({
    position: "bottom-right",
    primaryColor: "#3b82f6",
    companyName: "My Company",
  });

  const { toast } = useToast();

  const handleConfigChange = (key: keyof Config, value: string) => {
    setConfig((prev) => ({ ...prev, [key]: value }));
  };

  const handleGenerateEmbedCode = () => {
    const embedCode = generateEmbedCode(config);
    navigator.clipboard
      .writeText(embedCode)
      .then(() => {
        toast({
          title: "Embed code copied to clipboard",
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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-6">
        <ConfigInput
          label="Company Name"
          value={config.companyName}
          onChange={(value) => handleConfigChange("companyName", value)}
        />
        <ConfigInput
          label="Primary Color"
          type="color"
          value={config.primaryColor}
          onChange={(value) => handleConfigChange("primaryColor", value)}
        />
        <PositionRadioGroup
          value={config.position}
          onChange={(value: Position) => handleConfigChange("position", value)}
        />
        <Button onClick={handleGenerateEmbedCode}>Generate Embed Code</Button>
      </div>
      <PreviewSection config={config} />
    </div>
  );
}
