// types.ts

export interface Feedback {
  id: number;
  message: string;
  sentiment: "positive" | "neutral" | "negative";
  date: string;
}

export interface FeedbackListProps {
  feedbacks: Feedback[];
  onSelectFeedback: (feedback: Feedback) => void;
}

export interface FeedbackDetailsProps {
  feedback: Feedback | null;
}

export interface FeedbackOverviewProps {
  feedbacks: Feedback[];
}

export type Position =
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right";

export interface Config {
  position: Position;
  primaryColor: string;
  companyName: string;
}
