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

const theMillionDollarQuestion = "Insert random question <<here>> ?";
let answers = [];

function updateAnswers(seek) {
  let found = false;
  answers.forEach(el => {
    if (el.answer === seek) {
      el.count++;
      found = true;
    };
  });
  if (!found) {
    answers.push(
      {
        answer: seek,
        count: 1,
        ratio: 0,
      });
    } else {
      answers.sort((b,a) => (a.count - b.count));
    }
  const total = answers.reduce((a,b) => (a + b.count),0);
  const ref = answers[0].count;
  answers.forEach(el => {
    el.ratio = (((el.count)*100)/total);
    el.opacity = (((el.count)*100)/ref)
  });
};

io.on("connection", (socket) => {
  console.log(`[SOCKET CONNECTED] ${socket.id}`);

  socket.emit("connected", theMillionDollarQuestion, answers);

  socket.on("raspuns", (message) => {
    updateAnswers(message);
    console.log(answers);
    io.emit("allAnswers",(answers));
  });
});
