import React from "react";
import { NavLink } from "react-router-dom";
import bgImage from "../Assets/Images/Background_image.jpg";

export default function Home() {
  return (
    <div>
      <header
        className="bg-cover bg-center h-screen flex items-center justify-center text-center bg-green-500"
        style={{
          backgroundImage: `url(https://png.pngtree.com/background/20230619/original/pngtree-lebanese-e-commerce-visualized-in-3d-for-online-platforms-and-social-picture-image_3761208.jpg)`,
        }}
      >
        <div className=" p-8 rounded-lg">
          <h1 className="text-4xl md:text-6xl text-white font-bold mb-4">
            Your Tagline Here
          </h1>
          <p className="text-lg md:text-2xl text-gray-200 mb-8">
            Discover the best products at unbeatable prices!
          </p>
          <NavLink
            to={"/Products"}
            href="#featured-categories"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white text-lg font-semibold py-3 px-6 rounded-lg"
          >
            Shop Now
          </NavLink>
        </div>
      </header>
    </div>
  );
}
