import { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("/api/appointments/my", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setAppointments(data);
    };
    fetchData();
  }, []);

  const total = appointments.length;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-3 gap-6">
        <div className="bg-blue-500 text-white p-6 rounded-xl shadow-lg">
          <h2 className="text-lg">Total Appointments</h2>
          <p className="text-4xl font-bold mt-2">{total}</p>
        </div>

        <div className="bg-green-500 text-white p-6 rounded-xl shadow-lg">
          <h2 className="text-lg">Confirmed</h2>
          <p className="text-4xl font-bold mt-2">{total}</p>
        </div>

        <div className="bg-purple-500 text-white p-6 rounded-xl shadow-lg">
          <h2 className="text-lg">Doctors Consulted</h2>
          <p className="text-4xl font-bold mt-2">
            {new Set(appointments.map(a => a.doctorName)).size}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;