import './Chat.css';
import { io } from "socket.io-client";
import { useState, useEffect } from 'react';
import Chatbox from "./components/chatbox";
import Nameinput from "./components/nameinput";
import Messageinput from './components/messageinput';

function Chat() {
  const [connectedSocket, setConnectedSocket] = useState();
  const [bundle, setBundle] = useState({
    key: "",
    userName: "",
    messageContent: "",
    linkedSocket: "",
  });
  const [receivedPack, setReceivedPack] = useState({
    key: "",
    userName: "",
    messageContent: "",
    linkedSocket: "",
  });

  useEffect(() => {
    const socket = io();

    socket.on("connected", () => {
      setConnectedSocket(socket);
      setBundle(previousState => { 
        return {...previousState, linkedSocket: `${socket.id}`}}
        );
    });
  }, []);

  if (!connectedSocket) {
    return(<div>Waiting for connection</div>)
  } else {
    connectedSocket.on("receivedMessage", (received) => {
      console.log(received);
      setReceivedPack(previousState => {
        return {...received}
      });
      //console.log(receivedPack);
    });
  };

  const changeName = (name) => {
    setBundle(previousState => { 
      // console.log(name);
      return {...previousState, userName: `${name}`}}
      );
      // console.log(bundle);
  };

  const sendToServer = (message) => {
    setBundle(previousState => {
      // console.log(message);
      return {...previousState, messageContent: `${message}`}
    });
    connectedSocket.emit("newMessage", bundle);
  };

  return (
    <div className="Chat">
      <Chatbox socket={connectedSocket}/>
      <Nameinput handleChange={changeName}/>
      <Messageinput handleClick={sendToServer}/>
    </div>
  );
}

export default Chat;

/*
{
    key:
    userName:
    messageContent:
    linkedSocket:
}
*/