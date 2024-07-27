// AllRouts.jsx
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Components/Home";
import Eyeglasses from "../Components/Eyeglasses";
// Import other components here
import ScreenGlasses from "../Components/ScreenGlasses";
import KidsGlasses from "../Components/KidsGlasses";
import ContactLenses from "../Components/ContactLenses";
import Sunglasses from "../Components/Sunglasses";
import HomeEyeTest from "../Components/HomeEyeTest";
import StoreLocator from "../Components/StoreLocator";

const AllRouts = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/eyeglassespage" element={<Eyeglasses />} />
        <Route exact path="/screenglasses" element={<ScreenGlasses />} />
        <Route exact path="/kidsglasses" element={<KidsGlasses />} />
        <Route exact path="/contactlenses" element={<ContactLenses />} />
        <Route exact path="/sunglasses" element={<Sunglasses />} />
        <Route exact path="/homeeyetest" element={<HomeEyeTest />} />
        <Route exact path="/storelocator" element={<StoreLocator />} />
        <Route path="*" element={<h1>Page Is Not Found</h1>} />
      </Routes>
    </div>
  );
};

export default AllRouts;
