import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Component/Home";
import EditProduct from "./Component/EditProduct";

const AllRouts = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/EditProduct/:id" element={<EditProduct />} />
      {/* <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} /> */}
    </Routes>
  );
};

export default AllRouts;
