import { useEffect, useRef, useState } from "react";
import Peer from "peerjs";
import { io } from "socket.io-client";

const socket = io("http://localhost:3000");

const VideoCall = () => {

  const myVideo = useRef(null);
  const userVideo = useRef(null);

  const [peerId, setPeerId] = useState("");
  const [remoteId, setRemoteId] = useState("");
  const [stream, setStream] = useState(null);
  const [time, setTime] = useState(0);
  const [doctor, setDoctor] = useState(null);

  const peerRef = useRef(null);

  // Load AI recommended doctor
  useEffect(() => {

    const savedDoctor = localStorage.getItem("recommendedDoctor");

    if (savedDoctor) {
      setDoctor(JSON.parse(savedDoctor));
    }

  }, []);

  // Initialize peer + camera
  useEffect(() => {

    const peer = new Peer();

    peer.on("open", (id) => {
      setPeerId(id);
    });

    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((currentStream) => {

        setStream(currentStream);

        if (myVideo.current) {
          myVideo.current.srcObject = currentStream;
        }

        peer.on("call", (call) => {

          call.answer(currentStream);

          call.on("stream", (remoteStream) => {

            if (userVideo.current) {
              userVideo.current.srcObject = remoteStream;
            }

          });

        });

      });

    peerRef.current = peer;

  }, []);

  // Call timer
  useEffect(() => {

    const interval = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);

  }, []);

  // Start call
  const callUser = () => {

    if (!remoteId) return;

    const call = peerRef.current.call(remoteId, stream);

    call.on("stream", (remoteStream) => {

      if (userVideo.current) {
        userVideo.current.srcObject = remoteStream;
      }

    });

  };

  // Toggle camera
  const toggleCamera = () => {

    if (!stream) return;

    const videoTrack = stream.getVideoTracks()[0];
    videoTrack.enabled = !videoTrack.enabled;

  };

  // Toggle microphone
  const toggleMic = () => {

    if (!stream) return;

    const audioTrack = stream.getAudioTracks()[0];
    audioTrack.enabled = !audioTrack.enabled;

  };

  // End call
  const endCall = () => {

    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
    }

    if (myVideo.current) {
      myVideo.current.srcObject = null;
    }

    if (userVideo.current) {
      userVideo.current.srcObject = null;
    }

  };

  return (

    <div className="w-screen h-screen bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 flex flex-col items-center p-8">

      {/* Page Title */}
      <h1 className="text-4xl font-bold text-white mb-6">
        🩺 TeleHealth Video Consultation
      </h1>

      <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl p-8 w-full max-w-6xl">

        {/* Call ID */}
        <div className="flex justify-between items-center mb-6">

          <p className="text-gray-700">
            Your Call ID:
            <span className="text-indigo-600 font-bold ml-2">
              {peerId}
            </span>
          </p>

          <input
            type="text"
            placeholder="Enter Doctor ID"
            value={remoteId}
            onChange={(e) => setRemoteId(e.target.value)}
            className="border px-3 py-2 rounded-lg mr-3"
          />

          <button
            onClick={callUser}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-xl shadow-md"
          >
            📞 Start Call
          </button>

        </div>

        {/* Doctor Info (AI Recommended) */}
        <div className="flex items-center gap-4 mb-6 bg-gray-100 p-4 rounded-xl">

          <img
            src="https://cdn-icons-png.flaticon.com/512/3774/3774299.png"
            className="w-14 h-14 rounded-full"
          />

          <div>

            <h2 className="font-semibold text-lg">
              {doctor ? doctor.name : "AI Recommended Doctor"}
            </h2>

            <p className="text-gray-600 text-sm">
              {doctor ? doctor.specialization : "Loading specialization..."}
            </p>

          </div>

        </div>

        {/* Video Section */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* Patient Video */}
          <div className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-xl">

            <video
              ref={myVideo}
              autoPlay
              muted
              className="w-full h-87.5 object-cover"
            />

            <div className="absolute bottom-3 left-3 bg-black/50 px-4 py-1 rounded-lg text-white text-sm">
              You
            </div>

          </div>

          {/* Doctor Video */}
          <div className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-xl">

            <video
              ref={userVideo}
              autoPlay
              className="w-full h-87.5 object-cover"
            />

            <div className="absolute bottom-3 left-3 bg-black/50 px-4 py-1 rounded-lg text-white text-sm">
              {doctor ? doctor.name : "Doctor"}
            </div>

          </div>

        </div>

        {/* Call Timer */}
        <div className="text-center font-semibold mt-4 text-gray-700">

          ⏱ Call Duration:
          {Math.floor(time / 60)}:
          {("0" + (time % 60)).slice(-2)}

        </div>

        {/* Controls */}
        <div className="flex justify-center gap-6 mt-8">

          <button
            onClick={toggleMic}
            className="bg-gray-800 hover:bg-gray-900 text-white p-4 rounded-full shadow-lg"
          >
            🎤
          </button>

          <button
            onClick={toggleCamera}
            className="bg-gray-800 hover:bg-gray-900 text-white p-4 rounded-full shadow-lg"
          >
            📷
          </button>

          <button
            onClick={endCall}
            className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full shadow-lg"
          >
            End Call
          </button>

        </div>

      </div>

    </div>

  );
};

export default VideoCall;