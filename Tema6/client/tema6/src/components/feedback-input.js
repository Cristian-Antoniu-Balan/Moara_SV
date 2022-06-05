import { useState } from "react";

const FeedbackInput = (props) => {

    const [feedback, setFeedback] = useState("");

    return(
        <div className="input-container">
            <textarea
                className="feedback-box"
                type="textarea"
                value={feedback}
                placeholder="Please provide your feedback"
                onChange={(e)=>{setFeedback(e.target.value)}}>
            </textarea>
            <button
                className="button"
                disabled={(feedback==="")||(props.disable)}
                onClick={() => {props.send(feedback)}}>
                    Submit
            </button>
        </div>
    )
}

export default FeedbackInput;