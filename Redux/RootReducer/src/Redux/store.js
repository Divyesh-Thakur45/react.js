import { combineReducers, legacy_createStore } from "redux";
import { reducer as CounterReducer } from "./Counter/reducer";
// import { reducer as ProductReducer } from "./Product/reducer";
const rootreducer = combineReducers({ CounterReducer });
export const store = legacy_createStore(rootreducer);
