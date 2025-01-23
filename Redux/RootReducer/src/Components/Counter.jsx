import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Decrement, Inrement } from '../Redux/actionType'

const Counter = () => {
  const counter = useSelector((state) => state.counter)
  console.log(counter)
  const dispatch = useDispatch()
  return (
    <div>
      <h1>Counter : {counter}</h1>
      <button onClick={() => dispatch({ type: Inrement })}>+</button>
      <button onClick={() => dispatch({ type: Decrement })}>-</button>
    </div>
  )
}

export default Counter