import { useState } from "react";

import Messagebox from "./messagebox";
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
                <Messagebox messageContent="aaaaaaaaaaaaaaaaaaaaaaaaaaaa"/>
            </div>
            <div>
                <Namebox userName="test21"/>
                <Messagebox messageContent="eee" style={{float: "right"}}/>
            </div>
        </div>
    )
};

export default Chatbox;