import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ProductShow } from "../Redux/Product/action";

const Product = () => {
  const [page, setpage] = useState(1);
  const [search, setsearch] = useState(null);
  // console.log(search);
  const [category, setcategory] = useState(null);
  // console.log(category);
  const [price, setprice] = useState(null);
  // console.log(price);
  const { data, loading, isError } = useSelector(
    (store) => store.ProductReducer
  );
  const dispatch = useDispatch();

  const DeleteProduct = (id) => {
    console.log(id)
    axios
      .delete(`http://localhost:3000/posts/${id}`)
      .then((response) => (
        dispatch(ProductShow),
        alert("Data deleted successfully")
      ))
      .catch((error) => console.log(error))
  };
  const dataObj = {
    
          _page: page,
          _limit: 4,
          _sort: "price",
          _order: price,
          category: category,
          title : search ,
      
  };
  // dispatch(dataObj);
  useEffect(() => {
    // DeleteProduct();
    dispatch(ProductShow);
  }, []);
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Product Page
      </h1>
      <hr className="mb-8 border-gray-300" />
      <div className="flex justify-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 p-4 mb-5">
        <div className="Category">
          <select
            className="block w-full md:w-auto p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
            name=""
            id=""
            onChange={(e) => setcategory(e.target.value)}
          >
            <option value="">Select</option>
            <option value="men's clothing">Men's clothing</option>
            <option value="jewelery">Jewelery</option>
            <option value="electronics">Electronics</option>
            <option value="women's clothing">Women's clothing</option>
          </select>
        </div>

        <div>
          <input
            type="text"
            placeholder="Search"
            className="block w-full md:w-auto p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
            name=""
            id=""
            onChange={(e) => setsearch(e.target.value)}
          />
        </div>

        <div>
          <select
            className="block w-full md:w-auto p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
            name=""
            id=""
            onChange={(e) => setprice(e.target.value)}
          >
            <option value="">Price</option>
            <option value="asc">A to Z</option>
            <option value="desc">Z to A</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {data.map(({ id, title, price, category, image }) => (
          <div
            className="max-w-sm rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300 bg-white"
            key={id}
          >
            <Link to={`/description/${id}`}>
              <img
                className="m-auto h-48 md:h-56 lg:h-64"
                src={image}
                alt={title}
              />
            </Link>
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {title}
              </h2>
              <p className="text-gray-600 text-sm mb-4">{category}</p>
              <p className="text-lg font-bold text-blue-600">Price: ${price}</p>
              <div className="flex justify-between mt-4">
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-300"
                  onClick={() => DeleteProduct(id)}
                >
                  Delete
                </button>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center space-x-4 mt-20">
        <button
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
          disabled={page == 1}
          onClick={() => setpage(page - 1)} // Assuming you have an increment function
        >
          -
        </button>
        <span className="text-gray-700 font-medium">Page: {page}</span>
        <button
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
          disabled={page == 5}
          onClick={() => setpage(page + 1)} // Assuming you have a decrement function
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Product;
