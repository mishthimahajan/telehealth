const VideoCall = () => {
  return (
    <div className="w-screen h-screen bg-linear-to-br from-blue-50 to-blue-100 flex justify-center items-center">
      <div className="bg-white p-10 rounded-2xl shadow-xl text-center w-full max-w-xl">
        <h2 className="text-3xl font-bold text-blue-700 mb-4">
          🎥 Video Consultation
        </h2>

        <p className="text-gray-600 mb-6">
          Connect securely with your doctor in real-time.
        </p>

        <div className="bg-gray-200 h-48 rounded-lg flex items-center justify-center mb-6">
          <span className="text-gray-500">Video Preview</span>
        </div>

        <div className="flex gap-4 justify-center">
          <button className="bg-green-600 text-black px-6 py-2 rounded-lg">
            Start Call
          </button>
          <button className="bg-red-600 text-black px-6 py-2 rounded-lg">
            End Call
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoCall;

