import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { descrement, increment } from './features/counter'

function App() {

  const { counter } = useSelector((store) => store.counter)
  const dispatch = useDispatch()
  return (
    <div className="counter-container">
      <div className="counter-box">
        <p className="counter-value">Counter: {counter}</p>
        <div className="button-container">
          <button className="counter-button" onClick={() => dispatch(descrement())}>
            -
          </button>
          <button className="counter-button" onClick={() => dispatch(increment())}>
            +
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
