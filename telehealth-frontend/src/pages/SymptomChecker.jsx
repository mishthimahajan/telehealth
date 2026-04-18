

// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const SymptomChecker = () => {
//   const [age, setAge] = useState("");
//   const [gender, setGender] = useState("");
//   const [symptomText, setSymptomText] = useState("");

//   const [result, setResult] = useState(null);        // analysis result
//   const [doctor, setDoctor] = useState(null);        // generated doctor
//   const [loading, setLoading] = useState(false);


//   const navigate = useNavigate();


//   const handleCheckSymptoms = async () => {
//     if (!age || !gender || !symptomText.trim()) {
//       alert("Please fill all fields");
//       return;
//     }

//     const symptoms = symptomText
//       .split(",")
//       .map((s) => s.trim())
//       .filter(Boolean);

//     try {
//       setLoading(true);
//       const token = localStorage.getItem("token");

//       // 1️⃣ Analyze Symptoms
//       const analysisRes = await axios.post(
//         "http://localhost:3000/api/analyze-symptoms",
//         { age, gender, symptoms },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       setResult(analysisRes.data);
//       // 🔥 1.5️⃣ Save Report to Database
// await axios.post(
//   "http://localhost:3000/api/reports/create",
//   {
//     symptoms: symptoms.join(", "),
//     diagnosis: analysisRes.data.condition,
//     severity: analysisRes.data.severity || "N/A",
//   },
//   {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   }
// );
        

//       const specialization =
//         analysisRes.data.recommendedSpecialization;

//       // 2️⃣ Generate Doctor
//       const doctorRes = await axios.post(
//         "http://localhost:3000/api/generate-doctor",
//         { specialist: specialization },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       setDoctor(doctorRes.data);   // 🔥 show doctor on page

//     } catch (error) {
//       console.error(error);
//       alert(error.response?.data?.message || "Symptom check failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // return (
//   //   <div className="w-screen min-h-screen flex items-center justify-center bg-linear-to-br from-blue-500 via-indigo-500 to-purple-600">
//   //     <div className="bg-white/90 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-96">
//   //       <h2 className="text-2xl font-bold text-center mb-6 text-indigo-700">
//   //         🧠 AI Symptom Checker
//   //       </h2>

//   //       <input
//   //         type="number"
//   //         placeholder="Enter Age"
//   //         value={age}
//   //         onChange={(e) => setAge(e.target.value)}
//   //         className="w-full mb-3 p-3 rounded-lg border text-black"
//   //       />

//   //       <select
//   //         value={gender}
//   //         onChange={(e) => setGender(e.target.value)}
//   //         className="w-full mb-3 p-3 rounded-lg border text-black"
//   //       >
//   //         <option value="">Select Gender</option>
//   //         <option>Male</option>
//   //         <option>Female</option>
//   //       </select>

//   //       <textarea
//   //         placeholder="Describe your symptoms (e.g. fever, headache)"
//   //         value={symptomText}
//   //         onChange={(e) => setSymptomText(e.target.value)}
//   //         rows={4}
//   //         className="w-full mb-4 p-3 rounded-lg border text-black resize-none"
//   //       />

//   //       <button
//   //         onClick={handleCheckSymptoms}
//   //         disabled={loading}
//   //         className="w-full py-3 rounded-lg bg-indigo-600 text-white font-semibold"
//   //       >
//   //         {loading ? "Analyzing Symptoms..." : "Check Symptoms"}
//   //       </button>

//   //       {/* 🔥 SHOW ANALYSIS RESULT */}
//   //       {result && (
//   //         <div className="mt-6 p-4 bg-green-100 rounded-xl text-sm text-black">
//   //           <p className="font-semibold text-green-800">
//   //             Possible Condition:
//   //           </p>
//   //           <p className="mb-2">{result.condition}</p>

//   //           <p className="font-semibold text-green-800">
//   //             Recommended Specialization:
//   //           </p>
//   //           <p className="mb-2">
//   //             {result.recommendedSpecialization}
//   //           </p>

//   //           <p className="font-semibold text-green-800">
//   //             Advice:
//   //           </p>
//   //           <p>{result.advice}</p>
//   //         </div>
//   //       )}

//   //       {/* 🔥 SHOW GENERATED DOCTOR */}
//   //       {doctor && (
//   //         <div className="mt-6 p-4 bg-blue-100 rounded-xl text-sm text-black">
//   //           <p className="font-semibold text-blue-800 mb-2">
//   //             🤖 AI Recommended Doctor
//   //           </p>

//   //           <p><strong>Name:</strong> {doctor.name}</p>
//   //           <p><strong>Specialization:</strong> {doctor.specialization}</p>
//   //           <p><strong>Experience:</strong> {doctor.experience}</p>
//   //           <p><strong>Consultation Fee:</strong> ₹{doctor.consultationFee}</p>
//   //           <p><strong>Rating:</strong> {doctor.rating}</p>

//   //           <button
//   //             onClick={() =>
//   //               navigate("/book-appointment", {
//   //                 state: { doctorData: doctor },
//   //               })
//   //             }
//   //             className="mt-4 w-full py-2 bg-blue-600 text-white rounded-lg"
//   //           >
//   //             Book Appointment
//   //           </button>
//   //         </div>
//   //       )}
//   //     </div>
//   //   </div>
//   // );

// return (
//   <div className="relative w-screen h-screen flex items-center justify-center bg-black overflow-hidden">

//     {/* 🔥 Animated Background Blobs */}
//     <div className="absolute w-96 h-96 bg-purple-600 rounded-full blur-3xl opacity-30 animate-pulse top-10 left-10"></div>
//     <div className="absolute w-96 h-96 bg-blue-600 rounded-full blur-3xl opacity-30 animate-pulse bottom-10 right-10"></div>

//     <div className="relative z-10 w-full max-w-5xl bg-white/5 backdrop-blur-2xl border border-white/10 shadow-2xl rounded-3xl p-12 text-white">

//       {/* 🔥 Floating AI Icon */}
//       <div className="flex justify-center mb-6">
//         <div className="text-5xl animate-bounce">
//           🤖
//         </div>
//       </div>

//       <h2 className="text-4xl font-bold text-center mb-10 bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
//         AI Health Intelligence
//       </h2>

//       <div className="grid md:grid-cols-2 gap-10">

//         {/* LEFT SIDE */}
//         <div className="space-y-5">

//           <input
//             type="number"
//             placeholder="Enter Age"
//             value={age}
//             onChange={(e) => setAge(e.target.value)}
//             className="w-full p-4 rounded-xl bg-white/10 border border-white/20 focus:ring-2 focus:ring-purple-500 focus:outline-none"
//           />

//           <select
//             value={gender}
//             onChange={(e) => setGender(e.target.value)}
//             className="w-full p-4 rounded-xl bg-white/10 border border-white/20 focus:ring-2 focus:ring-purple-500 focus:outline-none"
//           >
//             <option value="" className="text-black">Select Gender</option>
//             <option className="text-black">Male</option>
//             <option className="text-black">Female</option>
//           </select>

//           <textarea
//             placeholder="Type symptoms separated by comma..."
//             value={symptomText}
//             onChange={(e) => setSymptomText(e.target.value)}
//             rows={4}
//             className="w-full p-4 rounded-xl bg-white/10 border border-white/20 focus:ring-2 focus:ring-purple-500 focus:outline-none resize-none"
//           />

//           {/* 🔥 Glowing Gradient Button */}
//           <button
//             onClick={handleCheckSymptoms}
//             disabled={loading}
//             className="w-full py-4 rounded-xl font-semibold text-lg bg-linear-to-r from-purple-600 via-indigo-600 to-blue-600 hover:scale-105 transform transition duration-300 shadow-lg shadow-purple-500/30"
//           >
//             {loading ? (
//               <div className="flex justify-center items-center gap-2">
//                 <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//                 Analyzing...
//               </div>
//             ) : (
//               "Analyze with AI"
//             )}
//           </button>

//         </div>

//         {/* RIGHT SIDE */}
//         <div className="space-y-6">

//           {result && (
//             <div className="p-6 bg-white/10 border border-white/20 rounded-2xl shadow-lg animate-fade-in">
//               <h3 className="text-xl font-bold mb-3 text-purple-400">
//                 🩺 Diagnosis Insight
//               </h3>
//               <p><strong>Condition:</strong> {result.condition}</p>
//               <p><strong>Specialist:</strong> {result.recommendedSpecialization}</p>
//               <p className="mt-2">{result.advice}</p>
//             </div>
//           )}

//           {doctor && (
//             <div className="p-6 bg-white/10 border border-white/20 rounded-2xl shadow-lg animate-fade-in">
//               <h3 className="text-xl font-bold mb-3 text-blue-400">
//                 👨‍⚕️ AI Recommended Doctor
//               </h3>

//               <p><strong>Name:</strong> {doctor.name}</p>
//               <p><strong>Specialization:</strong> {doctor.specialization}</p>
//               <p><strong>Experience:</strong> {doctor.experience}</p>
//               <p><strong>Fee:</strong> ₹{doctor.consultationFee}</p>
//               <p><strong>Rating:</strong> ⭐ {doctor.rating}</p>

//               <button
//                 onClick={() =>
//                   navigate("/book-appointment", {
//                     state: { doctorData: doctor },
//                   })
//                 }
//                 className="mt-5 w-full py-3 rounded-xl bg-linear-to-r from-green-500 to-emerald-500 hover:scale-105 transform transition duration-300 shadow-lg shadow-green-500/30"
//               >
//                 Book Appointment
//               </button>
//             </div>
//           )}

//         </div>

//       </div>
//     </div>
//   </div>
// );


// };



// export default SymptomChecker;

// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";

// const SymptomChecker = () => {
//   const [age, setAge] = useState("");
//   const [gender, setGender] = useState("");
//   const [symptomText, setSymptomText] = useState("");
//   const [result, setResult] = useState(null);
//   const [doctor, setDoctor] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const navigate = useNavigate();


//  const handleCheckSymptoms = async () => {
//   if (!age || !gender || !symptomText.trim()) {
//     toast.error("Please fill all fields");
//     return;
//   }

//   const symptoms = symptomText
//     .split(",")
//     .map((s) => s.trim())
//     .filter(Boolean);

//   try {
//     setLoading(true);
//     const token = localStorage.getItem("token");
//     console.log("TOKEN:", token);

//     console.log("Calling analyze-symptoms...");
//     const analysisRes = await axios.post(
//       "http://localhost:3000/api/analyze-symptoms",
//       { age, gender, symptoms },
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );

//     console.log("analyze-symptoms success:", analysisRes.data);
//     setResult(analysisRes.data);

//     console.log("Calling reports/create...");
//     await axios.post(
//       "http://localhost:3000/api/reports/create",
//       {
//         symptoms: symptoms.join(", "),
//         diagnosis: analysisRes.data.condition,
//         severity: analysisRes.data.severity || "N/A",
//       },
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );

//     console.log("reports/create success");

//     const specialization = analysisRes.data.recommendedSpecialization;

//     console.log("Calling generate-doctor...");
//     const doctorRes = await axios.post(
//       "http://localhost:3000/api/generate-doctor",
//       { specialist: specialization },
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );

//     console.log("generate-doctor success:", doctorRes.data);
//     setDoctor(doctorRes.data);

//     toast.success("Analysis completed successfully");
//   } catch (error) {
//     console.error("FULL ERROR:", error.response?.data || error.message);
//     toast.error(error.response?.data?.message || "Symptom check failed");
//   } finally {
//     setLoading(false);
//   }
// };
// return (
//   <div className="w-screen h-full bg-linear-to-br from-[#0f172a] via-[#1e3a8a] to-[#0ea5e9] px-4 py-6 md:px-10">

//     <div className="w-full">

//       {/* Header */}
//       <div className="mb-6 md:mb-10 text-center md:text-left">
//         <h1 className="text-2xl md:text-4xl font-bold text-white">
//           🧠 AI Symptom Checker
//         </h1>
//         <p className="text-blue-200 mt-2 text-sm md:text-base">
//           Get instant AI-powered health insights
//         </p>
//       </div>

//       {/* Top Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-5 mb-6 md:mb-8">
//         <div className="bg-white/10 p-4 rounded-xl text-white border border-white/10">
//           <p className="text-xs text-blue-200">Fast</p>
//           <h3 className="text-sm md:text-lg font-semibold">AI Review</h3>
//         </div>

//         <div className="bg-white/10 p-4 rounded-xl text-white border border-white/10">
//           <p className="text-xs text-blue-200">Smart</p>
//           <h3 className="text-sm md:text-lg font-semibold">Specialist</h3>
//         </div>

//         <div className="bg-white/10 p-4 rounded-xl text-white border border-white/10">
//           <p className="text-xs text-blue-200">Next</p>
//           <h3 className="text-sm md:text-lg font-semibold">Booking</h3>
//         </div>
//       </div>

//       {/* Main Layout */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

//         {/* LEFT */}
//         <div className="bg-white/10 rounded-2xl p-4 md:p-6 border border-white/20 text-white">

//           <h2 className="text-lg md:text-xl font-bold mb-4">
//             Enter Details
//           </h2>

//           <div className="space-y-3">

//             <input
//               type="number"
//               placeholder="Age"
//               value={age}
//               onChange={(e) => setAge(e.target.value)}
//               className="w-full p-3 rounded-lg bg-white/10 border border-white/20 placeholder-gray-300 focus:outline-none text-sm md:text-base"
//             />

//             <select
//               value={gender}
//               onChange={(e) => setGender(e.target.value)}
//               className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white text-sm md:text-base"
//             >
//               <option value="" className="text-black">Gender</option>
//               <option className="text-black">Male</option>
//               <option className="text-black">Female</option>
//             </select>

//             <textarea
//               placeholder="Symptoms (fever, headache...)"
//               value={symptomText}
//               onChange={(e) => setSymptomText(e.target.value)}
//               rows={4}
//               className="w-full p-3 rounded-lg bg-white/10 border border-white/20 placeholder-gray-300 focus:outline-none text-sm md:text-base"
//             />

//             <button
//               onClick={handleCheckSymptoms}
//               disabled={loading}
//               className="w-full bg-linear-to-r from-blue-500 to-purple-500 py-3 rounded-lg font-semibold text-sm md:text-base hover:scale-105 transition"
//             >
//               {loading ? "Analyzing..." : "Analyze"}
//             </button>
//           </div>
//         </div>

//         {/* RIGHT */}
//         <div className="flex items-center justify-center">

//           {!result && !doctor && (
//             <div className="bg-white/10 rounded-2xl p-6 text-center border border-white/20 text-white w-full">
//               <div className="text-4xl md:text-5xl mb-3">🤖</div>
//               <h3 className="text-lg md:text-xl font-semibold">
//                 Results will appear here
//               </h3>
//               <p className="text-blue-200 text-sm mt-2">
//                 Start analysis
//               </p>
//             </div>
//           )}

//           {result && (
//             <div className="bg-white/10 rounded-2xl p-5 border border-white/20 text-white w-full">
//               <h3 className="text-lg font-bold mb-3 text-green-300">
//                 Diagnosis
//               </h3>

//               <p className="text-sm"><b>Condition:</b> {result.condition}</p>
//               <p className="text-sm"><b>Doctor:</b> {result.recommendedSpecialization}</p>
//               <p className="text-blue-200 text-sm mt-2">{result.advice}</p>
//             </div>
//           )}

//         </div>
//       </div>

//     </div>
//   </div>
// );
// };

// export default SymptomChecker;


import { useEffect, useMemo, useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const SymptomChecker = () => {
  const navigate = useNavigate();

  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [symptomText, setSymptomText] = useState("");

  const [result, setResult] = useState(null);
  const [doctor, setDoctor] = useState(null);

  const [loading, setLoading] = useState(false);
  const [doctorLoading, setDoctorLoading] = useState(false);

  const [darkMode, setDarkMode] = useState(true);
  const [activeMode, setActiveMode] = useState("form"); // form | chat
  const [listening, setListening] = useState(false);

  const [chatMessages, setChatMessages] = useState([
    {
      role: "assistant",
      text: "Hi! Tell me your symptoms in simple language, like: I have fever, headache, and body pain.",
    },
  ]);
  const [chatInput, setChatInput] = useState("");

  const recognitionRef = useRef(null);

  const pageBg = darkMode
    ? "bg-gradient-to-br from-[#0b1220] via-[#162b5c] to-[#0ea5e9]"
    : "bg-gradient-to-br from-sky-100 via-blue-100 to-cyan-200";

  const glassCard = darkMode
    ? "bg-white/10 border border-white/20 text-white"
    : "bg-white/80 border border-white/60 text-gray-900";

  const mutedText = darkMode ? "text-blue-100" : "text-gray-600";
  const secondaryText = darkMode ? "text-blue-200" : "text-gray-500";
  const inputClass = darkMode
    ? "w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
    : "w-full p-3 rounded-xl bg-white border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500";

  const featureCards = useMemo(
    () => [
      {
        id: "mobile",
        emoji: "📱",
        title: "Mobile App UI",
        desc: "Responsive layout like a modern health app",
        action: () => toast.success("This page is now mobile responsive"),
      },
      {
        id: "voice",
        emoji: "🎤",
        title: "Voice Input",
        desc: "Speak symptoms instead of typing",
        action: () => startVoiceInput(),
      },
      {
        id: "chat",
        emoji: "🧠",
        title: "AI Chat Mode",
        desc: "Switch to chat-based symptom entry",
        action: () => {
          setActiveMode("chat");
          toast.success("AI chat mode enabled");
        },
      },
      {
        id: "theme",
        emoji: darkMode ? "🌙" : "☀️",
        title: darkMode ? "Dark Mode" : "Light Mode",
        desc: "Toggle between dark and light dashboard",
        action: () => setDarkMode((prev) => !prev),
      },
    ],
    [darkMode]
  );

  useEffect(() => {
    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, []);

  const startVoiceInput = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      toast.error("Voice input is not supported in this browser");
      return;
    }

    if (listening) {
      recognitionRef.current?.stop();
      setListening(false);
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-IN";
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () => {
      setListening(true);
      toast.success("Listening... speak your symptoms");
    };

    recognition.onresult = (event) => {
      const transcript = event.results?.[0]?.[0]?.transcript || "";
      if (activeMode === "chat") {
        setChatInput((prev) => (prev ? `${prev} ${transcript}` : transcript));
      } else {
        setSymptomText((prev) => (prev ? `${prev}, ${transcript}` : transcript));
      }
    };

    recognition.onerror = () => {
      setListening(false);
      toast.error("Voice input failed");
    };

    recognition.onend = () => {
      setListening(false);
    };

    recognitionRef.current = recognition;
    recognition.start();
  };

  const handleSendChat = () => {
    if (!chatInput.trim()) return;

    setChatMessages((prev) => [
      ...prev,
      { role: "user", text: chatInput.trim() },
      {
        role: "assistant",
        text: "Got it. I’ll use this description for symptom analysis. You can add age and gender, then click Analyze Symptoms.",
      },
    ]);

    setSymptomText((prev) =>
      prev ? `${prev}, ${chatInput.trim()}` : chatInput.trim()
    );
    setChatInput("");
  };

  const handleCheckSymptoms = async () => {
    if (!age || !gender || !symptomText.trim()) {
      toast.error("Please fill all fields");
      return;
    }

    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("Please login first");
      navigate("/login");
      return;
    }

    const symptoms = symptomText
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);

    try {
      setLoading(true);
      setDoctor(null);

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
      toast.success("Symptoms analyzed successfully");

      try {
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
      } catch (reportError) {
        console.error("Report save failed:", reportError);
        toast.error("Report could not be saved");
      }

      const specialization = analysisRes.data.recommendedSpecialization;

      if (specialization) {
        try {
          setDoctorLoading(true);

          const doctorRes = await axios.post(
            "http://localhost:3000/api/generate-doctor",
            { specialist: specialization },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          setDoctor(doctorRes.data);
          toast.success("Recommended doctor generated");
        } catch (doctorError) {
          console.error("Doctor generation failed:", doctorError);
          toast.error(
            doctorError.response?.data?.message ||
              "Doctor recommendation could not be generated"
          );
        } finally {
          setDoctorLoading(false);
        }
      }
    } catch (error) {
      console.error("Symptom analysis error:", error);
      toast.error(error.response?.data?.message || "Symptom check failed");
    } finally {
      setLoading(false);
    }
  };

  const handleBookAppointment = () => {
    if (!doctor) {
      toast.error("Doctor recommendation not available yet");
      return;
    }

    navigate("/book-appointment", {
      state: { doctorData: doctor },
    });
  };

 return (
  <div
    className={`w-screen h-full ${
      darkMode
        ? "bg-linear-to-br from-[#081225] via-[#12306b] to-[#1d9bf0]"
        : "bg-linear-to-br from-sky-50 via-blue-100 to-cyan-100"
    } px-4 py-6 md:px-8 lg:px-10`}
  >
    <div className="w-full max-w-7xl mx-auto">
      {/* HERO */}
      <div
        className={`rounded-3xl p-6 md:p-8 shadow-2xl backdrop-blur-xl ${
          darkMode
            ? "bg-white/10 border border-white/20 text-white"
            : "bg-white/80 border border-white/70 text-gray-900"
        }`}
      >
        <p className={`${darkMode ? "text-blue-200" : "text-blue-600"} text-sm font-medium`}>
          TeleHealth AI Suite
        </p>

        <h1 className="text-3xl md:text-5xl font-bold mt-3 leading-tight">
          AI Symptom Checker
        </h1>

        <p
          className={`mt-4 max-w-3xl text-sm md:text-base ${
            darkMode ? "text-blue-100" : "text-gray-600"
          }`}
        >
          Describe symptoms, analyze health condition, get specialist
          recommendations, and book an appointment — all in one place.
        </p>

        {/* FEATURE CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mt-8">
          {featureCards.map((card) => (
            <button
              key={card.id}
              onClick={card.action}
              className={`rounded-2xl p-4 text-left shadow-lg transition hover:scale-[1.02] ${
                darkMode
                  ? "bg-white/10 border border-white/20 text-white"
                  : "bg-white border border-gray-200 text-gray-900"
              }`}
            >
              <div className="text-2xl mb-2">{card.emoji}</div>
              <p className="font-semibold text-sm md:text-base">{card.title}</p>
              <p
                className={`text-xs mt-1 ${
                  darkMode ? "text-blue-200" : "text-gray-500"
                }`}
              >
                {card.desc}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* TOP INFO CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
        <div
          className={`rounded-2xl p-4 shadow-lg ${
            darkMode
              ? "bg-white/10 border border-white/20 text-white"
              : "bg-white/80 border border-white text-gray-900"
          }`}
        >
          <p className={`text-xs ${darkMode ? "text-blue-200" : "text-gray-500"}`}>
            Fast Analysis
          </p>
          <h3 className="text-lg font-semibold mt-1">Instant AI Review</h3>
        </div>

        <div
          className={`rounded-2xl p-4 shadow-lg ${
            darkMode
              ? "bg-white/10 border border-white/20 text-white"
              : "bg-white/80 border border-white text-gray-900"
          }`}
        >
          <p className={`text-xs ${darkMode ? "text-blue-200" : "text-gray-500"}`}>
            Smart Suggestion
          </p>
          <h3 className="text-lg font-semibold mt-1">Specialist Mapping</h3>
        </div>

        <div
          className={`rounded-2xl p-4 shadow-lg ${
            darkMode
              ? "bg-white/10 border border-white/20 text-white"
              : "bg-white/80 border border-white text-gray-900"
          }`}
        >
          <p className={`text-xs ${darkMode ? "text-blue-200" : "text-gray-500"}`}>
            Next Step
          </p>
          <h3 className="text-lg font-semibold mt-1">Doctor Booking</h3>
        </div>
      </div>

      {/* MAIN SECTION */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-6">
        {/* LEFT */}
        <div
          className={`rounded-3xl p-5 md:p-6 shadow-2xl backdrop-blur-xl ${
            darkMode
              ? "bg-white/10 border border-white/20 text-white"
              : "bg-white/80 border border-white/70 text-gray-900"
          }`}
        >
          <div className="flex items-center justify-between gap-3 flex-wrap mb-5">
            <div>
              <h2 className="text-xl md:text-2xl font-bold">Enter Health Details</h2>
              <p className={`text-sm mt-1 ${darkMode ? "text-blue-200" : "text-gray-500"}`}>
                Use form mode or AI chat mode
              </p>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => setActiveMode("form")}
                className={`px-4 py-2 rounded-xl text-sm font-medium ${
                  activeMode === "form"
                    ? "bg-blue-600 text-white"
                    : darkMode
                    ? "bg-white/10 text-white"
                    : "bg-white text-gray-700 border"
                }`}
              >
                Form
              </button>

              <button
                onClick={() => setActiveMode("chat")}
                className={`px-4 py-2 rounded-xl text-sm font-medium ${
                  activeMode === "chat"
                    ? "bg-purple-600 text-white"
                    : darkMode
                    ? "bg-white/10 text-white"
                    : "bg-white text-gray-700 border"
                }`}
              >
                AI Chat
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <input
              type="number"
              placeholder="Enter age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className={inputClass}
            />

            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className={inputClass}
            >
              <option value="" className="text-black">Select gender</option>
              <option className="text-black">Male</option>
              <option className="text-black">Female</option>
            </select>

            {activeMode === "form" ? (
              <>
                <textarea
                  placeholder="Example: fever, headache, cough"
                  value={symptomText}
                  onChange={(e) => setSymptomText(e.target.value)}
                  rows={5}
                  className={inputClass}
                />

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    type="button"
                    onClick={startVoiceInput}
                    className={`flex-1 py-3 rounded-xl font-semibold ${
                      listening
                        ? "bg-red-500 text-white"
                        : "bg-linear-to-r from-cyan-500 to-blue-500 text-white"
                    }`}
                  >
                    {listening ? "Stop Listening" : "🎤 Voice Input"}
                  </button>

                  <button
                    type="button"
                    onClick={() => setDarkMode((prev) => !prev)}
                    className={`px-4 py-3 rounded-xl font-semibold ${
                      darkMode ? "bg-white/10 text-white" : "bg-white border text-gray-900"
                    }`}
                  >
                    {darkMode ? "🌙" : "☀️"}
                  </button>
                </div>
              </>
            ) : (
              <div className={`rounded-2xl p-4 ${darkMode ? "bg-white/5" : "bg-blue-50"}`}>
                <div className="space-y-3 max-h-64 overflow-y-auto mb-4">
                  {chatMessages.map((msg, idx) => (
                    <div
                      key={idx}
                      className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm ${
                        msg.role === "assistant"
                          ? darkMode
                            ? "bg-white/10 text-white"
                            : "bg-white text-gray-900"
                          : "ml-auto bg-blue-600 text-white"
                      }`}
                    >
                      {msg.text}
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="text"
                    placeholder="Type symptoms in chat style..."
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    className={inputClass}
                  />
                  <button
                    onClick={handleSendChat}
                    className="px-4 py-3 rounded-xl bg-purple-600 text-white font-semibold"
                  >
                    Send
                  </button>
                  <button
                    onClick={startVoiceInput}
                    className={`px-4 py-3 rounded-xl font-semibold ${
                      listening
                        ? "bg-red-500 text-white"
                        : "bg-linear-to-r from-cyan-500 to-blue-500 text-white"
                    }`}
                  >
                    🎤
                  </button>
                </div>
              </div>
            )}

            <button
              onClick={handleCheckSymptoms}
              disabled={loading}
              className="w-full py-3.5 rounded-xl bg-linear-to-r from-blue-500 via-cyan-500 to-purple-500 text-white font-semibold hover:scale-[1.01] transition disabled:opacity-70"
            >
              {loading ? "Analyzing Symptoms..." : "Analyze Symptoms"}
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="space-y-6">
          {!result && !doctor && (
            <div
              className={`rounded-3xl p-8 min-h-87.5 flex items-center justify-center shadow-2xl ${
                darkMode
                  ? "bg-white/10 border border-white/20 text-white"
                  : "bg-white/80 border border-white/70 text-gray-900"
              }`}
            >
              <div className="text-center">
                <div className="text-5xl mb-4">🤖</div>
                <h3 className="text-2xl font-bold">Your results will appear here</h3>
                <p className={`mt-2 ${darkMode ? "text-blue-200" : "text-gray-500"}`}>
                  Analyze symptoms to get diagnosis and doctor recommendation.
                </p>
              </div>
            </div>
          )}

          {result && (
            <div
              className={`rounded-3xl p-6 shadow-2xl ${
                darkMode
                  ? "bg-white/10 border border-white/20 text-white"
                  : "bg-white/80 border border-white/70 text-gray-900"
              }`}
            >
              <h3 className="text-xl md:text-2xl font-bold mb-4">Diagnosis Insight</h3>

              <div className="space-y-4">
                <div className={darkMode ? "bg-white/10 rounded-2xl p-4" : "bg-white rounded-2xl p-4"}>
                  <p className={`text-sm ${darkMode ? "text-blue-200" : "text-gray-500"}`}>
                    Possible Condition
                  </p>
                  <p className="text-lg font-semibold mt-1">{result.condition}</p>
                </div>

                <div className={darkMode ? "bg-white/10 rounded-2xl p-4" : "bg-white rounded-2xl p-4"}>
                  <p className={`text-sm ${darkMode ? "text-blue-200" : "text-gray-500"}`}>
                    Recommended Specialist
                  </p>
                  <p className="text-lg font-semibold mt-1">{result.recommendedSpecialization}</p>
                </div>

                <div className={darkMode ? "bg-white/10 rounded-2xl p-4" : "bg-white rounded-2xl p-4"}>
                  <p className={`text-sm ${darkMode ? "text-blue-200" : "text-gray-500"}`}>Advice</p>
                  <p className="mt-1">{result.advice}</p>
                </div>
              </div>
            </div>
          )}

          {doctor && (
            <div
              className={`rounded-3xl p-6 shadow-2xl ${
                darkMode
                  ? "bg-white/10 border border-white/20 text-white"
                  : "bg-white/80 border border-white/70 text-gray-900"
              }`}
            >
              <h3 className="text-xl md:text-2xl font-bold mb-4">Recommended Doctor</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className={darkMode ? "bg-white/10 rounded-2xl p-4" : "bg-white rounded-2xl p-4"}>
                  <p className={`text-sm ${darkMode ? "text-blue-200" : "text-gray-500"}`}>Name</p>
                  <p className="font-semibold mt-1">{doctor.name}</p>
                </div>

                <div className={darkMode ? "bg-white/10 rounded-2xl p-4" : "bg-white rounded-2xl p-4"}>
                  <p className={`text-sm ${darkMode ? "text-blue-200" : "text-gray-500"}`}>Specialization</p>
                  <p className="font-semibold mt-1">{doctor.specialization}</p>
                </div>

                <div className={darkMode ? "bg-white/10 rounded-2xl p-4" : "bg-white rounded-2xl p-4"}>
                  <p className={`text-sm ${darkMode ? "text-blue-200" : "text-gray-500"}`}>Experience</p>
                  <p className="font-semibold mt-1">{doctor.experience}</p>
                </div>

                <div className={darkMode ? "bg-white/10 rounded-2xl p-4" : "bg-white rounded-2xl p-4"}>
                  <p className={`text-sm ${darkMode ? "text-blue-200" : "text-gray-500"}`}>Consultation Fee</p>
                  <p className="font-semibold mt-1">₹{doctor.consultationFee}</p>
                </div>
              </div>

              <button
                onClick={handleBookAppointment}
                className="mt-6 w-full py-3.5 rounded-xl bg-linear-to-r from-green-500 to-emerald-600 text-white font-semibold"
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