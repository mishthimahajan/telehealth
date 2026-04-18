// const Navbar = () => {
//   return (
//     <nav className="w-full fixed top-0 left-0 z-50 bg-linear-to-r from-blue-600 to-blue-800 px-10 py-4 flex items-center justify-between shadow-lg">

      
//       <div className="text-white text-2xl h-full font-bold flex items-center justify-between">
//         🩺 TeleHealth
//       </div>

//       <ul className="hidden md:flex gap-8 text-white font-medium">
//         <li className="cursor-pointer hover:text-blue-200">Symptom Checker</li>
//         <li className="cursor-pointer hover:text-blue-200">Book Appointment</li>
//         <li className="cursor-pointer hover:text-blue-200">Reports</li>
//         <li className="cursor-pointer hover:text-blue-200">Video Call</li>
//       </ul>

//       <button className="bg-white text-blue-700 px-5 py-2 rounded-lg font-semibold hover:bg-blue-100 transition">
//         Login
//       </button>
//     </nav>
//   );
// };

// export default Navbar;
// const Navbar = () => {
//   return (
//     <nav className="w-full fixed top-0 left-0 z-50 bg-linear-to-r from-blue-600 to-blue-800 shadow-lg">
//       <div className="max-w-7xl mx-auto px-10 py-4 flex items-center justify-between">

//         {/* Logo */}
//         <div className="text-white text-2xl font-bold flex items-center gap-2">
//           🩺 TeleHealth
//         </div>

//         {/* Right Side (Menu + Login) */}
//         <div className="flex items-center gap-8">

//           <ul className="hidden md:flex gap-6 text-white font-medium">
//             <li className="cursor-pointer hover:text-blue-200">Symptom Checker</li>
//             <li className="cursor-pointer hover:text-blue-200">Book Appointment</li>
//             <li className="cursor-pointer hover:text-blue-200">Reports</li>
//             <li className="cursor-pointer hover:text-blue-200">Video Call</li>
//           </ul>

//           <button className="bg-white text-blue-700 px-5 py-2 rounded-lg font-semibold hover:bg-blue-100 transition">
//             Login
//           </button>

//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     // <nav className="w-full fixed top-0 left-0 z-50 bg-blue-400 shadow-lg">
//     <nav className="fixed top-0 left-0 w-full z-50 bg-linear-to-br from-blue-50 to-blue-100 shadow-none">

//       <div className="max-w-7xl mx-auto px-10 py-4 flex items-center justify-between">

//         {/* Logo */}
//         <Link
//           to="/"
//           className="text-black text-2xl font-bold flex items-center gap-2"
//         >
//           🩺 TeleHealth
//         </Link>

//         {/* Right Side (Menu + Login) */}
//         <div className="flex items-center gap-8">

//           {/* Menu */}
//           <ul className="hidden md:flex gap-6 text-white font-medium">
//             <li>
//               <Link to="/symptom-checker" className="hover:text-white">
//                 Symptom Checker
//               </Link>
//             </li>
//             <li>
//               <Link to="/book-appointment" className="hover:text-white">
//                 Book Appointment
//               </Link>
//             </li>
//             <li>
//               <Link to="/reports" className="hover:text-white">
//                 Reports
//               </Link>
//             </li>
//             <li>
//               <Link to="/video-call" className="hover:text-white">
//                 Video Call
//               </Link>
//             </li>
//           </ul>

//           {/* Login Button */}
//           <Link to="/login">
//             <button className="bg-white text-blue-700 px-5 py-2 rounded-lg font-semibold hover:bg-blue-100 transition">
//               Login
//             </button>
//           </Link>

//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// import { Link, useLocation } from "react-router-dom";

// const Navbar = () => {
//   const location = useLocation();

//   // 🔴 Hide navbar on login page
//   if (location.pathname === "/login") {
//     return null;
//   }

//   return (
//     <nav className="fixed top-0 left-0 w-full z-50 bg-linear-to-br from-blue-50 to-blue-100 shadow-none">
//       <div className="max-w-7xl mx-auto px-10 py-4 flex items-center justify-between">

//         {/* Logo */}
//         <Link
//           to="/"
//           className="text-black text-2xl font-bold flex items-center gap-2"
//         >
//           🩺 TeleHealth
//         </Link>

//         {/* Right Side */}
//         <div className="flex items-center gap-8">

//           {/* Menu */}
//           <ul className="hidden md:flex gap-6 text-black font-medium">
//             <li>
//               <Link to="/symptom-checker" className="hover:text-blue-700">
//                 Symptom Checker
//               </Link>
//             </li>
//             <li>
//               <Link to="/book-appointment" className="hover:text-blue-700">
//                 Book Appointment
//               </Link>
//             </li>
//             <li>
//               <Link
//   to="/my-appointments"
//   className="hover:text-blue-700"
// >
//   My Appointments
// </Link>
//             </li>
//             <li>
//               <Link to="/reports" className="hover:text-blue-700">
//                 Reports
//               </Link>
//             </li>
//             <li>
//               <Link to="/video-call" className="hover:text-blue-700">
//                 Video Call
//               </Link>
//             </li>
//           </ul>

//           {/* Login */}
//           <Link to="/login">
//             <button className="bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
//               Login
//             </button>
//           </Link>

//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");

    setIsLoggedIn(!!token);

    if (user) {
      try {
        const parsedUser = JSON.parse(user);
        setUserName(parsedUser?.name || parsedUser?.fullName || "");
      } catch (error) {
        setUserName("");
      }
    } else {
      setUserName("");
    }
  }, [location.pathname]);

  if (location.pathname === "/login") {
    return null;
  }

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setUserName("");
    toast.success("Logged out successfully");
    navigate("/login");
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-blue-100 shadow-sm">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        <Link
          to="/"
          className="text-blue-700 text-2xl font-bold flex items-center gap-2"
        >
          🩺 TeleHealth
        </Link>

        <div className="flex items-center gap-4 md:gap-8">
          <ul className="hidden md:flex gap-6 text-gray-800 font-medium">
            <li>
              <Link to="/symptom-checker" className="hover:text-blue-700 transition">
                Symptom Checker
              </Link>
            </li>
            <li>
              <Link to="/book-appointment" className="hover:text-blue-700 transition">
                Book Appointment
              </Link>
            </li>
            <li>
              <Link to="/my-appointments" className="hover:text-blue-700 transition">
                My Appointments
              </Link>
            </li>
            <li>
              <Link to="/reports" className="hover:text-blue-700 transition">
                Reports
              </Link>
            </li>
            <li>
              <Link to="/video-call" className="hover:text-blue-700 transition">
                Video Call
              </Link>
            </li>
          </ul>

          {isLoggedIn ? (
            <div className="flex items-center gap-3">
              {userName && (
                <div className="hidden sm:flex items-center px-4 py-2 rounded-xl bg-blue-50 text-blue-700 font-semibold">
                  Hi, {userName}
                </div>
              )}

              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-5 py-2 rounded-lg font-semibold hover:bg-red-600 transition"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login">
              <button className="bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


