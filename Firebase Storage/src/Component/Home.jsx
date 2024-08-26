import React, { useContext } from "react";
import { DataOfFireBase } from "../ContextAPI/Context";
import "../Component/Home.css";
import AddProduct from "./AddProduct";
import { Link } from "react-router-dom";

const Home = () => {
  const { prouctData, setprouctData, GetData, DeleteProduct } =
    useContext(DataOfFireBase);
  console.log(prouctData);

  return (
    <div>
      <AddProduct />
      <h1>Read Data </h1>
      {prouctData.map((el, inx) => {
        return (
          <div className="card" key={inx}>
            <div>
              <div className="card-header">
                <img
                  src={el.imageUrl}
                  alt="Lenskart Air"
                  className="product-image1"
                />
                <img
                  src={el.imageUrl2}
                  alt="Lenskart Air"
                  className="product-image2"
                />
              </div>
              <div className="card-body">
                <div className="rating">
                  <span className="rating-value">{el.rating}</span>
                  <span className="rating-count">{el.reviews}</span>
                </div>
                <h2 className="product-title">{el.brand}</h2>
                <div className="ColorAndPrizeSize">
                  <div>
                    <p className="product-size">{el.sizeCollection}</p>
                    <p className="product-price">₹{el.price}</p>
                    <p className="product-brand">{el.brand}</p>
                  </div>
                </div>
                <div>
                  <Link to={`/EditProduct/${el.id}`} ><button className="Edit">Edit</button></Link>
                  <button
                    className="Delete"
                    onClick={() => DeleteProduct(el.id)}
                  >
                    Delete
                  </button>
                </div>
                <p className="offer">Get FREE BLU Screen Lenses</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
