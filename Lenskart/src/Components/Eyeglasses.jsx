import React from "react";
import "../Style/Eyeglasses.css";
import { CiHeart } from "react-icons/ci";

const Eyeglasses = () => {
  return (
    <div>
      <h1>Eyeglasses - Page</h1>
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
                <div className="frame-option">Full Rim</div>
                <div className="frame-option">Rimless</div>
                <div className="frame-option">Half Rim</div>
              </div>
            </div>

            <div className="filter-group">
              <h3>FRAME SHAPE</h3>
              <div className="frame-options">
                <div className="frame-option">Rectangle</div>
                <div className="frame-option">Square</div>
                <div className="frame-option">Round</div>
                <div className="frame-option">Cat Eye</div>
                <div className="frame-option">Geometric</div>
                <div className="frame-option">Aviator</div>
                <div className="frame-option">Wayfarer</div>
                <div className="frame-option">Hexagonal</div>
                <div className="frame-option">Oval</div>
                <div className="frame-option">Clubmaster</div>
              </div>
            </div>
          </div>
        </div>
        <div className="EyeGlassesSection-Right">
          <div className="product-card">
            <div className="card-header">
              <CiHeart className="HeartIcon" />
              <img
                src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//l/i/black-full-rim-square-lenskart-air-fusion-la-e13069-c1-eyeglasses_lenskart-air-la-e13033-c1-eyeglasses_eyeglasses_g_7876_2a_28july23.jpg"
                alt="Lenskart Air"
                className="product-image1"
              />
              <img
                src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//l/i/black-full-rim-square-lenskart-air-fusion-la-e13069-c1-eyeglasses_lenskart-air-la-e13033-c1-eyeglasses_eyeglasses_g_7875_1b_28july23.jpg"
                alt="Lenskart Air"
                className="product-image2"
              />
            </div>
            <div className="card-body">
              <div className="rating">
                <span className="rating-value">4.6</span>
                <span className="rating-count">613</span>
              </div>
              <h2 className="product-title">Lenskart Air</h2>
              <div className="ColorAndPrizeSize">
                <div>
                  <p className="product-size">Size: Medium · Air Fusion</p>
                  <p className="product-price">₹2000</p>
                </div>
                <div>
                  <div className="color-options">
                    <span className="color-dot black"></span>
                    <span className="color-dot blue"></span>
                    <span className="color-dot gray"></span>
                    <span className="color-dot more">+2</span>
                  </div>
                </div>
              </div>
              <p className="offer">Get FREE BLU Screen Lenses</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eyeglasses;
