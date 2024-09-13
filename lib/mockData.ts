import { Feedback } from "./types";

export const mockFeedbacks: Feedback[] = [
  {
    id: 1,
    message: "Great product!",
    sentiment: "positive",
    date: "2023-06-01",
  },
  {
    id: 2,
    message: "Could use some improvements",
    sentiment: "neutral",
    date: "2023-06-02",
  },
  {
    id: 3,
    message: "Not satisfied with the service",
    sentiment: "negative",
    date: "2023-06-03",
  },
  // Add more mock feedbacks as needed
];
