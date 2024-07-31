import React, { useEffect, useState } from "react";
import "../Style/ScreenGlasses.css";
import { CiHeart } from "react-icons/ci";
import axios from "axios";
import '../Style/ScreenGlasses.css';

const ScreenGlasses = () => {
  const [productFilter, setproductFilter] = useState(null);
  const [brand, setbrand] = useState(null);
  const [ScreenGlassesData , setScreenGlassesData] = useState([]);
  const ScreenGlassesPageData = () =>{
    axios.get(`http://localhost:8080/ScreenGlasses`)
    .then((res)=>setScreenGlassesData(res.data))
    .catch((err)=>console.log(err))
  }
  useEffect(()=>{
    ScreenGlassesPageData()
  },[])
  return (
    <div>
      <img
        src="https://static5.lenskart.com/media/uploads/plp-free-lenses-desk.png"
        alt=""
      />
      <div className="ScreenGlassesSection">
        <div className="ScreenGlassesSection-Left">
          <div className="filter-section">
            <div className="filter-group">
              <h3>AGE GROUP</h3>
              <label>
                <input type="checkbox" />
                2-5 yrs(21)
              </label>
              <label>
                <input type="checkbox" />
                5-8 yrs(40)
              </label>
              <label>
                <input type="checkbox" />
                8-12 yrs(53)
              </label>
            </div>

            <div className="filter-group">
              <h3>FRAME TYPE</h3>
              <div className="frame-options">
                <div
                  className="frame-option"
                  onClick={() => setproductFilter("FullRim")}
                >
                  <img
                    src="https://static.lenskart.com/images/cust_mailer/Eyeglass/FullRim.png"
                    alt=""
                  />
                  <p>Full Rim</p>
                </div>
                <div
                  className="frame-option"
                  onClick={() => setproductFilter("RimLess")}
                >
                  <img
                    src="https://static.lenskart.com/images/cust_mailer/Eyeglass/Rimless.png"
                    alt=""
                  />
                  <p>Rimless</p>
                </div>
                <div
                  className="frame-option"
                  onClick={() => setproductFilter("HalfRim")}
                >
                  <img
                    src="https://static.lenskart.com/images/cust_mailer/Eyeglass/HalfRim.png"
                    alt=""
                  />
                  <p>Half Rim</p>
                </div>
              </div>
            </div>

            <div className="filter-group">
              <h3>FRAME SHAPE</h3>
              <div className="frame-options">
                <div
                  className="frame-option"
                  onClick={() => setproductFilter("Rectangle")}
                >
                  <img
                    src="https://static.lenskart.com/images/cust_mailer/Eyeglass/Rectangle.png"
                    alt=""
                  />
                  <p>Rectangle</p>
                </div>
                <div
                  className="frame-option"
                  onClick={() => setproductFilter("Square")}
                >
                  <img
                    src="https://static.lenskart.com/images/cust_mailer/Eyeglass/Square.png"
                    alt=""
                  />
                  <p>Square</p>
                </div>
                <div
                  className="frame-option"
                  onClick={() => setproductFilter("Round")}
                >
                  <img
                    src="https://static.lenskart.com/images/cust_mailer/Eyeglass/Round.png"
                    alt=""
                  />
                  <p>Round</p>
                </div>
                <div
                  className="frame-option"
                  onClick={() => setproductFilter("CatEye")}
                >
                  <img
                    src="https://static.lenskart.com/images/cust_mailer/Eyeglass/CatEye.png"
                    alt=""
                  />
                  <p>Cat Eye</p>
                </div>
                <div
                  className="frame-option"
                  onClick={() => setproductFilter("Geometric")}
                >
                  <img
                    src="https://static.lenskart.com/images/cust_mailer/Eyeglass/Geometric.png"
                    alt=""
                  />
                  <p>Geometric</p>
                </div>
                <div
                  className="frame-option"
                  onClick={() => setproductFilter("Aviator")}
                >
                  <img
                    src="https://static.lenskart.com/images/cust_mailer/Eyeglass/Aviator.png"
                    alt=""
                  />
                  <p>Aviator</p>
                </div>
                <div
                  className="frame-option"
                  onClick={() => setproductFilter("Wayfarer")}
                >
                  <img
                    src="https://static.lenskart.com/images/cust_mailer/Eyeglass/Wayfarer.png"
                    alt=""
                  />
                  <p>Wayfarer</p>
                </div>
                <div
                  className="frame-option"
                  onClick={() => setproductFilter("Hexagonal")}
                >
                  <img
                    src="https://static.lenskart.com/images/cust_mailer/Eyeglass/Hexagonal.png"
                    alt=""
                  />
                  <p>Hexagonal</p>
                </div>
                <div
                  className="frame-option"
                  onClick={() => setproductFilter("Oval")}
                >
                  <img
                    src="https://static.lenskart.com/images/cust_mailer/Eyeglass/Oval.png"
                    alt=""
                  />
                  <p>Oval</p>
                </div>
                <div
                  className="frame-option"
                  onClick={() => setproductFilter("Clubmaster")}
                >
                  <img
                    src="https://static.lenskart.com/images/cust_mailer/Eyeglass/Clubmaster.png"
                    alt=""
                  />
                  <p>Clubmaster</p>
                </div>
              </div>
            </div>
            <div className="filter-menu">
              <select
                className="filter-item"
                onClick={(e) => setbrand(e.target.value)}
              >
                <option>BRANDS</option>
                <option value="John Jacobs">John Jacobs(841)</option>
                <option value="Lenskart Air">Lenskart Air(516)</option>
                <option value="Vincent Chase">Vincent Chase(501)</option>
              </select>
              <select className="filter-item" onClick={() => setbrand()}>
                <option>FRAME SIZE</option>
                <option value="1">Extra Narrow(123)</option>
                <option value="2">Narrow(524)</option>
                <option value="3">Extra Wide(244)</option>
              </select>
              <select className="filter-item" onClick={() => setbrand()}>
                <option>PRICE</option>
                <option value="1">Low To High</option>
                <option value="2">High To Low</option>
                <option value="3">1000</option>
              </select>
              <select className="filter-item" onClick={() => setbrand()}>
                <option>GENDER</option>
                <option value="1">Kids</option>
                <option value="2">Mans</option>
                <option value="3">Females</option>
              </select>
            </div>
          </div>
        </div>
        <div className="ScreenGlassesSection-Right">
          {ScreenGlassesData.map((el, idx) => {
            return (
              <div className="product-card" key={idx}>
                <div className="card-header">
                  <CiHeart className="HeartIcon" />
                  <img
                    src={el.imageUrl}
                    alt={el.brand}
                    className="image"
                  />
                  <img
                    src={el.imageUrl1}
                    alt={el.brand}
                    className="image1"
                  />
                  <img
                    src={el.imageUrl2}
                    alt={el.brand}
                    className="image2"
                  />
                  <img
                    src={el.imageUrl3}
                    alt={el.brand}
                    className="image3"
                  />
                  <img
                    src={el.imageUrl4}
                    alt={el.brand}
                    className="image4"
                  />
                </div>
                <div className="card-body">
                  <div className="rating">
                    <span className="rating-value">{el.rating}</span>
                    <span className="rating-count">{el.reviews}</span>
                  </div>
                  <h2 className="product-title">{el.brand}</h2>
                  <div className="ColorAndPrizeSize">
                    <div>
                      <p className="product-size">{el.sizeCollection}</p>
                      <p className="product-price">₹{el.price}</p>
                    </div>
                    <div>
                      <div className="color-options">
                        <span className="color-dot1" style={{ backgroundColor: el.color1 }}>1</span>
                        <span className="color-dot2" style={{ backgroundColor: el.color2 }}>2</span>
                        <span className="color-dot3" style={{ backgroundColor: el.color3 }}>3</span>
                        <span className="color-dot4" style={{ backgroundColor: el.color4 }}>4</span>
                      </div>
                    </div>
                  </div>
                  <p className="offer">Get FREE BLU Screen Lenses</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ScreenGlasses;
