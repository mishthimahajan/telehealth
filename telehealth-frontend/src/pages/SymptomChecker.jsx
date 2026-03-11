
// import { useState } from "react";
// import axios from "axios";

// const SymptomChecker = () => {
//   const [age, setAge] = useState("");
//   const [gender, setGender] = useState("");
//   const [symptoms, setSymptoms] = useState([]);
//   const [result, setResult] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const symptomList = [
//     "Fever",
//     "Cough",
//     "Headache",
//     "Chest Pain",
//     "Fatigue",
//     "Nausea",
//   ];

//   const toggleSymptom = (symptom) => {
//     setSymptoms((prev) =>
//       prev.includes(symptom)
//         ? prev.filter((s) => s !== symptom)
//         : [...prev, symptom]
//     );
//   };



// const handleCheckSymptoms = async () => {
//   if (!age || !gender || symptoms.length === 0) {
//     alert("Please fill all fields");
//     return;
//   }

//   try {
//     setLoading(true);

//     const token = localStorage.getItem("token");

//     const res = await axios.post(
//       "http://localhost:3000/api/symptoms/check",
//       { age, gender, symptoms },
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );

//     setResult(res.data);
//   } catch (error) {
//     console.error("SYMPTOM CHECK ERROR", error);
//     alert(error.response?.data?.message || "Symptom check failed");
//   } finally {
//     setLoading(false);
//   }
// };




//   return (
//     <div className="flex justify-center items-center w-screen h-screen bg-linear-to-br from-blue-300 to-blue-600">
//       <div className="bg-white text-black p-6 rounded-xl shadow-lg w-87.5">
//         <h2 className="text-xl font-bold mb-4 text-center">
//           🧠 Symptom Checker
//         </h2>

//         <input
//           type="number"
//           placeholder="Age"
//           value={age}
//           onChange={(e) => setAge(e.target.value)}
//           className="w-full border p-2 mb-3 rounded"
//         />

//         <select
//           value={gender}
//           onChange={(e) => setGender(e.target.value)}
//           className="w-full border p-2 mb-4 rounded"
//         >
//           <option value="">Select Gender</option>
//           <option>Male</option>
//           <option>Female</option>
//         </select>

//         <div className="grid grid-cols-2 gap-2 mb-4">
//           {symptomList.map((symptom) => (
//             <button
//               key={symptom}
//               onClick={() => toggleSymptom(symptom)}
//               className={`p-2 rounded ${
//                 symptoms.includes(symptom)
//                   ? "bg-blue-600 text-black"
//                   : "bg-gray-200"
//               }`}
//             >
//               {symptom}
//             </button>
//           ))}
//         </div>

//         <button
//           onClick={handleCheckSymptoms}
//           className="w-full bg-black text-white p-2 rounded"
//           disabled={loading}
//         >
//           {loading ? "Checking..." : "Check Symptoms"}
//         </button>

//         {result && (
//   <div className="mt-4 p-3 bg-green-100 rounded text-sm">
//     <p><b>Possible Condition:</b> {result.condition}</p>
//     <p><b>Advice:</b> {result.advice}</p>
//   </div>
// )}



//       </div>
//     </div>
//   );
// };

// export default SymptomChecker;

// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const SymptomChecker = () => {
//   const [age, setAge] = useState("");
//   const [gender, setGender] = useState("");
//   const [symptomText, setSymptomText] = useState("");
//   const [result, setResult] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleCheckSymptoms = async () => {
//     if (!age || !gender || !symptomText.trim()) {
//       alert("Please fill all fields");
//       return;
//     }

//     // Convert text → array
//     const symptoms = symptomText
//       .split(",")
//       .map((s) => s.trim())
//       .filter(Boolean);

//     try {
//       setLoading(true);
//       const token = localStorage.getItem("token");

//       const res = await axios.post(
//         "http://localhost:3000/api/symptoms/check",
//         { age, gender, symptoms },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
      

//       setResult(res.data);
//       localStorage.setItem(
//   "recommendedSpecialization",
//   res.data.specialization
// );
// setResult({
//   condition: data.possibleCondition,
//   doctor: data.recommendedDoctor,
//   advice: data.advice
// });


//     } catch (error) {
//       alert(error.response?.data?.message || "Symptom check failed");
//     } finally {
//       setLoading(false);
//     }
//   };

// const handleCheckSymptoms = async () => {
//   if (!age || !gender || !symptomText.trim()) {
//     alert("Please fill all fields");
//     return;
//   }

//   const symptoms = symptomText
//     .split(",")
//     .map((s) => s.trim())
//     .filter(Boolean);

//   try {
//     setLoading(true);
//     const token = localStorage.getItem("token");

//     const res = await axios.post(
//       "http://localhost:3000/api/ai/analyze-symptoms",
//       { age, gender, symptoms },
      
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );

//     setResult({
//       condition: res.data.condition,
//       recommendedDoctor: res.data.recommendedSpecialization,
//       advice: res.data.advice,
//     });

//     localStorage.setItem(
//       "recommendedSpecialization",
//       res.data.recommendedSpecialization
//     );

//     console.log(
//       "Saved specialization:",
//       res.data.recommendedSpecialization
//     );

//   } catch (error) {
//     console.error(error);
//     alert(error.response?.data?.message || "Symptom check failed");
//   } finally {
//     setLoading(false);
//   }
// };

// const handleCheckSymptoms = async () => {
//   if (!age || !gender || !symptomText.trim()) {
//     alert("Please fill all fields");
//     return;
//   }

//   const symptoms = symptomText
//     .split(",")
//     .map((s) => s.trim())
//     .filter(Boolean);

//   try {
//     setLoading(true);
//     const token = localStorage.getItem("token");

//     // 1️⃣ Analyze Symptoms
//     const analysisRes = await axios.post(
//       "http://localhost:3000/api/analyze-symptoms",
//       { age, gender, symptoms },
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );

//     const specialization = analysisRes.data.recommendedSpecialization;

//     // 2️⃣ Generate Doctor (AI)
//     const doctorRes = await axios.post(
//       "http://localhost:3000/api/generate-doctor",
//       { specialist: specialization },
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );

//     // 3️⃣ Navigate to Book Appointment with AI doctor data
//     navigate("/book-appointment", {
//       state: { doctorData: doctorRes.data },
//     });

//   } catch (error) {
//     console.error(error);
//     alert(error.response?.data?.message || "Symptom check failed");
//   } finally {
//     setLoading(false);
//   }
// };

//   return (
//     <div className="w-screen h-screen flex items-center justify-center bg-linear-to-br from-blue-500 via-indigo-500 to-purple-600">
//       <div className="bg-white/90 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-87.5">
//         <h2 className="text-2xl font-bold text-center mb-6 text-indigo-700">
//           🧠 AI Symptom Checker
//         </h2>

//         <input
//           type="number"
//           placeholder="Enter Age"
//           value={age}
//           onChange={(e) => setAge(e.target.value)}
//           className="w-full mb-3 p-3 rounded-lg border text-black focus:ring-2 focus:ring-indigo-400 outline-none"
//         />

//         <select
//           value={gender}
//           onChange={(e) => setGender(e.target.value)}
//           className="w-full mb-3 p-3 rounded-lg border text-black focus:ring-2 focus:ring-indigo-400 outline-none"
//         >
//           <option value="">Select Gender</option>
//           <option>Male</option>
//           <option>Female</option>
//         </select>

//         <textarea
//           placeholder="Describe your symptoms (e.g. fever, headache, chest pain)"
//           value={symptomText}
//           onChange={(e) => setSymptomText(e.target.value)}
//           rows={4}
//           className="w-full mb-4 p-3 rounded-lg border text-black focus:ring-2 focus:ring-indigo-400 outline-none resize-none"
//         />

//         <button
//           onClick={handleCheckSymptoms}
//           disabled={loading}
//           className="w-full py-3 rounded-lg bg-linear-to-r from-indigo-600 to-purple-600 text-white font-semibold hover:opacity-90 transition disabled:opacity-60"
//         >
//           {loading ? "Analyzing Symptoms..." : "Check Symptoms"}
//         </button>

//         {/* {result && (
//           <div className="mt-5 p-4 rounded-xl text-black bg-green-100 text-sm">
//             <p className="font-semibold text-green-800">
//               Possible Condition:
//             </p>
//             <p className="mb-2">{result.condition}</p>
//             <p className="font-semibold text-green-800">
//               Recommended Doctor:
//             </p>
//             <p className="mb-2">{result.specialization}</p>

//             <p className="font-semibold text-green-800">
//               Advice:
//             </p>
//             <p>{result.advice}</p>
//           </div>
//         )} */}
//         {result && (
//   <div
//     style={{
//       marginTop: "20px",
//       padding: "16px",
//       borderRadius: "12px",
//       backgroundColor: "#e8fff1", 
//       color: "#064635",           
//       boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
//       fontSize: "15px",
//     }}
//   >
//     <p style={{ marginBottom: "10px" }}>
//       <strong style={{ color: "#1e40af" }}>
//         Possible Condition:
//       </strong>{" "}
//       {result?.condition}
//     </p>

//     <p style={{ marginBottom: "10px" }}>
//       <strong style={{ color: "#065f46" }}>
//         Recommended Doctor:
//       </strong>{" "}
//       {result?.recommendedDoctor}
//     </p>

//     <p>
//       <strong style={{ color: "#7c2d12" }}>
//         Advice:
//       </strong>{" "}
//       {result?.advice}
//     </p>
//   </div>
// )}


//       </div>
//     </div>
//   );
// };

// export default SymptomChecker;

import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SymptomChecker = () => {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [symptomText, setSymptomText] = useState("");

  const [result, setResult] = useState(null);        // analysis result
  const [doctor, setDoctor] = useState(null);        // generated doctor
  const [loading, setLoading] = useState(false);


  const navigate = useNavigate();


  const handleCheckSymptoms = async () => {
    if (!age || !gender || !symptomText.trim()) {
      alert("Please fill all fields");
      return;
    }

    const symptoms = symptomText
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);

    try {
      setLoading(true);
      const token = localStorage.getItem("token");

      // 1️⃣ Analyze Symptoms
      const analysisRes = await axios.post(
        "http://localhost:3000/api/analyze-symptoms",
        { age, gender, symptoms },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setResult(analysisRes.data);
      // 🔥 1.5️⃣ Save Report to Database
await axios.post(
  "http://localhost:3000/api/reports/create",
  {
    symptoms: symptoms.join(", "),
    diagnosis: analysisRes.data.condition,
    severity: analysisRes.data.severity || "N/A",
  },
  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
);
        

      const specialization =
        analysisRes.data.recommendedSpecialization;

      // 2️⃣ Generate Doctor
      const doctorRes = await axios.post(
        "http://localhost:3000/api/generate-doctor",
        { specialist: specialization },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setDoctor(doctorRes.data);   // 🔥 show doctor on page

    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || "Symptom check failed");
    } finally {
      setLoading(false);
    }
  };

  // return (
  //   <div className="w-screen min-h-screen flex items-center justify-center bg-linear-to-br from-blue-500 via-indigo-500 to-purple-600">
  //     <div className="bg-white/90 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-96">
  //       <h2 className="text-2xl font-bold text-center mb-6 text-indigo-700">
  //         🧠 AI Symptom Checker
  //       </h2>

  //       <input
  //         type="number"
  //         placeholder="Enter Age"
  //         value={age}
  //         onChange={(e) => setAge(e.target.value)}
  //         className="w-full mb-3 p-3 rounded-lg border text-black"
  //       />

  //       <select
  //         value={gender}
  //         onChange={(e) => setGender(e.target.value)}
  //         className="w-full mb-3 p-3 rounded-lg border text-black"
  //       >
  //         <option value="">Select Gender</option>
  //         <option>Male</option>
  //         <option>Female</option>
  //       </select>

  //       <textarea
  //         placeholder="Describe your symptoms (e.g. fever, headache)"
  //         value={symptomText}
  //         onChange={(e) => setSymptomText(e.target.value)}
  //         rows={4}
  //         className="w-full mb-4 p-3 rounded-lg border text-black resize-none"
  //       />

  //       <button
  //         onClick={handleCheckSymptoms}
  //         disabled={loading}
  //         className="w-full py-3 rounded-lg bg-indigo-600 text-white font-semibold"
  //       >
  //         {loading ? "Analyzing Symptoms..." : "Check Symptoms"}
  //       </button>

  //       {/* 🔥 SHOW ANALYSIS RESULT */}
  //       {result && (
  //         <div className="mt-6 p-4 bg-green-100 rounded-xl text-sm text-black">
  //           <p className="font-semibold text-green-800">
  //             Possible Condition:
  //           </p>
  //           <p className="mb-2">{result.condition}</p>

  //           <p className="font-semibold text-green-800">
  //             Recommended Specialization:
  //           </p>
  //           <p className="mb-2">
  //             {result.recommendedSpecialization}
  //           </p>

  //           <p className="font-semibold text-green-800">
  //             Advice:
  //           </p>
  //           <p>{result.advice}</p>
  //         </div>
  //       )}

  //       {/* 🔥 SHOW GENERATED DOCTOR */}
  //       {doctor && (
  //         <div className="mt-6 p-4 bg-blue-100 rounded-xl text-sm text-black">
  //           <p className="font-semibold text-blue-800 mb-2">
  //             🤖 AI Recommended Doctor
  //           </p>

  //           <p><strong>Name:</strong> {doctor.name}</p>
  //           <p><strong>Specialization:</strong> {doctor.specialization}</p>
  //           <p><strong>Experience:</strong> {doctor.experience}</p>
  //           <p><strong>Consultation Fee:</strong> ₹{doctor.consultationFee}</p>
  //           <p><strong>Rating:</strong> {doctor.rating}</p>

  //           <button
  //             onClick={() =>
  //               navigate("/book-appointment", {
  //                 state: { doctorData: doctor },
  //               })
  //             }
  //             className="mt-4 w-full py-2 bg-blue-600 text-white rounded-lg"
  //           >
  //             Book Appointment
  //           </button>
  //         </div>
  //       )}
  //     </div>
  //   </div>
  // );

return (
  <div className="relative w-screen h-screen flex items-center justify-center bg-black overflow-hidden">

    {/* 🔥 Animated Background Blobs */}
    <div className="absolute w-96 h-96 bg-purple-600 rounded-full blur-3xl opacity-30 animate-pulse top-10 left-10"></div>
    <div className="absolute w-96 h-96 bg-blue-600 rounded-full blur-3xl opacity-30 animate-pulse bottom-10 right-10"></div>

    <div className="relative z-10 w-full max-w-5xl bg-white/5 backdrop-blur-2xl border border-white/10 shadow-2xl rounded-3xl p-12 text-white">

      {/* 🔥 Floating AI Icon */}
      <div className="flex justify-center mb-6">
        <div className="text-5xl animate-bounce">
          🤖
        </div>
      </div>

      <h2 className="text-4xl font-bold text-center mb-10 bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
        AI Health Intelligence
      </h2>

      <div className="grid md:grid-cols-2 gap-10">

        {/* LEFT SIDE */}
        <div className="space-y-5">

          <input
            type="number"
            placeholder="Enter Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="w-full p-4 rounded-xl bg-white/10 border border-white/20 focus:ring-2 focus:ring-purple-500 focus:outline-none"
          />

          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="w-full p-4 rounded-xl bg-white/10 border border-white/20 focus:ring-2 focus:ring-purple-500 focus:outline-none"
          >
            <option value="" className="text-black">Select Gender</option>
            <option className="text-black">Male</option>
            <option className="text-black">Female</option>
          </select>

          <textarea
            placeholder="Type symptoms separated by comma..."
            value={symptomText}
            onChange={(e) => setSymptomText(e.target.value)}
            rows={4}
            className="w-full p-4 rounded-xl bg-white/10 border border-white/20 focus:ring-2 focus:ring-purple-500 focus:outline-none resize-none"
          />

          {/* 🔥 Glowing Gradient Button */}
          <button
            onClick={handleCheckSymptoms}
            disabled={loading}
            className="w-full py-4 rounded-xl font-semibold text-lg bg-linear-to-r from-purple-600 via-indigo-600 to-blue-600 hover:scale-105 transform transition duration-300 shadow-lg shadow-purple-500/30"
          >
            {loading ? (
              <div className="flex justify-center items-center gap-2">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Analyzing...
              </div>
            ) : (
              "Analyze with AI"
            )}
          </button>

        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-6">

          {result && (
            <div className="p-6 bg-white/10 border border-white/20 rounded-2xl shadow-lg animate-fade-in">
              <h3 className="text-xl font-bold mb-3 text-purple-400">
                🩺 Diagnosis Insight
              </h3>
              <p><strong>Condition:</strong> {result.condition}</p>
              <p><strong>Specialist:</strong> {result.recommendedSpecialization}</p>
              <p className="mt-2">{result.advice}</p>
            </div>
          )}

          {doctor && (
            <div className="p-6 bg-white/10 border border-white/20 rounded-2xl shadow-lg animate-fade-in">
              <h3 className="text-xl font-bold mb-3 text-blue-400">
                👨‍⚕️ AI Recommended Doctor
              </h3>

              <p><strong>Name:</strong> {doctor.name}</p>
              <p><strong>Specialization:</strong> {doctor.specialization}</p>
              <p><strong>Experience:</strong> {doctor.experience}</p>
              <p><strong>Fee:</strong> ₹{doctor.consultationFee}</p>
              <p><strong>Rating:</strong> ⭐ {doctor.rating}</p>

              <button
                onClick={() =>
                  navigate("/book-appointment", {
                    state: { doctorData: doctor },
                  })
                }
                className="mt-5 w-full py-3 rounded-xl bg-linear-to-r from-green-500 to-emerald-500 hover:scale-105 transform transition duration-300 shadow-lg shadow-green-500/30"
              >
                Book Appointment
              </button>
            </div>
          )}

        </div>

      </div>
    </div>
  </div>
);


};



export default SymptomChecker;