import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const MyAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  // Fetch appointments
  const fetchAppointments = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3000/api/appointments/my",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setAppointments(res.data);
    } catch (error) {
      console.error(error);
      alert("Failed to fetch appointments");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  // Cancel appointment
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

      // Refresh list
      fetchAppointments();
    } catch (error) {
      console.error(error);
      alert("Cancel failed");
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-100 text-yellow-700";
      case "Confirmed":
        return "bg-green-100 text-green-700";
      case "Completed":
        return "bg-blue-100 text-blue-700";
      case "Cancelled":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

//   return (
//     <div className="w-screen h-screen bg-linear-to-br from-indigo-500 to-purple-600 py-10 px-4">
//       <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl p-8">

//         <h2 className="text-3xl font-bold text-center text-indigo-700 mb-8">
//           📋 My Appointments
//         </h2>

//         {loading ? (
//           <div className="text-center text-gray-600 text-lg">
//             Loading appointments...
//           </div>
//         ) : appointments.length === 0 ? (
//           <div className="text-center text-gray-500 text-lg">
//             😔 No appointments booked yet.
//           </div>
//         ) : (
//           <div className="grid md:grid-cols-2 gap-6">
//             {appointments.map((appointment) => (
//               <div
//                 key={appointment._id}
//                 className="border rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300"
//               >
//                 <h3 className="text-xl font-semibold text-indigo-600 mb-2">
//                   Dr. {appointment.doctorName}
//                 </h3>

//                 <p className="text-gray-700 mb-1">
//                   <strong>Specialization:</strong>{" "}
//                   {appointment.specialization}
//                 </p>

//                 <p className="text-gray-700 mb-1">
//                   <strong>Date:</strong> {appointment.date}
//                 </p>

//                 <p className="text-gray-700 mb-3">
//                   <strong>Time:</strong> {appointment.time}
//                 </p>

//                 <span
//                   className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(
//                     appointment.status
//                   )}`}
//                 >
//                   {appointment.status}
//                 </span>

//                 {appointment.status !== "Cancelled" &&
//                   appointment.status !== "Completed" && (
//                     <button
//                       onClick={() => handleCancel(appointment._id)}
//                       className="mt-4 w-full py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
//                     >
//                       Cancel Appointment
//                     </button>
//                   )}
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );

return (
  <div className="w-screen h-screen bg-linear-to-br from-indigo-500 to-purple-600 py-12 px-6">
    <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl p-10">

      {/* Header */}
      <h2 className="text-4xl font-bold text-center text-indigo-700 mb-10">
        📋 My Appointments
      </h2>

      {loading ? (
        <div className="text-center text-gray-600 text-lg animate-pulse">
          Loading appointments...
        </div>
      ) : appointments.length === 0 ? (
        <div className="text-center text-gray-500 text-lg">
          😔 No appointments booked yet.
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-8">
          {appointments.map((appointment) => (
            <div
              key={appointment._id}
              className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition duration-300 flex gap-5 items-center border"
            >

              {/* Doctor Image */}
              <img
                src={
                  appointment.doctorImage ||
                  "https://cdn-icons-png.flaticon.com/512/3774/3774299.png"
                }
                alt="Doctor"
                className="w-24 h-24 rounded-full object-cover border-4 border-indigo-500"
              />

              {/* Details */}
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800">
                  Dr. {appointment.doctorName}
                </h3>

                <p className="text-gray-500 mb-2">
                  {appointment.specialization}
                </p>

                <div className="flex gap-4 text-sm text-gray-600">
                  <span>📅 {appointment.date}</span>
                  <span>⏰ {appointment.time}</span>
                </div>
              </div>

              {/* Status & Cancel */}
              {/* <div className="flex flex-col items-end gap-3">
                <span
                  className={`px-4 py-1 rounded-full text-sm font-semibold ${getStatusColor(
                    appointment.status
                  )}`}
                >
                  {appointment.status}
                </span>

                {appointment.status !== "Cancelled" &&
                  appointment.status !== "Completed" && (
                    <button
                      onClick={() => handleCancel(appointment._id)}
                      className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition text-sm"
                    >
                      Cancel
                    </button>
                  )}
                  
              </div> */}
              <div className="flex flex-col items-end gap-3">

  <span
    className={`px-4 py-1 rounded-full text-sm font-semibold ${getStatusColor(
      appointment.status
    )}`}
  >
    {appointment.status}
  </span>

  {/* Video Call Button */}
  {appointment.status === "Confirmed" && (
    <button
      onClick={() => navigate("/video-call")}
      className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition text-sm"
    >
      Join Video Call
    </button>
  )}

  {/* Cancel Button */}
  {appointment.status !== "Cancelled" &&
    appointment.status !== "Completed" && (
      <button
        onClick={() => handleCancel(appointment._id)}
        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition text-sm"
      >
        Cancel
      </button>
    )}
</div>
            </div>
          ))}
        </div>
      )}
    </div>
  </div>
);
};

export default MyAppointments;