import React, { useReducer } from "react";
const reducer = (state, action) => {
  if (action.type == "Increment") {
    return { countair: state.countair + action.payload };
  }
};
const intialstate = {
  countair: 0,
};

const Countair = () => {
  
const [state, dispatch] = useReducer(reducer, intialstate);
  return (
    <div>
      <h1>Countair : {state.countair}</h1>
      <div>
        <button onClick={() => dispatch({ type: "Increment", payload: 1 })}>
          +
        </button>
        <button>-</button>
      </div>
    </div>
  );
};

export default Countair;
