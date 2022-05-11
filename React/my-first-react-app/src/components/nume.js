import { useState } from "react";

const Nume = () => {
    const [colorat, setColorat] = useState(false);

    const clickColorat = () => {setColorat(!colorat)};

    return (
    <div>
        <div className={`nume ${colorat ? `colorat` : null}`} onClick={clickColorat}>
        Cristian-Antoniu Balan
        </div>
        <div className={!colorat ? `hidden` : null}>
        Numele e colorat
        </div>
    </div>
    )
}

export default Nume;