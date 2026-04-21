import { analyzeWithRAG } from "../services/llmService.js";

export const advancedAnalyzeSymptoms = async (req, res) => {
  try {
    const { age, gender, symptoms } = req.body;

    if (!age || !gender || !symptoms || !Array.isArray(symptoms)) {
      return res.status(400).json({ message: "Age, gender, and symptoms are required" });
    }

    const result = await analyzeWithRAG({ age, gender, symptoms });

    return res.status(200).json(result);
  } catch (error) {
    console.error("Advanced AI analysis error:", error);
    return res.status(500).json({ message: "Advanced symptom analysis failed" });
  }
};