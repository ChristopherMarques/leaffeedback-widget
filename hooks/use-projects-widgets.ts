import { useState, useEffect } from "react";
import { Project, WidgetConfig, User } from "@/lib/types";
import { useAuth } from "@/contexts/auth-context";
import { useToast } from "@/hooks/use-toast";
import { generateEmbedCode } from "@/lib/utils";
import { createProject, createWidget, updateProject } from "@/lib/api";

export function useProjectsAndWidgetConfig() {
  const [widgetConfig, setWidgetConfig] = useState<WidgetConfig>({
    position: "bottom-right",
    primaryColor: "#686B59",
    secondaryColor: "#ffffff",
    companyName: "My Company",
    buttonAnimation: "",
    widgetId: crypto.randomUUID(),
    projectId: "",
  });
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProjectId, setSelectedProjectId] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { user } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    fetchProjects();
  }, []);

  useEffect(() => {
    if (selectedProjectId) {
      const selectedProject = projects.find(
        (project) => project.id === selectedProjectId
      );
      if (selectedProject?.widgetId) {
        fetchWidgetConfig(selectedProject.widgetId);
      } else {
        resetWidgetConfig(selectedProject?.id);
      }
    }
  }, [selectedProjectId, projects]);

  const fetchProjects = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`/api/project?userId=${user?.id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch projects");
      }
      const data = await response.json();
      setProjects(data);
    } catch (error) {
      console.error("Error fetching projects:", error);
      toast({
        title: "Error",
        description: "Failed to fetch projects. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const fetchWidgetConfig = async (widgetId: string) => {
    setIsLoading(true);
    try {
      const response = await fetch(`/api/widget?widgetId=${widgetId}`);
      if (!response.ok) {
        throw new Error("Failed to fetch widget configuration");
      }
      const data = await response.json();
      setWidgetConfig(data);
    } catch (error) {
      console.error("Error fetching widget configuration:", error);
      toast({
        title: "Error",
        description: "Failed to fetch widget configuration. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const resetWidgetConfig = (projectId?: string) => {
    setWidgetConfig({
      position: "bottom-right",
      primaryColor: "#686B59",
      secondaryColor: "#ffffff",
      companyName: "My Company",
      buttonAnimation: "",
      widgetId: crypto.randomUUID(),
      projectId: projectId || "",
    });
  };

  const handleCreateProject = async (newProjectName: string) => {
    setIsLoading(true);
    try {
      const newProject = await createProject(
        newProjectName,
        user?.id as string
      );
      setProjects((prevProjects) => [...prevProjects, newProject]);
      setSelectedProjectId(newProject.id);
      toast({
        title: "Success",
        description: "Project created successfully!",
      });
    } catch (error) {
      console.error("Error creating project:", error);
      toast({
        title: "Error",
        description: "Failed to create project. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleGenerateEmbedCode = async () => {
    setIsLoading(true);
    try {
      const embedCode = generateEmbedCode(widgetConfig);
      const widget = await createWidget(widgetConfig);
      const updatedProject = await updateProject(selectedProjectId, {
        widgetId: widget.widgetId,
        widgetConfig,
      });
      setProjects((prevProjects) =>
        prevProjects.map((p) =>
          p.id === updatedProject.id ? updatedProject : p
        )
      );
      toast({
        title: "Success",
        description: "Embed code generated and project updated successfully!",
      });
      return embedCode;
    } catch (error) {
      console.error("Error generating embed code:", error);
      toast({
        title: "Error",
        description: "Failed to generate embed code. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return {
    widgetConfig,
    setWidgetConfig,
    projects,
    setProjects,
    selectedProjectId,
    setSelectedProjectId,
    isLoading,
    fetchProjects,
    fetchWidgetConfig,
    handleCreateProject,
    handleGenerateEmbedCode,
  };
}
