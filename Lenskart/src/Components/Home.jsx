import React from "react";
import Midsection from "./Home/Midsection";
import Gallery from "./Home/Gallery";
import Footer from "./Home/Footer";
import Carousel from "./Home/Carousel";
import Navigation from "./Home/Navigation";
// import SignIn from "./SignIn";
// import { Navigation } from "swiper/modules";

const Home = () => {
  return (
    <div>
      {/* <Navigation /> */}
      
      <Midsection />
      <Carousel />
      <Gallery />
      <Footer />
    </div>
  );
};
export default Home;
