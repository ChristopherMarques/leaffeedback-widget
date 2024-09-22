import { UserCredential, UserInfo } from "firebase/auth";

export interface Feedback {
  id: string;
  content: string;
  email?: string;
  userId: string;
  projectId: string;
  createdAt: string;
}

export interface FeedbackListProps {
  feedbacks: Feedback[];
  onSelectFeedback: (feedback: Feedback) => void;
  loading?: boolean;
}

export interface FeedbackDetailsProps {
  feedback: Feedback | null;
}

export interface FeedbackOverviewProps {
  feedbacks: Feedback[];
  loading?: boolean;
}

export type Position =
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right";

export interface Config extends WidgetConfig {
  projectId: string;
}

export interface WidgetConfig {
  position: Position;
  primaryColor: string;
  secondaryColor: string;
  companyName: string;
}

export interface Project {
  id: string;
  name: string;
  userId: string;
  createdAt: string;
}

export interface Subscription {
  subscriptionId: string;
  subscriptionStatus: string;
  subscriptionPlan: string;
  subscriptionPlanName: string;
  subscriptionExpirationDate: string;
}

export interface User extends UserInfo {
  id: string;
  accessToken?: string;
  name: string;
  email: string;
  subscriptionStatus: string;
  subscriptionPlan: string;
  subscriptionPlanName: string;
  subscriptionExpirationDate: string;
}
