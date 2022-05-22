import './Chat.css';
import { io } from "socket.io-client";
import { useState, useEffect } from 'react';
import Chatbox from "./components/chatbox";
import Nameinput from "./components/nameinput";
import Messageinput from './components/messageinput';
import Notification from './components/notification';

function Chat() {
  const [connectedSocket, setConnectedSocket] = useState();
  const bundle = {
    key: "",
    userName: "",
    currentMessage: "",
    linkedSocket: "",
  };

  useEffect(() => {
    const socket = io();

    socket.on("connected", () => {
      setConnectedSocket(socket);
      // console.log(bundle);
    })
  },[]);

  if (!connectedSocket) {
    return <h1>Waiting for connection</h1>;
  } else {
    bundle.linkedSocket = connectedSocket.id;
  };

  const bundleName = (name) => {
    bundle.userName = name;
    // console.log(bundle);
  };

  const bundleAndSendMessage = (message) => {
    bundle.currentMessage = message;
    // console.log(bundle);
    connectedSocket.emit("newMessage", bundle);
  };

  return (
    <div className="Chat">
      <Chatbox socket={connectedSocket}/>
      <Nameinput handleNameChange={bundleName}/>
      <Messageinput handleClick={bundleAndSendMessage}/>
      <Notification socket={connectedSocket}/>
    </div>
  );

}

export default Chat;


/* v.01 NOT WORKING
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
  };

  connectedSocket.on("receivedMessage", (received) => {
    console.log(received);
    //setReceivedPack(previousState => {
    //  return {...received}
    // });
    //console.log(receivedPack);
  });

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