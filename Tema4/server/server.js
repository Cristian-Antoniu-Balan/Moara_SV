const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");

const port = 3000;
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

server.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

io.on("connection", (socket) => {
  console.log(`[SOCKET CONNECTED] ${socket.id}`);
  socket.emit("connected");

  socket.on("newMessage", (bundle) => {
    console.log(bundle);
    // io.emit("receivedMessage", `${bundle.userName}: ${bundle.messageContent}`);
    io.emit("receivedMessage", bundle);
  })
});
