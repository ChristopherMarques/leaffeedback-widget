import User from "@/models/User";

export const hasAccess = async (userId: string, requiredPlan: string) => {
  const user = await User.findOne({ clerkId: userId });
  return (
    user.subscriptionPlan === requiredPlan &&
    user.subscriptionStatus === "active"
  );
};
