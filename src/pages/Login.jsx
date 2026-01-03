import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


const Login = () => {
  const navigate = useNavigate();

  const handleGoogleSuccess = (credentialResponse) => {
    console.log("Google Login Success:", credentialResponse);

    
    navigate("/");
  };

  const handleGoogleError = () => {
    console.log("Google Login Failed");
  };

  return (
    <div className="w-screen h-screen  flex items-center justify-center bg-linear-to-br from-blue-50 via-blue-300 to-blue-600">


      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-8">

        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-blue-700">
            Welcome Back 👋
          </h2>
          <p className="text-gray-500 mt-2">
            Sign in to continue to TeleHealth
          </p>
        </div>

        {/* Google Login */}
        <div className="flex justify-center">
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={handleGoogleError}
            theme="outline"
            size="large"
            width="300"
          />
        </div>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="px-3 text-black text-sm">OR</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Email Login (UI only for now) */}
        <form className="space-y-4">

          <input
            type="email"
            placeholder="Email address"
            className="w-full px-4 py-3 text-black rounded-lg border border-gray-900 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 text-black rounded-lg border border-gray-900 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Don’t have an account?{" "}
          {/* <span className="text-blue-600 font-semibold cursor-pointer hover:underline">
            Sign up
          </span> */}
          <Link to="/signup" className="text-blue-900 font-semibold hover:underline">
  Sign up
</Link>
        </p>
        


      </div>
    </div>
  );
};

export default Login;
