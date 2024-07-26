import React from "react";
import Midsection from "./Home/Midsection";
import Gallary from "./Home/Gallary";
import Footer from "./Home/Footer";
import Carousel from "./Home/Carousel";
import Navigation from "./Home/Navigation";
// import { Navigation } from "swiper/modules";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Midsection />
      <Carousel />
      <Gallary />
      <Footer />
    </div>
  );
};
export default Home;
