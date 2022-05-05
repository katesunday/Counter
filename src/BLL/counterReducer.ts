import {Action , AnyAction , Dispatch} from "redux";
import {AppDispatch , AppStateType} from "./store";
import {loadState , saveState} from "./ls-utils";
import {ThunkAction , ThunkDispatch} from "redux-thunk";
import App from "../App";
import {useDispatch} from "react-redux";

const initialState = {
    myNumber:  0 ,
    maxNumber: 0 ,
    minNumber:  0 ,
}
type initialStateType = typeof initialState

export const counterReducer = (state: initialStateType = initialState , action: ActionType): initialStateType => {
    switch (action.type) {
        case "CHANGE-NUMBER": {
            return {...state , myNumber: state.myNumber + 1}
        }
        case "GET-MIN-NUMBER": {
            return {...state , myNumber: action.numberFromLS , minNumber: action.numberFromLS}
        }
        case "GET-MAX-NUMBER": {
            return {...state , maxNumber: action.numberFromLS}
        }
        case "RESET-NUMBER":{
            return {...state,minNumber: action.minNumber}
        }
        default:
            return state
    }
}
type ActionType = changeNumberACType | getMinNumberACType | getMaxNumberACType | resetNumberACType

type changeNumberACType = ReturnType<typeof changeNumberAC>
export const changeNumberAC = () => (
    {type: 'CHANGE-NUMBER'} as const)

type getMinNumberACType = ReturnType<typeof getMinNumberAC>
export const getMinNumberAC = (numberFromLS: number) => (
    {type: 'GET-MIN-NUMBER' , numberFromLS} as const)

type getMaxNumberACType = ReturnType<typeof getMaxNumberAC>
export const getMaxNumberAC = (numberFromLS: number) => (
    {type: 'GET-MAX-NUMBER' , numberFromLS} as const)

type resetNumberACType = ReturnType<typeof resetNumberAC>
export const resetNumberAC = (minNumber: number) => (
    {type: 'RESET-NUMBER' , minNumber} as const)

export const setNumberFromLSTC = () => (dispatch: Dispatch , getState: () => AppStateType) => {
    let min = getState().counter.minNumber
    let max = getState().counter.maxNumber
    saveState('min',JSON.stringify(min))
    saveState('max',JSON.stringify(max))

}

type AppThunkType = ThunkDispatch<AppStateType , void, ActionType>
export const useAppDispatch = () => useDispatch<AppThunkType>()

export const getValueCounterFromLS = () => (dispatch:AppThunkType) => {

    dispatch(getMinNumberAC(loadState()?.localMin));
    dispatch(getMaxNumberAC(loadState()?.localMax));
}
