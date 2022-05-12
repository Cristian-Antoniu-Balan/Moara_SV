import {useState} from "react";

const FormCulori = (props) => {
    const [gradientColor, setgradientColor] = useState("#000000");

    const addClick = () => {
        props.handleClick({gradientColor});
    }

    return (
       <div className="form-culoare">
           <input
            type="color"
            value={gradientColor}
            onChange = {(e) => setgradientColor(e.target.value)}
            ></input>
           <hr></hr>
           <button onClick={addClick}>Add</button>
       </div>
    )
}

export default FormCulori;