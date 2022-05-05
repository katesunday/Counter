import {applyMiddleware , combineReducers , createStore} from "redux";
import {counterReducer} from "./counterReducer";
import {saveState} from "./ls-utils";
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    counter: counterReducer
})
export type AppStateType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer,applyMiddleware(thunk))
export type AppDispatch = typeof store.dispatch

//
// store.subscribe(()=>{
//     saveState({
//         counter:store.getState().counter
//     })
// })
//@ts-ignore
window.store = store
console.log(store.getState())