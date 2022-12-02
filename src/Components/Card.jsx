import react from "react";
import { useState } from "react";
function Card(props) {
  const [color, setColor] = useState("blue");
  const [btnText, setBtnText] = useState("click me");
  const changeColor = () => {
    if (color == "blue" && btnText == "click me") {
      setColor("green");
      setBtnText("back to");
    } else {
      setColor("blue");
      setBtnText("click me");
    }
  };
  return (
    <>
      <div style={{ backgroundColor: "grey", width: "40%", height: 300 }}>
        <h1>{props.header}</h1>
        <img src={props.image} alt="logo" style={{ width: "100%" }} />
        <button
          style={{ alignSelf: "center", backgroundColor: color }}
          onClick={changeColor}
        >
          {btnText}
        </button>
      </div>
    </>
  );
}

export default Card;
