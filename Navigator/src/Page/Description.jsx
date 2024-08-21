import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Description() {
  const { id } = useParams();
  const [descriptionData, setDescriptionData] = useState({});
  const getDatafromId = (id) => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setDescriptionData(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getDatafromId(id);
  }, []);
  return (
    <div className="py-8">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="flex items-center justify-center">
            <img
              src={descriptionData.image}
              alt={descriptionData.title}
              className="max-w-full h-auto rounded-lg shadow-md"
            />
          </div>
          <div className="flex flex-col justify-around">
            <div>
              <h1 className="text-4xl font-extrabold mb-6">
                {descriptionData.title}
              </h1>
              <div className="mb-6">
                <h4 className="text-lg font-medium text-gray-800">
                  Category: {descriptionData.category}
                </h4>
                <h3 className="text-lg text-gray-600 ml-6">
                  Price: ${descriptionData.price}
                </h3>
              </div>
              <p className="text-gray-800 leading-relaxed">
                {descriptionData.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}