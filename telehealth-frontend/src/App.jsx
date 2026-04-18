// import React from "react";

// import {BrowserRouter as Router, Routes, Route} from "react-router-dom"; 

// import Home from "./pages/Home";
// import Navbar from "./components/Navbar";
// import Login from "./pages/Login";
// import SymptomChecker from "./pages/SymptomChecker";
// import BookAppointment from "./pages/BookAppointment";
// import Reports from "./pages/Reports";
// import VideoCall from "./pages/VideoCall";
  

// const App = () => {
  
//   return (
//     <>
//     <Navbar />
//     {/* <div style={{paddingTop: "80px"}} > */}
//     <div className="pt-20">
    

//       <Routes>
//         <Route path="/" element={<Home/>} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/symptom-checker" element={<SymptomChecker />} />
//         <Route path="/book-appointment" element={<BookAppointment />} />
//         <Route path="/reports" element={<Reports />} />
//         <Route path="/video-call" element={<VideoCall />} />

        
//         {/* <Route path="/hero" element={<Hero/>} />
//         <Route path="/featurecard" element={<FeatureCard/>} />
//         <Route path="/footer" element={<Footer/>} /> */}
//       </Routes>
//     </div>
    
    
    
//     </>
//   );
// };

// export default App;

// import React from "react";
// import { Routes, Route, useLocation } from "react-router-dom";

// import Home from "./pages/Home";
// import Navbar from "./components/Navbar";
// import Login from "./pages/Login";
// import SymptomChecker from "./pages/SymptomChecker";
// import BookAppointment from "./pages/BookAppointment";
// import Reports from "./pages/Reports";
// import VideoCall from "./pages/VideoCall";
// import Signup from "./pages/Signup";
// import MyAppointments from "./pages/MyAppointments";

// const App = () => {
//   const location = useLocation();

//   // Hide navbar on login page
//   const hideNavbar = location.pathname === "/login";

//   return (
//     <>
//       {!hideNavbar && <Navbar />}

//       <div className={!hideNavbar ? "pt-20" : ""}>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/symptom-checker" element={<SymptomChecker />} />
//           <Route path="/book-appointment" element={<BookAppointment />} />
//           <Route path="/reports" element={<Reports />} />
//           <Route path="/video-call" element={<VideoCall />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/my-appointments" element={<MyAppointments />} />

//         </Routes>
//       </div>
//     </>
//   );
// };

// export default App;

import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast"; // ✅ ADD THIS

import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import SymptomChecker from "./pages/SymptomChecker";
import BookAppointment from "./pages/BookAppointment";
import Reports from "./pages/Reports";
import VideoCall from "./pages/VideoCall";
import Signup from "./pages/Signup";
import MyAppointments from "./pages/MyAppointments";

const App = () => {
  const location = useLocation();

  // const hideNavbar = location.pathname === "/login";
  const hideNavbar =
  location.pathname === "/login" || location.pathname === "/signup";

  return (
    <>
      {/* ✅ ADD TOASTER HERE */}
      <Toaster position="bottom-up-right" />

      {!hideNavbar && <Navbar />}

      <div className={!hideNavbar ? "pt-20" : ""}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/symptom-checker" element={<SymptomChecker />} />
          <Route path="/book-appointment" element={<BookAppointment />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/video-call" element={<VideoCall />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/my-appointments" element={<MyAppointments />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
