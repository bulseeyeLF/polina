const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static("public"));

io.on("connection", (socket) => {
  socket.on("chat message", (msg) => {
    if (typeof msg !== "string") return;

    const cleanMessage = msg.trim();
    if (!cleanMessage) return;

    io.emit("chat message", cleanMessage);
  });
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Chat app listening on port ${port}`);
});
