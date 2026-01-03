// import Symptom from "../models/Symptom.js";
// import OpenAI from "openai";

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// export const checkSymptoms = async (req, res) => {
//   try {
//     const { age, gender, symptoms } = req.body;

//     if (!age || !gender || !symptoms?.length) {
//       return res.status(400).json({ message: "All fields required" });
//     }

//     let result = {
//       condition: "General Checkup Recommended",
//       advice: "Please consult a doctor for proper diagnosis",
//     };

//     if (symptoms.includes("Fever") && symptoms.includes("Cough")) {
//       result = {
//         condition: "Possible Flu",
//         advice: "Rest, fluids, and consult a doctor if fever persists",
//       };
//     }

//     const record = await Symptom.create({
//       user: req.user.id,
//       age,
//       gender,
//       symptoms,
//       result,
//     });

//     res.json({ result, record });
//   } catch (error) {
//     res.status(500).json({ message: "Server error" });
//   }
// };

// export const getSymptomHistory = async (req, res) => {
//   const history = await Symptom.find({ user: req.user.id }).sort({
//     createdAt: -1,
//   });
//   res.json(history);
// };

import Symptom from "../models/Symptom.js";
import OpenAI from "openai";

let openai; // 🔑 lazy instance

const getOpenAI = () => {
  if (!openai) {
    openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
  }
  return openai;
};

/* ---------------- CHECK SYMPTOMS ---------------- */
export const checkSymptoms = async (req, res) => {
  try {
    const { age, gender, symptoms } = req.body;

    if (!age || !gender || !symptoms || symptoms.length === 0) {
      return res.status(400).json({ message: "Missing data" });
    }

    const prompt = `
Patient details:
Age: ${age}
Gender: ${gender}
Symptoms: ${symptoms.join(", ")}

Give:
1. Possible condition
2. Medical advice
(Do not give a diagnosis. Say consult a doctor.)
`;

    const client = getOpenAI(); // ✅ SAFE now

    const aiResponse = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
    });

    const result = aiResponse.choices[0].message.content;

    const record = await Symptom.create({
      user: req.user.id,
      age,
      gender,
      symptoms,
      result,
    });

    res.json({
      message: "Symptoms analyzed",
      result,
      record,
    });
  } catch (error) {
    console.error("AI ERROR:", error);
    res.status(500).json({ message: "AI error" });
  }
};

/* ---------------- GET HISTORY ---------------- */
export const getSymptomHistory = async (req, res) => {
  try {
    const history = await Symptom.find({ user: req.user.id }).sort({
      createdAt: -1,
    });

    res.json(history);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch history" });
  }
};
