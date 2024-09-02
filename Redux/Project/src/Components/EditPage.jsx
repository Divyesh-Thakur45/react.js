import React from "react";
import { Link } from "react-router-dom";

const EditPage = () => {
  return (
    <div class="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
      <h1 class="text-2xl font-bold text-gray-800 mb-4">Update Product</h1>
      <hr class="mb-6 border-gray-300" />
      <div class="space-y-4">
        <div>
          <label for="image" class="block text-sm font-medium text-gray-700">
            Image URL
          </label>
          <input
            type="text"
            id="image"
            placeholder="Change Image"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label for="title" class="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            id="title"
            placeholder="Change Title"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label for="price" class="block text-sm font-medium text-gray-700">
            Price
          </label>
          <input
            type="text"
            id="price"
            placeholder="Change Price"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label for="category" class="block text-sm font-medium text-gray-700">
            Category
          </label>
          <input
            type="text"
            id="category"
            placeholder="Change Category"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div class="text-right">
          <Link to={`/Product`}>
            <button class="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-75">
              Update Data
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EditPage;
