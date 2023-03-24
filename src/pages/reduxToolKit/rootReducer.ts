import {combineReducers} from "redux";
import { counterReducer } from "./Reducer";

export const rootReducer = combineReducers({
    custom : counterReducer,
    employee : counterReducer,
    product:counterReducer
})