import { retrieveRelevantKnowledge } from "./ragService.js";

export const analyzeWithRAG = async ({ age, gender, symptoms }) => {
  const docs = retrieveRelevantKnowledge(symptoms);

  if (!docs.length) {
    return {
      condition: "General medical evaluation recommended",
      recommendedSpecialization: "General Physician",
      severity: "Low",
      emergency: false,
      confidence: 45,
      advice:
        "Your symptoms do not strongly match the current medical knowledge base. Please consult a doctor for proper diagnosis.",
      explanation: [
        "No strong disease match found",
        "A general physician is recommended for first-level evaluation"
      ],
      matchedSymptoms: [],
      retrievedDocs: []
    };
  }

  const bestMatch = docs[0];

  const confidence = Math.min(95, 50 + bestMatch.score * 12);

  return {
    condition: bestMatch.disease,
    recommendedSpecialization: bestMatch.specialist,
    severity: bestMatch.severity,
    emergency: bestMatch.emergency,
    confidence,
    advice: bestMatch.emergency
      ? "This may require urgent medical attention. Please contact emergency care or a doctor immediately."
      : `Based on your symptoms, please consult a ${bestMatch.specialist} for further evaluation.`,
    explanation: [
      `Matched symptoms: ${bestMatch.matchedSymptoms.join(", ")}`,
      bestMatch.explanation
    ],
    matchedSymptoms: bestMatch.matchedSymptoms,
    retrievedDocs: docs.map((doc) => ({
      disease: doc.disease,
      specialist: doc.specialist,
      severity: doc.severity,
      matchedSymptoms: doc.matchedSymptoms
    }))
  };
};