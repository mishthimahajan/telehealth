import mongoose from "mongoose";

const symptomSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    age: Number,
    gender: String,
    symptoms: [String],
    result: String,
  },
  { timestamps: true }
);

export default mongoose.model("Symptom", symptomSchema);


