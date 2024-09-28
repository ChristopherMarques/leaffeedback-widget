"use client";

import React from "react";
import { User, WidgetConfig } from "@/lib/types";
import PreviewSection from "@/components/PreviewSection";
import { useAuth } from "@/contexts/auth-context";
import ProFeatures from "@/components/ProFeatures";
import { hasAccess } from "@/lib/subscriptionUtils";
import ProFeatureOverlay from "../ProFeatureOverlay";
import { useProjectsAndWidgetConfig } from "@/hooks/use-projects-widgets";
import ProjectManagement from "@/components/ProjectManagement";
import WidgetConfiguration from "@/components/WidgetConfiguration";

export default function ConfigTab(): JSX.Element {
  const {
    widgetConfig,
    setWidgetConfig,
    projects,
    selectedProjectId,
    setSelectedProjectId,
    isLoading,
    handleCreateProject,
    handleGenerateEmbedCode,
  } = useProjectsAndWidgetConfig();

  const { user } = useAuth();

  const hasPro = hasAccess(
    user as unknown as User,
    process.env.NEXT_PUBLIC_PRO_PRICE_ID as string
  );

  const handleConfigChange = (key: keyof WidgetConfig, value: string) => {
    setWidgetConfig((prev: WidgetConfig) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="space-y-6">
      <ProjectManagement
        projects={projects}
        selectedProjectId={selectedProjectId}
        setSelectedProjectId={setSelectedProjectId}
        onCreateProject={handleCreateProject}
        hasPro={hasPro}
      />

      <WidgetConfiguration
        widgetConfig={widgetConfig}
        onConfigChange={handleConfigChange}
        onGenerateEmbedCode={handleGenerateEmbedCode}
        isLoading={isLoading}
      />

      <ProFeatureOverlay hasPro={hasPro}>
        <ProFeatures
          widgetConfig={widgetConfig}
          onConfigChange={handleConfigChange}
          selectedProjectId={selectedProjectId}
        />
      </ProFeatureOverlay>

      <PreviewSection
        config={{ ...widgetConfig, projectId: selectedProjectId }}
      />
    </div>
  );
}
