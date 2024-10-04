import "../../Style/Midsection.css";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css/pagination";

const Midsection = () => {
  // header
  // const baseurl = process.env.REACT_APP_BASE_URL;
  // console.log(`${baseurl}/post`);
  const [bigsliderdata, setbigsliderdata] = useState([]);

  const bigSliderFun = () => {
    axios
      .get("https://all-json-server-osax.onrender.com/firstbigslider")
      .then((res) => setbigsliderdata(res.data))
      .catch((err) => alert(err));
  };
  useEffect(() => {
    bigSliderFun();
  }, []);

  return (
    <div>
      <div className="flex justify-between m-auto text-center px-10 py-3 NavigationData-main">
        <Link to={"/eyeglassespage"}>
          <div className="NavigationData">
            <img
              src="https://static1.lenskart.com/media/desktop/img/Apr22/a2.png"
              alt="Eyeglasses"
              width={200}
            />
            <a href="#" className="">
              Eyeglasses
            </a>
          </div>
        </Link>

        {/* 2 */}
        <Link to={"/screenglasses"}>
          <div className="NavigationData">
            <img
              src="https://static1.lenskart.com/media/desktop/img/Apr22/b2.png"
              alt="Sunglasses"
              width={200}
            />
            <a href="#" className="">
              Sunglasses
            </a>
          </div>
        </Link>
        {/* 3 */}
        <div className="NavigationData">
          <img
            src="https://static1.lenskart.com/media/desktop/img/Apr22/d2.png"
            alt="Screen Glasses"
            width={200}
          />
          <a href="#" className="">
            Screen Glasses
          </a>
        </div>

        {/* 4 */}
        <div className="NavigationData">
          <img
            src="https://static1.lenskart.com/media/desktop/img/Apr22/d.png"
            alt="Content Lenses"
            width={200}
          />
          <a href="#" className="">
            Content Lenses
          </a>
        </div>

        {/* 5 */}
        <div className="NavigationData">
          <img
            src="https://static1.lenskart.com/media/desktop/img/Apr22/e2.png"
            alt="Power Sunglasses"
            width={200}
          />
          <a href="#" className="">
            Power Sunglasses
          </a>
        </div>

        {/* 6 */}
        <div className="NavigationData">
          <img
            src="https://static1.lenskart.com/media/desktop/img/June22/prog11.jpg"
            alt="Progressive lenses"
            width={200}
          />
          <a href="#" className="">
            Progressive lenses
          </a>
        </div>
      </div>
      <div className="bottom-bar-main">
        <img
          src="https://static1.lenskart.com/media/desktop/img/harmony/28-jun-24/Web%20Banner%201920x520.jpg"
          alt=""
        />
      </div>

      <div className="slider">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
        >
          {bigsliderdata.map((e, idx) => {
            return (
              <SwiperSlide>
                <div className="slider-img" key={idx}>
                  <img src={e.image} alt="" />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
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
