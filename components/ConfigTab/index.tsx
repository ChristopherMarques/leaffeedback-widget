"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Config, Project, WidgetConfig } from "@/lib/types";
import { generateEmbedCode } from "@/lib/utils";
import ConfigInput from "@/components/Dashboard/ConfigInput";
import PositionRadioGroup from "@/components/Dashboard/PositionRadioGroup";
import PreviewSection from "@/components/Dashboard/PreviewSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ConfigTab(): JSX.Element {
  const [widgetConfig, setWidgetConfig] = useState<WidgetConfig>({
    position: "bottom-right",
    primaryColor: "#686B59",
    secondaryColor: "#ffffff",
    companyName: "My Company",
  });
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProjectId, setSelectedProjectId] = useState<string>("");
  const [newProjectName, setNewProjectName] = useState<string>("");

  const { toast } = useToast();

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await fetch("/api/project");
      if (response.ok) {
        const data = await response.json();
        setProjects(data);
      } else {
        console.error("Failed to fetch projects");
      }
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  const handleConfigChange = (key: keyof WidgetConfig, value: string) => {
    setWidgetConfig((prev) => ({ ...prev, [key]: value }));
  };

  const handleCreateProject = async () => {
    try {
      const response = await fetch("/api/project", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: newProjectName }),
      });
      if (response.ok) {
        const newProject = await response.json();
        setProjects([...projects, newProject]);
        setNewProjectName("");
        toast({
          title: "Project created",
          description: "Your new project has been created successfully.",
        });
      } else {
        throw new Error("Failed to create project");
      }
    } catch (error) {
      console.error("Error creating project:", error);
      toast({
        title: "Error",
        description: "Failed to create project. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleGenerateEmbedCode = () => {
    if (!selectedProjectId) {
      toast({
        title: "Error",
        description:
          "Please select a project before generating the embed code.",
        variant: "destructive",
      });
      return;
    }

    const config: Config = { ...widgetConfig, projectId: selectedProjectId };
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
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Project Management</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-2">
            <Input
              placeholder="New project name"
              value={newProjectName}
              onChange={(e) => setNewProjectName(e.target.value)}
            />
            <Button onClick={handleCreateProject}>Create Project</Button>
          </div>
          <Select
            value={selectedProjectId}
            onValueChange={setSelectedProjectId}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select a project" />
            </SelectTrigger>
            <SelectContent>
              {projects.map((project) => (
                <SelectItem key={project._id} value={project._id}>
                  {project.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Widget Configuration</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <ConfigInput
            label="Company Name"
            value={widgetConfig.companyName}
            onChange={(value) => handleConfigChange("companyName", value)}
          />
          <ConfigInput
            label="Primary Color"
            type="color"
            value={widgetConfig.primaryColor}
            onChange={(value) => handleConfigChange("primaryColor", value)}
          />
          <ConfigInput
            label="Secondary Color"
            type="color"
            value={widgetConfig.secondaryColor}
            onChange={(value) => handleConfigChange("secondaryColor", value)}
          />
          <PositionRadioGroup
            value={widgetConfig.position}
            onChange={(value) => handleConfigChange("position", value)}
          />
          <Button onClick={handleGenerateEmbedCode}>Generate Embed Code</Button>
        </CardContent>
      </Card>

      <PreviewSection
        config={{ ...widgetConfig, projectId: selectedProjectId }}
      />
    </div>
  );
}
