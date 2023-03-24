import {legacy_createStore as createStore } from "redux"
import BookReducer from "./bookReducerA"
 
const storeA=createStore(BookReducer);

export default storeA
