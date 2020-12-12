import React, { useState } from 'react';
import "../scss/ColorBox.scss";

const getRandomColor = () => {
    const COLOR_LIST = ["deeppink", "green", "yellow", "black", "blue"];
    const randomIndex = Math.trunc(Math.random() * 5);
    return COLOR_LIST[randomIndex];
}

const getInitialColor = () => {
    const initialColor = localStorage.getItem("box_color") || "deeppink";
    console.log(initialColor);
    return initialColor
}

function ColorBox(){
    const [color, setColor] = useState(getInitialColor);

    const handleClick = () => {
        const newColor = getRandomColor();
        setColor(newColor);

        localStorage.setItem("box_color", newColor);
    }
    return (
        <div className="colorbox" style={{backgroundColor: color}}>
            <button onClick={handleClick}>Change Color</button>
        </div>
    );
}

export default ColorBox;