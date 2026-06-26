const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static("public"));

function cleanText(value, maxLength) {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxLength);
}

io.on("connection", (socket) => {
  socket.on("chat message", (payload) => {
    const username = cleanText(payload?.username, 32);
    const message = cleanText(payload?.message, 500);

    if (!username || !message) return;

    io.emit("chat message", {
      username,
      message,
      sentAt: new Date().toISOString(),
    });
  });
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Chat app listening on port ${port}`);
});
