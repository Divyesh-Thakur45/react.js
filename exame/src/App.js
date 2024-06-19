import { useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setcount] = useState(0);

  const PrimeNum = (num) => {
    let coun = 0;
    for (let i = 1; i <= num; i++) {
      if (num % i == 0) {
        coun = coun + 1;
      }
    }
    if (coun == 2) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="App">
      <h1>Welcome To Counter 2.O</h1>
      <p>
        Count : <strong>{count}</strong>
      </p>
      <div className="btnDiv">
        <button
          className="btn"
          disabled={count == 0}
          onClick={() => setcount(count - 1)}
        >
          -1
        </button>
        <button className="btn" onClick={() => setcount(count + 1)}>
          +1
        </button>
      </div>
      <button className="btn" onClick={() => setcount(0)}>
        Reset Count
      </button>

      <h5>This number is : {count % 2 == 0 ? "Even" : "Odd"}</h5>
      <h5>Prime number : {PrimeNum(count) ? "true" : "false"}</h5>
    </div>
  );
}
