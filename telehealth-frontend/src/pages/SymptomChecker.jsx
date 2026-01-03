// import { useState } from "react";

// const symptomsList = [
//   "Fever",
//   "Cough",
//   "Headache",
//   "Sore Throat",
//   "Fatigue",
//   "Chest Pain",
//   "Shortness of Breath",
// ];

// const SymptomChecker = () => {
//   const [selected, setSelected] = useState([]);
//   const [result, setResult] = useState("");

//   const toggleSymptom = (symptom) => {
//     setSelected((prev) =>
//       prev.includes(symptom)
//         ? prev.filter((s) => s !== symptom)
//         : [...prev, symptom]
//     );
//   };

//   const checkSymptoms = () => {
//     if (selected.includes("Chest Pain")) {
//       setResult("⚠️ Possible heart-related issue. Consult a doctor immediately.");
//     } else if (selected.includes("Fever") && selected.includes("Cough")) {
//       setResult("🤧 Possible viral infection. Rest and stay hydrated.");
//     } else {
//       setResult("🙂 Symptoms seem mild. Monitor and take care.");
//     }
//   };

//   return (
//     <div className="w-screen h-screen bg-linear-to-br from-blue-50 to-blue-100 flex justify-center items-center">
//       <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-2xl">
//         <h2 className="text-3xl font-bold text-blue-600 mb-4">
//           🧠 AI Symptom Checker
//         </h2>

//         <p className="text-gray-600 mb-6">
//           Select your symptoms to get instant health insights.
//         </p>

//         <div className="grid grid-cols-2 gap-4">
//           {symptomsList.map((symptom) => (
//             <button
//               key={symptom}
//               onClick={() => toggleSymptom(symptom)}
//               className={`px-4 py-2 rounded-lg border transition font-medium
//   ${
//     selected.includes(symptom)
//       ? "bg-blue-600 text-white border-blue-600"
//       : "bg-white text-gray-800 border-gray-300 hover:bg-blue-50"
//   }
// `}

//             >
//               {symptom}
//             </button>
//           ))}
//         </div>

//         <button
//           onClick={checkSymptoms}
//           className="mt-6 w-full bg-blue-600 text-black py-3 rounded-lg font-semibold hover:bg-blue-700"
//         >
//           Check Symptoms
//         </button>

//         {result && (
//           <div className="mt-4 p-4 bg-blue-200 rounded-lg text-blue-700">
//             {result}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SymptomChecker;

import { useState } from "react";
import axios from "axios";

const SymptomChecker = () => {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [symptoms, setSymptoms] = useState([]);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const symptomList = [
    "Fever",
    "Cough",
    "Headache",
    "Chest Pain",
    "Fatigue",
    "Nausea",
  ];

  const toggleSymptom = (symptom) => {
    setSymptoms((prev) =>
      prev.includes(symptom)
        ? prev.filter((s) => s !== symptom)
        : [...prev, symptom]
    );
  };

  const handleCheckSymptoms = async () => {
    if (!age || !gender || symptoms.length === 0) {
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      const token = localStorage.getItem("token");

      const res = await axios.post(
        "http://localhost:3000/api/symptoms/check",
        { age, gender, symptoms },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setResult(res.data.result);
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center w-screen h-screen bg-linear-to-br from-blue-300 to-blue-600">
      <div className="bg-white text-black p-6 rounded-xl shadow-lg w-87.5">
        <h2 className="text-xl font-bold mb-4 text-center">
          🧠 Symptom Checker
        </h2>

        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="w-full border p-2 mb-3 rounded"
        />

        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className="w-full border p-2 mb-4 rounded"
        >
          <option value="">Select Gender</option>
          <option>Male</option>
          <option>Female</option>
        </select>

        <div className="grid grid-cols-2 gap-2 mb-4">
          {symptomList.map((symptom) => (
            <button
              key={symptom}
              onClick={() => toggleSymptom(symptom)}
              className={`p-2 rounded ${
                symptoms.includes(symptom)
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200"
              }`}
            >
              {symptom}
            </button>
          ))}
        </div>

        <button
          onClick={handleCheckSymptoms}
          className="w-full bg-black text-white p-2 rounded"
          disabled={loading}
        >
          {loading ? "Checking..." : "Check Symptoms"}
        </button>

        {result && (
          <div className="mt-4 p-3 bg-green-100 rounded text-sm">
            <b>Possible Condition:</b> {result.condition}
            <br />
            <b>Advice:</b> {result.advice}
          </div>
        )}
      </div>
    </div>
  );
};

export default SymptomChecker;

