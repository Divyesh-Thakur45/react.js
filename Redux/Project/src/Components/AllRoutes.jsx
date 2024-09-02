import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Product from "./Product";
import Login from "./Login";
import Privatepage from "./Privatepage";
import Description from "./Description";
import EditPage from "./EditPage";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Privatepage" element={<Privatepage />} />
        <Route path="/EditPage" element={<EditPage />} />
        <Route path="/Description/:id" element={<Description />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
