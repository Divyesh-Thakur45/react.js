import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  let [count, setcount] = useState(60);
  let [ShowTimer, setShowtimer] = useState(false);
  useEffect(() => {
    if (!ShowTimer) return;
    let setId = setInterval(() => {
      setcount((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(setId);
  }, [ShowTimer]);

  return (
    <div className="app">
      <h1 className="counter">Counter: {count}</h1>
      <button className="button" onClick={() => setShowtimer(true)}>
        Start Timer
      </button>
    </div>
  );
}
