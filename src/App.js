import logo from './logo.svg';
import './App.css';
import Counter from './Components/Counter';
import Decrement from './Components/Decrement';
import Functions from './Components/Functions';
import Card from './Components/Card';
import Exercise from './Components/Exercise';

function App() {
  const array = [1, 2, 3];
  const name = ["bilal dar", 10, "usama"]
  const obj = {
    name: 'ali',
    city: 'gujrat',
  };
  const add = () => {
    return 2 + 2;
  }
  return (
    <>
      {/* <Counter UserName='Bilal Dar' age={10} arr1={array} obj={obj} add={add} name={name} /> */}
      {/* <Functions></Functions> */}
      {/* <Decrement /> */}

      <Exercise />
    </>
  );
}

export default App;
