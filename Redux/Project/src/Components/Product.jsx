import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Product = () => {
  const { data, loading, isError } = useSelector(
    (store) => store.ProductReducer
  );
  const dispatch = useDispatch();
  const ProductShow = () => {
    dispatch({ type: "PRODUCT_LOADING" });
    axios
      .get("http://localhost:3000/posts")
      .then((response) => {
        dispatch({ type: "PRODUCT_Data", payload: response.data });
        console.log(response.data);
      })
      .catch((error) => {
        dispatch({ type: "PRODUCT_Error" });
        console.log(error);
      });
  };
  const DeleteProduct = (id) => {
    // console.log(id)
    axios
      .delete(`http://localhost:3000/posts/${id}`)
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    DeleteProduct();
    ProductShow();
  }, []);
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Product Page
      </h1>
      <hr className="mb-8 border-gray-300" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {data.map(({ id, title, price, category, image }) => (
          <div
            className="max-w-sm rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300 bg-white"
            key={id}
          >
            <img
              className="m-auto h-48 md:h-56 lg:h-64"
              src={image}
              alt={title}
            />
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
    </div>
  );
};

export default Product;
