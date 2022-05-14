import React from 'react';
import IncBtn from "./IncBtn";
import ResetBtn from "./ResetBtn";
import {MyButton} from "./MyButton";
import {useDispatch} from "react-redux";
import {changeNumberAC , getMinNumberAC , resetNumberAC , useAppDispatch} from "./BLL/counterReducer";

type BoardPropsType = {
    number:number
    maxNumber:number
    minNumber:number
}
const Board = (props:BoardPropsType) => {
    const dispatch = useAppDispatch()
    const changeNumber = () => {
        if (props.number < props.maxNumber) {
            dispatch(changeNumberAC())
        }
    }
    const resetNumber = () => {
        dispatch(resetNumberAC(props.minNumber))
        dispatch(getMinNumberAC(props.minNumber))
    }
    const condition = props.maxNumber<props.minNumber || props.minNumber===props.maxNumber|| props.maxNumber<0?"red":'';
    return (
        <div className='board'>
         <div className={`numberBoard ${condition}`}>{props.number}</div>
            <div className='buttons'>
                <MyButton
                    onClick = {changeNumber}
                    disabled = {props.number===props.maxNumber}
                >inc
                </MyButton>
                <MyButton
                    onClick = {resetNumber}
                    disabled = {props.number===props.minNumber}
                >reset
                </MyButton>
            </div>

        </div>
    );
};

export default Board;