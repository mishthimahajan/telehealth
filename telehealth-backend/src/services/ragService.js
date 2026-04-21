import medicalKnowledge from "../data/medicalKnowledge.js";

export const retrieveRelevantKnowledge = (userSymptoms = []) => {
  const normalizedSymptoms = userSymptoms.map((s) => s.toLowerCase().trim());

  const ranked = medicalKnowledge.map((item) => {
    const matchedSymptoms = item.symptoms.filter((symptom) =>
      normalizedSymptoms.some((userSymptom) => userSymptom.includes(symptom))
    );

    return {
      ...item,
      matchedSymptoms,
      score: matchedSymptoms.length
    };
  });

  ranked.sort((a, b) => b.score - a.score);

  return ranked.filter((item) => item.score > 0).slice(0, 3);
};