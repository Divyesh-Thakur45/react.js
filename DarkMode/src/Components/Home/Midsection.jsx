import React, { useContext, useEffect, useState } from "react";
import "./Midsection.css";
import { mode } from "../ModeContext";
import { Link } from "react-router-dom";
import axios from "axios";

const Midsection = () => {
  const [page, setPage] = useState(1);
  const { Theem, searchData } = useContext(mode);
  const [price, setPrice] = useState(null);
  const [data, setData] = useState([]);

  const fetchData = () => {
    axios
      .get("http://localhost:3000/shirts", {
        params: {
          _page: page,
          _limit: 6,
          _sort: "price",
          _order: price,
          q: searchData,
        },
      })
      .then((res) => setData(res.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    console.log("Fetching data with params:", { page, price, searchData });
    fetchData();
  }, [page, price, searchData]);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3000/shirts/${id}`)
      .then((res) => {
        console.log(res);
        fetchData();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div className="MidContentSection">
        <div>
          <select onChange={(e) => setPrice(e.target.value)}>
            <option disabled selected>
              Price
            </option>
            <option value={"asc"}>Low To High</option>
            <option value={"desc"}>High To Low</option>
          </select>
        </div>
        <div
          className="content"
          style={{ backgroundColor: Theem ? "#ecf0f3" : "black" }}
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
                  <span className="current-price">Rs.{e.mrp}</span>
                  <span className="original-price">Rs. {e.price}</span>
                  <span className="discount">({e.discount} % OFF)</span>
                </div>
                <Link to={`/Post/${e.id}`}>Edit</Link>
              </div>
              <div className="button-container">
                <button className="btn add-to-cart">Add to Cart</button>
                <button
                  className="btn delete"
                  onClick={() => handleDelete(e.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="pagination-container">
        <button
          onClick={() => page > 1 && setPage(page - 1)}
          className="pagination-button"
        >
          Previous
        </button>
        <span className="page-number">Page {page}</span>
        <button onClick={() => setPage(page + 1)} className="pagination-button">
          Next
        </button>
      </div>
    </div>
  );
};

export default Midsection;
