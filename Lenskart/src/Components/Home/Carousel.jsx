import React, { useEffect, useState } from "react";
import "../../Style/Carousel.css";
import axios from "axios";

const Carousel = () => {
  // const baseurl=process.env.REACT_APP_BASE_URL
  // console.log(`${baseurl}secondSlider`)
  const [Secondsliderdata, setSecondsliderdata] = useState([]);
  const SecondsliderdataFun = () => {
    axios
      .get("http://localhost:8080/secondSlider")
      .then((res) => setSecondsliderdata(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    SecondsliderdataFun();
  }, []);

  return (
    <div>
      <div className="trend-section">
        <div className="wearTrend">
          WEAR THE
          <div style={{ marginTop: "-19px" }} className="">
            TREND
          </div>
          <div className="TrendyTag">Our hottest collections</div>
        </div>
        <div className="trend-items-main">
          {Secondsliderdata.map((e, idx) => {
            return (
              <div className="trend-item" key={idx}>
                <img src={e.image} alt={e.title} />
                <p>{e.title}</p>
                <button>Explore</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
