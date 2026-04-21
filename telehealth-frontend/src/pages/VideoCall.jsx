// import { useEffect, useRef, useState } from "react";
// import Peer from "peerjs";
// import { io } from "socket.io-client";

// const socket = io("http://localhost:3000");

// const VideoCall = () => {

//   const myVideo = useRef(null);
//   const userVideo = useRef(null);

//   const [peerId, setPeerId] = useState("");
//   const [remoteId, setRemoteId] = useState("");
//   const [stream, setStream] = useState(null);
//   const [time, setTime] = useState(0);
//   const [doctor, setDoctor] = useState(null);

//   const peerRef = useRef(null);

//   // Load AI recommended doctor
//   useEffect(() => {

//     const savedDoctor = localStorage.getItem("recommendedDoctor");

//     if (savedDoctor) {
//       setDoctor(JSON.parse(savedDoctor));
//     }

//   }, []);

//   // Initialize peer + camera
//   useEffect(() => {

//     const peer = new Peer();

//     peer.on("open", (id) => {
//       setPeerId(id);
//     });

//     navigator.mediaDevices
//       .getUserMedia({ video: true, audio: true })
//       .then((currentStream) => {

//         setStream(currentStream);

//         if (myVideo.current) {
//           myVideo.current.srcObject = currentStream;
//         }

//         peer.on("call", (call) => {

//           call.answer(currentStream);

//           call.on("stream", (remoteStream) => {

//             if (userVideo.current) {
//               userVideo.current.srcObject = remoteStream;
//             }

//           });

//         });

//       });

//     peerRef.current = peer;

//   }, []);

//   // Call timer
//   useEffect(() => {

//     const interval = setInterval(() => {
//       setTime((prev) => prev + 1);
//     }, 1000);

//     return () => clearInterval(interval);

//   }, []);

//   // Start call
//   const callUser = () => {

//     if (!remoteId) return;

//     const call = peerRef.current.call(remoteId, stream);

//     call.on("stream", (remoteStream) => {

//       if (userVideo.current) {
//         userVideo.current.srcObject = remoteStream;
//       }

//     });

//   };

//   // Toggle camera
//   const toggleCamera = () => {

//     if (!stream) return;

//     const videoTrack = stream.getVideoTracks()[0];
//     videoTrack.enabled = !videoTrack.enabled;

//   };

//   // Toggle microphone
//   const toggleMic = () => {

//     if (!stream) return;

//     const audioTrack = stream.getAudioTracks()[0];
//     audioTrack.enabled = !audioTrack.enabled;

//   };

//   // End call
//   const endCall = () => {

//     if (stream) {
//       stream.getTracks().forEach((track) => track.stop());
//     }

//     if (myVideo.current) {
//       myVideo.current.srcObject = null;
//     }

//     if (userVideo.current) {
//       userVideo.current.srcObject = null;
//     }

//   };

//   return (

//     <div className="w-screen h-screen bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 flex flex-col items-center p-8">

//       {/* Page Title */}
//       <h1 className="text-4xl font-bold text-white mb-6">
//         🩺 TeleHealth Video Consultation
//       </h1>

//       <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl p-8 w-full max-w-6xl">

//         {/* Call ID */}
//         <div className="flex justify-between items-center mb-6">

//           <p className="text-gray-700">
//             Your Call ID:
//             <span className="text-indigo-600 font-bold ml-2">
//               {peerId}
//             </span>
//           </p>

//           <input
//             type="text"
//             placeholder="Enter Doctor ID"
//             value={remoteId}
//             onChange={(e) => setRemoteId(e.target.value)}
//             className="border px-3 py-2 rounded-lg mr-3"
//           />

//           <button
//             onClick={callUser}
//             className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-xl shadow-md"
//           >
//             📞 Start Call
//           </button>

//         </div>

//         {/* Doctor Info (AI Recommended) */}
//         <div className="flex items-center gap-4 mb-6 bg-gray-100 p-4 rounded-xl">

//           <img
//             src="https://cdn-icons-png.flaticon.com/512/3774/3774299.png"
//             className="w-14 h-14 rounded-full"
//           />

//           <div>

//             <h2 className="font-semibold text-lg">
//               {doctor ? doctor.name : "AI Recommended Doctor"}
//             </h2>

//             <p className="text-gray-600 text-sm">
//               {doctor ? doctor.specialization : "Loading specialization..."}
//             </p>

//           </div>

//         </div>

//         {/* Video Section */}
//         <div className="grid md:grid-cols-2 gap-6">

//           {/* Patient Video */}
//           <div className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-xl">

//             <video
//               ref={myVideo}
//               autoPlay
//               muted
//               className="w-full h-87.5 object-cover"
//             />

//             <div className="absolute bottom-3 left-3 bg-black/50 px-4 py-1 rounded-lg text-white text-sm">
//               You
//             </div>

//           </div>

//           {/* Doctor Video */}
//           <div className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-xl">

//             <video
//               ref={userVideo}
//               autoPlay
//               className="w-full h-87.5 object-cover"
//             />

//             <div className="absolute bottom-3 left-3 bg-black/50 px-4 py-1 rounded-lg text-white text-sm">
//               {doctor ? doctor.name : "Doctor"}
//             </div>

//           </div>

//         </div>

//         {/* Call Timer */}
//         <div className="text-center font-semibold mt-4 text-gray-700">

//           ⏱ Call Duration:
//           {Math.floor(time / 60)}:
//           {("0" + (time % 60)).slice(-2)}

//         </div>

//         {/* Controls */}
//         <div className="flex justify-center gap-6 mt-8">

//           <button
//             onClick={toggleMic}
//             className="bg-gray-800 hover:bg-gray-900 text-white p-4 rounded-full shadow-lg"
//           >
//             🎤
//           </button>

//           <button
//             onClick={toggleCamera}
//             className="bg-gray-800 hover:bg-gray-900 text-white p-4 rounded-full shadow-lg"
//           >
//             📷
//           </button>

//           <button
//             onClick={endCall}
//             className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full shadow-lg"
//           >
//             End Call
//           </button>

//         </div>

//       </div>

//     </div>

//   );
// };

// export default VideoCall;

import { useEffect, useRef, useState } from "react";
import Peer from "peerjs";
import { io } from "socket.io-client";
import toast from "react-hot-toast";

const socket = io("http://localhost:3000");

const VideoCall = () => {
  const myVideo = useRef(null);
  const userVideo = useRef(null);
  const peerRef = useRef(null);

  const [peerId, setPeerId] = useState("");
  const [remoteId, setRemoteId] = useState("");
  const [stream, setStream] = useState(null);
  const [time, setTime] = useState(0);
  const [doctor, setDoctor] = useState(null);
  const [cameraOn, setCameraOn] = useState(true);
  const [micOn, setMicOn] = useState(true);
  const [callStarted, setCallStarted] = useState(false);

  useEffect(() => {
    const savedDoctor = localStorage.getItem("recommendedDoctor");
    if (savedDoctor) {
      try {
        setDoctor(JSON.parse(savedDoctor));
      } catch (error) {
        console.error("Doctor parse error:", error);
      }
    }
  }, []);

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
          setCallStarted(true);

          call.on("stream", (remoteStream) => {
            if (userVideo.current) {
              userVideo.current.srcObject = remoteStream;
            }
          });
        });
      })
      .catch((error) => {
        console.error("Media access error:", error);
        toast.error("Camera or microphone permission denied");
      });

    peerRef.current = peer;

    return () => {
      peer.destroy();
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  useEffect(() => {
    let interval;

    if (callStarted) {
      interval = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [callStarted]);

  const callUser = () => {
    if (!remoteId) {
      toast.error("Please enter Doctor ID");
      return;
    }

    if (!stream) {
      toast.error("Local video stream not ready");
      return;
    }

    const call = peerRef.current.call(remoteId, stream);
    setCallStarted(true);
    toast.success("Calling doctor...");

    call.on("stream", (remoteStream) => {
      if (userVideo.current) {
        userVideo.current.srcObject = remoteStream;
      }
    });
  };

  const toggleCamera = () => {
    if (!stream) return;

    const videoTrack = stream.getVideoTracks()[0];
    if (videoTrack) {
      videoTrack.enabled = !videoTrack.enabled;
      setCameraOn(videoTrack.enabled);
      toast.success(videoTrack.enabled ? "Camera turned on" : "Camera turned off");
    }
  };

  const toggleMic = () => {
    if (!stream) return;

    const audioTrack = stream.getAudioTracks()[0];
    if (audioTrack) {
      audioTrack.enabled = !audioTrack.enabled;
      setMicOn(audioTrack.enabled);
      toast.success(audioTrack.enabled ? "Microphone turned on" : "Microphone muted");
    }
  };

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

    setCallStarted(false);
    setTime(0);
    toast.success("Call ended");
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = ("0" + (seconds % 60)).slice(-2);
    return `${mins}:${secs}`;
  };

  return (
    <div className="w-screen  h-full bg-linear-to-br from-[#0f172a] via-[#1e3a8a] to-[#0ea5e9] px-4 py-6 md:px-8 lg:px-10">
      <div className="w-full max-w-7xl mx-auto">
        {/* Hero */}
        <div className="rounded-3xl bg-white/10 border border-white/20 backdrop-blur-xl shadow-2xl p-6 md:p-8 text-white">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <p className="text-blue-200 text-sm font-medium">
                TeleHealth Consultation
              </p>
              <h1 className="text-3xl md:text-5xl font-bold mt-2">
                Video Consultation
              </h1>
              <p className="text-blue-100 mt-3 max-w-2xl text-sm md:text-base">
                Connect with your doctor securely through live video call,
                manage call controls, and continue your AI-assisted care.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full lg:max-w-2xl">
              <div className="rounded-2xl bg-white/10 border border-white/20 p-4">
                <p className="text-xs text-blue-200">Your ID</p>
                <h3 className="text-sm md:text-lg font-bold mt-1 break-all">
                  {peerId || "Loading..."}
                </h3>
              </div>
              <div className="rounded-2xl bg-white/10 border border-white/20 p-4">
                <p className="text-xs text-blue-200">Camera</p>
                <h3 className="text-sm md:text-lg font-bold mt-1">
                  {cameraOn ? "On" : "Off"}
                </h3>
              </div>
              <div className="rounded-2xl bg-white/10 border border-white/20 p-4">
                <p className="text-xs text-blue-200">Microphone</p>
                <h3 className="text-sm md:text-lg font-bold mt-1">
                  {micOn ? "On" : "Muted"}
                </h3>
              </div>
              <div className="rounded-2xl bg-white/10 border border-white/20 p-4">
                <p className="text-xs text-blue-200">Duration</p>
                <h3 className="text-sm md:text-lg font-bold mt-1">
                  {formatTime(time)}
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* Doctor card + call input */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-6">
          <div className="lg:col-span-2 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-xl p-5 text-white">
            <p className="text-xs text-blue-200 mb-2">Connect with Doctor</p>
            <div className="flex flex-col md:flex-row gap-3">
              <input
                type="text"
                placeholder="Enter Doctor ID"
                value={remoteId}
                onChange={(e) => setRemoteId(e.target.value)}
                className="flex-1 p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none"
              />
              <button
                onClick={callUser}
                className="px-6 py-3 rounded-xl bg-linear-to-r from-green-500 to-emerald-600 text-white font-semibold hover:scale-[1.02] transition"
              >
                📞 Start Call
              </button>
            </div>
          </div>

          <div className="rounded-2xl bg-white/10 border border-white/20 backdrop-blur-xl p-5 text-white">
            <p className="text-xs text-blue-200 mb-2">AI Recommended Doctor</p>
            <div className="flex items-center gap-4">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3774/3774299.png"
                alt="Doctor"
                className="w-14 h-14 rounded-2xl border border-white/20"
              />
              <div>
                <h2 className="font-semibold text-lg">
                  {doctor ? doctor.name : "Doctor not loaded"}
                </h2>
                <p className="text-blue-100 text-sm">
                  {doctor ? doctor.specialization : "No specialization found"}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Video grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-6">
          <div className="rounded-3xl bg-white/10 border border-white/20 backdrop-blur-xl p-4 shadow-2xl">
            <div className="relative bg-slate-900 rounded-2xl overflow-hidden min-h-87.5 md:min-h-87.5">
              <video
                ref={myVideo}
                autoPlay
                muted
                className="w-full h-87.5 md:h-87.5 object-cover"
              />
              <div className="absolute bottom-4 left-4 px-4 py-2 rounded-xl bg-black/50 text-white text-sm font-medium">
                You
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-white/10 border border-white/20 backdrop-blur-xl p-4 shadow-2xl">
            <div className="relative bg-slate-900 rounded-2xl overflow-hidden min-h-87.5 md:min-h-87.5 flex items-center justify-center">
              <video
                ref={userVideo}
                autoPlay
                className="w-full h-87.5 md:h-87.5 object-cover"
              />
              <div className="absolute bottom-4 left-4 px-4 py-2 rounded-xl bg-black/50 text-white text-sm font-medium">
                {doctor ? doctor.name : "Doctor"}
              </div>
            </div>
          </div>
        </div>

        {/* Control panel */}
        <div className="mt-6 rounded-3xl bg-white/10 border border-white/20 backdrop-blur-xl shadow-2xl p-5 md:p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
            <div className="text-white">
              <p className="text-xs text-blue-200">Live Status</p>
              <h3 className="text-xl font-bold mt-1">
                {callStarted ? "Call in Progress" : "Waiting to Start"}
              </h3>
              <p className="text-blue-100 text-sm mt-1">
                Use the controls below to manage your consultation.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={toggleMic}
                className="px-5 py-3 rounded-xl bg-linear-to-r from-slate-700 to-slate-900 text-white font-semibold hover:scale-[1.02] transition"
              >
                {micOn ? "🎤 Mute Mic" : "🎤 Unmute Mic"}
              </button>

              <button
                onClick={toggleCamera}
                className="px-5 py-3 rounded-xl bg-linear-to-r from-slate-700 to-slate-900 text-white font-semibold hover:scale-[1.02] transition"
              >
                {cameraOn ? "📷 Turn Off Camera" : "📷 Turn On Camera"}
              </button>

              <button
                onClick={endCall}
                className="px-6 py-3 rounded-xl bg-linear-to-r from-red-500 to-pink-600 text-white font-semibold hover:scale-[1.02] transition"
              >
                End Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCall;