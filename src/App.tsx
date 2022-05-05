import React , {useEffect , useState} from 'react';
import './App.css';
import Board from "./Board";
import SettingBoard from "./SettingBoard";
import {useDispatch , useSelector} from "react-redux";
import {AppDispatch , AppStateType} from "./BLL/store";
import {
    changeNumberAC , getMaxNumberAC , getMinNumberAC , getValueCounterFromLS , resetNumberAC , useAppDispatch
} from "./BLL/counterReducer";


function App() {
    const myNumber = useSelector<AppStateType , number>(state => state.counter.myNumber)
    const minNumber = useSelector<AppStateType , number>(state => state.counter.minNumber)
    const maxNumber = useSelector<AppStateType , number>(state => state.counter.maxNumber)
    const dispatch = useAppDispatch()

    useEffect(()=>{
        dispatch(getValueCounterFromLS())
    },[])


   const setMinNumber = (minNumber:number)=>{
       dispatch(getMinNumberAC(minNumber))
   }
   const setMaxNumber = (maxNumber:number) => {
       dispatch(getMaxNumberAC(maxNumber))
   }
    const changeNumber = () => {
        if (myNumber < maxNumber) {
            dispatch(changeNumberAC())
        }
    }
    const resetNumber = () => {
        dispatch(resetNumberAC(minNumber))
        dispatch(getMinNumberAC(minNumber))
    }
    const showMinNumber = (number:number) => {
        dispatch(getMinNumberAC(number))
    }

    return (
        <div className="App">
            <Board number={myNumber}
                   maxNumber={maxNumber}
                   minNumber={minNumber}
                   changeNumber={changeNumber}
                   resetNumber={resetNumber}/>
            <SettingBoard
                minNumber={minNumber}
                maxNumber={maxNumber}
                showMinNumber={showMinNumber}
                setMinNumber={setMinNumber}
                setMaxNumber={setMaxNumber}
            />

        </div>
    );
}

export default App;
