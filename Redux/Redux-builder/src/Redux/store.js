import { combineReducers, legacy_createStore } from "redux";
import { reducer as counterReducer } from "./Counter/reducer";
import { reducer as themeReducer } from "./Theme/reducer";

const rootReducer = combineReducers({counterReducer, themeReducer })
export const store = legacy_createStore(rootReducer)