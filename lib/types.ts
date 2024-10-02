import { UserInfo } from "firebase/auth";

export interface Feedback {
  id: string;
  content: string;
  email?: string;
  userId: string;
  projectId: string;
  createdAt: FirebaseTimestamp | Date;
}

export interface FeedbackListProps {
  onSelectFeedback: (feedback: Feedback | null) => void;
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

export type FirebaseTimestamp = {
  _seconds: number;
  _nanoseconds: number;
};

export interface WidgetConfig {
  widgetId: string;
  position: Position;
  primaryColor: string;
  secondaryColor: string;
  companyName: string;
  projectId: string;
  buttonText?: string;
  buttonIcon?: string;
  buttonAnimation?: string;
}

export interface Project {
  id: string;
  name: string;
  userId: string;
  createdAt: string;
  widgetId: string;
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
