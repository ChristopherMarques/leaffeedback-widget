import { User } from "./types";

export const hasAccess = (userData: User, requiredPlan: string) => {
  return (
    userData.subscriptionPlan === requiredPlan &&
    userData.subscriptionStatus === "active"
  );
};
