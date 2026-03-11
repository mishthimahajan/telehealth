import mongoose from "mongoose";

const reportSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    symptoms: String,
    diagnosis: String,
    severity: String,
  },
  { timestamps: true }
);

export default mongoose.model("Report", reportSchema);