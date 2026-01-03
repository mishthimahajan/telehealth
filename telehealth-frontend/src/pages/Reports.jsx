const reports = [
  { name: "Blood Test", date: "12 Feb 2025", status: "Normal" },
  { name: "X-Ray", date: "05 Jan 2025", status: "Reviewed" },
  { name: "MRI Scan", date: "28 Dec 2024", status: "Pending" },
];

const Reports = () => {
  return (
    <div className="w-screen h-screen bg-linear-to-br from-blue-200 to-blue-500 p-10">
      <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">
        📊 Medical Reports
      </h2>

      <div className="bg-blue-100 rounded-xl shadow-lg overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-blue-600 text-black">
            <tr>
              <th className="p-4">Report</th>
              <th className="p-4">Date</th>
              <th className="p-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((r) => (
              <tr key={r.name} className="border-b">
                <td className="p-4">{r.name}</td>
                <td className="p-4">{r.date}</td>
                <td className="p-4">{r.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Reports;


