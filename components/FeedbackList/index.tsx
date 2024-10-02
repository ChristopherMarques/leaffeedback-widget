import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Feedback,
  FeedbackListProps,
  FirebaseTimestamp,
  Project,
} from "@/lib/types";
import { Skeleton } from "@/components/ui/skeleton";
import { useAuth } from "@/contexts/auth-context";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { formatFirestoreTimestamp } from "@/lib/utils";

export default function FeedbackList({
  onSelectFeedback,
  onSelectProject,
}: FeedbackListProps): JSX.Element {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [projectId, setProjectId] = useState<Project["id"]>("");
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { user } = useAuth();

  const fetchFeedbacks = async () => {
    try {
      setLoading(true);
      if (!projectId) {
        return;
      }
      const response = await fetch(`/api/feedback?projectId=${projectId}`);
      if (response.ok) {
        const data = await response.json();
        setFeedbacks(data);
      } else {
        console.error("Failed to fetch feedbacks");
      }
    } catch (error) {
      console.error("Error fetching feedbacks:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleProjectChange = (projectId: string) => {
    setProjectId(projectId);
    onSelectFeedback(null);
    onSelectProject(projectId);
  };

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/project?userId=${user?.id}`);
      const data = await response.json();
      setProjects(data);
    } catch (error) {
      console.error("Error fetching projects:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFeedbacks();
    fetchProjects();
  }, [projectId]);

  return (
    <Card>
      <CardHeader className="flex-row justify-between items-center space-y-0">
        <CardTitle className="w-full">Recent Feedbacks</CardTitle>
        <div className="w-1/2">
          <Select onValueChange={handleProjectChange}>
            <SelectTrigger className="border-primary">
              <SelectValue placeholder="Select a project" />
            </SelectTrigger>
            <SelectContent>
              {projects.map((project) => (
                <SelectItem key={project.id} value={project.id}>
                  {project.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent>
        {loading ? (
          <FeedbackListSkeleton />
        ) : (
          <div>
            <ul className="space-y-2">
              {feedbacks.length === 0 ? (
                <li className="p-2">No feedbacks found</li>
              ) : (
                feedbacks.map((feedback) => (
                  <li
                    key={feedback.id}
                    className="p-2 hover:bg-gray-100 rounded cursor-pointer"
                    onClick={() => onSelectFeedback(feedback)}
                  >
                    <p className="font-medium">
                      {feedback.content.substring(0, 50)}
                      {feedback.content.length > 50 ? "..." : ""}
                    </p>
                    <p className="text-sm text-gray-500">
                      {formatFirestoreTimestamp(
                        feedback.createdAt as FirebaseTimestamp
                      )}
                    </p>
                  </li>
                ))
              )}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

function FeedbackListSkeleton() {
  return (
    <div className="space-y-2">
      {[...Array(5)].map((_, index) => (
        <div key={index} className="p-2">
          <Skeleton className="h-4 w-3/4 mb-1" />
          <Skeleton className="h-3 w-1/2" />
        </div>
      ))}
    </div>
  );
}
