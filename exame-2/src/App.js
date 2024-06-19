import DataFetch from "../src/data";
import { useState } from "react";

export default function App() {
  const [btn, setbtn] = useState(false);
  const show = () => {
    return (
      <p onClick={() => setbtn(!btn)} className="toggleButton">
        Click to show data
      </p>
    );
  };

  return <div className="App">{btn ? <DataFetch /> : show()}</div>;
}
