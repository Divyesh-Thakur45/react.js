import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Countair from "./Component/Countair";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Countair />
    </>
  );
}

export default App;
