import { useState } from "react";

import Messagebox from "./messagebox";
import Namebox from "./namebox";

const Chatbox = (props) => {

const [ messages, setMessages ] = useState([{
    key: "",
    userName: "",
    currentMessage: "",
    linkedSocket: "",
    isMine: false,
}]);

props.socket.on("receivedMessage", (received) => {
    // console.log(received);
    // console.log(props.socket.id === received.linkedSocket);
    const isMine = props.socket.id === received.linkedSocket;
    const newMessage = {...received, isMine};
    const newMessageList = [...messages];
    newMessageList.push(newMessage);
    setMessages(newMessageList);
  });

    return (
        <div className="Chatbox">
            {messages.map((message, index) => (
                <div key={`message-${index}`}>
                    <Namebox isHidden={message.isMine} userName={message.userName}/>
                    <Messagebox isMine={message.isMine} messageContent={message.currentMessage}/>
                </div>
            ))}
        </div>
    )
};

export default Chatbox;