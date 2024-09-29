import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const AddCard = () => {
  const [showData, setShowData] = useState(null); // Initialize the state with null to handle conditional rendering
  const { id } = useParams();

  const addCardData = () => {
    axios
      .get(`http://localhost:3000/posts/${id}`)
      .then((res) => {
        console.log(res.data);  // Log the response for debugging
        setShowData(res.data);  // Store the response in the state
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    addCardData();  // Fetch data when the component mounts
  }, []);

  if (!showData) {
    return <div>Loading...</div>; // Display loading state while data is being fetched
  }

  return (
    <div className="p-4 max-w-xl mt-10 mx-auto bg-white rounded-lg shadow-md">
      <h1 className="text-xl font-semibold mb-4 text-center">Add To Cart</h1>

      <div className="flex flex-col md:flex-row items-center md:items-start">
        <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-4">
          <img
            src={showData.image}
            alt={showData.title}
            className="w-32 h-32 object-cover rounded-md"
          />
        </div>

        <div className="text-center md:text-left">
          <h3 className="text-lg font-medium text-gray-700 mb-2">
            {showData.category}
          </h3>
          <h5 className="text-md font-semibold text-gray-800">
            Title: {showData.title}
          </h5>
          <p className="text-sm text-gray-600">Price: {showData.price}</p>

          <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddCard;
