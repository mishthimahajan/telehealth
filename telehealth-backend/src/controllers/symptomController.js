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
// import Symptom from "../models/Symptom.js";

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
//     console.error(error);
//     res.status(500).json({ message: "Server error" });
//   }
// };
import Symptom from "../models/Symptom.js";

export const checkSymptoms = async (req, res) => {
  try {
    const { age, gender, symptoms } = req.body;

    if (!age || !gender || !symptoms?.length) {
      return res.status(400).json({ message: "All fields required" });
    }

    // ✅ Convert symptoms array → lowercase string
    const symptomText = symptoms.join(" ").toLowerCase();

    let result = {
      condition: "General Checkup Recommended",
      doctor: "General Physician",
      advice: "Please consult a doctor for proper diagnosis",
    };

    if (symptomText.includes("fever") && symptomText.includes("cough")) {
      result = {
        condition: "Possible Flu",
        doctor: "General Physician",
        advice: "Rest, fluids, and consult a doctor if fever persists",
      };
    }

    if (symptomText.includes("liver")) {
      result = {
        condition: "Possible Liver Issue",
        doctor: "Hepatologist",
        advice: "Avoid alcohol and consult a specialist immediately",
      };
    }

    res.json({
      condition: result.condition,
      doctor: result.doctor,
      advice: result.advice,
    });

  } catch (error) {
    console.error("❌ Symptom error:", error);
    res.status(500).json({ message: "Server error" });
  }
};


export const getSymptomHistory = async (req, res) => {
  const history = await Symptom.find({ user: req.user.id }).sort({
    createdAt: -1,
  });
  res.json(history);
};

