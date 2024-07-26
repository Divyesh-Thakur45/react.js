import "../../Style/Midsection.css";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

const Midsection = () => {
  // header
  // const baseurl = process.env.REACT_APP_BASE_URL;
  // console.log(`${baseurl}/post`);
  const [navData, setnavData] = useState([]);
  const [bigsliderdata, setbigsliderdata] = useState([]);
  const NavigationData = () => {
    axios
      .get("http://localhost:8080/posts")
      .then((response) => setnavData(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    NavigationData();
  }, []);

  // slider
  // const baseurl = process.env.REACT_APP_BASE_URL;
  // console.log(`${baseurl}/post`);
  // Slider
  
  const bigSliderFun = () => {
    axios
      .get("http://localhost:8080/firstbigslider")
      .then((res) => setbigsliderdata(res.data))
      .catch((err) => alert(err));
  };
  useEffect(() => {
    bigSliderFun();
  }, []);

  return (
    <div>
      <div className="flex justify-between m-auto text-center px-10 py-3 NavigationData-main">
        {navData.map((e, i) => {
          return (
            <div key={i} className="NavigationData">
              <img src={e.image} alt={e.title} width={200} />
              <a href="#" className="">
                {e.title}
              </a>
            </div>
          );
        })}
      </div>
      <div className="bottom-bar-main">
        <img
          src="https://static1.lenskart.com/media/desktop/img/harmony/28-jun-24/Web%20Banner%201920x520.jpg"
          alt=""
        />
      </div>

      <div className="slider">
        {bigsliderdata.map((e, idx) => {
          return (
            <div className="slider-img" key={idx}>
              <img src={e.image} alt="" />
            </div>
          );
        })}
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
