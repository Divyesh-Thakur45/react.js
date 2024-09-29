import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="flex justify-evenly bg-gray-800 p-4 shadow-lg">
      <NavLink
        to="/"
        className="text-white font-medium hover:text-gray-400 transition-colors duration-300"
      >
        Home
      </NavLink>
      <NavLink
        to="/Product"
        className="text-white font-medium hover:text-gray-400 transition-colors duration-300"
      >
        Product
      </NavLink>
      <NavLink
        to="/Login"
        className="text-white font-medium hover:text-gray-400 transition-colors duration-300"
      >
        Login
      </NavLink>
      <NavLink
        to="/AddCard"
        className="text-white font-medium hover:text-gray-400 transition-colors duration-300"
      >
        Add to Card
      </NavLink>
    </div>
  );
};

export default Nav;
