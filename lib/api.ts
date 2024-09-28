import { Project, WidgetConfig } from "./types";

export async function createProject(
  name: string,
  userId: string
): Promise<Project> {
  const response = await fetch("/api/project", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, userId }),
  });

  if (!response.ok) {
    throw new Error("Failed to create project");
  }

  return response.json();
}

export async function updateProject(
  projectId: string,
  updateData: { widgetId: string; widgetConfig: WidgetConfig }
): Promise<Project> {
  const response = await fetch("/api/project", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: projectId, ...updateData }),
  });

  if (!response.ok) {
    throw new Error("Failed to update project");
  }

  return response.json();
}
