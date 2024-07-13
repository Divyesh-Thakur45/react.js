import React, { useContext, useEffect, useState } from "react";
import "../Components/Midsection.css";
import { AiFillMoon } from "react-icons/ai";
import { AiFillSun } from "react-icons/ai";

const Midsection = () => {
  const [Sun, setSun] = useState(false);
  const [data,setdata] = useState([]);

  const fetchData = () =>{
    fetch("http://localhost:3000/shirts")
     .then((response) => response.json())
     .then((data) => setdata(data))
     .catch((error) => console.error("Error:", error));
  }

  useEffect(()=>{
    fetchData(); 
  },[])
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="logo">
            <a href="#">TheemChanger</a>
          </div>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search for products, brands and more"
            />
            <button type="submit">Search</button>
          </div>
          <div className="nav-links">
            <a href="#">Login</a>
            <a href="#">More</a>
            <a href="#">Cart</a>
          </div>
          <div
            onClick={() => setSun(!Sun)}
            style={{ margin: "5px 12px 0px 12px", fontSize: "22px" }}
          >
            {Sun ? <AiFillMoon /> : <AiFillSun />}
          </div>
        </div>
      </nav>

      <div>
        <div className="content" style={{backgroundColor:Sun ? "black" : "#ecf0f3"}}>
          {data.map((e, index) => (
            <div key={index} className="card">
              <div style={{ position: "relative" }}>
                <img src={e.imageUrl} alt="Casual Shirt" />
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Midsection;
