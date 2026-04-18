// import { GoogleLogin } from "@react-oauth/google";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// import axios from "axios";

// const Login = () => {
//   const navigate = useNavigate();

  
// // const handleGoogleSuccess = async (credentialResponse) => {
// //   console.log("GOOGLE CREDENTIAL:", credentialResponse);

// //   try {
// //     const googleToken = credentialResponse.credential;

// //     console.log("GOOGLE TOKEN LENGTH:", googleToken?.length);

// //     const res = await axios.post(
// //       "http://localhost:3000/api/auth/google",
// //       // { token: googleToken }
// //       { token: googleToken },
// //       { withCredentials: true }
// //     );

// //     localStorage.setItem("token", res.data.token);
// //     localStorage.setItem("user", JSON.stringify(res.data.user));

// //     navigate("/");
// //   } catch (error) {
// //     console.error("Google login failed:", error);
// //   }
// // };


// const handleGoogleSuccess = async (credentialResponse) => {
//   console.log("GOOGLE RESPONSE:", credentialResponse);

//   try {
//     const googleToken = credentialResponse.credential;

//     if (!googleToken) {
//       console.error("No Google token received");
//       return;
//     }

//     const res = await axios.post(
//       "http://localhost:3000/api/auth/google",
//       { token: googleToken },
//       { withCredentials: true }
//     );

//     localStorage.setItem("token", res.data.token);
//     localStorage.setItem("user", JSON.stringify(res.data.user));

//     navigate("/");
//   } catch (error) {
//     console.error("Google login failed:", error);
//   }
// }


//   const handleGoogleError = () => {
//     console.log("Google Login Failed");
//   };

//   return (
//     <div className="w-screen h-screen  flex items-center justify-center bg-linear-to-br from-blue-50 via-blue-300 to-blue-600">


//       <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-8">

//         {/* Heading */}
//         <div className="text-center mb-8">
//           <h2 className="text-3xl font-extrabold text-blue-700">
//             Welcome Back 👋
//           </h2>
//           <p className="text-gray-500 mt-2">
//             Sign in to continue to TeleHealth
//           </p>
//         </div>

//         {/* Google Login */}
//         <div className="flex justify-center">
//           <GoogleLogin
//             onSuccess={handleGoogleSuccess}
//             onError={handleGoogleError}
//             theme="outline"
//             size="large"
//             width="300"
//           />
//         </div>

//         {/* Divider */}
//         <div className="flex items-center my-6">
//           <div className="flex-1 h-px bg-gray-300"></div>
//           <span className="px-3 text-black text-sm">OR</span>
//           <div className="flex-1 h-px bg-gray-300"></div>
//         </div>

//         {/* Email Login (UI only for now) */}
//         <form className="space-y-4">

//           <input
//             type="email"
//             placeholder="Email address"
//             className="w-full px-4 py-3 text-black rounded-lg border border-gray-900 focus:ring-2 focus:ring-blue-400 focus:outline-none"
//           />

//           <input
//             type="password"
//             placeholder="Password"
//             className="w-full px-4 py-3 text-black rounded-lg border border-gray-900 focus:ring-2 focus:ring-blue-400 focus:outline-none"
//           />

//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
//           >
//             Login
//           </button>
//         </form>

//         {/* Footer */}
//         <p className="text-center text-sm text-gray-500 mt-6">
//           Don’t have an account?{" "}
//           {/* <span className="text-blue-600 font-semibold cursor-pointer hover:underline">
//             Sign up
//           </span> */}
//           <Link to="/signup" className="text-blue-900 font-semibold hover:underline">
//   Sign up
// </Link>
//         </p>
        


//       </div>
//     </div>
//   );
// };

// export default Login;


import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleGoogleSuccess = async (credentialResponse) => {
    console.log("GOOGLE RESPONSE:", credentialResponse);

    try {
      const googleToken = credentialResponse.credential;

      if (!googleToken) {
        toast.error("No Google token received");
        return;
      }

      setLoading(true);

      const res = await axios.post(
        "http://localhost:3000/api/auth/google",
        { token: googleToken },
        { withCredentials: true }
      );

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      toast.success("Google Login Successful 🎉");
      navigate("/symptom-checker");
    } catch (error) {
      console.error("Google login failed:", error);
      toast.error(error.response?.data?.message || "Google login failed ❌");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleError = () => {
    console.log("Google Login Failed");
    toast.error("Google Login Failed ❌");
  };

  const handleEmailLogin = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      toast.error("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:3000/api/login",
        {
          email: formData.email,
          password: formData.password,
        },
        { withCredentials: true }
      );

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      toast.success("Login Successful 🎉");
      navigate("/symptom-checker");
    } catch (error) {
      console.error("Email login failed:", error);
      toast.error(error.response?.data?.message || "Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-linear-to-br from-blue-50 via-blue-300 to-blue-600">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-blue-700">
            Welcome Back 👋
          </h2>
          <p className="text-gray-500 mt-2">
            Sign in to continue to TeleHealth
          </p>
        </div>

        <div className="flex justify-center">
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={handleGoogleError}
            theme="outline"
            size="large"
            width="300"
          />
        </div>

        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="px-3 text-black text-sm">OR</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        <form className="space-y-4" onSubmit={handleEmailLogin}>
          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 text-black rounded-lg border border-gray-900 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-3 text-black rounded-lg border border-gray-900 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-70"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-blue-900 font-semibold hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
