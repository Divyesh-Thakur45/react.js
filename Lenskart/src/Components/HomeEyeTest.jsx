import React from "react";
import { Link } from "react-router-dom";

const HomeEyeTest = () => {
  return (
    <div>
      <div>
        <div className="bg-gray-100 h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-9xl font-bold text-gray-800">404</h1>
            <p className="text-2xl md:text-3xl font-light text-gray-600 mt-4">
              Oops! Page not found.
            </p>
            <p className="mt-6 text-gray-500">
              The page you're looking for doesn't exist.
            </p>
            <Link
              to="/eyeglassespage"
              className="mt-8 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg text-lg font-medium hover:bg-blue-700 transition duration-300"
            >
              Eyeglasses Page
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeEyeTest;
