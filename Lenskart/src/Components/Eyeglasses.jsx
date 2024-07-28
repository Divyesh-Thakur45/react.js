import React, { useEffect, useState } from "react";
import "../Style/Eyeglasses.css";
import { CiHeart } from "react-icons/ci";
import axios from "axios";

const Eyeglasses = () => {
  const [GogglesData, setGogglesData] = useState([]);
  const fetchGogglesData = () => {
    axios
      .get("http://localhost:8080/products")
      .then((res) => setGogglesData(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchGogglesData();
  }, []);

  return (
    <div>
      <img
        src="https://static5.lenskart.com/media/uploads/plp-free-lenses-desk.png"
        alt=""
      />
      <div className="EyeGlassesSection">
        <div className="EyeGlassesSection-Left">
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
                <div className="frame-option">
                  <img
                    src="https://static.lenskart.com/images/cust_mailer/Eyeglass/FullRim.png"
                    alt=""
                  />
                  <p>Full Rim</p>
                </div>
                <div className="frame-option">
                  <img
                    src="https://static.lenskart.com/images/cust_mailer/Eyeglass/Rimless.png"
                    alt=""
                  />
                  <p>Rimless</p>
                </div>
                <div className="frame-option">
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
                <div className="frame-option">
                  <img
                    src="https://static.lenskart.com/images/cust_mailer/Eyeglass/Rectangle.png"
                    alt=""
                  />
                  <p>Rectangle</p>
                </div>
                <div className="frame-option">
                  <img
                    src="https://static.lenskart.com/images/cust_mailer/Eyeglass/Square.png"
                    alt=""
                  />
                  <p>Square</p>
                </div>
                <div className="frame-option">
                  <img
                    src="https://static.lenskart.com/images/cust_mailer/Eyeglass/Round.png"
                    alt=""
                  />
                  <p>Round</p>
                </div>
                <div className="frame-option">
                  <img
                    src="https://static.lenskart.com/images/cust_mailer/Eyeglass/CatEye.png"
                    alt=""
                  />
                  <p>Cat Eye</p>
                </div>
                <div className="frame-option">
                  <img
                    src="https://static.lenskart.com/images/cust_mailer/Eyeglass/Geometric.png"
                    alt=""
                  />
                  <p>Geometric</p>
                </div>
                <div className="frame-option">
                  <img
                    src="https://static.lenskart.com/images/cust_mailer/Eyeglass/Aviator.png"
                    alt=""
                  />
                  <p>Aviator</p>
                </div>
                <div className="frame-option">
                  <img
                    src="https://static.lenskart.com/images/cust_mailer/Eyeglass/Wayfarer.png"
                    alt=""
                  />
                  <p>Wayfarer</p>
                </div>
                <div className="frame-option">
                  <img
                    src="https://static.lenskart.com/images/cust_mailer/Eyeglass/Hexagonal.png"
                    alt=""
                  />
                  <p>Hexagonal</p>
                </div>
                <div className="frame-option">
                  <img
                    src="https://static.lenskart.com/images/cust_mailer/Eyeglass/Oval.png"
                    alt=""
                  />
                  <p>Oval</p>
                </div>
                <div className="frame-option">
                  <img
                    src="https://static.lenskart.com/images/cust_mailer/Eyeglass/Clubmaster.png"
                    alt=""
                  />
                  <p>Clubmaster</p>
                </div>
              </div>
            </div>
            <div className="filter-menu">
              <select className="filter-item">
                <option selected>BRANDS</option>
                <option value="1">John Jacobs(841)</option>
                <option value="2">Lenskart Air(516)</option>
                <option value="3">Vincent Chase(501)</option>
              </select>
              <select className="filter-item">
                <option selected>FRAME SIZE</option>
                <option value="1">Extra Narrow(123)</option>
                <option value="2">Narrow(524)</option>
                <option value="3">Extra Wide(244)</option>
              </select>
              <select className="filter-item">
                <option selected>PRICE</option>
                <option value="1">Low To High</option>
                <option value="2">High To Low</option>
                <option value="3">1000</option>
              </select>
              <select className="filter-item">
                <option selected>GENDER</option>
                <option value="1">Kids</option>
                <option value="2">Mans</option>
                <option value="3">Females</option>
              </select>
            </div>
          </div>
        </div>
        <div className="EyeGlassesSection-Right">
          {GogglesData.map((el, idx) => {
            return (
              <div className="product-card" key={idx}>
                <div className="card-header">
                  <CiHeart className="HeartIcon" />
                  <img
                    src={el.imageUrl}
                    alt="Lenskart Air"
                    className="product-image1"
                  />
                  <img
                    src={el.imageUrl2}
                    alt="Lenskart Air"
                    className="product-image2"
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
                        <span className="color-dot black"></span>
                        <span className="color-dot blue"></span>
                        <span className="color-dot gray"></span>
                        <span className="color-dot more">{el.discount}</span>
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

export default Eyeglasses;
