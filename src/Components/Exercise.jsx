import { useState } from "react";
import React from "react";
function Exercise() {
  const [name, setName] = useState("");
  const handleChange = (e) => {
    setName(e.target.value);
  };
  const [subject1, setSubject1] = useState("");
  //   console.log(subject1);
  const [subject2, setSubject2] = useState("");
  //   console.log(subject2);
  const [dept, setDept] = useState("");
  //   console.log(dept);
  const [institute, setInstitute] = useState("");
  //   console.log(institute);
  const [grade, setGrade] = useState("");
  const [bg, setBg] = useState("");
  const [message, setMessage] = useState("");
  const result = () => {
    setName("");
    setSubject1("");
    setSubject2("");
    setDept("");
    setInstitute("");
    let total = parseInt(subject1) + parseInt(subject2);
    // console.log("hhhh", total);
    let res = (total / 200) * 100;
    console.log("result is", res);
    if (res >= 90) {
      setGrade("A");
      setBg("green");
      setMessage("well done keep it up");
    } else if (res >= 80 && res <= 90) {
      setGrade("B");
      setBg("blue");
      setMessage("Going good! Work hard to improve");
    } else if (res >= 70 && res <= 80) {
      setGrade("C");
      setBg("yellow");
      setMessage("Needs Improvement! Work hard");
    } else {
      setGrade("F");
      setBg("red");
      setMessage("Disappointing result");
    }
  };
  return (
    <>
      <h1>Welcome!</h1>
      <input
        type={"text"}
        id="name"
        placeholder="Enter your name"
        value={name}
        onChange={handleChange}
      />
      <br></br>
      <br></br>
      <input
        type={"number"}
        id="marks"
        placeholder="Enter your marks"
        value={subject1}
        onChange={(e) => {
          setSubject1(e.target.value);
        }}
      />
      <br></br>
      <br></br>
      <input
        type={"number"}
        id="marks"
        placeholder="Enter your marks"
        value={subject2}
        onChange={(e) => {
          setSubject2(e.target.value);
        }}
      />
      <br></br>
      <br></br>
      <input
        type={"text"}
        id="name"
        placeholder="Enter your Department name"
        value={dept}
        onChange={(e) => {
          setDept(e.target.value);
        }}
      />
      <br></br>
      <br></br>
      <input
        type={"text"}
        id="name"
        placeholder="Enter your Institute name"
        value={institute}
        onChange={(e) => {
          setInstitute(e.target.value);
        }}
      />
      <br></br>
      <br></br>
      <button onClick={result}>Add</button>
      <h1>Student Info</h1>
      <h3>Your Name is {name}</h3>
      <h3>Your Dept. is {dept}</h3>
      <h3>Your Institute is {institute}</h3>
      <h3 style={{ backgroundColor: bg }}>Your grade is {grade}</h3>
      <h3 style={{ backgroundColor: bg }}> {message}</h3>
    </>
  );
}

export default Exercise;
