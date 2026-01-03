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

import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  // 🔴 Hide navbar on login page
  if (location.pathname === "/login") {
    return null;
  }

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-linear-to-br from-blue-50 to-blue-100 shadow-none">
      <div className="max-w-7xl mx-auto px-10 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="text-black text-2xl font-bold flex items-center gap-2"
        >
          🩺 TeleHealth
        </Link>

        {/* Right Side */}
        <div className="flex items-center gap-8">

          {/* Menu */}
          <ul className="hidden md:flex gap-6 text-black font-medium">
            <li>
              <Link to="/symptom-checker" className="hover:text-blue-700">
                Symptom Checker
              </Link>
            </li>
            <li>
              <Link to="/book-appointment" className="hover:text-blue-700">
                Book Appointment
              </Link>
            </li>
            <li>
              <Link to="/reports" className="hover:text-blue-700">
                Reports
              </Link>
            </li>
            <li>
              <Link to="/video-call" className="hover:text-blue-700">
                Video Call
              </Link>
            </li>
          </ul>

          {/* Login */}
          <Link to="/login">
            <button className="bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
              Login
            </button>
          </Link>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;



