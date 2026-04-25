// import { Link } from "react-router-dom";
// import { GoogleLogin } from "@react-oauth/google";

// const Signup = () => {
//   return (
//     <div className="flex items-center justify-center w-screen h-screen bg-linear-to-br from-blue-50 to-blue-100">
//       <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-8">

//         {/* Heading */}
//         <h2 className="text-3xl font-bold text-center text-blue-600 mb-2">
//           Create Account ✨
//         </h2>
//         <p className="text-center text-black mb-6">
//           Join TeleHealth and start your care journey
//         </p>

//         {/* Google Signup */}
//         <div className="mb-4">
//           <GoogleLogin
//             onSuccess={(res) => {
//               console.log("Google signup success", res);
//             }}
//             onError={() => {
//               console.log("Google signup failed");
//             }}
//             width="100%"
//           />
//         </div>

//         {/* Divider */}
//         <div className="flex items-center gap-2 my-4">
//           <div className="flex-1 h-px bg-gray-300" />
//           <span className="text-sm text-black">OR</span>
//           <div className="flex-1 h-px bg-gray-300" />
//         </div>

//         {/* Signup Form */}
//         <form className="space-y-4">

//           <input
//             type="text"
//             placeholder="Full Name"
//             className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
//           />

//           <input
//             type="email"
//             placeholder="Email address"
//             className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
//           />

//           <input
//             type="password"
//             placeholder="Password"
//             className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
//           />

//           <input
//             type="password"
//             placeholder="Confirm Password"
//             className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
//           />

//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-black py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
//           >
//             Sign Up
//           </button>
//         </form>

//         {/* Login Link */}
//         <p className="text-center text-sm text-gray-600 mt-6">
//           Already have an account?{" "}
//           <Link to="/login" className="text-blue-600 font-semibold hover:underline">
//             Login
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Signup;


// import { Link } from "react-router-dom";
// import { GoogleLogin } from "@react-oauth/google";

// const Signup = () => {
//   return (
//     <div className="flex items-center justify-center w-screen h-screen bg-linear-to-br from-blue-50 to-blue-100">
//       <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-8">

//         <h2 className="text-3xl font-bold text-center text-blue-600 mb-2">
//           Create Account ✨
//         </h2>

//         <p className="text-center text-gray-500 mb-6">
//           Join TeleHealth and start your care journey
//         </p>

//         {/* Google Signup */}
//         <GoogleLogin
//           onSuccess={(res) => console.log(res)}
//           onError={() => console.log("Signup Failed")}
//           width="100%"
//         />

//         <div className="flex items-center gap-2 my-5">
//           <div className="flex-1 h-px bg-gray-300" />
//           <span className="text-sm text-gray-500">OR</span>
//           <div className="flex-1 h-px bg-gray-300" />
//         </div>

//         {/* Inputs */}
//         <input
//           type="text"
//           placeholder="Full Name"
//           className="w-full px-4 py-2 mb-3 border rounded-lg 
//                      text-gray-900 placeholder-gray-400 bg-white
//                      focus:outline-none focus:ring-2 focus:ring-blue-400"
//         />

//         <input
//           type="email"
//           placeholder="Email address"
//           className="w-full px-4 py-2 mb-3 border rounded-lg 
//                      text-gray-900 placeholder-gray-400 bg-white
//                      focus:outline-none focus:ring-2 focus:ring-blue-400"
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           className="w-full px-4 py-2 mb-4 border rounded-lg 
//                      text-gray-900 placeholder-gray-400 bg-white
//                      focus:outline-none focus:ring-2 focus:ring-blue-400"
//         />

//         <button className="w-full bg-blue-600 text-black py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
//           Sign Up
//         </button>

//         <p className="text-center text-sm text-gray-600 mt-6">
//           Already have an account?{" "}
//           <Link to="/login" className="text-blue-600 font-semibold hover:underline">
//             Login
//           </Link>
//         </p>

//       </div>
//     </div>
//   );
// };

// export default Signup;

// import { Link, useNavigate } from "react-router-dom";
// import { GoogleLogin } from "@react-oauth/google";
// import { useState } from "react";
// import axios from "axios";

// const Signup = () => {
//   const navigate = useNavigate();

//   const [fullName, setFullName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const res = await axios.post(
//         "http://localhost:3000/api/signup",
//         {
//           fullName,
//           email,
//           password,
          
//         }
//       );

//       alert("Signup successful!");
//       console.log(res.data);

//       navigate("/login");
//     } catch (error) {
//       console.error("Signup error:", error.response?.data || error.message);
//       alert(error.response?.data?.message || "Signup failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center w-screen h-screen bg-linear-to-br from-blue-300 to-blue-600">
//       <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-8">

//         <h2 className="text-3xl font-bold text-center text-blue-600 mb-2">
//           Create Account ✨
//         </h2>

//         <p className="text-center text-gray-500 mb-6">
//           Join TeleHealth and start your care journey
//         </p>

//         {/* Google Signup */}
//         <GoogleLogin
//   onSuccess={async (credentialResponse) => {
//     const res = await axios.post(
//       "http://localhost:3000/api/auth/google",
//       { token: credentialResponse.credential }
//     );

//     localStorage.setItem("token", res.data.token);
//     navigate("/");
//   }}
//   onError={() => alert("Google Signin Failed")}
// />



//         <div className="flex items-center gap-2 my-5">
//           <div className="flex-1 h-px bg-gray-300" />
//           <span className="text-sm text-gray-500">OR</span>
//           <div className="flex-1 h-px bg-gray-300" />
//         </div>

//         {/* FORM */}
//         <form onSubmit={handleSignup}>
//           <input
//             type="text"
//             placeholder="Full Name"
//             value={fullName}
//             onChange={(e) => setFullName(e.target.value)}
//             required
//             className="w-full px-4 py-2 mb-3 border rounded-lg 
//                        text-black placeholder-gray-400 bg-white
//                        focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />

//           <input
//             type="email"
//             placeholder="Email address"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             className="w-full px-4 py-2 mb-3 border rounded-lg 
//                        text-black placeholder-gray-400 bg-white
//                        focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />

//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             className="w-full px-4 py-2 mb-4 border rounded-lg 
//                        text-black placeholder-gray-400 bg-white
//                        focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-blue-600 text-black py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
//           >
//             {loading ? "Signing up..." : "Sign Up"}
//           </button>
//         </form>

//         <p className="text-center text-sm text-gray-600 mt-6">
//           Already have an account?{" "}
//           <Link to="/login" className="text-white font-semibold hover:underline">
//             Login
//           </Link>
//         </p>

//       </div>
//     </div>
//   );
// };

// export default Signup;

import { Link, useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const Signup = () => {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/signup`, {
        fullName,
        email,
        password,
      });

      console.log(res.data);
      toast.success("Signup successful! 🎉");
      navigate("/login");
    } catch (error) {
      console.error("Signup error:", error.response?.data || error.message);
      toast.error(error.response?.data?.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignupSuccess = async (credentialResponse) => {
    try {
      setLoading(true);

      const res = await axios.post(`${import.meta.env.VITE_API_URL}/auth/google`, {
        token: credentialResponse.credential,
      });

      localStorage.setItem("token", res.data.token);
      toast.success("Google signup successful! 🎉");
      navigate("/");
    } catch (error) {
      console.error("Google signup error:", error.response?.data || error.message);
      toast.error(error.response?.data?.message || "Google Signin Failed");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignupError = () => {
    toast.error("Google Signin Failed");
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-linear-to-br from-blue-300 to-blue-600">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-2">
          Create Account ✨
        </h2>

        <p className="text-center text-gray-500 mb-6">
          Join TeleHealth and start your care journey
        </p>

        <GoogleLogin
          onSuccess={handleGoogleSignupSuccess}
          onError={handleGoogleSignupError}
        />

        <div className="flex items-center gap-2 my-5">
          <div className="flex-1 h-px bg-gray-300" />
          <span className="text-sm text-gray-500">OR</span>
          <div className="flex-1 h-px bg-gray-300" />
        </div>

        <form onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
            className="w-full px-4 py-2 mb-3 border rounded-lg text-black placeholder-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 mb-3 border rounded-lg text-black placeholder-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 mb-4 border rounded-lg text-black placeholder-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-70"
          >
            {loading ? "Signing up..." : "Sign Up"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 font-semibold hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
