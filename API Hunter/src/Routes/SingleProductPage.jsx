import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SingleProductPage() {
  const { id } = useParams();
  const [singleData, setSingleData] = useState("");
  const getDataFromId = async (id) => {
    try {
      let response = await axios.get(
        `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products/${id}`
      );
      setSingleData(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getDataFromId(id);
  }, []);
  return (
    <div
      data-testid="products-container"
      className="p-4 max-w-md mx-auto bg-white shadow-lg rounded-lg border border-gray-200"
    >
      <div className="mb-4">
        <h3
          data-testid="product-brand"
          className="text-xl font-semibold text-gray-800"
        >
          {singleData.brand}
        </h3>
      </div>
      <div className="mb-4">
        <img
          data-testid="product-image"
          src={singleData.img}
          alt={`${singleData.brand} image`}
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>
      <div className="mb-2 text-left font-bold text-gray-600" data-testid="product-category">
        Category: {singleData.category}
      </div>
      <div className="mb-4 text-left font-bold text-gray-700" data-testid="product-details">
        Details: {singleData.details}
      </div>
      <div
        data-testid="product-price"
        className="text-lg font-bold text-left text-gray-900"
      >
        Price: {singleData.price}
      </div>
    </div>
  );
}
export default SingleProductPage;
