import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../Style/description.css";

const Description = () => {
  const [product, setProduct] = useState({});
  console.log(product.imageUrl);
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    axios
      .get(`http://localhost:8080/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <div className="product-container">
        <nav className="breadcrumb">
          <a href="#">Eyewear</a> /<a href="#">Eyeglasses</a> /
          <a href="#">Brands</a> /<a href="#">Lenskart Blu</a> /
          <span>Blue Block Screen Glasses</span>
        </nav>
        <div className="product-content">
          <div className="product-images">
            <div className="img1">
              <img src={product.imageUrl} alt="Front view" />
            </div>
            <div className="img2">
             <img src="https://static.lenskart.com/media/desktop/img/view-360.svg" alt="Back view" className="Degree"/>
              <img src={product.imageUrl2} alt="Side view" />
            </div>
          </div>
          <div className="product-details">
            <p className="Brand">{product.brand}</p>
            <h1>Matte Black Full Rim Square Lenskart Blu LB E13526-C1</h1>
            <p className="size">{product.sizeCollection}</p>
            <p className="price">
              ₹{product.price}{" "}
              <span className="price-gst">(₹{product.price} with GST)</span>
            </p>
            <div className="color-options">
              <span
                className="color-dot"
                style={{ backgroundColor: "#000" }}
              ></span>
              <span
                className="color-dot"
                style={{ backgroundColor: "#ccc" }}
              ></span>
              <span
                className="color-dot"
                style={{ backgroundColor: "#aaa" }}
              ></span>
              <span
                className="color-dot"
                style={{ backgroundColor: "#333" }}
              ></span>
            </div>
            <p className="offer">
              with Pre-fitted BLU Screen Glasses <br />
              Get it for ₹700. Coupon: EYECON
            </p>
            {/* <p className="coupon"></p> */}
            <button className="buy-now">BUY NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
