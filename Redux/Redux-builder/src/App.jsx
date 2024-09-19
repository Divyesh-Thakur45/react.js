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
  );
}

export default App;
