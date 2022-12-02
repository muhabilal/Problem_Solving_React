import { useState } from "react";
import Card from "./Card";
function Decrement() {
  const [number, setNumber] = useState("");
  const Dcounter = () => {
    setNumber(number - 1);
  };
  return (
    <>
      <input
        type="number"
        placeholder="Enter a number"
        value={number}
        onChange={(event) => setNumber(event.target.value)}
      />
      <p>{number}</p>
      <button onClick={Dcounter}>click me</button>
      <div
        style={{
          display: "flex",
        }}
      >
        <div>
          <Card header="MERN" image="pic.png" />
        </div>
        <div>
          <Card header="Angular" image="pic2.png" />
        </div>
        <div>
          <Card header="Flutter" image="pic.png" />
        </div>
      </div>
    </>
  );
}
export default Decrement;
