import { useState } from "react";
import FormCulori from "./form-culori";
import Culoare from "./culoare"

const Exercitiul3 = () => {
  const [culori, setCulori] = useState([]);

  const addColor = (color) => {
    const newColors = [...culori]
    let maxId = (culori.map((c)=>c.id).sort((b,a) => a-b))[0] + 1;
    if (!maxId) {
      maxId = 0;
    }
    color.id = maxId;
    newColors.push(color);
    setCulori(newColors);
  }

  const removeColor = (id) => {
    const newColors = culori.filter((culoare) => culoare.id !== id);
    setCulori(newColors);
  }

  const gradConfig= culori.map((c)=>c.gradientColor).join(",");

  return (
    <div className="exercitiu">
    Exercitiul 3
    <br/>
    <div className="d-flex">
      <div className="div-grad" style={{backgroundImage: `linear-gradient(${gradConfig})`}}></div>
      <FormCulori handleClick={addColor}/>
      <div className="d-grid">
        {culori.map((color) => (
          <Culoare key={color.id} id={color.id} gradientColor={color.gradientColor} removable={removeColor}/>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Exercitiul3;