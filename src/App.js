
import './App.css';
import Counter from './Components/Counter';
import Decrement from './Components/Decrement';
import Functions from './Components/Functions';
import Card from './Components/Card';
import Exercise from './Components/Exercise';
import Exercise2 from './Components/Exercise2';
import WeatherApp from './WebApp/WeatherApp';
import Input from './Components/Input';
import PracticeQuery from './Query/PracticeQuery';
import { QueryClientProvider, QueryClient } from 'react-query';
const queryClient = new QueryClient()
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
      {/* <Exercise /> */}
      {/* <WeatherApp /> */}
      {/* <Input /> */}
      <QueryClientProvider client={queryClient}>
        <PracticeQuery />
      </QueryClientProvider >

    </>
  );
}

export default App;
