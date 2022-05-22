import { useState } from "react";

import Message from "./message";
import Namebox from "./namebox";

const Chatbox = (props) => {

const [ messages, setMessages ] = useState([]);
/*
{
    key:
    userName:
    messageContent:
    socket:
}
*/
    return (
        <div className="Chatbox">
            <div>
                <Namebox userName="testdfasdfsdgdsfgdsgdfg1"/>
                <Message messageContent="aaaaaaaaaaaaaaaaaaaaaaaaaaaa"/>
            </div>
            <div>
                <Namebox userName="test21"/>
                <Message messageContent="eee" style={{float: "right"}}/>
            </div>
        </div>
    )
};

export default Chatbox;