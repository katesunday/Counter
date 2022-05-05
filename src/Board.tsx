import React from 'react';
import IncBtn from "./IncBtn";
import ResetBtn from "./ResetBtn";
import {MyButton} from "./MyButton";
import {useDispatch} from "react-redux";

type BoardPropsType = {
    number:number
    maxNumber:number
    minNumber:number
    changeNumber: () =>void
    resetNumber:() => void
}
const Board = (props:BoardPropsType) => {
    const condition = props.maxNumber<props.minNumber || props.minNumber===props.maxNumber|| props.maxNumber<0?"red":'';
    return (
        <div className='board'>
         <div className={`numberBoard ${condition}`}>{props.number}</div>
            <div className='buttons'>
                <MyButton
                    onClick = {props.changeNumber}
                    disabled = {props.number===props.maxNumber}
                >inc
                </MyButton>
                <MyButton
                    onClick = {props.resetNumber}
                    disabled = {props.number===props.minNumber}
                >reset
                </MyButton>
            </div>

        </div>
    );
};

export default Board;