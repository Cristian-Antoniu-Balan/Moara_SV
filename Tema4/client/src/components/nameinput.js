import { useState } from "react";

const Nameinput = (props) => {

    const [ userName, setUserName ] = useState("");

    const updateName = (e) => {
        setUserName(e.target.value);
        props.handleChange(e.target.value);
        // linia de mai jos ramane in urma cu un pas
        // nu am gasit solutie
        // props.handleChange(userName);
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