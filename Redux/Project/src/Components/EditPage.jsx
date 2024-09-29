import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const EditPage = () => {
  const { id } = useParams();
  console.log(id);
  const [defultvalue, setdefultvalue] = useState({});
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const formObj = {
    image,
    title,
    category,
    price,
  };
  console.log(formObj);
  const GetData = () => {
    axios
      .get(`http://localhost:3000/posts/${id}`)
      .then((response) => {
        setdefultvalue(response.data);
        setImage(response.data.image);
        setTitle(response.data.title);
        setCategory(response.data.category);
        setPrice(response.data.price);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleSubmite = () => {
    axios
      .put(`http://localhost:3000/posts/${id}`, formObj)
      .then((response) => {
        console.log(response);
        alert("Success!");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    GetData();
    handleSubmite();
  }, []);
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Update Product</h1>
      <hr className="mb-6 border-gray-300" />
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Image URL
          </label>
          <input
            type="text"
            id="image"
            placeholder="Change Image"
            onChange={(e) => setImage(e.target.value)}
            value={image}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            id="title"
            placeholder="Change Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Price
          </label>
          <input
            type="text"
            id="price"
            placeholder="Change Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Category
          </label>
          <input
            type="text"
            id="category"
            placeholder="Change Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="text-right">
          <Link to={`/Product`}>
            <button
              onClick={() => handleSubmite()}
              className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-75"
            >
              Update Data
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EditPage;
