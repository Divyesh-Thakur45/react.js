import React from "react";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import { Decrement, Increment } from "./action";
import { DECREMENT, INCREMENT } from "./actionType";

const Cuntair = () => {
  const Counter = useSelector((store) => store.counter);
  const dispatch = useDispatch();
  console.log(dispatch);
  console.log(Counter);
  return (
    <div className="mainDiv">
      <h1>Counter : {Counter}</h1>
      <button onClick={() => dispatch({ type: INCREMENT })}>+</button>
      <button onClick={() => dispatch({ type: DECREMENT })}>-</button>
    </div>
  );
};

export default Cuntair;
