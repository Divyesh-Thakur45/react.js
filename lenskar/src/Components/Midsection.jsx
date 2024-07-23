import React, { useEffect, useState } from "react";
import "../Style/Midsection.css";

const Midsection = () => {
  const images = [
    "https://static5.lenskart.com/media/uploads/Desktopnew_1505.jpg",
    "https://static1.lenskart.com/media/desktop/img/oct9/holiday-edit/Web-banner.jpg",
    "https://static1.lenskart.com/media/desktop/img/June24/Crystal_acetate/web-option-1CAcetate.gif",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

  return (
    <div>
      <div className="slider py-5">
        {images.map((image, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? "active" : ""}`}
          >
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="py-5">
      <img src="https://static1.lenskart.com/media/desktop/img/Apr22/Bannerforexport.jpg" alt="" />
      </div>
    </div>
  );
};

export default Midsection;
