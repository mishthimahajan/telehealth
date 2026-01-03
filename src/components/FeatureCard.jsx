const FeatureCard = ({ icon, title, desc }) => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition text-center">
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-blue-800 mb-2">{title}</h3>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
};

export default FeatureCard;
