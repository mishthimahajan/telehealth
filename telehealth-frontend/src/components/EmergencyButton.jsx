import axios from "axios";
import toast from "react-hot-toast";

const EmergencyButton = () => {
  const handleEmergency = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        toast.error("Please login first");
        return;
      }

      const res = await axios.post(
        "http://localhost:3000/api/emergency/alert",
        {
          message: "Emergency support requested",
          timestamp: new Date().toISOString(),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(res.data);
      toast.success("Emergency alert sent successfully 🚑");
    } catch (error) {
      console.error(error);
      toast.error(
        error.response?.data?.message || "Emergency request failed"
      );
    }
  };

  return (
    <button
      onClick={handleEmergency}
      className="fixed top-24 right-6 z-87.5  bg-red-600 hover:bg-red-700 text-white px-5 py-3 rounded-full shadow-2xl font-semibold transition hover:scale-105"
    >
      🚑 Emergency
    </button>
  );
};

export default EmergencyButton;