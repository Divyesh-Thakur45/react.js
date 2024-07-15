import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";

const Routers = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Login" element={<Login />} />
        {/* <Route exact path="/More" element={<More />} /> */}
      </Routes>
    </div>
  );
};

export default Routers;
