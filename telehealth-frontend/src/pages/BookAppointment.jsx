// const doctors = [
//   { name: "Dr. Sharma", specialty: "Cardiologist" },
//   { name: "Dr. Mehta", specialty: "Dermatologist" },
//   { name: "Dr. Khan", specialty: "General Physician" },
// ];

// const BookAppointment = () => {
//   return (
//     <div className="w-screen h-screen bg-linear-to-br from-blue-50 to-blue-100 p-10">
//       <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">
//         📅 Book Appointment
//       </h2>

//       <div className="grid md:grid-cols-3 gap-6">
//         {doctors.map((doc) => (
//           <div
//             key={doc.name}
//             className="bg-white p-6 rounded-xl shadow-lg hover:scale-105 transition"
//           >
//             <h3 className="text-xl font-semibold">{doc.name}</h3>
//             <p className="text-gray-600">{doc.specialty}</p>

//             <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
//               Book Now
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BookAppointment;

// import { useEffect, useState } from "react";
// import axios from "axios";

// const BookAppointment = () => {
//   const [doctors, setDoctors] = useState([]);
//   const [doctorId, setDoctorId] = useState("");
//   const [date, setDate] = useState("");
//   const [time, setTime] = useState("");
//   const [loading, setLoading] = useState(false);

//   // useEffect(() => {
//   //   const fetchDoctors = async () => {
//   //     try {
//   //       const res = await axios.get("http://localhost:3000/api/doctors");
//   //       setDoctors(res.data);
//   //     } catch (err) {
//   //       console.error("Doctor fetch error", err);
//   //     }
//   //   };
//   //   fetchDoctors();
//   // }, []);


//   useEffect(() => {
//   const fetchDoctors = async () => {
//     try {
//       const token = localStorage.getItem("token");

//       if (!token) {
//         console.error("❌ No token found");
//         return;
//       }

//       const res = await axios.get(
//         "http://localhost:3000/api/doctors",
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       console.log("✅ Doctors fetched:", res.data);
//       setDoctors(res.data);
//     } catch (err) {
//       console.error(
//         "❌ Doctor fetch error:",
//         err.response?.status,
//         err.response?.data
//       );
//     }
//   };

//   fetchDoctors();
// }, []);

//   const handleBookAppointment = async () => {
//     if (!doctorId || !date || !time) {
//       alert("Please fill all fields");
//       return;
//     }

//     try {
//       setLoading(true);
//       const token = localStorage.getItem("token");

//       await axios.post(
//         "http://localhost:3000/api/appointments/book",
//         { doctorId, date, time },
//         {
//           headers: { Authorization: `Bearer ${token}` },
//         }
//       );

//       alert("✅ Appointment Booked Successfully");
//       setDoctorId("");
//       setDate("");
//       setTime("");
//     } catch (error) {
//       alert(error.response?.data?.message || "Booking failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="w-screen h-screen flex justify-center items-center bg-linear-to-br from-indigo-700 via-blue-500 to-sky-300">
      
//       {/* Card */}
//       <div className="backdrop-blur-lg bg-white/90 p-8 rounded-2xl shadow-2xl w-87.5">
        
//         <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
//           📅 Book Appointment
//         </h2>

//         {/* Doctor */}
//         <label className="text-sm font-semibold text-black mb-1 block">
//           Choose Doctor
//         </label>
//         <select
//           value={doctorId}
//           onChange={(e) => setDoctorId(e.target.value)}
//           className="w-full p-2 rounded-lg border border-gray-800 text-black focus:ring-2 focus:ring-blue-400 mb-4"
//         >
//           <option value="">Select Doctor</option>
//           {doctors.map((doc) => (
//             <option key={doc._id} value={doc._id}>
//               {doc.name} ({doc.specialization})
//             </option>
//           ))}
//         </select>

//         {/* Date */}
//         <label className="text-sm font-semibold text-black mb-1 block">
//           Select Date
//         </label>
//         <input
//           type="date"
//           value={date}
//           onChange={(e) => setDate(e.target.value)}
//           className="w-full p-2 rounded-lg border border-gray-800 text-black focus:ring-2 focus:ring-blue-800 mb-4"
//         />

//         {/* Time */}
//         <label className="text-sm font-semibold text-black mb-1 block">
//           Select Time
//         </label>
//         <input
//           type="time"
//           value={time}
//           onChange={(e) => setTime(e.target.value)}
//           className="w-full p-2 rounded-lg border border-gray-800 text-black focus:ring-2 focus:ring-blue-800 mb-6"
//         />

//         {/* Button */}
//         <button
//           onClick={handleBookAppointment}
//           disabled={loading}
//           className="w-full py-2 rounded-lg bg-linear-to-r from-blue-600 to-indigo-600 text-black font-semibold hover:opacity-90 transition"
//         >
//           {loading ? "Booking..." : "Confirm Appointment"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default BookAppointment;

// import { useEffect, useState } from "react";
// import axios from "axios";

// const BookAppointment = () => {
//   const [doctors, setDoctors] = useState([]);
//   const [doctorId, setDoctorId] = useState("");
//   const [date, setDate] = useState("");
//   const [time, setTime] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [fetchingDoctors, setFetchingDoctors] = useState(true);

//   // ✅ Fetch doctors
//   useEffect(() => {
//     const fetchDoctors = async () => {
//       try {
//         const res = await axios.get("http://localhost:3000/api/doctors");
//         console.log("✅ Doctors fetched:", res.data);
//         setDoctors(res.data || []);
//       } catch (err) {
//         console.error("❌ Doctor fetch error:", err.message);
//         setDoctors([]);
//       } finally {
//         setFetchingDoctors(false);
//       }
//     };

//     fetchDoctors();
//   }, []);

//   // ✅ Book appointment
//   const handleBookAppointment = async () => {
//     if (!doctorId || !date || !time) {
//       alert("⚠️ Please fill all fields");
//       return;
//     }

//     try {
//       setLoading(true);
//       const token = localStorage.getItem("token");

//       await axios.post(
//         "http://localhost:3000/api/appointments/book",
//         { doctorId, date, time },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       alert("✅ Appointment Booked Successfully");
//       setDoctorId("");
//       setDate("");
//       setTime("");
//     } catch (err) {
//       alert(err.response?.data?.message || "❌ Booking failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="w-screen h-screen flex justify-center items-center bg-linear-to-br from-indigo-700 via-blue-500 to-sky-300">
//       <div className="backdrop-blur-lg bg-white/90 p-8 rounded-2xl shadow-2xl w-87.5">
//         <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
//           📅 Book Appointment
//         </h2>

//         {/* Doctor */}
//         <label className="text-sm font-semibold text-black mb-1 block">
//           Choose Doctor
//         </label>
//         <select
//           value={doctorId}
//           onChange={(e) => setDoctorId(e.target.value)}
//           disabled={fetchingDoctors}
//           className="w-full p-2 rounded-lg border border-gray-800 text-black focus:ring-2 focus:ring-blue-400 mb-4"
//         >
//           <option value="">
//             {fetchingDoctors ? "Loading doctors..." : "Select Doctor"}
//           </option>

//           {Array.isArray(doctors) && doctors.length > 0 ? (
//             doctors.map((doc) => (
//               <option key={doc._id} value={doc._id}>
//                 {doc.name} ({doc.specialization})
//               </option>
//             ))
//           ) : (
//             !fetchingDoctors && (
//               <option disabled>No doctors available</option>
//             )
//           )}
//         </select>

//         {/* Date */}
//         <label className="text-sm font-semibold text-black mb-1 block">
//           Select Date
//         </label>
//         <input
//           type="date"
//           value={date}
//           onChange={(e) => setDate(e.target.value)}
//           className="w-full p-2 rounded-lg border border-gray-800 text-black mb-4"
//         />

//         {/* Time */}
//         <label className="text-sm font-semibold text-black mb-1 block">
//           Select Time
//         </label>
//         <input
//           type="time"
//           value={time}
//           onChange={(e) => setTime(e.target.value)}
//           className="w-full p-2 rounded-lg border border-gray-800 text-black mb-6"
//         />

//         {/* Button */}
//         <button
//           onClick={handleBookAppointment}
//           disabled={loading}
//           className="w-full py-2 rounded-lg bg-linear-to-r from-blue-600 to-indigo-600 text-white font-semibold hover:opacity-90 transition"
//         >
//           {loading ? "Booking..." : "Confirm Appointment"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default BookAppointment;


// import { useEffect, useState } from "react";
// import axios from "axios";

// const BookAppointment = () => {
//   const [doctors, setDoctors] = useState([]);
//   const [doctorId, setDoctorId] = useState("");
//   const [date, setDate] = useState("");
//   const [time, setTime] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [fetchingDoctors, setFetchingDoctors] = useState(true);

//   // ✅ Fetch doctors WITH TOKEN
//   // useEffect(() => {
//   //   const fetchDoctors = async () => {
//   //     const token = localStorage.getItem("token");

//   //     if (!token) {
//   //       alert("Please login first");
//   //       setFetchingDoctors(false);
//   //       return;
//   //     }

//   //     try {
//   //       const res = await axios.get(
//   //         "http://localhost:3000/api/doctors",
//   //         {
//   //           headers: {
//   //             Authorization: `Bearer ${token}`,
//   //           },
//   //         }
//   //       );

//   //       console.log("✅ Doctors fetched:", res.data);
//   //       setDoctors(res.data || []);
//   //     } catch (err) {
//   //       console.error(
//   //         "❌ Doctor fetch error:",
//   //         err.response?.status,
//   //         err.message
//   //       );

//   //       if (err.response?.status === 401) {
//   //         alert("Session expired. Please login again.");
//   //         localStorage.removeItem("token");
//   //       }

//   //       setDoctors([]);
//   //     } finally {
//   //       setFetchingDoctors(false);
//   //     }
//   //   };

//   //   fetchDoctors();
//   // }, []);

//   useEffect(() => {
//   const fetchDoctors = async () => {
//     const token = localStorage.getItem("token");
//     const specialization = localStorage.getItem(
//       "recommendedSpecialization"
//     );

//     if (!token) {
//       alert("Please login first");
//       return;
//     }

//     try {
//       const res = await axios.get(
//         "http://localhost:3000/api/doctors",
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//           params: {
//             specialization,
//           },
//         }
//       );

//       setDoctors(res.data);

//       // Auto select first AI doctor
//       if (res.data.length > 0) {
//         setDoctorId(res.data[0]._id);
//       }
//     } catch (err) {
//       alert("Doctor fetch failed");
//     }
//   };

//   fetchDoctors();
// }, []);


//   // ✅ Book appointment
//   const handleBookAppointment = async () => {
//     if (!doctorId || !date || !time) {
//       alert("⚠️ Please fill all fields");
//       return;
//     }

//     const token = localStorage.getItem("token");

//     if (!token) {
//       alert("Please login first");
//       return;
//     }

//     try {
//       setLoading(true);

//       await axios.post(
//         "http://localhost:3000/api/appointments/book",
//         { doctorId, date, time },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       alert("✅ Appointment Booked Successfully");
//       setDoctorId("");
//       setDate("");
//       setTime("");
//     } catch (err) {
//       console.error("❌ Booking error:", err.response?.status);

//       if (err.response?.status === 401) {
//         alert("Unauthorized. Please login again.");
//         localStorage.removeItem("token");
//       } else {
//         alert(err.response?.data?.message || "❌ Booking failed");
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="w-screen h-screen flex justify-center items-center bg-linear-to-br from-indigo-700 via-blue-500 to-sky-300">
//       <div className="backdrop-blur-lg bg-white/90 p-8 rounded-2xl shadow-2xl w-87.5">
//         <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
//           📅 Book Appointment
//         </h2>

//         {/* Doctor */}
//         <label className="text-sm font-semibold text-black mb-1 block">
//           Choose Doctor
//         </label>
//         <select
//           value={doctorId}
//           onChange={(e) => setDoctorId(e.target.value)}
//           disabled={fetchingDoctors}
//           className="w-full p-2 rounded-lg border border-gray-800 text-black focus:ring-2 focus:ring-blue-400 mb-4"
//         >
//           <option value="">
//             {fetchingDoctors ? "Loading doctors..." : "Select Doctor"}
//           </option>

//           {Array.isArray(doctors) && doctors.length > 0 ? (
//             doctors.map((doc) => (
//               <option key={doc._id} value={doc._id}>
//                 {doc.name} ({doc.specialization})
//               </option>
//             ))
//           ) : (
//             !fetchingDoctors && (
//               <option disabled>No doctors available</option>
//             )
//           )}
//         </select>

//         {/* Date */}
//         <label className="text-sm font-semibold text-black mb-1 block">
//           Select Date
//         </label>
//         <input
//           type="date"
//           value={date}
//           onChange={(e) => setDate(e.target.value)}
//           className="w-full p-2 rounded-lg border border-gray-800 text-black mb-4"
//         />

//         {/* Time */}
//         <label className="text-sm font-semibold text-black mb-1 block">
//           Select Time
//         </label>
//         <input
//           type="time"
//           value={time}
//           onChange={(e) => setTime(e.target.value)}
//           className="w-full p-2 rounded-lg border border-gray-800 text-black mb-6"
//         />

//         {/* Button */}
//         <button
//           onClick={handleBookAppointment}
//           disabled={loading}
//           className="w-full py-2 rounded-lg bg-linear-to-r from-blue-600 to-indigo-600 text-white font-semibold hover:opacity-90 transition"
//         >
//           {loading ? "Booking..." : "Confirm Appointment"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default BookAppointment;


// import { useEffect, useState } from "react";
// import axios from "axios";

// const BookAppointment = () => {
//   const [doctors, setDoctors] = useState([]);
  
//   const [doctorId, setDoctorId] = useState("");
//   const [date, setDate] = useState("");
//   const [time, setTime] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [fetchingDoctors, setFetchingDoctors] = useState(true);

//   // ✅ Fetch doctors (AI specialization based)
//   // useEffect(() => {
//   //   const fetchDoctors = async () => {
//   //     const token = localStorage.getItem("token");
//   //     const specialization =
//   //       localStorage.getItem("recommendedSpecialization") ||
//   //       "General Physician";

//   //     if (!token) {
//   //       alert("Please login first");
//   //       setFetchingDoctors(false);
//   //       return;
//   //     }

//   //     try {
//   //       const res = await axios.get(
//   //         "http://localhost:3000/api/doctors",
//   //         {
//   //           headers: {
//   //             Authorization: `Bearer ${token}`,
//   //           },
//   //           params: {
//   //             specialization,
//   //           },
//   //         }
//   //       );

//   //       // ✅ Correct response handling
//   //       const doctorList = res.data.doctors || [];

//   //       setDoctors(doctorList);

//   //       // ✅ Auto-select first doctor
//   //       if (doctorList.length > 0) {
//   //         setDoctorId(doctorList[0]._id);
//   //       }
//   //     } catch (err) {
//   //       console.error("❌ Doctor fetch failed:", err);
//   //       alert("Failed to load doctors");
//   //       setDoctors([]);
//   //     } finally {
//   //       setFetchingDoctors(false); // 🔥 IMPORTANT
//   //     }
//   //   };

//   //   fetchDoctors();
//   // }, []);
// useEffect(() => {
//     const specialization =
//       localStorage.getItem("recommendedSpecialization");

//     const storedDoctors =
//       JSON.parse(localStorage.getItem("doctors")) || [];

//     if (!specialization || storedDoctors.length === 0) {
//       setDoctors([]);
//       return;
//     }

//     const filteredDoctors = storedDoctors.filter(
//       (doc) =>
//         doc.specialization?.toLowerCase() ===
//         specialization.toLowerCase()
//     );

//     setDoctors(filteredDoctors);
//   }, []);




//   // ✅ Book appointment
//   const handleBookAppointment = async () => {
//     if (!doctorId || !date || !time) {
//       alert("⚠️ Please fill all fields");
//       return;
//     }

//     const token = localStorage.getItem("token");

//     if (!token) {
//       alert("Please login first");
//       return;
//     }

//     try {
//       setLoading(true);

//       await axios.post(
//         "http://localhost:3000/api/appointments/book",
//         { doctorId, date, time },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       alert("✅ Appointment Booked Successfully");

//       // Reset fields
//       setDoctorId("");
//       setDate("");
//       setTime("");
//     } catch (err) {
//       console.error("❌ Booking error:", err.response?.status);

//       if (err.response?.status === 401) {
//         alert("Session expired. Please login again.");
//         localStorage.removeItem("token");
//       } else {
//         alert(err.response?.data?.message || "❌ Booking failed");
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="w-screen h-screen flex justify-center items-center bg-linear-to-br from-indigo-700 via-blue-500 to-sky-300">
//       <div className="backdrop-blur-lg bg-white/90 p-8 rounded-2xl shadow-2xl w-87.5">
//         <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
//           📅 Book Appointment
//         </h2>

//         {/* Doctor */}
//         <label className="text-sm font-semibold text-black mb-1 block">
//           Choose Doctor
//         </label>
//         {/* <select
//           value={doctorId}
//           onChange={(e) => setDoctorId(e.target.value)}
//           disabled={fetchingDoctors}
//           className="w-full p-2 rounded-lg border border-gray-800 text-black focus:ring-2 focus:ring-blue-400 mb-4"
//         >
//           <option value="">
//             {fetchingDoctors ? "Loading doctors..." : "Select Doctor"}
//           </option>

//           {doctors.length > 0 ? (
//             doctors.map((doc) => (
//               <option key={doc._id} value={doc._id}>
//                 {doc.name} ({doc.specialization})
//               </option>
//             ))
//           ) : (
//             !fetchingDoctors && (
//               <option disabled>No doctors available</option>
//             )
//           )}
//         </select> */}
//         <select
//   value={doctorId}
//   onChange={(e) => setDoctorId(e.target.value)}
//   disabled={fetchingDoctors}
//   className="w-full p-2 rounded-lg border border-gray-800 text-black mb-4"
// >
//   <option value="">
//     {fetchingDoctors ? "Loading doctors..." : "Select Doctor"}
//   </option>

//   {doctors.length > 0 ? (
//     doctors.map((doc) => (
//       <option key={doc._id} value={doc._id}>
//         Dr. {doc.name} ({doc.specialization})
//       </option>
//     ))
//   ) : (
//     <option disabled>No doctors available</option>
//   )}
// </select>

//         {/* Date */}
//         <label className="text-sm font-semibold text-black mb-1 block">
//           Select Date
//         </label>
//         <input
//           type="date"
//           value={date}
//           onChange={(e) => setDate(e.target.value)}
//           className="w-full p-2 rounded-lg border border-gray-800 text-black mb-4"
//         />

//         {/* Time */}
//         <label className="text-sm font-semibold text-black mb-1 block">
//           Select Time
//         </label>
//         <input
//           type="time"
//           value={time}
//           onChange={(e) => setTime(e.target.value)}
//           className="w-full p-2 rounded-lg border border-gray-800 text-black mb-6"
//         />

//         {/* Button */}
//         <button
//           onClick={handleBookAppointment}
//           disabled={loading}
//           className="w-full py-2 rounded-lg bg-linear-to-r from-blue-600 to-indigo-600 text-white font-semibold hover:opacity-90 transition"
//         >
//           {loading ? "Booking..." : "Confirm Appointment"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default BookAppointment;


// import { useEffect, useState } from "react";
// import axios from "axios";

// const BookAppointment = () => {
//   const [doctors, setDoctors] = useState([]);
//   const [doctorId, setDoctorId] = useState("");
//   const [date, setDate] = useState("");
//   const [time, setTime] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [fetchingDoctors, setFetchingDoctors] = useState(true);

//   // ✅ Fetch doctors based on AI specialization
// //   useEffect(() => {
// //   const specialization =
// //     localStorage.getItem("recommendedSpecialization");

// //   // const storedDoctors =
// //   //   JSON.parse(localStorage.getItem("doctors")) || [];

// //   const storedDoctors = (() => {
// //   try {
// //     const data = localStorage.getItem("doctors");
// //     return data ? JSON.parse(data) : [];
// //   } catch {
// //     return [];
// //   }
// // })();


// //   if (!specialization || storedDoctors.length === 0) {
// //     setDoctors([]);
// //     return;
// //   }

// //   // 🔥 SMART MATCH (AI-safe)
// //   const filteredDoctors = storedDoctors.filter((doc) =>
// //     doc.specialization
// //       ?.toLowerCase()
// //       .includes(specialization.toLowerCase().slice(0, 5))
// //   );

// //   setDoctors(filteredDoctors);

// //   // auto-select first doctor
// //   if (filteredDoctors.length > 0) {
// //     setDoctorId(filteredDoctors[0]._id);
// //   }
// // }, []);


// // useEffect(() => {
// //   const fetchDoctors = async () => {
// //     const specialization =
// //       localStorage.getItem("recommendedSpecialization");

// //     const token = localStorage.getItem("token");

// //     if (!specialization || !token) {
// //       console.log("Missing specialization or token");
// //       return;
// //     }

// //     try {
// //       const res = await axios.get(
// //         `http://localhost:3000/api/doctors?specialization=${specialization}`,
// //         {
// //           headers: {
// //             Authorization: `Bearer ${token}`,
// //           },
// //         }
// //       );

// //       setDoctors(res.data);

// //       if (res.data.length > 0) {
// //         setDoctorId(res.data[0]._id);
// //       }
// //     } catch (err) {
// //       console.error("Doctor fetch error:", err);
// //     }
// //   };

// //   fetchDoctors();
// // }, []);
// useEffect(() => {
//   const fetchDoctors = async () => {
//     const rawSpecialization =
//       localStorage.getItem("recommendedSpecialization");

//     const token = localStorage.getItem("token");

//     if (!rawSpecialization || !token) {
//       console.log("Missing specialization or token");
//       return;
//     }

//     const specialization = normalizeSpecialization(rawSpecialization);

//     try {
//       const res = await axios.get(
//         `http://localhost:3000/api/doctors?specialization=${specialization}`,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Cache-Control": "no-cache",
//           },
//         }
//       );

//       console.log("Doctors fetched:", res.data);

//       setDoctors(res.data);

//       if (res.data.length > 0) {
//         setDoctorId(res.data[0]._id);
//       }
//     } catch (err) {
//       console.error("Doctor fetch error:", err);
//     }
//   };

//   fetchDoctors();
// }, []);
// const normalizeSpecialization = (value) =>
//   value.toLowerCase().replace("physician", "").trim();



//   // ✅ Book appointment
//   const handleBookAppointment = async () => {
//     if (!doctorId || !date || !time) {
//       alert("⚠️ Please fill all fields");
//       return;
//     }

//     const token = localStorage.getItem("token");
//     if (!token) {
//       alert("Please login first");
//       return;
//     }

//     try {
//       setLoading(true);

//       await axios.post(
//         "http://localhost:3000/api/appointments/book",
//         { doctorId, date, time },
//         {
//           headers: { Authorization: `Bearer ${token}` },
//         }
//       );

//       alert("✅ Appointment Booked Successfully");
//       setDate("");
//       setTime("");
//     } catch (err) {
//       console.error("❌ Booking error:", err);
//       alert(err.response?.data?.message || "Booking failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="w-screen h-screen flex justify-center items-center bg-linear-to-br from-indigo-700 via-blue-500 to-sky-300">
//       <div className="bg-white/90 p-8 rounded-2xl text-black shadow-2xl w-87.5">
//         <h2 className="text-2xl font-bold text-center mb-6">
//           📅 Book Appointment
//         </h2>

//         {/* Doctor */}
//         <label className="text-sm font-semibold mb-1 block">
//           Choose Doctor
//         </label>

      
//         <select
//   value={doctorId}
//   onChange={(e) => setDoctorId(e.target.value)}
//   className="w-full p-2 rounded-lg border border-gray-800 text-black mb-4"
// >
//   <option value="">Select Doctor</option>

//   {doctors.length > 0 ? (
//     doctors.map((doc) => (
//       <option key={doc._id} value={doc._id}>
//         Dr. {doc.name} — {doc.specialization}
//       </option>
//     ))
//   ) : (
//     <option disabled>No doctors available</option>
//   )}
// </select>

//         {/* Date */}
//         <label className="text-sm font-semibold text-black mb-1 block">
//           Select Date
//         </label>
//         <input
//           type="date"
//           value={date}
//           onChange={(e) => setDate(e.target.value)}
//           className="w-full p-2 rounded-lg text-black border mb-4"
//         />

//         {/* Time */}
//         <label className="text-sm font-semibold text-black mb-1 block">
//           Select Time
//         </label>
//         <input
//           type="time"
//           value={time}
//           onChange={(e) => setTime(e.target.value)}
//           className="w-full p-2 rounded-lg text-black border mb-6"
//         />

//         <button
//           onClick={handleBookAppointment}
//           disabled={loading}
//           className="w-full py-2 rounded-lg bg-blue-600 text-black font-semibold"
//         >
//           {loading ? "Booking..." : "Confirm Appointment"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default BookAppointment;

// import { useEffect, useState } from "react";
// import axios from "axios";

// const BookAppointment = () => {
//   const [doctors, setDoctors] = useState([]);
//   const [selectedDoctor, setSelectedDoctor] = useState(null);
//   const [date, setDate] = useState("");
//   const [time, setTime] = useState("");

//   const specialization = localStorage.getItem(
//     "recommendedSpecialization"
//   );
// //   useEffect(() => {
// //   const fetchDoctors = async () => {
// //     try {
// //       const specialization =
// //         localStorage.getItem("recommendedSpecialization");

// //       if (!specialization) {
// //         console.log("No specialization found");
// //         return;
// //       }

// //       const res = await axios.get(
// //         `http://localhost:3000/api/doctors/by-specialization?specialization=${specialization}`
// //       );

// //       setDoctors(res.data);

// //       if (res.data.length > 0) {
// //         setDoctorId(res.data[0]._id);
// //       }

// //     } catch (error) {
// //       console.log("Doctor fetch error", error);
// //     }
// //   };

// //   fetchDoctors();
// // }, []);
// useEffect(() => {
//   const fetchDoctors = async () => {
//     try {
//       const specialization =
//         localStorage.getItem("recommendedSpecialization");

//       if (!specialization) return;

//       const res = await axios.get(
//         `http://localhost:3000/api/doctors/recommended?specialization=${specialization}`
//       );

//       setDoctors(res.data);

//       if (res.data.length > 0) {
//         setDoctorId(res.data[0]._id);
//       }

//     } catch (err) {
//       console.log("Doctor fetch error", err);
//     }
//   };

//   fetchDoctors();
// }, []);


//   const bookAppointment = async () => {
//     const token = localStorage.getItem("token");

//     await axios.post(
//       "http://localhost:3000/api/appointments/book",
//       {
//         doctorId: selectedDoctor._id,
//         date,
//         time,
//       },
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );

//     alert("✅ Appointment Booked Successfully");
//   };

//   return (
//     <div className="w-screen h-screen bg-linear-to-br from-indigo-900 via-blue-800 to-purple-900 text-white p-8">

//       {/* Heading */}
//       <h1 className="text-3xl font-bold mb-2">
//         🩺 AI Recommended Doctors
//       </h1>

//       <p className="mb-8 text-blue-200">
//         Specialization:{" "}
//         <span className="bg-blue-500 px-3 py-1 rounded-full">
//           {specialization}
//         </span>
//       </p>

//       {/* Doctor Cards */}
//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {doctors.map((doc) => (
//           <div
//             key={doc._id}
//             onClick={() => setSelectedDoctor(doc)}
//             className={`cursor-pointer p-5 rounded-2xl shadow-lg transition transform hover:scale-105
//             ${
//               selectedDoctor?._id === doc._id
//                 ? "bg-green-500 text-black"
//                 : "bg-white/10 backdrop-blur-lg"
//             }`}
//           >
//             <h2 className="text-xl font-semibold mb-2">
//               👨‍⚕️ Dr. {doc.name}
//             </h2>

//             <p>🏥 {doc.hospital}</p>
//             <p>📍 {doc.location}</p>
//             <p>⭐ {doc.experience} yrs experience</p>
//           </div>
//         ))}
//       </div>

//       {/* Booking Section */}
//       {selectedDoctor && (
//         <div className="mt-10 bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-xl max-w-md">
//           <h2 className="text-2xl font-bold mb-4">
//             📅 Book Appointment
//           </h2>

//           <p className="mb-3">
//             Selected Doctor:
//             <span className="font-semibold text-green-300">
//               {" "}
//               Dr. {selectedDoctor.name}
//             </span>
//           </p>

//           <input
//             type="date"
//             onChange={(e) => setDate(e.target.value)}
//             className="w-full mb-3 p-2 rounded text-black"
//           />

//           <input
//             type="time"
//             onChange={(e) => setTime(e.target.value)}
//             className="w-full mb-4 p-2 rounded text-black"
//           />

//           <button
//             onClick={bookAppointment}
//             className="w-full bg-green-500 hover:bg-green-600 text-black font-bold py-2 rounded-lg transition"
//           >
//             Confirm Appointment
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default BookAppointment;

// import { useEffect, useState } from "react";
// import axios from "axios";
// import { useLocation } from "react-router-dom";

// const BookAppointment = () => {
//   const [doctors, setDoctors] = useState([]);
//   const [selectedDoctor, setSelectedDoctor] = useState(null);
//   const [date, setDate] = useState("");
//   const [time, setTime] = useState("");
//   const [loading, setLoading] = useState(true);
//   const location = useLocation();
//   const doctorData = location.state?.doctorData;

//   useEffect(() => {
//     const fetchDoctors = async () => {
//       try {
        
//         const specialization = localStorage
//           .getItem("recommendedSpecialization")
//           ?.split(" or ")[0]
//           ?.trim();

//         if (!specialization) {
//           console.log("No specialization found");
//           setLoading(false);
//           return;
//         }

//         const res = await axios.get(
//           `http://localhost:3000/api/doctors/recommended?specialization=${specialization}`
//         );

//         setDoctors(res.data);

        
//         if (res.data.length > 0) {
//           setSelectedDoctor(res.data[0]);
//         }

//       } catch (err) {
//         console.log("Doctor fetch error", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDoctors();
//   }, []);

//   const bookAppointment = async () => {
//     try {
//       if (!selectedDoctor) {
//         alert("Please select a doctor");
//         return;
//       }

//       if (!date || !time) {
//         alert("Please select date and time");
//         return;
//       }

//       const token = localStorage.getItem("token");

//       await axios.post(
//         "http://localhost:3000/api/appointments/book",
//         {
//           doctorId: selectedDoctor._id,
//           date,
//           time,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       alert("✅ Appointment Booked Successfully");

//     } catch (err) {
//       console.log("Booking error:", err);
//       alert("❌ Booking failed");
//     }
//   };

//   return (
//     <div className="w-screen h-screen  bg-linear-to-br from-indigo-900 via-blue-800 to-purple-900 text-white p-8">

//       <h1 className="text-3xl font-bold mb-2">
//         🩺 AI Recommended Doctors
//       </h1>

//       <p className="mb-8 text-blue-200">
//         Specialization:{" "}
//         <span className="bg-blue-500 px-3 py-1 rounded-full">
//           {localStorage.getItem("recommendedSpecialization")}
//         </span>
//       </p>

//       {/* Loading */}
//       {loading && <p>Loading doctors...</p>}

//       {/* Doctor Cards */}
//       {!loading && doctors.length > 0 && (
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {doctors.map((doc) => (
//             <div
//               key={doc._id}
//               onClick={() => setSelectedDoctor(doc)}
//               className={`cursor-pointer p-5 rounded-2xl shadow-lg transition transform hover:scale-105
//               ${
//                 selectedDoctor?._id === doc._id
//                   ? "bg-green-500 text-black"
//                   : "bg-white/10 backdrop-blur-lg"
//               }`}
//             >
//               <h2 className="text-xl font-semibold mb-2">
//                 👨‍⚕️ Dr. {doc.name}
//               </h2>

//               <p>🏥 {doc.hospital || "City Hospital"}</p>
//               <p>📍 {doc.location || "Available Online"}</p>
//               <p>⭐ Rating: {doc.rating || 4.5}</p>
//               <p>🩺 Experience: {doc.experience || 5} yrs</p>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* No Doctors */}
//       {!loading && doctors.length === 0 && (
//         <p className="text-red-300">
//           No doctors available for this specialization.
//         </p>
//       )}

//       {/* Booking Section */}
//       {selectedDoctor && (
//         <div className="mt-10 bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-xl max-w-md">
//           <h2 className="text-2xl font-bold mb-4">
//             📅 Book Appointment
//           </h2>

//           <p className="mb-3">
//             Selected Doctor:
//             <span className="font-semibold text-green-300">
//               {" "}
//               Dr. {selectedDoctor.name}
//             </span>
//           </p>

//           <input
//             type="date"
//             value={date}
//             onChange={(e) => setDate(e.target.value)}
//             className="w-full mb-3 p-2 rounded text-black"
//           />

//           <input
//             type="time"
//             value={time}
//             onChange={(e) => setTime(e.target.value)}
//             className="w-full mb-4 p-2 rounded text-black"
//           />

//           <button
//             onClick={bookAppointment}
//             className="w-full bg-green-500 hover:bg-green-600 text-black font-bold py-2 rounded-lg transition"
//           >
//             Confirm Appointment
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default BookAppointment;


import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const BookAppointment = () => {
  const location = useLocation();
  const aiDoctor = location.state?.doctorData;

  const [doctorName, setDoctorName] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  // 🔥 Auto-fill if AI doctor exists
  useEffect(() => {
    if (aiDoctor) {
      setDoctorName(aiDoctor.name);
      setSpecialization(aiDoctor.specialization);
    }
  }, [aiDoctor]);

  // const handleBooking = () => {
  //   if (!doctorName || !date || !time) {
  //     alert("Please fill all required fields");
  //     return;
  //   }

  //   alert(`Appointment booked with ${doctorName}`);
  // };
const handleBooking = async () => {
  if (!doctorName || !date || !time) {
    alert("Please fill all required fields");
    return;
  }

  try {
    const token = localStorage.getItem("token");

    const res = await axios.post(
      "http://localhost:3000/api/appointments/book",
      {
        doctorName,
        specialization,
        date,
        time,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    alert("Appointment booked successfully!");
    console.log(res.data);

  } catch (error) {
    console.error(error);
    alert("Booking failed");
  }
};
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-linear-to-br from-indigo-500 to-purple-600">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-96">
        <h2 className="text-2xl font-bold text-center mb-6 text-indigo-700">
          📅 Book Appointment
        </h2>

        {/* Doctor Name */}
        <input
          type="text"
          placeholder="Doctor Name"
          value={doctorName}
          onChange={(e) => setDoctorName(e.target.value)}
          className="w-full mb-3 p-3 border rounded-lg text-black"
        />

        {/* Specialization */}
        <input
          type="text"
          placeholder="Specialization"
          value={specialization}
          onChange={(e) => setSpecialization(e.target.value)}
          className="w-full mb-3 p-3 border rounded-lg text-black"
        />

        {/* Date */}
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full mb-3 p-3 border rounded-lg text-black"
        />

        {/* Time */}
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="w-full mb-4 p-3 border rounded-lg text-black"
        />

        <button
          onClick={handleBooking}
          className="w-full py-3 bg-indigo-600 text-white rounded-lg font-semibold"
        >
          Confirm Booking
        </button>

        {/* 🔥 Show AI Doctor Details if available */}
        {aiDoctor && (
          <div className="mt-6 p-4 bg-blue-100 rounded-xl text-sm text-black">
            <p className="font-semibold text-blue-800 mb-2">
              🤖 AI Recommended Doctor Details
            </p>
            <p><strong>Name:</strong> {aiDoctor.name}</p>
            <p><strong>Experience:</strong> {aiDoctor.experience}</p>
            <p><strong>Consultation Fee:</strong> ₹{aiDoctor.consultationFee}</p>
            <p><strong>Rating:</strong> ⭐ {aiDoctor.rating}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookAppointment;