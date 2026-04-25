const ExplanationCard = ({ title, items = [] }) => {
  return (
    <div className="bg-white/10 border border-white/20 rounded-2xl p-4 text-white">
      <h3 className="text-lg font-semibold mb-3">{title}</h3>
      <ul className="space-y-2 text-sm text-blue-100">
        {items.map((item, index) => (
          <li key={index}>• {item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExplanationCard;