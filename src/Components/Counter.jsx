import { useState } from "react";
function Counter({ UserName, age, arr1, obj, add, name }) {
  // const name = ;
  const [number, setNumber] = useState(0);
  const increment = () => {
    setNumber(number + 1);
  };
  return (
    <>
      <h1>
        This is my {UserName} {age}
      </h1>
      <p>
        {obj.age} {obj.city}
      </p>
      <p>{arr1[0]}</p>
      <p>{add()}</p>
      <p>Array of name is: {name}</p>
      <h1>Increemnt with Function</h1>
      <p>Incement is!: {number}</p>
      <button onClick={increment}>Click me</button>
      <br />
      <br />
    </>
  );
}

export default Counter;
