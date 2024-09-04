import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Description = () => {
  const { id } = useParams();
  // console.log(id);
  const [FormImage, setFormImage] = useState("");
  const [FormTitle, setFormTitle] = useState();
  const [FormCatogory, setCatogory] = useState();
  const [FormPrice, setPrice] = useState();
  console.log(FormImage)
  const [data, setData] = useState({});
  const { title, price, category, image } = data;
  const DescriptionData = () => {
    // dispatch({ type: "PRODUCT_LOADING" });
    axios
      .get(`http://localhost:3000/posts/${id}`)
      .then((response) => {
        // dispatch({ type: "PRODUCT_Data", payload: response.data });
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        // dispatch({ type: "PRODUCT_Error" });
        console.log(error);
      });
  };
  useEffect(() => {
    DescriptionData();
  }, []);
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-10">
          Product Description
        </h1>
        <hr className="border-gray-300 mb-10" />
        <div
          className="max-w-md mx-auto bg-white shadow-xl rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
          key={id}
        >
          <img
            className="m-auto h-64 mt-2 object-center"
            src={image}
            alt={title}
            onChange={(e) => setFormImage(e.target.value)}
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">{title}</h2>
            <p className="text-gray-500 text-sm mb-2">{category}</p>
            <p className="text-lg font-semibold text-gray-800 mb-4">
              Price: <span className="text-blue-600">${price}</span>
            </p>

            <div className="flex justify-between items-center">
              <Link to={"/EditPage"}>
                <button className="bg-green-500 text-white px-6 py-2 rounded-full shadow hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-red-300 transition-transform duration-300">
                  Edid
                </button>
              </Link>
              <button className="bg-blue-500 text-white px-6 py-2 rounded-full shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-transform duration-300">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
