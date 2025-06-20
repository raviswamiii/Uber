const socketIo = require("socket.io");
let io;
const userModel = require("./models/userModel");
const captainModel = require("./models/captainModel");

const initializeSocket = (server) => {
  io = socketIo(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket) => {
    console.log(`Client connected: ${socket.id}`);

    socket.on("join", async (data) => {
      const { userId, userType } = data;

      if (userType === "user") {
        await userModel.findByIdAndUpdate(userId, { socketId: socket.id });
      } else if (userType === "captain") {
        await captainModel.findByIdAndUpdate(userId, { socketId: socket.id });
      }
    });

    socket.on("disconnect", () => {
      console.log(`Client disconnected: ${socket.id}`);
    });
  });
};

const sendMessageToSocketId = (socketId, event) => {
  if (io) {
    io.to(socketId).emit(event);
  } else {
    console.log(`Socket ID ${socketId} not found.`);
  }
};

module.exports = {
  initializeSocket,
  sendMessageToSocketId,
};
