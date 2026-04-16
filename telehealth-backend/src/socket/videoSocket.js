module.exports = (io) => {

  io.on("connection", (socket) => {

    console.log("User connected:", socket.id)

    socket.on("join-room", (roomId, peerId) => {

      socket.join(roomId)

      console.log(`User ${peerId} joined room ${roomId}`)

      socket.to(roomId).emit("user-connected", peerId)

      socket.on("disconnect", () => {

        socket.to(roomId).emit("user-disconnected", peerId)

        console.log("User disconnected:", peerId)

      })

    })

  })

}