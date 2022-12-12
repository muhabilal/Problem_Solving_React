import React, { useState, useEffect } from "react";
function Glossary(props) {
  return <h1>Your Name is:{props.Name}</h1>;
}
function Glossary1(props) {
  console.log(typeof props.age);
  return <h1>Your Age is:{props.age}</h1>;
}
function Glossary2() {
  const [isopen, setIsopen] = useState(false);
  const onClickHandler = () => {
    setIsopen(!isopen);
  };
  return (
    <>
      <button onClick={onClickHandler}>Select an option</button>
      {isopen == true ? (
        <ul>
          <li>Option 1</li>
          <li>Option 2</li>
          <li>Option 3</li>
        </ul>
      ) : null}
    </>
  );
}

function Example() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

function Input() {
  const [inputValue, setInputValue] = useState("");
  const onchangeHandler = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <>
      <input
        type={"text"}
        //   aria-label={labelText}
        //   aria-required={true}
        onChange={onchangeHandler}
        value={inputValue}
        name="name"
      />
      <Glossary Name="Bilal Dar" />
      <Glossary1 age={23} />
      <Glossary2 />
      <Example />
    </>
  );
}

export default Input;
