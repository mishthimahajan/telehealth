import http from "http";
import { Server } from "socket.io";
import app from "./app.js";

const PORT = 3000;

// create http server
const server = http.createServer(app);

// attach socket.io
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"]
  }
});

io.on("connection", (socket) => {

  console.log("User connected:", socket.id);

  socket.on("join-room", (roomId, peerId) => {

    socket.join(roomId);

    socket.to(roomId).emit("user-connected", peerId);

    socket.on("disconnect", () => {
      socket.to(roomId).emit("user-disconnected", peerId);
    });

  });

});

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});