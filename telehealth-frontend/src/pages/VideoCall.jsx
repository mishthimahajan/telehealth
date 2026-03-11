import { useEffect, useRef, useState } from "react";
import Peer from "peerjs";

const VideoCall = () => {
  const myVideo = useRef(null);
  const userVideo = useRef(null);

  const [peerId, setPeerId] = useState("");
  const [remoteId, setRemoteId] = useState("");
  const [stream, setStream] = useState(null);

  const peerRef = useRef(null);

  useEffect(() => {
    const peer = new Peer();

    peer.on("open", (id) => {
      setPeerId(id);
    });

    // navigator.mediaDevices
    //   .getUserMedia({ video: true, audio: true })
    //   .then((stream) => {
    //     myVideo.current.srcObject = stream;

    //     peer.on("call", (call) => {
    //       call.answer(stream);

    //       call.on("stream", (remoteStream) => {
    //         userVideo.current.srcObject = remoteStream;
    //       });
    //     });
    //   });
    navigator.mediaDevices
  .getUserMedia({ video: true, audio: true })
  .then((currentStream) => {
    myVideo.current.srcObject = currentStream;
    setStream(currentStream);
  });

    peerRef.current = peer;
  }, []);

  const callUser = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        const call = peerRef.current.call(remoteId, stream);

        call.on("stream", (remoteStream) => {
          userVideo.current.srcObject = remoteStream;
        });
      });
  };
  const toggleCamera = () => {
  if (!stream) return;

  const videoTrack = stream.getVideoTracks()[0];
  videoTrack.enabled = !videoTrack.enabled;
};

 return (
  <div className="w-screen h-screen bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 flex flex-col items-center p-8">

    {/* Title */}
    <h1 className="text-4xl font-bold text-black mb-8">
      🩺 TeleHealth Video Consultation
    </h1>

    {/* Main Card */}
    <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl p-8 w-full max-w-6xl">

      {/* Call Info */}
      <div className="flex justify-between items-center mb-6">

        <div>
          <p className="text-gray-600">
            Your Call ID:
            <span className="text-indigo-600 font-bold ml-2">
              {peerId}
            </span>
          </p>
        </div>

        <button
          onClick={callUser}
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-xl shadow-md"
        >
          📞 Start Call
        </button>

      </div>

      {/* Video Section */}
      <div className="grid md:grid-cols-2 gap-6">

        {/* Patient Video */}
        <div className="bg-black rounded-2xl p-4 shadow-inner">

          <h3 className="text-lg font-semibold mb-2 text-center">
            You
          </h3>

          <video
            ref={myVideo}
            autoPlay
            muted
            className="rounded-xl w-full border"
          />

        </div>

        {/* Doctor Video */}
        <div className="bg-gray-800 rounded-2xl p-4 shadow-inner">

          <h3 className="text-lg font-semibold mb-2 text-center">
            Doctor
          </h3>

          <video
            ref={userVideo}
            autoPlay
            className="rounded-xl w-full border"
          />

        </div>

      </div>

      {/* Controls */}
      <div className="flex justify-center gap-6 mt-8">

        <button className="bg-red-500 hover:bg-red-600 text-black px-6 py-3 rounded-full shadow-lg">
          🔴 End Call
        </button>

        <button className="bg-gray-700 hover:bg-gray-800 text-black px-6 py-3 rounded-full shadow-lg">
          🎤 Mute
        </button>

        <button className="bg-blue-500 hover:bg-blue-600 text-black px-6 py-3 rounded-full shadow-lg">
          📷 Camera
        </button>

      </div>

      {/* Extra Section */}
      <div className="mt-8 grid md:grid-cols-2 gap-6">

        {/* Doctor Notes */}
        <div className="bg-black p-4 rounded-xl shadow">
          <h3 className="font-semibold mb-2">Doctor Notes</h3>
          <textarea
            placeholder="Doctor can write prescription notes..."
            className="w-full border rounded-lg p-2"
          />
        </div>

        {/* Chat */}
        <div className="bg-black p-4 rounded-xl shadow">
          <h3 className="font-semibold mb-2">Chat</h3>
          <input
            placeholder="Type message..."
            className="w-full border rounded-lg p-2"
          />
        </div>

      </div>

    </div>
  </div>
);
};

export default VideoCall;
