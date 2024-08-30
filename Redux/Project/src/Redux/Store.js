import { combineReducers, legacy_createStore } from "redux";
import { reducer as AuthReducer } from "./Auth/reducer";

const root = combineReducers({ AuthReducer });
export const store = legacy_createStore(root);
