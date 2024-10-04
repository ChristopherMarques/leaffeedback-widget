import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ConfigInput from "@/components/ConfigInput";
import PositionRadioGroup from "@/components/PositionRadioGroup";
import { WidgetConfig } from "@/lib/types";

interface WidgetConfigurationProps {
  widgetConfig: WidgetConfig;
  onConfigChange: (key: keyof WidgetConfig, value: string) => void;
  onGenerateEmbedCode: () => void;
  isLoading: boolean;
}

export default function WidgetConfiguration({
  widgetConfig,
  onConfigChange,
  onGenerateEmbedCode,
  isLoading,
}: WidgetConfigurationProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Widget Configuration</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {isLoading ? (
          <div>Loading widget configuration...</div>
        ) : (
          <>
            <ConfigInput
              label="Company Name"
              value={widgetConfig.companyName}
              onChange={(value) => onConfigChange("companyName", value)}
            />
            <ConfigInput
              label="Primary Color"
              type="color"
              value={widgetConfig.primaryColor}
              onChange={(value) => onConfigChange("primaryColor", value)}
            />
            <ConfigInput
              label="Secondary Color"
              type="color"
              value={widgetConfig.secondaryColor}
              onChange={(value) => onConfigChange("secondaryColor", value)}
            />
            <ConfigInput
              label="Background Color"
              type="color"
              value={widgetConfig.backgroundColor}
              onChange={(value) => onConfigChange("backgroundColor", value)}
            />
            <PositionRadioGroup
              value={widgetConfig.position}
              onChange={(value) => onConfigChange("position", value)}
            />
            <Button onClick={onGenerateEmbedCode}>Generate Embed Code</Button>
          </>
        )}
      </CardContent>
    </Card>
  );
}
