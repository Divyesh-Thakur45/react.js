import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [Theme, setTheme] = useState(false);
  

  return (
    <div
      style={{ backgroundColor: Theme ? "black" : "white" }}
      className="main"
    >
      <div className="Sub-Main">
        <div className="Counter-Box-Top">
          <button
            onClick={() => setTheme(false)}
            // style={{ disabled: Theme ? false : true }}
            className="WhiteMode"
            disabled={!Theme}
          >
            Switch To Light
          </button>
          <button
            onClick={() => setTheme(true)}
            // style={{ disabled: Theme ? true : false }}
            disabled={Theme}
            className="DarkMode"
          >
            Switch To Dark
          </button>
        </div>
        <div className="Counter-Box-Bottum">
          <h1>Counter : {count}</h1>
          <div className="ButtonsOfControls">
            <button onClick={() => setCount(count + 1)}>ADD</button>
            <button onClick={() => setCount(count - 1)}>REDUCE</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
