// import { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const MyAppointments = () => {
//   const [appointments, setAppointments] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const navigate = useNavigate();

//   const token = localStorage.getItem("token");

//   // Fetch appointments
//   const fetchAppointments = async () => {
//     try {
//       const res = await axios.get(
//         "http://localhost:3000/api/appointments/my",
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       setAppointments(res.data);
//     } catch (error) {
//       console.error(error);
//       alert("Failed to fetch appointments");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchAppointments();
//   }, []);

//   // Cancel appointment
//   const handleCancel = async (id) => {
//     try {
//       await axios.put(
//         `http://localhost:3000/api/appointments/cancel/${id}`,
//         {},
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       // Refresh list
//       fetchAppointments();
//     } catch (error) {
//       console.error(error);
//       alert("Cancel failed");
//     }
//   };

//   const getStatusColor = (status) => {
//     switch (status) {
//       case "Pending":
//         return "bg-yellow-100 text-yellow-700";
//       case "Confirmed":
//         return "bg-green-100 text-green-700";
//       case "Completed":
//         return "bg-blue-100 text-blue-700";
//       case "Cancelled":
//         return "bg-red-100 text-red-700";
//       default:
//         return "bg-gray-100 text-gray-700";
//     }
//   };

// //   return (
// //     <div className="w-screen h-screen bg-linear-to-br from-indigo-500 to-purple-600 py-10 px-4">
// //       <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl p-8">

// //         <h2 className="text-3xl font-bold text-center text-indigo-700 mb-8">
// //           📋 My Appointments
// //         </h2>

// //         {loading ? (
// //           <div className="text-center text-gray-600 text-lg">
// //             Loading appointments...
// //           </div>
// //         ) : appointments.length === 0 ? (
// //           <div className="text-center text-gray-500 text-lg">
// //             😔 No appointments booked yet.
// //           </div>
// //         ) : (
// //           <div className="grid md:grid-cols-2 gap-6">
// //             {appointments.map((appointment) => (
// //               <div
// //                 key={appointment._id}
// //                 className="border rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300"
// //               >
// //                 <h3 className="text-xl font-semibold text-indigo-600 mb-2">
// //                   Dr. {appointment.doctorName}
// //                 </h3>

// //                 <p className="text-gray-700 mb-1">
// //                   <strong>Specialization:</strong>{" "}
// //                   {appointment.specialization}
// //                 </p>

// //                 <p className="text-gray-700 mb-1">
// //                   <strong>Date:</strong> {appointment.date}
// //                 </p>

// //                 <p className="text-gray-700 mb-3">
// //                   <strong>Time:</strong> {appointment.time}
// //                 </p>

// //                 <span
// //                   className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(
// //                     appointment.status
// //                   )}`}
// //                 >
// //                   {appointment.status}
// //                 </span>

// //                 {appointment.status !== "Cancelled" &&
// //                   appointment.status !== "Completed" && (
// //                     <button
// //                       onClick={() => handleCancel(appointment._id)}
// //                       className="mt-4 w-full py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
// //                     >
// //                       Cancel Appointment
// //                     </button>
// //                   )}
// //               </div>
// //             ))}
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );

// return (
//   <div className="w-screen h-screen bg-linear-to-br from-indigo-500 to-purple-600 py-12 px-6">
//     <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl p-10">

//       {/* Header */}
//       <h2 className="text-4xl font-bold text-center text-indigo-700 mb-10">
//         📋 My Appointments
//       </h2>

//       {loading ? (
//         <div className="text-center text-gray-600 text-lg animate-pulse">
//           Loading appointments...
//         </div>
//       ) : appointments.length === 0 ? (
//         <div className="text-center text-gray-500 text-lg">
//           😔 No appointments booked yet.
//         </div>
//       ) : (
//         <div className="grid md:grid-cols-2 gap-8">
//           {appointments.map((appointment) => (
//             <div
//               key={appointment._id}
//               className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition duration-300 flex gap-5 items-center border"
//             >

//               {/* Doctor Image */}
//               <img
//                 src={
//                   appointment.doctorImage ||
//                   "https://cdn-icons-png.flaticon.com/512/3774/3774299.png"
//                 }
//                 alt="Doctor"
//                 className="w-24 h-24 rounded-full object-cover border-4 border-indigo-500"
//               />

//               {/* Details */}
//               <div className="flex-1">
//                 <h3 className="text-xl font-bold text-gray-800">
//                   Dr. {appointment.doctorName}
//                 </h3>

//                 <p className="text-gray-500 mb-2">
//                   {appointment.specialization}
//                 </p>

//                 <div className="flex gap-4 text-sm text-gray-600">
//                   <span>📅 {appointment.date}</span>
//                   <span>⏰ {appointment.time}</span>
//                 </div>
//               </div>

//               {/* Status & Cancel */}
//               {/* <div className="flex flex-col items-end gap-3">
//                 <span
//                   className={`px-4 py-1 rounded-full text-sm font-semibold ${getStatusColor(
//                     appointment.status
//                   )}`}
//                 >
//                   {appointment.status}
//                 </span>

//                 {appointment.status !== "Cancelled" &&
//                   appointment.status !== "Completed" && (
//                     <button
//                       onClick={() => handleCancel(appointment._id)}
//                       className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition text-sm"
//                     >
//                       Cancel
//                     </button>
//                   )}
                  
//               </div> */}
//               <div className="flex flex-col items-end gap-3">

//   <span
//     className={`px-4 py-1 rounded-full text-sm font-semibold ${getStatusColor(
//       appointment.status
//     )}`}
//   >
//     {appointment.status}
//   </span>

//   {/* Video Call Button */}
//   {appointment.status === "Confirmed" && (
//     <button
//       onClick={() => navigate("/video-call")}
//       className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition text-sm"
//     >
//       Join Video Call
//     </button>
//   )}

//   {/* Cancel Button */}
//   {appointment.status !== "Cancelled" &&
//     appointment.status !== "Completed" && (
//       <button
//         onClick={() => handleCancel(appointment._id)}
//         className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition text-sm"
//       >
//         Cancel
//       </button>
//     )}
// </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   </div>
// );
// };

// export default MyAppointments;

import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const MyAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const fetchAppointments = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/appointments/my", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setAppointments(res.data || []);
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch appointments");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  const handleCancel = async (id) => {
    try {
      await axios.put(
        `http://localhost:3000/api/appointments/cancel/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success("Appointment cancelled");
      fetchAppointments();
    } catch (error) {
      console.error(error);
      toast.error("Cancel failed");
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-400/20 text-yellow-200 border border-yellow-300/30";
      case "Confirmed":
        return "bg-green-400/20 text-green-200 border border-green-300/30";
      case "Completed":
        return "bg-blue-400/20 text-blue-200 border border-blue-300/30";
      case "Cancelled":
        return "bg-red-400/20 text-red-200 border border-red-300/30";
      default:
        return "bg-white/10 text-white border border-white/20";
    }
  };

  return (
    <div className="w-screen h-full bg-linear-to-br from-[#0f172a] via-[#1e3a8a] to-[#0ea5e9] px-4 py-6 md:px-10">
      <div className="w-full max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6 md:mb-10 text-center md:text-left">
          <h1 className="text-2xl md:text-4xl font-bold text-white">
            📋 My Appointments
          </h1>
          <p className="text-blue-200 mt-2 text-sm md:text-base">
            View, manage, cancel, or join your booked consultations
          </p>
        </div>

        {/* Top cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-5 mb-6 md:mb-8">
          <div className="bg-white/10 p-4 rounded-xl text-white border border-white/10 backdrop-blur-md">
            <p className="text-xs text-blue-200">Track</p>
            <h3 className="text-sm md:text-lg font-semibold">Upcoming Visits</h3>
          </div>

          <div className="bg-white/10 p-4 rounded-xl text-white border border-white/10 backdrop-blur-md">
            <p className="text-xs text-blue-200">Manage</p>
            <h3 className="text-sm md:text-lg font-semibold">Cancel Anytime</h3>
          </div>

          <div className="bg-white/10 p-4 rounded-xl text-white border border-white/10 backdrop-blur-md">
            <p className="text-xs text-blue-200">Consult</p>
            <h3 className="text-sm md:text-lg font-semibold">Join Video Call</h3>
          </div>
        </div>

        {/* Main content */}
        <div className="bg-white/10 rounded-3xl p-4 md:p-6 border border-white/20 backdrop-blur-xl shadow-2xl">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-20 text-white">
              <div className="w-10 h-10 border-4 border-white/40 border-t-white rounded-full animate-spin mb-4"></div>
              <p className="text-lg">Loading appointments...</p>
            </div>
          ) : appointments.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center text-white">
              <div className="text-6xl mb-4">🩺</div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                No appointments yet
              </h2>
              <p className="text-blue-200 mb-6 max-w-md">
                You have not booked any consultations. Start with the symptom
                checker and get an AI-recommended doctor.
              </p>
              <button
                onClick={() => navigate("/symptom-checker")}
                className="px-6 py-3 rounded-xl bg-linear-to-r from-blue-500 to-purple-500 text-white font-semibold hover:scale-[1.02] transition"
              >
                Go to Symptom Checker
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              {appointments.map((appointment) => (
                <div
                  key={appointment._id}
                  className="bg-white/10 border border-white/20 rounded-3xl p-5 md:p-6 shadow-xl backdrop-blur-lg text-white hover:scale-[1.01] transition"
                >
                  <div className="flex flex-col sm:flex-row gap-5">
                    {/* Doctor image */}
                    <div className="flex justify-center sm:justify-start">
                      <img
                        src={
                          appointment.doctorImage ||
                          "https://cdn-icons-png.flaticon.com/512/3774/3774299.png"
                        }
                        alt="Doctor"
                        className="w-24 h-24 rounded-2xl object-cover border-2 border-white/20"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                        <div>
                          <h3 className="text-xl font-bold">
                            Dr. {appointment.doctorName}
                          </h3>
                          <p className="text-blue-200 mt-1">
                            {appointment.specialization}
                          </p>
                        </div>

                        <span
                          className={`px-4 py-1 rounded-full text-sm font-semibold w-fit ${getStatusColor(
                            appointment.status
                          )}`}
                        >
                          {appointment.status}
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-5">
                        <div className="bg-white/10 rounded-2xl p-3">
                          <p className="text-xs text-blue-200">Appointment Date</p>
                          <p className="font-semibold mt-1">📅 {appointment.date}</p>
                        </div>

                        <div className="bg-white/10 rounded-2xl p-3">
                          <p className="text-xs text-blue-200">Appointment Time</p>
                          <p className="font-semibold mt-1">⏰ {appointment.time}</p>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3 mt-5">
                        {appointment.status === "Confirmed" && (
                          <button
                            onClick={() => navigate("/video-call")}
                            className="flex-1 px-4 py-3 bg-linear-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold hover:scale-[1.02] transition"
                          >
                            Join Video Call
                          </button>
                        )}

                        {appointment.status !== "Cancelled" &&
                          appointment.status !== "Completed" && (
                            <button
                              onClick={() => handleCancel(appointment._id)}
                              className="flex-1 px-4 py-3 bg-linear-to-r from-red-500 to-pink-500 text-white rounded-xl font-semibold hover:scale-[1.02] transition"
                            >
                              Cancel Appointment
                            </button>
                          )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyAppointments;