"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import dynamic from "next/dynamic";

const DynamicEmbeddableFeedback = dynamic(
  () => import("@/components/EmbedableFeedback"),
  { ssr: false }
);

type Position = "top-left" | "top-right" | "bottom-left" | "bottom-right";

interface Config {
  position: Position;
  primaryColor: string;
  companyName: string;
}

export default function Dashboard() {
  const [config, setConfig] = useState<Config>({
    position: "bottom-right",
    primaryColor: "#3b82f6",
    companyName: "My Company",
  });

  const { toast } = useToast();

  const handleConfigChange = (key: keyof Config, value: string) => {
    setConfig((prev) => ({ ...prev, [key]: value }));
  };

  const generateEmbedCode = () => {
    const embedCode = `
<!-- Begin Feedback Widget -->
<div id="feedback-widget"></div>
<script src="${process.env.NEXT_PUBLIC_FEEDBACK_WIDGET_URL}"></script>
<script>
  initializeFeedbackWidget('feedback-widget', ${JSON.stringify(
    config,
    null,
    2
  )});
</script>
<!-- End Feedback Widget -->`.trim();

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
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Feedback App Dashboard</h1>
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
            onChange={(value: Position) =>
              handleConfigChange("position", value)
            }
          />
          <Button onClick={generateEmbedCode}>Generate Embed Code</Button>
        </div>
        <PreviewSection config={config} />
      </div>
    </div>
  );
}

const ConfigInput = ({
  label,
  value,
  onChange,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
}) => (
  <div>
    <Label htmlFor={label.toLowerCase().replace(" ", "-")}>{label}</Label>
    <Input
      id={label.toLowerCase().replace(" ", "-")}
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);

const PositionRadioGroup = ({
  value,
  onChange,
}: {
  value: Position;
  onChange: (value: Position) => void;
}) => (
  <div>
    <Label>Position</Label>
    <RadioGroup
      value={value}
      onValueChange={onChange}
      className="grid grid-cols-2 gap-2"
    >
      {["top-left", "top-right", "bottom-left", "bottom-right"].map((pos) => (
        <div key={pos} className="flex items-center space-x-2">
          <RadioGroupItem value={pos} id={pos} />
          <Label htmlFor={pos}>
            {pos.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}
          </Label>
        </div>
      ))}
    </RadioGroup>
  </div>
);

const PreviewSection = ({ config }: { config: Config }) => {
  const embedCode = `
<!-- Begin Feedback Widget -->
<div id="feedback-widget"></div>
<script src="http://localhost:3000/dist/feedback-widget-umd.js"></script>
<script>
  initializeFeedbackWidget('feedback-widget', ${JSON.stringify(
    config,
    null,
    2
  )});
</script>
<!-- End Feedback Widget -->`.trim();

  return (
    <div className="bg-gray-100 p-6 rounded-lg relative h-96">
      <h2 className="text-xl font-semibold mb-4">Preview</h2>
      <code
        className="text-sm block bg-gray-200 p-4 rounded-md overflow-x-auto whitespace-pre font-mono text-left select-none pointer-events-none"
        unselectable="on"
      >
        {embedCode}
      </code>
      <DynamicEmbeddableFeedback {...config} />
    </div>
  );
};
