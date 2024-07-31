import React, { useState } from "react";
import "../Style/ScreenGlasses.css";
import { CiHeart } from "react-icons/ci";

const ColorChanger = ({ obj }) => {
  //   console.log(obj.Colors[0]);
  const [CurrentColor, setCurrentColor] = useState(obj.Colors[0]); // Correct destructuring of useState
  console.log(CurrentColor);
  const ImageChange = (el) => {
    setCurrentColor(el);
  };
  return (
    <div>
      <div className="product-card">
        <div className="card-header">
          <CiHeart className="HeartIcon" />
          <img
            src={CurrentColor.imageUrl}
            alt={obj.brand}
            className="imageUrlBefore"
          />
          <img
            src={obj.imageUrlAfter}
            alt={obj.brand}
            className="imageUrlAfter"
          />
        </div>
        <div className="card-body">
          <div className="rating">
            <span className="rating-value">{obj.rating}</span>
            <span className="rating-count">{obj.reviews}</span>
          </div>
          <h2 className="product-title">{obj.brand}</h2>
          <div className="ColorAndPrizeSize">
            <div>
              <p className="product-size">{obj.sizeCollection}</p>
              <p className="product-price">₹{obj.price}</p>
            </div>
            <div>
              <div className="color-options">
                {obj.Colors.map((el, index) => (
                  <span
                    className="color-dot1"
                    key={index}
                    style={{ backgroundColor: el.color }}
                    onClick={() => ImageChange(el)}
                  ></span>
                ))}
              </div>
            </div>
          </div>
          <p className="offer">Get FREE BLU Screen Lenses</p>
        </div>
      </div>
    </div>
  );
};

export default ColorChanger;
