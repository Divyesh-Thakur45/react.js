import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AllRoutes from "./Components/AllRoutes";
import Nav from "./Components/Nav";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Nav />
      <AllRoutes />
    </div>
  );
}

export default App;
