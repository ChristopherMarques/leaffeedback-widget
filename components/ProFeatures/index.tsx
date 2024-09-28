import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { WidgetConfig } from "@/lib/types";

interface ProFeaturesProps {
  widgetConfig: WidgetConfig;
  onConfigChange: (key: keyof WidgetConfig, value: string) => void;
  selectedProjectId: string;
}

const ProFeatures: React.FC<ProFeaturesProps> = ({
  widgetConfig,
  onConfigChange,
  selectedProjectId,
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Pro Features</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label htmlFor="button-text">Button Text</Label>
          <Input
            id="button-text"
            value={widgetConfig.buttonText || ""}
            onChange={(e) => onConfigChange("buttonText", e.target.value)}
            placeholder="Feedback"
          />
        </div>
        <div>
          <Label htmlFor="button-icon">Button Icon</Label>
          <Input
            id="button-icon"
            value={widgetConfig.buttonIcon || ""}
            onChange={(e) => onConfigChange("buttonIcon", e.target.value)}
            placeholder="feedback"
          />
        </div>
        <div>
          <Label htmlFor="button-animation">Button Animation</Label>
          <Select
            value={widgetConfig.buttonAnimation || ""}
            onValueChange={(value) => onConfigChange("buttonAnimation", value)}
          >
            <SelectTrigger id="button-animation">
              <SelectValue placeholder="Select animation" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="none">None</SelectItem>
              <SelectItem value="animate-pulse">Pulse</SelectItem>
              <SelectItem value="animate-bounce">Bounce</SelectItem>
              <SelectItem value="animate-spin">Spin</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProFeatures;
