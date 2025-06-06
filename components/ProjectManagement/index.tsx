import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Project } from "@/lib/types";
import { useTranslations } from "next-intl";

interface ProjectManagementProps {
  projects: Project[];
  selectedProjectId: string;
  setSelectedProjectId: (id: string) => void;
  onCreateProject: (name: string) => void;
  hasPro: boolean;
}

export default function ProjectManagement({
  projects,
  selectedProjectId,
  setSelectedProjectId,
  onCreateProject,
  hasPro,
}: ProjectManagementProps) {
  const [newProjectName, setNewProjectName] = useState<string>("");

  const handleCreateProject = () => {
    onCreateProject(newProjectName);
    setNewProjectName("");
  };

  const t = useTranslations();

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t("dashboard.projectManagement")}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center space-x-2">
          <Input
            placeholder={t("dashboard.newProjectName")}
            value={newProjectName}
            onChange={(e) => setNewProjectName(e.target.value)}
          />
          <Button onClick={handleCreateProject}>
            {t("dashboard.createProject")}
          </Button>
        </div>
        <Select value={selectedProjectId} onValueChange={setSelectedProjectId}>
          <SelectTrigger>
            <SelectValue placeholder={t("dashboard.selectProject")} />
          </SelectTrigger>
          <SelectContent>
            {projects.map((project) => (
              <SelectItem key={project.id} value={project.id}>
                {project.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </CardContent>
    </Card>
  );
}
