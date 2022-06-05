import { io } from "socket.io-client";
import { useEffect, useState } from "react";
import FeedbackInput from "./components/feedback-input";
import FeedbackItem from "./components/feedback-item";

function App() {

  const [connectedSocket, setConnectedSocket] = useState();
  const [wasSubmited, setWasSubmited] = useState(false);
  const [feedbackGrid, setFeedbackGrid] = useState([]);
  const [isBoardAvailable, setIsBoardAvailable] = useState(false);

  function updateGrid(grid) {
    let arr = [];
    setIsBoardAvailable(false);
    for (let i=0; i<grid.length; i++) {
      arr[i]=[];
      for (let j=0; j<grid[i].length; j++) {
        arr[i][j] = 
          {
            feedback: grid[i][j].feedback,
            color: grid[i][j].color,
            isSelected: grid[i][j].isSelected,
            isAvailable: grid[i][j].isAvailable,
          }
        if (arr[i][j].isAvailable) {setIsBoardAvailable(true)}
      }
    }
    return arr;
  }

  useEffect(() => {
    const socket = io();

    socket.on("connected", (grid) => {
      setFeedbackGrid(() => updateGrid(grid));
      setConnectedSocket(socket);
    })

  },[]);

  if (!connectedSocket) {
    return <h1>Waiting for connection</h1>;
  } else {
    console.log(connectedSocket.id);
  };

  const makeSelection = (coord) => {
    if (!wasSubmited) {
        let arr=feedbackGrid;
        if (arr[coord[0]][coord[1]].isAvailable) {
          arr.forEach(subarr => subarr.forEach(el => el.isSelected=false));
          arr[coord[0]][coord[1]].isSelected=true;
        } else {
          alert(`Please select an available card`);
        }
        setFeedbackGrid(() => updateGrid(arr));
    }
  }

  const sendToServer = (feedback) => {
    setWasSubmited(true);
    connectedSocket.emit("toServer", (feedbackGrid), (feedback));
  }

  connectedSocket.on("toClients", (grid) => {
    setFeedbackGrid(() => updateGrid(grid));
  })

  const checkDisable = () => {
    let disabled = true;
    feedbackGrid.forEach(subarr => subarr.forEach(el => { 
      if (el.isSelected) {
        disabled = false;
      }
    }))
    return disabled;
  }

  return (
    <>
      {(!isBoardAvailable)
        ?<div className="input-container">No card available for feedback!</div>
        :(!wasSubmited)
        ?<FeedbackInput send={sendToServer} disable={checkDisable()}/>
        :<div className="input-container">Thank you for the feedback!</div>}
      <div
        className="feedback-container"
        style={{gridTemplateColumns: `repeat(${feedbackGrid[0].length}, 1fr)`,
          gridTemplateRows: `repeat(${feedbackGrid.length}, 1fr)`}}>
        {
          feedbackGrid.map((row, rowIndex) => row.map((column, columnIndex) =>
          <FeedbackItem
            key={[rowIndex,columnIndex]}
            atGrid={[rowIndex,columnIndex]}
            feedback={feedbackGrid[rowIndex][columnIndex].feedback}
            color={feedbackGrid[rowIndex][columnIndex].color}
            selectCard={makeSelection}
            selected={feedbackGrid[rowIndex][columnIndex].isSelected}
            />
          ))
        }
      </div>
    </>
  );
}

export default App;
