import mongoose from "mongoose";

const symptomReportSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    age: Number,
    gender: String,
    symptoms: [String],

    aiResult: {
      condition: String,
      advice: String,
      severity: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("SymptomReport", symptomReportSchema);
