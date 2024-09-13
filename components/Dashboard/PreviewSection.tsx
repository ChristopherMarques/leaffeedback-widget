import React from "react";
import dynamic from "next/dynamic";

import { generateEmbedCode } from "@/lib/utils";
import { Config } from "@/lib/types";

const DynamicEmbeddableFeedback = dynamic(
  () => import("@/components/EmbedableFeedback"),
  { ssr: false }
);

interface PreviewSectionProps {
  config: Config;
}

const PreviewSection: React.FC<PreviewSectionProps> = ({ config }) => {
  const embedCode = generateEmbedCode(config);

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

export default PreviewSection;
