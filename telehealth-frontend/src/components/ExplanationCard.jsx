const ExplanationCard = ({ result }) => {
  if (!result) return null;

  return (
    <div className="rounded-3xl bg-white/10 border border-white/20 backdrop-blur-xl p-6 text-white shadow-xl">
      <h3 className="text-xl font-bold mb-4">Why this prediction?</h3>

      <div className="space-y-3">
        <div className="bg-white/10 rounded-2xl p-4">
          <p className="text-sm text-blue-200">Confidence Score</p>
          <p className="text-lg font-semibold mt-1">{result.confidence || 0}%</p>
        </div>

        <div className="bg-white/10 rounded-2xl p-4">
          <p className="text-sm text-blue-200">Matched Symptoms</p>
          <p className="mt-1">
            {result.matchedSymptoms?.length
              ? result.matchedSymptoms.join(", ")
              : "No matched symptoms"}
          </p>
        </div>

        <div className="bg-white/10 rounded-2xl p-4">
          <p className="text-sm text-blue-200">Explanation</p>
          <ul className="mt-2 list-disc list-inside space-y-1">
            {result.explanation?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExplanationCard;