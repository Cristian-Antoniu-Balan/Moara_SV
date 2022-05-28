import { useState } from "react";

const AnswerInput = ({ socket }) => {

    const [answer, setAnswer] = useState("");
    const [wasSent, setWasSent] = useState(false);
    const [hint, setHint] = useState("And your answer is...");

    function handleSubmit() {
        (answer === "") ? setHint("Please provide an answer...") : sendToServer(answer);
    };

    function sendToServer(message) {
        setWasSent(true);
        socket.emit("raspuns", message);
    };

    if (!wasSent) {
        return (
            <div className="input-container">
            <input
                type="text"
                placeholder={`${hint}`}
                onChange={(e)=>{
                    setAnswer(e.target.value);
                    setHint("And your answer is...");
                    }}>
            </input>
            <button onClick={handleSubmit}>Submit</button>
            </div>
        )
    } else {
        return (
            <div className="input-container">Multumesc pentru raspuns!</div>
        )
    };
};

export default AnswerInput;