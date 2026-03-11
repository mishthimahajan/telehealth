// import OpenAI from "openai";

// export const suggestDoctor = async (req, res) => {
//   const { symptoms } = req.body;

//   const client = new OpenAI({
//     apiKey: process.env.OPENAI_API_KEY,
//   });

//   const prompt = `
// User symptoms: ${symptoms.join(", ")}

// Suggest the best doctor specialization only.
// `;

//   const response = await client.chat.completions.create({
//     model: "gpt-4o-mini",
//     messages: [{ role: "user", content: prompt }],
//   });

//   res.json({
//     specialization: response.choices[0].message.content,
//   });
// };


// import OpenAI from "openai";

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// export const analyzeSymptomsAI = async (req, res) => {
//   try {
//     const { age, gender, symptoms } = req.body;

//     if (!age || !gender || !Array.isArray(symptoms)) {
//       return res.status(400).json({ message: "Invalid input" });
//     }

//     const prompt = `
// You are a medical AI assistant.

// Patient:
// Age: ${age}
// Gender: ${gender}
// Symptoms: ${symptoms.join(", ")}

// Respond ONLY in JSON:
// {
//   "condition": "",
//   "riskLevel": "Low | Medium | High",
//   "recommendedSpecialization": "",
//   "advice": ""
// }
// `;

//     const response = await openai.chat.completions.create({
//       model: "gpt-4o-mini",
//       messages: [{ role: "user", content: prompt }],
//       temperature: 0.3,
//     });

//     const aiResult = JSON.parse(response.choices[0].message.content);

//     res.json(aiResult);

//   } catch (error) {
//     console.error("❌ AI Doctor Error:", error);
//     res.status(500).json({ message: "AI analysis failed" });
//   }
// };


// import OpenAI from "openai";

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// export const analyzeSymptomsAI = async (req, res) => {
//   try {
//     const { age, gender, symptoms } = req.body;

//     const prompt = `
// You are an AI medical assistant.

// Patient:
// Age: ${age}
// Gender: ${gender}
// Symptoms: ${symptoms}

// Return ONLY valid JSON:
// {
//   "condition": "",
//   "riskLevel": "Low | Medium | High",
//   "recommendedDoctor": "",
//   "advice": ""
// }
// `;

//     const response = await openai.responses.create({
//       model: "gpt-4.1-mini",
//       input: prompt,
//     });

//     const output = response.output_text;

//     console.log("RAW AI:", output);

//     const match = output.match(/\{[\s\S]*\}/);

//     if (!match) {
//       return res.status(500).json({ message: "Invalid AI format" });
//     }

//     const result = JSON.parse(match[0]);

//     res.status(200).json(result);

//   } catch (error) {
//     console.error("AI ERROR:", error);
//     res.status(500).json({ message: "AI analysis failed" });
//   }
// };




// import OpenAI from "openai";

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// export const analyzeSymptomsAI = async (req, res) => {
//   try {
//     const { symptoms } = req.body;

//     const response = await openai.chat.completions.create({
//       model: "gpt-4o-mini",
//       messages: [
//         {
//           role: "system",
//           content: "You are a medical AI assistant.",
//         },
//         {
//           role: "user",
//           content: `Patient symptoms: ${symptoms}. 
//           Predict possible condition and recommend doctor type.`,
//         },
//       ],
//     });

//     res.json({ result: response.choices[0].message.content });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "AI analysis failed" });
//   }
// };

// import OpenAI from "openai";

// export const analyzeSymptomsAI = async (req, res) => {
//   try {
//     const { symptoms } = req.body;

//     if (!symptoms) {
//       return res.status(400).json({ message: "Symptoms required" });
//     }

//     const openai = new OpenAI({
//       apiKey: process.env.OPENAI_API_KEY,
//     });

//     const response = await openai.chat.completions.create({
//       model: "gpt-4o-mini",
//       messages: [
//         { role: "system", content: "You are a medical AI assistant." },
//         {
//           role: "user",
//           content: `Patient symptoms: ${symptoms}.
//           Predict possible condition and recommend doctor type.
//           Return simple text.`,
//         },
//       ],
//       temperature: 0.3,
//     });

//     res.json({ result: response.choices[0].message.content });

//   } catch (error) {
//     console.error("FULL ERROR:", error);
//     res.status(500).json({
//       message: "AI analysis failed",
//       error: error.message,
//     });
//   }
// };

// import OpenAI from "openai";

// export const analyzeSymptomsAI = async (req, res) => {
//   try {
//     const { age, gender, symptoms } = req.body;

//     // 🔹 Validate input
//     if (!age || !gender || !symptoms || symptoms.length === 0) {
//       return res.status(400).json({
//         success: false,
//         message: "Age, gender, and symptoms are required.",
//       });
//     }

//     if (!process.env.OPENAI_API_KEY) {
//       return res.status(500).json({
//         success: false,
//         message: "OpenAI API key not configured.",
//       });
//     }

//     const openai = new OpenAI({
//       apiKey: process.env.OPENAI_API_KEY,
//     });

//     // 🔹 Create detailed medical prompt
//     const prompt = `
// You are a professional AI medical assistant.

// Patient Details:
// - Age: ${age}
// - Gender: ${gender}
// - Symptoms: ${symptoms.join(", ")}

// Based on the symptoms:
// 1. Suggest possible medical condition(s).
// 2. Recommend which type of doctor to consult.
// 3. Give general precautions (NOT prescriptions).
// 4. Keep response short and simple.
// `;

//     const response = await openai.chat.completions.create({
//       model: "gpt-4o-mini",
//       messages: [
//         { role: "system", content: "You are a helpful and cautious medical AI." },
//         { role: "user", content: prompt },
//       ],
//       temperature: 0.4,
//     });

//     const aiResult = response.choices[0].message.content;

//     res.status(200).json({
//       success: true,
//       result: aiResult,
//     });

//   } catch (error) {
//     console.error("OpenAI Error:", error);

//     // 🔹 Handle quota error properly
//     if (error.code === "insufficient_quota") {
//       return res.status(500).json({
//         success: false,
//         message: "API quota exceeded. Please check billing.",
//       });
//     }

//     res.status(500).json({
//       success: false,
//       message: "AI analysis failed",
//     });
//   }
// };

// import axios from "axios";

// // export const analyzeSymptomsAI = async (req, res) => {
// //   try {
// //     const { age, gender, symptoms } = req.body;

// //     if (!age || !gender || !symptoms) {
// //       return res.status(400).json({
// //         success: false,
// //         message: "Age, gender and symptoms are required",
// //       });
// //     }

// //     const response = await axios.post(
// //       "https://api.groq.com/openai/v1/chat/completions",
// //       {
// //         model: "llama-3.3-70b-versatile",   
// //         messages: [
// //           {
// //             role: "system",
// //             content: "You are a professional AI doctor.",
// //           },
// //           {
// //             role: "user",
// //             content: `
// // Patient Details:
// // Age: ${age}
// // Gender: ${gender}
// // Symptoms: ${symptoms}

// // Provide:
// // 1. Possible Condition
// // 2. Recommended Advice
// // 3. Which Specialist Doctor to Consult
// // 4. Urgency Level (Low/Medium/High)
// // `,
// //           },
// //         ],
// //         temperature: 0.5,
// //       },
// //       {
// //         headers: {
// //           Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
// //           "Content-Type": "application/json",
// //         },
// //       }
// //     );

// //     const aiResponse = response.data.choices[0].message.content;

// //     return res.status(200).json({
// //       success: true,
// //       data: aiResponse,
// //     });

// //   } catch (error) {
// //     console.error("AI Error:", error.response?.data || error.message);

// //     return res.status(500).json({
// //       success: false,
// //       message: error.response?.data?.error?.message || "AI analysis failed",
// //     });
// //   }
// // };

// export const analyzeSymptomsAI = async (req, res) => {
//   try {
//     const { age, gender, symptoms } = req.body;

//     const prompt = `
// You are a professional AI doctor.

// Return response ONLY in JSON format like this:

// {
//   "condition": "...",
//   "recommendedSpecialization": "...",
//   "advice": "..."
// }

// Patient:
// Age: ${age}
// Gender: ${gender}
// Symptoms: ${symptoms}
// `;

//     const response = await axios.post(
//       "https://api.groq.com/openai/v1/chat/completions",
//       {
//         model: "llama-3.3-70b-versatile",
//         messages: [
//           { role: "user", content: prompt }
//         ],
//         temperature: 0.5,
//       },
//       {
//         headers: {
//           Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
//         },
//       }
//     );

//     const aiText = response.data.choices[0].message.content;

//     // Convert AI string to JSON
//     const parsed = JSON.parse(aiText);

//     res.json(parsed);

//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "AI analysis failed" });
//   }
// };



import axios from "axios";

// export const analyzeSymptomsAI = async (req, res) => {
//   try {
//     const { age, gender, symptoms } = req.body;

//     const prompt = `
// You are a medical AI assistant.

// Patient Details:
// Age: ${age}
// Gender: ${gender}
// Symptoms: ${symptoms.join(", ")}

// Return strictly in JSON format:

// {
//   "condition": "",
//   "recommendedSpecialization": "",
//   "advice": ""
// }

// Important: Return only valid JSON. No extra text.
// `;

//     const response = await fetch(
//       "https://api.groq.com/openai/v1/chat/completions",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
//         },
//         body: JSON.stringify({
//           model: "llama-3.1-8b-instant",
//           messages: [{ role: "user", content: prompt }],
//           temperature: 0.7,
//         }),
//       }
//     );

//     const data = await response.json();

// if (!data.choices) {
//   console.error("Groq Error Response:", data);
//   return res.status(500).json({
//     message: data.error?.message || "AI generation failed"
//   });
// }

// const aiText = data.choices[0].message.content;



//     const result = JSON.parse(aiText);

//     res.status(200).json(result);

//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Symptom analysis failed" });
//   }
// };
export const analyzeSymptomsAI = async (req, res) => {
  try {
    const { age, gender, symptoms } = req.body;

    const prompt = `
Patient Details:
Age: ${age}
Gender: ${gender}
Symptoms: ${symptoms.join(", ")}

Return ONLY ONE JSON object in this format:
{
  "condition": "",
  "severity": "",
  "recommendedDoctor": "",
  "recommendedSpecialization": "",
  "advice": ""
}
Do not include explanations.
`;

    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
        },
        body: JSON.stringify({
          model: "llama-3.1-8b-instant",
          messages: [
            {
              role: "system",
              content:
                "You are a medical AI. Always respond in valid JSON only.",
            },
            { role: "user", content: prompt },
          ],
          temperature: 0.2,
          response_format: { type: "json_object" },
        }),
      }
    );

    const data = await response.json();

    if (!data.choices) {
      console.error("Groq Error:", data);
      return res.status(500).json({
        message: data.error?.message || "AI failed",
      });
    }

    const result = JSON.parse(data.choices[0].message.content);

    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Symptom analysis failed" });
  }
};
// export const generateDoctorAI = async (req, res) => {

//   try {
//     const { specialist } = req.body;

//     const prompt = `
// Generate a realistic Indian doctor profile for a ${specialist}.

// Return strictly in JSON format:

// {
//   "name": "",
//   "specialization": "",
//   "experience": "",
//   "consultationFee": "",
//   "rating": "",
//   "availableSlots": []
// }
// `;

//     const response = await fetch(
//       "https://api.groq.com/openai/v1/chat/completions",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
//         },
//         body: JSON.stringify({
//           model: "llama-3.1-8b-instant",
//           messages: [{ role: "user", content: prompt }],
//           temperature: 0.7,
//         }),
//       }
//     );

//   const data = await response.json();

// if (!data.choices) {
//   console.error("Groq Error Response:", data);
//   return res.status(500).json({
//     message: data.error?.message || "AI generation failed",
//   });
// }

// let aiText = data.choices[0].message.content;

// // Remove markdown if present
// aiText = aiText.replace(/```json/g, "").replace(/```/g, "").trim();

// // Extract first JSON object only
// const firstObjectMatch = aiText.match(/\{[\s\S]*?\}\s*(?=\{|$)/);

// if (!firstObjectMatch) {
//   console.error("Invalid AI format:", aiText);
//   return res.status(500).json({ message: "Invalid AI response format" });
// }

// let doctorProfile;

// try {
//   doctorProfile = JSON.parse(firstObjectMatch[0]);
// } catch (err) {
//   console.error("JSON Parse Error:", err);
//   console.error("Raw AI Text:", aiText);
//   return res.status(500).json({ message: "JSON parsing failed" });
// }

// res.status(200).json(doctorProfile);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Doctor generation failed" });
//   }
// };

export const generateDoctorAI = async (req, res) => {
  try {
    const { specialist } = req.body;

    const prompt = `
Generate ONLY ONE Indian doctor profile for a ${specialist}.

Return EXACTLY ONE JSON object in this format:
{
  "name": "",
  "specialization": "",
  "experience": "",
  "consultationFee": "",
  "rating": "",
  "availableSlots": []
}

Do not include explanations.
`;

    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
        },
        body: JSON.stringify({
          model: "llama-3.1-8b-instant",
          messages: [
            {
              role: "system",
              content:
                "You are a hospital AI. Always respond in valid JSON only.",
            },
            { role: "user", content: prompt },
          ],
          temperature: 0.2,
          response_format: { type: "json_object" },
        }),
      }
    );

    const data = await response.json();

    if (!data.choices) {
      console.error("Groq Error:", data);
      return res.status(500).json({
        message: data.error?.message || "AI failed",
      });
    }

    const result = JSON.parse(data.choices[0].message.content);

    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Doctor generation failed" });
  }
};