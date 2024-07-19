import React, { useEffect, useState } from "react";
import "./Post.css";
import { useParams } from "react-router-dom";
import axios from "axios";

const Post = () => {
  const { id } = useParams();

  const [DataPost, SetDataPost] = useState({
    imageUrl: "",
    brand: "",
    title: "",
    price: 0,
    size: 0,
    mrp: 0,
    discount: 0,
  });

  // D structure
  const { imageUrl, brand, title, price, size, mrp, discount } = DataPost;

  const handleChange = (e) => {
    SetDataPost({ ...DataPost, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.put(`http://localhost:3000/shirts/${id}`,DataPost)
    .then((response) => console.log(response))
    .catch((err) => console.log(err))
  };

  const handleGet = () => {
    axios
      .get(`http://localhost:3000/shirts/${id}`, DataPost)
      .then((res) => SetDataPost(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    handleGet();
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "20px 0px" }}>Update Page</h1>
      <form className="product-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Image URL:</label>
          <input
            type="text"
            name="imageUrl"
            value={imageUrl}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="form-group">
          <label>Brand:</label>
          <input
            type="text"
            name="brand"
            value={brand}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="form-group">
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="form-group">
          <label>Size:</label>
          <input
            type="number"
            name="size"
            value={size}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="form-group">
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={price}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="form-group">
          <label>MRP:</label>
          <input
            type="number"
            name="mrp"
            value={mrp}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="form-group">
          <label>Discount:</label>
          <input
            type="number"
            name="discount"
            value={discount}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default Post;
