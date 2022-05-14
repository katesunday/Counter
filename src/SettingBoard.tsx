import React , {ChangeEvent} from 'react';
import {MyButton} from "./MyButton";
import {useDispatch} from "react-redux";
import {getMaxNumberAC , getMinNumberAC , setNumberFromLSTC , useAppDispatch} from "./BLL/counterReducer";

type SettingBoardPropsType = {
    minNumber: number
    maxNumber: number

}
const SettingBoard = (props: SettingBoardPropsType) => {
    const dispatch = useAppDispatch()
    // const setMinNumber = (minNumber:number)=>{
    //     dispatch(getMinNumberAC(minNumber))
    // }
    // const setMaxNumber = (maxNumber:number) => {
    //     dispatch(getMaxNumberAC(maxNumber))
    // }

    // const showMinNumber = (number:number) => {
    //     dispatch(getMinNumberAC(number))
    // }
    const chooseMinNumber = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(getMinNumberAC((Number(e.currentTarget.value))))
    }
    const chooseMaxNumber = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(getMaxNumberAC((Number(e.currentTarget.value))))
    }
    const changeNumberHandler = () => {
        dispatch(getMinNumberAC((props.minNumber)))
        dispatch(setNumberFromLSTC())
    }
    const p_setCondition = props.minNumber < 0 || props.maxNumber < 0 ? "belowZero" : 'warning';
    const setBtnCondition = props.minNumber < 0 || props.maxNumber < 0 || props.minNumber === props.maxNumber || props.maxNumber < props.minNumber
    return (
        <div className='board'>

            <input type="number" id="setMax" onChange={chooseMaxNumber} value={props.maxNumber}/>
            <p className='desc-p'>set Max value for counter</p>

            <input type="number" id="setMin" onChange={chooseMinNumber} value={props.minNumber}/>
            <p className='desc-p'>set Min value for counter</p>
            <MyButton className='setBtn' onClick={changeNumberHandler}
                      disabled={setBtnCondition}>
                Set</MyButton>
            <p className={p_setCondition}> number can't be less than zero</p>
        </div>
    );
};

export default SettingBoard;