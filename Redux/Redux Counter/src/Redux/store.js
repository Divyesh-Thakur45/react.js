import { legacy_createStore } from "redux";
import { reducer } from "./reducer";
const intialstate = {
  countair: 0,
};
export const store = legacy_createStore(reducer, intialstate);
