import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const EditPage = () => {
  const { id } = useParams();
  console.log(id);
  // {
  //   image: PostData.image,
  //   title: PostData.title,
  //   price: PostData.price,
  //   category: PostData.category,
  // }
  const obj = {
    image: image,
    title: title,
    price: price,
    category: category,
  }
  const [PostData, setPostData] = useState(obj);
  const [FormData, setFormData] = useState();
  const UpdateData = () => {
    axios
      .get(`http://localhost:3000/posts/${id}`)
      .then((res) => setPostData(res.data))
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    UpdateData();
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
            onChange={() => setFormData(PostData.image)}
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
            onChange={() => setFormData(PostData.title)}
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
            onChange={() => setFormData(PostData.price)}
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
            onChange={() => setFormData(PostData.category)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="text-right">
          <Link to={`/Product`}>
            <button className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-75">
              Update Data
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EditPage;
