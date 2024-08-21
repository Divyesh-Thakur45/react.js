import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

export default function Products() {
  const [productData, setProductData] = useState([]);
  const getData = () => {
    axios
      .get(`https://fakestoreapi.com/products`)
      .then((res) => setProductData(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="w-[80%] m-auto my-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {productData.map((ele, ind) => (
          <div
            key={ind}
            className="bg-white rounded-lg shadow-lg overflow-hidden">
            <NavLink to={`/Description/${ele.id}`}>
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <img
                  src={ele.image}
                  alt={ele.title}
                  className="h-full object-cover"
                />
              </div>
            </NavLink>
            <div className="p-4">
              <h1 className="text-xl font-semibold mb-2">{ele.title}</h1>
              <h4 className="text-lg font-bold text-gray-800 mb-2">
                Price: ${ele.price}
              </h4>
              <p className="text-md text-gray-600">Category: {ele.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}