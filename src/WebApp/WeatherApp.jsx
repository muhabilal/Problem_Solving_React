import React, { useState } from "react";
import axios from "axios";
function WeatherApp() {
  const [isShown, setIsShown] = useState(false);
  const [data, setData] = useState([]);
  const [loc, setLoc] = useState("");
  const result = () => {
    try {
      let res = axios
        .get(
          `http://api.weatherapi.com/v1/current.json?key=a7407c3cd63f421f84c55027221012&q=${loc}`
        )
        .then((response) => setData(response.data));
    } catch {
      console.log("error");
    }
  };
  const display = () => {
    setIsShown(true);
  };
  console.log(data);
  return (
    <div>
      <h1>WeatherApp</h1>
      <input type="text" value={loc} onChange={(e) => setLoc(e.target.value)} />
      <br />
      <button onClick={result}>Click me</button>
      <button onClick={display}>Show Result</button>
      {/* <h4>My Location is:{data.location.name}</h4> */}
      {isShown == true ? (
        <>
          <p>{data.location.name}</p>
          <p id="para1">My Location is:{data.location.country}</p>
          <img src={data.current.condition.icon} alt="Loading Error" />
          <p>Weater Condition is:{data.current.condition.text}</p>
          <p>Temperature is:{data.current.temp_c} </p>
        </>
      ) : null}
    </div>
  );
}

export default WeatherApp;
