import './App.css';
import { io } from "socket.io-client";
import { useEffect, useState } from "react";
import AnswerInput from './components/answer-input';
import Graph from './components/graph';
import List from './components/list';

function App() {

  const [connectedSocket, setConnectedSocket] = useState();
  const [question, setQuestion] = useState();
  const [allAns, setAllAns] = useState();

  useEffect(() => {
    const socket = io();

    socket.on("connected", (theQuestion, ansArr) => {
      setConnectedSocket(socket);
      setQuestion(theQuestion);
      setAllAns(() => [...ansArr]);
      setQuestion(theQuestion);
    })
  },[]);

  if (!connectedSocket) {
    return <h1>Waiting for connection</h1>;
  } else {
    console.log(connectedSocket.id);

    connectedSocket.on("allAnswers",(ansArr) => {
      setAllAns(() => [...ansArr]);
    });
  };

  return (
    <>
      <div className="question"><b>{`${question}`}</b></div>
      <AnswerInput socket={connectedSocket}/>
      <Graph data={allAns}/>
      <List data={allAns}/>
    </>
  );
}

export default App;
