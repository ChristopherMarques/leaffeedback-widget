import { useState } from "react";
import { WidgetConfig } from "@/lib/types";

export function useWidgetConfig(initialConfig: WidgetConfig) {
  const [widgetConfig, setWidgetConfig] = useState<WidgetConfig>(initialConfig);

  const updateWidgetConfig = (key: keyof WidgetConfig, value: any) => {
    setWidgetConfig((prevConfig) => ({
      ...prevConfig,
      [key]: value,
    }));
  };

  return { widgetConfig, updateWidgetConfig };
}
