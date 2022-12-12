import React from "react";
import axios from "axios";
import { useQuery } from "react-query";

const fetchposts = async () => {
  try {
    let data = await axios.get(
      `http://api.weatherapi.com/v1/current.json?key=a7407c3cd63f421f84c55027221012&q=Islamabad`
    );
    console.log(data);
  } catch {
    console.log("Error fetching weather");
  }
};

function PracticeQuery() {
  const res = useQuery("WheatherUpdate", fetchposts);
  console.log("response is", res);
  return (
    <>
      <h1>hello</h1>
    </>
  );
}

export default PracticeQuery;
