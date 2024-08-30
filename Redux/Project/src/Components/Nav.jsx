import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div style={{display:"flex",justifyContent:"space-evenly"}}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/Product">Product</NavLink>
      <NavLink to="/Login">Login</NavLink>
      <NavLink to="/PrivatePage">PrivatePage</NavLink>
    </div>
  );
};

export default Nav;
