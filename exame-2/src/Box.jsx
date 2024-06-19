// import data from './data'
import { useEffect, useState } from "react";
export default function Box({ id, image, price, name }) {
  const [counter, setcounter] = useState(1);
  return (
    <div key={id} className="productCard">
      <img src={image} alt="" className="productImage" />
      <p className="productPrice">Price: {price}</p>
      <span className="productName">{name}</span>
      <div className="counterContainer">
        <button
          className="counterButton"
          disabled={counter == 1}
          onClick={() => setcounter(counter - 1)}
        >
          -
        </button>
        <span className="counterValue">{counter}</span>
        <button
          className="counterButton"
          disabled={counter == 5}
          onClick={() => setcounter(counter + 1)}
        >
          +
        </button>
      </div>
    </div>
  );
}
