


// import { useLocation } from "react-router-dom";
// import { useState, useEffect } from "react";
// import axios from "axios";

// const BookAppointment = () => {
//   const location = useLocation();
//   const aiDoctor = location.state?.doctorData;

//   const [doctorName, setDoctorName] = useState("");
//   const [specialization, setSpecialization] = useState("");
//   const [date, setDate] = useState("");
//   const [time, setTime] = useState("");

//   // 🔥 Auto-fill if AI doctor exists
//   useEffect(() => {
//     if (aiDoctor) {
//       setDoctorName(aiDoctor.name);
//       setSpecialization(aiDoctor.specialization);
//     }
//   }, [aiDoctor]);

//   // const handleBooking = () => {
//   //   if (!doctorName || !date || !time) {
//   //     alert("Please fill all required fields");
//   //     return;
//   //   }

//   //   alert(`Appointment booked with ${doctorName}`);
//   // };
// const handleBooking = async () => {
//   if (!doctorName || !date || !time) {
//     alert("Please fill all required fields");
//     return;
//   }

//   try {
//     const token = localStorage.getItem("token");

//     const res = await axios.post(
//       "http://localhost:3000/api/appointments/book",
//       {
//         doctorName,
//         specialization,
//         date,
//         time,
//       },
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );

//     alert("Appointment booked successfully!");
//     console.log(res.data);

//   } catch (error) {
//     console.error(error);
//     alert("Booking failed");
//   }
// };

//   return (
//     <div className="w-screen h-screen flex items-center justify-center bg-linear-to-br from-indigo-500 to-purple-600">
//       <div className="bg-white p-8 rounded-2xl shadow-xl w-96">
//         <h2 className="text-2xl font-bold text-center mb-6 text-indigo-700">
//           📅 Book Appointment
//         </h2>

//         {/* Doctor Name */}
//         <input
//           type="text"
//           placeholder="Doctor Name"
//           value={doctorName}
//           onChange={(e) => setDoctorName(e.target.value)}
//           className="w-full mb-3 p-3 border rounded-lg text-black"
//         />

//         {/* Specialization */}
//         <input
//           type="text"
//           placeholder="Specialization"
//           value={specialization}
//           onChange={(e) => setSpecialization(e.target.value)}
//           className="w-full mb-3 p-3 border rounded-lg text-black"
//         />

//         {/* Date */}
//         <input
//           type="date"
//           value={date}
//           onChange={(e) => setDate(e.target.value)}
//           className="w-full mb-3 p-3 border rounded-lg text-black"
//         />

//         {/* Time */}
//         <input
//           type="time"
//           value={time}
//           onChange={(e) => setTime(e.target.value)}
//           className="w-full mb-4 p-3 border rounded-lg text-black"
//         />

//         <button
//           onClick={handleBooking}
//           className="w-full py-3 bg-indigo-600 text-white rounded-lg font-semibold"
//         >
//           Confirm Booking
//         </button>

//         {/* 🔥 Show AI Doctor Details if available */}
//         {aiDoctor && (
//           <div className="mt-6 p-4 bg-blue-100 rounded-xl text-sm text-black">
//             <p className="font-semibold text-blue-800 mb-2">
//               🤖 AI Recommended Doctor Details
//             </p>
//             <p><strong>Name:</strong> {aiDoctor.name}</p>
//             <p><strong>Experience:</strong> {aiDoctor.experience}</p>
//             <p><strong>Consultation Fee:</strong> ₹{aiDoctor.consultationFee}</p>
//             <p><strong>Rating:</strong> ⭐ {aiDoctor.rating}</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default BookAppointment;

import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const BookAppointment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const aiDoctor = location.state?.doctorData;

  const [doctorName, setDoctorName] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (aiDoctor) {
      setDoctorName(aiDoctor.name || "");
      setSpecialization(aiDoctor.specialization || "");
    }
  }, [aiDoctor]);

  const handleBooking = async () => {
    if (!doctorName || !date || !time) {
      toast.error("Please fill all required fields");
      return;
    }

    try {
      setLoading(true);
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

      console.log(res.data);
      toast.success("Appointment booked successfully!");
      navigate("/my-appointments");
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Booking failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-screen h-full bg-linear-to-br from-[#0f172a] via-[#1e3a8a] to-[#0ea5e9] px-4 py-6 md:px-10">
      <div className="w-full">
        <div className="mb-6 md:mb-10 text-center md:text-left">
          <h1 className="text-2xl md:text-4xl font-bold text-white">
            📅 Book Appointment
          </h1>
          <p className="text-blue-200 mt-2 text-sm md:text-base">
            Schedule your consultation with the recommended doctor
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-5 mb-6 md:mb-8">
          <div className="bg-white/10 p-4 rounded-xl text-white border border-white/10">
            <p className="text-xs text-blue-200">Quick Process</p>
            <h3 className="text-sm md:text-lg font-semibold">Instant Booking</h3>
          </div>

          <div className="bg-white/10 p-4 rounded-xl text-white border border-white/10">
            <p className="text-xs text-blue-200">AI Assisted</p>
            <h3 className="text-sm md:text-lg font-semibold">Smart Doctor Match</h3>
          </div>

          <div className="bg-white/10 p-4 rounded-xl text-white border border-white/10">
            <p className="text-xs text-blue-200">Secure</p>
            <h3 className="text-sm md:text-lg font-semibold">Protected Booking</h3>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="bg-white/10 rounded-2xl p-4 md:p-6 border border-white/20 text-white">
            <h2 className="text-lg md:text-xl font-bold mb-4">
              Appointment Details
            </h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm mb-2 text-blue-100">
                  Doctor Name
                </label>
                <input
                  type="text"
                  placeholder="Doctor Name"
                  value={doctorName}
                  onChange={(e) => setDoctorName(e.target.value)}
                  className="w-full p-3 rounded-lg bg-white/10 border border-white/20 placeholder-gray-300 focus:outline-none text-sm md:text-base"
                />
              </div>

              <div>
                <label className="block text-sm mb-2 text-blue-100">
                  Specialization
                </label>
                <input
                  type="text"
                  placeholder="Specialization"
                  value={specialization}
                  onChange={(e) => setSpecialization(e.target.value)}
                  className="w-full p-3 rounded-lg bg-white/10 border border-white/20 placeholder-gray-300 focus:outline-none text-sm md:text-base"
                />
              </div>

              <div>
                <label className="block text-sm mb-2 text-blue-100">
                  Select Date
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none text-sm md:text-base text-white"
                />
              </div>

              <div>
                <label className="block text-sm mb-2 text-blue-100">
                  Select Time
                </label>
                <input
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none text-sm md:text-base text-white"
                />
              </div>

              <button
                onClick={handleBooking}
                disabled={loading}
                className="w-full bg-linear-to-r from-blue-500 to-purple-500 py-3 rounded-lg font-semibold text-sm md:text-base hover:scale-[1.02] transition disabled:opacity-70"
              >
                {loading ? "Booking..." : "Confirm Booking"}
              </button>
            </div>
          </div>

          <div className="space-y-5">
            {!aiDoctor ? (
              <div className="bg-white/10 rounded-2xl p-6 text-center border border-white/20 text-white">
                <div className="text-4xl md:text-5xl mb-3">👨‍⚕️</div>
                <h3 className="text-lg md:text-xl font-semibold">
                  Doctor details will appear here
                </h3>
                <p className="text-blue-200 text-sm mt-2">
                  Choose or get an AI recommended doctor first
                </p>
              </div>
            ) : (
              <>
                <div className="bg-white/10 rounded-2xl p-6 border border-white/20 text-white">
                  <h3 className="text-lg md:text-xl font-bold mb-4 text-cyan-200">
                    🤖 AI Recommended Doctor
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-white/10 rounded-xl p-4">
                      <p className="text-xs text-blue-200">Name</p>
                      <p className="font-semibold">{aiDoctor.name}</p>
                    </div>

                    <div className="bg-white/10 rounded-xl p-4">
                      <p className="text-xs text-blue-200">Specialization</p>
                      <p className="font-semibold">{aiDoctor.specialization}</p>
                    </div>

                    <div className="bg-white/10 rounded-xl p-4">
                      <p className="text-xs text-blue-200">Experience</p>
                      <p className="font-semibold">{aiDoctor.experience}</p>
                    </div>

                    <div className="bg-white/10 rounded-xl p-4">
                      <p className="text-xs text-blue-200">Consultation Fee</p>
                      <p className="font-semibold">₹{aiDoctor.consultationFee}</p>
                    </div>

                    <div className="bg-white/10 rounded-xl p-4 sm:col-span-2">
                      <p className="text-xs text-blue-200">Rating</p>
                      <p className="font-semibold">⭐ {aiDoctor.rating}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 rounded-2xl p-6 border border-white/20 text-white">
                  <h3 className="text-lg font-bold mb-3 text-green-200">
                    Booking Tips
                  </h3>
                  <ul className="space-y-2 text-sm text-blue-100">
                    <li>• Choose a suitable date and time carefully</li>
                    <li>• Ensure your phone and email are accessible</li>
                    <li>• Join video consultation on time if applicable</li>
                  </ul>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;