import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  clerkId: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now },
  stripeCustomerId: { type: String },
  subscriptionId: { type: String },
  subscriptionStatus: { type: String },
  subscriptionPlan: { type: String },
  subscriptionPlanName: { type: String },
  subscriptionExpirationDate: { type: Date },
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
