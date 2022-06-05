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

const grid = [];
const colors = [];

const initialiseGrid = (rows=3, columns=3) => {
  for (let i=0; i<rows; i++) {
    grid[i]=[];
    for (let j=0; j<columns; j++) {
      grid[i][j] = 
        {
          feedback: "",
          color: "#FFFFFF",
          isSelected: false,
          isAvailable: true,
        }
    }
  }
}

function generateColor() {
  let color = `#${(Math.trunc(Math.random() * 16777216)).toString(16)}`;
  if ((color!==`#000000`)&&(color!==`#FFFFFF`)&&(colors.indexOf(color)===(-1))) {
    (colors.push(color));
    return color;
  } else {
    generateColor();
  }
}

function updateGrid(arr, message) {
  arr.forEach((subarr, row) => subarr.forEach((el, column) => {
    if (el.isSelected===true) {
      grid[row][column].feedback=message;
      grid[row][column].color=generateColor();
      grid[row][column].isSelected=false;
      grid[row][column].isAvailable=false;
    }
  }))
}
// se initializeaza dimensiunile panoului cu carduri de feedback
// valori default (3,3)
initialiseGrid(3,5);

io.on("connection", (socket) => {
  console.log(`[SOCKET CONNECTED] ${socket.id}`);

  socket.emit("connected", (grid));

  socket.on("toServer", (arr, message) => {
    updateGrid(arr, message);
    io.emit("toClients", (grid));
  })
});
