import React, { useEffect, useState } from "react";
import "./Description.css";
import { useParams } from "react-router-dom";
import axios from "axios";

const Description = () => {
  const [description, setdescription] = useState({});
  const { id } = useParams();
  console.log(id);

  const descriptionData = () => {
    axios
      .get(`http://localhost:3000/shirts/${id}`)
      .then((res) => setdescription(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    descriptionData();
  }, []);
  return (
    // {
    //   "imageUrl": "",
    //   "brand": "",
    //   "title": "",
    //   "size": 44,
    //   "price": "Rs. 729",
    //   "mrp": "Rs. 2099",
    //   "discount": "(Rs. 1370 OFF)"
    // }
    <div className="product-description">
      <img
        src={description.imageUrl}
        alt={description.title}
        className="product-image"
      />
      <div className="product-details">
        <h1 className="product-title">{description.title}</h1>
        <p className="product-brand">Brand: {description.brand} </p>
        <p className="product-size">Size: {description.size}</p>
        <p className="product-price">Price: {description.price}</p>
        <p className="product-mrp">
          MRP: {description.mrp}
        </p>
        <p className="product-discount">Discount: Rs . {description.discount}</p>
      </div>
    </div>
  );
};

export default Description;
