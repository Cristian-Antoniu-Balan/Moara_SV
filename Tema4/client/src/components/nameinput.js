import { useState } from "react";

const Nameinput = (props) => {

    const updateName = (e) => {
        props.handleNameChange(e.target.value);
    }

    return (
        <input
            type="text"
            className="Nameinput"
            placeholder="Enter your name"
            onChange = {updateName}>
        </input>
    )
};

export default Nameinput;