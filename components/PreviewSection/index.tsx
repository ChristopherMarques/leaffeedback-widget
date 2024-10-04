import React from "react";
import dynamic from "next/dynamic";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

import { generateEmbedCode } from "@/lib/utils";
import { Config } from "@/lib/types";

const DynamicEmbeddableFeedback = dynamic(
  () => import("@/components/FeedbackWidget/EmbedableFeedback"),
  { ssr: false }
);

interface PreviewSectionProps {
  config: Config;
}

const PreviewSection: React.FC<PreviewSectionProps> = ({ config }) => {
  const embedCode = generateEmbedCode(config);

  return (
    <Card className="relative h-auto">
      <CardHeader>
        <CardTitle>Preview</CardTitle>
      </CardHeader>
      <CardContent>
        <code
          className="text-sm block bg-card-foreground/10 p-4 rounded-md overflow-x-auto whitespace-pre font-mono text-left select-none"
          unselectable="on"
        >
          {embedCode}
        </code>
        <DynamicEmbeddableFeedback {...config} />
      </CardContent>
    </Card>
  );
};

export default PreviewSection;
