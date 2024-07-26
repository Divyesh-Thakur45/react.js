import "../../Style/Midsection.css";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

const Midsection = () => {
  const baseurl=process.env.REACT_APP_BASE_URL
  console.log(`${baseurl}/post`)
  // Slider
  const [bigsliderdata, setbigsliderdata] = useState([]);
  const bigSliderFun = () => {
    axios
      .get(`${baseurl}/firstbigslider`)
      .then((res) => setbigsliderdata(res.data))
      .catch((err) => alert(err));
  };
  useEffect(() => {
    bigSliderFun();
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div>
      <div className="slider">
        {/* <Slider {...settings}> */}
          {bigsliderdata.map((e, idx) => {
            return (
              <div className="slider-img" key={idx}>
                <img src={e.image} alt="" />
              </div>
            );
          })}
        {/* </Slider> */}
      </div>

      {/* _________________ */}
      <div className="py-5">
        <img
          src="https://static1.lenskart.com/media/desktop/img/Apr22/Bannerforexport.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Midsection;
