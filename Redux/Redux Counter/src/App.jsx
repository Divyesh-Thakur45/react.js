import "./App.css";
import { store } from "./Redux/store";

function App() {
  const { getState, dispatch, subscribe } = store;
  // console.log(store)
  const click = () =>{
    dispatch({ type: "Increment" })
    console.log(getState())
  }
   subscribe (()=>{
    console.log("Store updated", getState())
  })

  return (
    <div>
      <h1>Counter : {getState().countair}</h1>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <button onClick={click}>+</button>
        <button>-</button>
      </div>
    </div>
  );
}

export default App;
