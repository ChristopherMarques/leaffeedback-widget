import { Project, WidgetConfig } from "./types";

export async function createProject(
  name: string,
  userId: string
): Promise<Project> {
  const response = await fetch(`/api/project?userId=${userId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name }),
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
  const response = await fetch(`/api/project`, {
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

export async function createWidget(
  widgetConfig: WidgetConfig
): Promise<WidgetConfig> {
  const response = await fetch(`/api/widget`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(widgetConfig),
  });

  if (!response.ok) {
    throw new Error("Failed to create widget");
  }

  return response.json();
}
