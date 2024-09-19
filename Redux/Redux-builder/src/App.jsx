import { useEffect, useState } from "react";
import "./App.css";
import Counter from "./Components/Counter";
import Theme from "./Components/Theme";
import { useSelector } from "react-redux";

function App() {
  const [count, setCount] = useState(0);
  // const [Theme, setTheme] = useState(false);
  const {theme} = useSelector((data)=>data.themeReducer)

  return (
    <div 
    style={{backgroundColor: theme ? "white": "black"}}
     className="main">
      <Theme />
      <Counter />
    </div>
    // <div
    //   style={{ backgroundColor: Theme ? "black" : "white" }}
    //   className="main"
    // >
    //   <div className="Sub-Main">
    //     <div className="Counter-Box-Top">
    //       <button
    //         onClick={() => setTheme(false)}
    //         className="WhiteMode"
    //         disabled={!Theme}
    //       >
    //         Switch To Light
    //       </button>
    //       <button
    //         onClick={() => setTheme(true)}
    //         disabled={Theme}
    //         className="DarkMode"
    //       >
    //         Switch To Dark
    //       </button>
    //     </div>
    //     <div className="Counter-Box-Bottum">
    //       <h1>Counter : {count}</h1>
    //       <div className="ButtonsOfControls">
    //         <button onClick={() => setCount(count + 1)}>ADD</button>
    //         <button onClick={() => setCount(count - 1)}>REDUCE</button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default App;
