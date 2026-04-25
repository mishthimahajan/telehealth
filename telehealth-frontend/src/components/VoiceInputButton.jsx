const VoiceInputButton = ({ onClick, listening = false }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-3 rounded-xl font-semibold text-white ${
        listening ? "bg-red-500" : "bg-gradient-to-r from-cyan-500 to-blue-500"
      }`}
    >
      {listening ? "Stop Listening" : "🎤 Voice Input"}
    </button>
  );
};

export default VoiceInputButton;