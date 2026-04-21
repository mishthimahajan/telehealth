const medicalKnowledge = [
  {
    id: 1,
    disease: "Viral Fever",
    symptoms: ["fever", "body pain", "headache", "fatigue"],
    specialist: "General Physician",
    severity: "Low",
    emergency: false,
    explanation:
      "Viral fever is usually associated with fever, weakness, body pain, and headache."
  },
  {
    id: 2,
    disease: "Migraine",
    symptoms: ["headache", "nausea", "light sensitivity", "vomiting"],
    specialist: "Neurologist",
    severity: "Medium",
    emergency: false,
    explanation:
      "Migraine commonly presents with severe headache, nausea, and light sensitivity."
  },
  {
    id: 3,
    disease: "Asthma Attack",
    symptoms: ["shortness of breath", "wheezing", "chest tightness", "cough"],
    specialist: "Pulmonologist",
    severity: "High",
    emergency: true,
    explanation:
      "Breathing difficulty and wheezing may indicate an asthma flare or respiratory emergency."
  },
  {
    id: 4,
    disease: "Heart Attack Risk",
    symptoms: ["chest pain", "left arm pain", "sweating", "breathing difficulty"],
    specialist: "Cardiologist",
    severity: "High",
    emergency: true,
    explanation:
      "Chest pain with sweating and arm pain may indicate a serious cardiac emergency."
  },
  {
    id: 5,
    disease: "Hepatitis or Liver Inflammation",
    symptoms: ["liver pain", "abdominal pain", "fatigue", "vomiting", "loss of appetite"],
    specialist: "Gastroenterologist",
    severity: "Medium",
    emergency: false,
    explanation:
      "Liver-related pain with abdominal symptoms may suggest inflammation or digestive liver issues."
  }
];

export default medicalKnowledge;