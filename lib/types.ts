export interface Feedback {
  _id: string;
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

export interface User {
  clerkId: string;
  subscriptionId: string;
  subscriptionStatus: string;
  subscriptionPlan: string;
  subscriptionPlanName: string;
  subscriptionExpirationDate: Date;
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
  _id: string;
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

import { ObjectId } from "mongodb";

export interface User {
  _id?: ObjectId;
  clerkId: string;
  name: string;
  email: string;
  subscriptionStatus: string;
  subscriptionPlan: string;
  subscriptionPlanName: string;
  subscriptionExpirationDate: string;
}
