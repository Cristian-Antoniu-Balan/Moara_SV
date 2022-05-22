import { useState, useEffect } from "react";

const Messageinput = (props) => {

    const [messageContent, setMessageContent] = useState("");

    const sendMessage = () => {
        (messageContent !== "") && props.handleClick(messageContent);
        setMessageContent("");
    };

    const handleChange = (e) => {
        setMessageContent(e.target.value);
    };

    return (
        <div className="Messageinputcontainer">
            <input
                type="text"
                value = {`${messageContent}`}
                className="Messageinput"
                onChange = {handleChange} 
                >
            </input>
            <button className="Sendbutton" onClick={sendMessage}>Send</button>
        </div>
    )
};

export default Messageinput;