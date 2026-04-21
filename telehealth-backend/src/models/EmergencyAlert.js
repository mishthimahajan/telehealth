import mongoose from "mongoose";

const emergencyAlertSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    symptoms: [String],
    severity: String,
    status: {
      type: String,
      default: "Triggered"
    },
    location: String,
    note: String
  },
  { timestamps: true }
);

export default mongoose.model("EmergencyAlert", emergencyAlertSchema);