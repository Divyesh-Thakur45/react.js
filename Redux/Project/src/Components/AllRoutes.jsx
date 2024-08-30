import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Product from "./Product";
import Login from "./Login";
import Privatepage from "./Privatepage";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Privatepage" element={<Privatepage />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
