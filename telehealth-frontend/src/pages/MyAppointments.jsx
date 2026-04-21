

// import { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";

// const MyAppointments = () => {
//   const [appointments, setAppointments] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const navigate = useNavigate();
//   const token = localStorage.getItem("token");

//   const fetchAppointments = async () => {
//     try {
//       const res = await axios.get("http://localhost:3000/api/appointments/my", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       setAppointments(res.data || []);
//     } catch (error) {
//       console.error(error);
//       toast.error("Failed to fetch appointments");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchAppointments();
//   }, []);

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

//       toast.success("Appointment cancelled");
//       fetchAppointments();
//     } catch (error) {
//       console.error(error);
//       toast.error("Cancel failed");
//     }
//   };

//   const getStatusColor = (status) => {
//     switch (status) {
//       case "Pending":
//         return "bg-yellow-400/20 text-yellow-200 border border-yellow-300/30";
//       case "Confirmed":
//         return "bg-green-400/20 text-green-200 border border-green-300/30";
//       case "Completed":
//         return "bg-blue-400/20 text-blue-200 border border-blue-300/30";
//       case "Cancelled":
//         return "bg-red-400/20 text-red-200 border border-red-300/30";
//       default:
//         return "bg-white/10 text-white border border-white/20";
//     }
//   };

//   return (
//     <div className="w-screen h-full bg-linear-to-br from-[#0f172a] via-[#1e3a8a] to-[#0ea5e9] px-4 py-6 md:px-10">
//       <div className="w-full max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="mb-6 md:mb-10 text-center md:text-left">
//           <h1 className="text-2xl md:text-4xl font-bold text-white">
//             📋 My Appointments
//           </h1>
//           <p className="text-blue-200 mt-2 text-sm md:text-base">
//             View, manage, cancel, or join your booked consultations
//           </p>
//         </div>

//         {/* Top cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-5 mb-6 md:mb-8">
//           <div className="bg-white/10 p-4 rounded-xl text-white border border-white/10 backdrop-blur-md">
//             <p className="text-xs text-blue-200">Track</p>
//             <h3 className="text-sm md:text-lg font-semibold">Upcoming Visits</h3>
//           </div>

//           <div className="bg-white/10 p-4 rounded-xl text-white border border-white/10 backdrop-blur-md">
//             <p className="text-xs text-blue-200">Manage</p>
//             <h3 className="text-sm md:text-lg font-semibold">Cancel Anytime</h3>
//           </div>

//           <div className="bg-white/10 p-4 rounded-xl text-white border border-white/10 backdrop-blur-md">
//             <p className="text-xs text-blue-200">Consult</p>
//             <h3 className="text-sm md:text-lg font-semibold">Join Video Call</h3>
//           </div>
//         </div>

//         {/* Main content */}
//         <div className="bg-white/10 rounded-3xl p-4 md:p-6 border border-white/20 backdrop-blur-xl shadow-2xl">
//           {loading ? (
//             <div className="flex flex-col items-center justify-center py-20 text-white">
//               <div className="w-10 h-10 border-4 border-white/40 border-t-white rounded-full animate-spin mb-4"></div>
//               <p className="text-lg">Loading appointments...</p>
//             </div>
//           ) : appointments.length === 0 ? (
//             <div className="flex flex-col items-center justify-center py-20 text-center text-white">
//               <div className="text-6xl mb-4">🩺</div>
//               <h2 className="text-2xl md:text-3xl font-bold mb-2">
//                 No appointments yet
//               </h2>
//               <p className="text-blue-200 mb-6 max-w-md">
//                 You have not booked any consultations. Start with the symptom
//                 checker and get an AI-recommended doctor.
//               </p>
//               <button
//                 onClick={() => navigate("/symptom-checker")}
//                 className="px-6 py-3 rounded-xl bg-linear-to-r from-blue-500 to-purple-500 text-white font-semibold hover:scale-[1.02] transition"
//               >
//                 Go to Symptom Checker
//               </button>
//             </div>
//           ) : (
//             <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
//               {appointments.map((appointment) => (
//                 <div
//                   key={appointment._id}
//                   className="bg-white/10 border border-white/20 rounded-3xl p-5 md:p-6 shadow-xl backdrop-blur-lg text-white hover:scale-[1.01] transition"
//                 >
//                   <div className="flex flex-col sm:flex-row gap-5">
//                     {/* Doctor image */}
//                     <div className="flex justify-center sm:justify-start">
//                       <img
//                         src={
//                           appointment.doctorImage ||
//                           "https://cdn-icons-png.flaticon.com/512/3774/3774299.png"
//                         }
//                         alt="Doctor"
//                         className="w-24 h-24 rounded-2xl object-cover border-2 border-white/20"
//                       />
//                     </div>

//                     {/* Details */}
//                     <div className="flex-1">
//                       <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
//                         <div>
//                           <h3 className="text-xl font-bold">
//                             Dr. {appointment.doctorName}
//                           </h3>
//                           <p className="text-blue-200 mt-1">
//                             {appointment.specialization}
//                           </p>
//                         </div>

//                         <span
//                           className={`px-4 py-1 rounded-full text-sm font-semibold w-fit ${getStatusColor(
//                             appointment.status
//                           )}`}
//                         >
//                           {appointment.status}
//                         </span>
//                       </div>

//                       <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-5">
//                         <div className="bg-white/10 rounded-2xl p-3">
//                           <p className="text-xs text-blue-200">Appointment Date</p>
//                           <p className="font-semibold mt-1">📅 {appointment.date}</p>
//                         </div>

//                         <div className="bg-white/10 rounded-2xl p-3">
//                           <p className="text-xs text-blue-200">Appointment Time</p>
//                           <p className="font-semibold mt-1">⏰ {appointment.time}</p>
//                         </div>
//                       </div>

//                       <div className="flex flex-col sm:flex-row gap-3 mt-5">
//                         {appointment.status === "Confirmed" && (
//                           <button
//                             onClick={() => navigate("/video-call")}
//                             className="flex-1 px-4 py-3 bg-linear-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold hover:scale-[1.02] transition"
//                           >
//                             Join Video Call
//                           </button>
//                         )}

//                         {appointment.status !== "Cancelled" &&
//                           appointment.status !== "Completed" && (
//                             <button
//                               onClick={() => handleCancel(appointment._id)}
//                               className="flex-1 px-4 py-3 bg-linear-to-r from-red-500 to-pink-500 text-white rounded-xl font-semibold hover:scale-[1.02] transition"
//                             >
//                               Cancel Appointment
//                             </button>
//                           )}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MyAppointments;

import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const MyAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const stats = useMemo(() => {
    return {
      total: appointments.length,
      confirmed: appointments.filter((a) => a.status === "Confirmed").length,
      pending: appointments.filter((a) => a.status === "Pending").length,
      completed: appointments.filter((a) => a.status === "Completed").length,
    };
  }, [appointments]);

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
    <div className="w-screen h-full bg-linear-to-br from-[#0b1220] via-[#163b82] to-[#1aa7ec] px-4 py-6 md:px-8 lg:px-10">
      <div className="w-full max-w-7xl mx-auto">
        {/* Hero */}
        <div className="rounded-3xl bg-white/10 border border-white/20 backdrop-blur-xl shadow-2xl p-6 md:p-8 text-white">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <p className="text-blue-200 text-sm font-medium">
                TeleHealth Dashboard
              </p>
              <h1 className="text-3xl md:text-5xl font-bold mt-2">
                My Appointments
              </h1>
              <p className="text-blue-100 mt-3 max-w-2xl text-sm md:text-base">
                Track your upcoming consultations, manage bookings, and join
                video calls from one place.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full lg:max-w-2xl">
              <div className="rounded-2xl bg-white/10 border border-white/20 p-4">
                <p className="text-xs text-blue-200">Total</p>
                <h3 className="text-2xl font-bold mt-1">{stats.total}</h3>
              </div>
              <div className="rounded-2xl bg-white/10 border border-white/20 p-4">
                <p className="text-xs text-blue-200">Confirmed</p>
                <h3 className="text-2xl font-bold mt-1">{stats.confirmed}</h3>
              </div>
              <div className="rounded-2xl bg-white/10 border border-white/20 p-4">
                <p className="text-xs text-blue-200">Pending</p>
                <h3 className="text-2xl font-bold mt-1">{stats.pending}</h3>
              </div>
              <div className="rounded-2xl bg-white/10 border border-white/20 p-4">
                <p className="text-xs text-blue-200">Completed</p>
                <h3 className="text-2xl font-bold mt-1">{stats.completed}</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Quick feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
          <div className="rounded-2xl bg-white/10 border border-white/20 backdrop-blur-xl p-4 text-white">
            <p className="text-xs text-blue-200">Track</p>
            <h3 className="text-lg font-semibold mt-1">Upcoming Visits</h3>
          </div>
          <div className="rounded-2xl bg-white/10 border border-white/20 backdrop-blur-xl p-4 text-white">
            <p className="text-xs text-blue-200">Manage</p>
            <h3 className="text-lg font-semibold mt-1">Cancel Anytime</h3>
          </div>
          <div className="rounded-2xl bg-white/10 border border-white/20 backdrop-blur-xl p-4 text-white">
            <p className="text-xs text-blue-200">Consult</p>
            <h3 className="text-lg font-semibold mt-1">Join Video Call</h3>
          </div>
        </div>

        {/* Main panel */}
        <div className="mt-6 rounded-3xl bg-white/10 border border-white/20 backdrop-blur-xl shadow-2xl p-4 md:p-6">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-24 text-white">
              <div className="w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin mb-4"></div>
              <p className="text-lg font-medium">Loading appointments...</p>
            </div>
          ) : appointments.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-24 text-center text-white">
              <div className="text-6xl mb-4">🩺</div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                No appointments yet
              </h2>
              <p className="text-blue-100 mb-6 max-w-md">
                You have not booked any consultation yet. Start with the symptom
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
                  className="rounded-3xl bg-white/10 border border-white/20 backdrop-blur-lg p-5 md:p-6 text-white shadow-xl hover:scale-[1.01] transition"
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
                        className="w-24 h-24 rounded-2xl object-cover border-2 border-white/20 shadow-lg"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                        <div>
                          <h3 className="text-xl md:text-2xl font-bold">
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
                        <div className="rounded-2xl bg-white/10 p-4">
                          <p className="text-xs text-blue-200">Appointment Date</p>
                          <p className="font-semibold mt-1">📅 {appointment.date}</p>
                        </div>

                        <div className="rounded-2xl bg-white/10 p-4">
                          <p className="text-xs text-blue-200">Appointment Time</p>
                          <p className="font-semibold mt-1">⏰ {appointment.time}</p>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3 mt-5">
                        {appointment.status === "Confirmed" && (
                          <button
                            onClick={() => navigate("/video-call")}
                            className="flex-1 px-4 py-3 rounded-xl bg-linear-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:scale-[1.02] transition"
                          >
                            Join Video Call
                          </button>
                        )}

                        {appointment.status !== "Cancelled" &&
                          appointment.status !== "Completed" && (
                            <button
                              onClick={() => handleCancel(appointment._id)}
                              className="flex-1 px-4 py-3 rounded-xl bg-linear-to-r from-red-500 to-pink-500 text-white font-semibold hover:scale-[1.02] transition"
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