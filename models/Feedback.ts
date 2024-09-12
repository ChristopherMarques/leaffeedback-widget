import mongoose from "mongoose";

const FeedbackSchema = new mongoose.Schema({
  content: {
    type: String,
    required: [true, "Please provide feedback content"],
    maxlength: [1000, "Feedback cannot be more than 1000 characters"],
  },
  email: {
    type: String,
    required: false,
    match: [/^\S+@\S+\.\S+$/, "Please provide a valid email address"],
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Feedback ||
  mongoose.model("Feedback", FeedbackSchema);
