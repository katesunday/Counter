import React , {useState} from 'react';
import './App.css';
import Board from "./Board";
import SettingBoard from "./SettingBoard";


function App() {
    let localMin = localStorage.getItem('min')
    let localMax = localStorage.getItem('max')
    let [maxNumber,setMaxNumber] = useState(localMax?Number(localMax):0)
    let [minNumber,setMinNumber] = useState(localMin?Number(localMin):0)
    let [myNumber, setNumber] = useState(minNumber)
    const changeNumber = () => {
         // do setNumber(++myNumber)
         // while (myNumber<5)
        if(myNumber<maxNumber){
            setNumber(++myNumber)
        }
    }
    const resetNumber = () => {
      setNumber(minNumber)
    }
    const showMinNumber = (number:number) => {
      setNumber(number)
    }

  return (
    <div className="App">
      <Board number={myNumber}
             maxNumber={maxNumber}
             minNumber = {minNumber}
             changeNumber={changeNumber}
             resetNumber = {resetNumber}/>
        <SettingBoard
            minNumber = {minNumber}
            maxNumber={maxNumber}
            showMinNumber = {showMinNumber}
            setMinNumber = {setMinNumber}
            setMaxNumber = {setMaxNumber}
        />

    </div>
  );
}

export default App;
