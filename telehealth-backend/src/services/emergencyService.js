export const detectEmergency = (symptoms = []) => {
  const redFlags = [
    "chest pain",
    "shortness of breath",
    "breathing difficulty",
    "unconscious",
    "seizure",
    "stroke",
    "severe bleeding"
  ];

  const normalized = symptoms.map((s) => s.toLowerCase());

  const matchedRedFlags = redFlags.filter((flag) =>
    normalized.some((symptom) => symptom.includes(flag))
  );

  return {
    isEmergency: matchedRedFlags.length > 0,
    matchedRedFlags
  };
};