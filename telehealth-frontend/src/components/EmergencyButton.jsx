const EmergencyButton = () => {
  const handleEmergency = () => {
    alert("Emergency support activated");
  };

  return (
    <button
      onClick={handleEmergency}
      className="fixed bottom-6 right-6 bg-red-600 hover:bg-red-700 text-white px-5 py-3 rounded-full shadow-lg z-50"
    >
      🚑 Emergency
    </button>
  );
};

export default EmergencyButton;