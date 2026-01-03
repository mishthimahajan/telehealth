const doctors = [
  { name: "Dr. Sharma", specialty: "Cardiologist" },
  { name: "Dr. Mehta", specialty: "Dermatologist" },
  { name: "Dr. Khan", specialty: "General Physician" },
];

const BookAppointment = () => {
  return (
    <div className="w-screen h-screen bg-linear-to-br from-blue-50 to-blue-100 p-10">
      <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">
        📅 Book Appointment
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {doctors.map((doc) => (
          <div
            key={doc.name}
            className="bg-white p-6 rounded-xl shadow-lg hover:scale-105 transition"
          >
            <h3 className="text-xl font-semibold">{doc.name}</h3>
            <p className="text-gray-600">{doc.specialty}</p>

            <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookAppointment;
