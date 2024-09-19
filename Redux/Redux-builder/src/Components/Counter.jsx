import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DECREMENT, INCREMENT } from '../Redux/actiontype'

const Counter = () => {
    const {counter} = useSelector((data)=>data.counterReducer)
    const dispatch = useDispatch()
  return (
    <div className="Counter-Box-Bottum">
           <h1>Counter : {counter}</h1>
           <div className="ButtonsOfControls">
             <button onClick={()=>dispatch({type:INCREMENT, payload: 1})}>ADD</button>
             <button onClick={()=>dispatch({type:DECREMENT, payload: 1})}>REDUCE</button>
           </div>
     </div>
  )
}
export default Counter