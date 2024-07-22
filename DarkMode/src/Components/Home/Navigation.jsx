import React, { useContext, useState } from "react";
import { AiFillMoon } from "react-icons/ai";
import { AiFillSun } from "react-icons/ai";
import "./Navigation.css";
import { mode } from "../ModeContext";
import { NavLink, Route, Router, Routes } from "react-router-dom";

const Navigation = () => {
  const { Theem, ChangeTheemFun , searchData , Search , getSearchData} = useContext(mode);
  console.log(searchData);
  
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="logo">
            <NavLink to={"/"}>TheemChanger</NavLink>
          </div>
          <div className="search-bar">
            <input
            onChange={getSearchData}
              type="text"
              placeholder="Search for products, brands and more"
            />
            <button type="submit" onClick={Search}>Search</button>
            
          </div>
          <div className="nav-links">
            <NavLink to={"/login"}>Login</NavLink>
            <NavLink to={"/More"}>More</NavLink>
            <NavLink to={"/Cart"}>Cart</NavLink>
          </div>
          <div
            onClick={() => ChangeTheemFun()}
            style={{ margin: "5px 12px 0px 12px", fontSize: "22px" }}
          >
            {Theem == true ? <AiFillSun /> : <AiFillMoon />}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
