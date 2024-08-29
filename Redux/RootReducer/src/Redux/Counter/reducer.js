import { Decrement, Inrement } from "../actionType";
const initialstate = {
  counter: 0,
};
export const reducer = (state = initialstate, action) => {
    console.log(state)
  switch (action.type) {
    case Inrement:
      return { Counter: state.counter + 1 };
    case Decrement:
      return { Counter: state.counter - 1 };
    default:
      return state;
  }
};
