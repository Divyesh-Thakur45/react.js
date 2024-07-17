import React, { useContext, useEffect, useState } from "react";
import "./Midsection.css";
import TheemChanger, { mode } from "../ModeContext";
import { Link } from "react-router-dom";

const Midsection = () => {
  const { Theem, ChangeTheemFun } = useContext(mode);
  console.log(Theem);
  const [data, setdata] = useState([]);

  const fetchData = () => {
    fetch("http://localhost:3000/shirts")
      .then((response) => response.json())
      .then((data) => setdata(data))
      .catch((error) => console.error("Error:", error));
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <div className="MidContentSection">
        <div
          className="content"
          style={{ backgroundColor: Theem == true ? "#ecf0f3" : "black" }}
        >
          {data.map((e, index) => (
            <div key={index} className="card">
              <div style={{ position: "relative" }}>
                <Link to={`/Description/${e.id}`}>
                  <img src={e.imageUrl} alt="Casual Shirt" />
                </Link>
                <div className="rating">
                  <span className="star">★ 4 | 1.1k</span>
                </div>
              </div>
              <div className="info">
                <div className="brand">{e.brand}</div>
                <div className="product">{e.title}</div>
                <div className="price">
                  <span className="current-price">{e.mrp}</span>
                  <span className="original-price">{e.price}</span>
                  <span className="discount">{e.discount}</span>
                </div>
              </div>

              <div className="button-container">
                <button className="btn add-to-cart">Add to Cart</button>
                <button className="btn delete">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Midsection;
