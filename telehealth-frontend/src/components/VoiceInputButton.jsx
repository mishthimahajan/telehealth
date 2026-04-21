import { useRef, useState } from "react";
import toast from "react-hot-toast";

const VoiceInputButton = ({ onTranscript }) => {
  const [listening, setListening] = useState(false);
  const recognitionRef = useRef(null);

  const startVoiceInput = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      toast.error("Voice input not supported");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-IN";
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () => setListening(true);

    recognition.onresult = (event) => {
      const transcript = event.results?.[0]?.[0]?.transcript || "";
      onTranscript(transcript);
    };

    recognition.onerror = () => {
      toast.error("Voice input failed");
      setListening(false);
    };

    recognition.onend = () => {
      setListening(false);
    };

    recognitionRef.current = recognition;
    recognition.start();
  };

  return (
    <button
      type="button"
      onClick={startVoiceInput}
      className={`px-4 py-3 rounded-xl font-semibold text-white ${
        listening ? "bg-red-500" : "bg-linear-to-r from-cyan-500 to-blue-500"
      }`}
    >
      {listening ? "Listening..." : "🎤 Voice Input"}
    </button>
  );
};

export default VoiceInputButton;