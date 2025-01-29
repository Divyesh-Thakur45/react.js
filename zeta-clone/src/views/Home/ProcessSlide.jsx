import React, { useRef } from "react";
import Slider from "react-slick";
import "./slider.css";
import "slick-carousel/slick/slick.css"; // Import slick CSS
import "slick-carousel/slick/slick-theme.css"; // Import slick theme CSS
import slider_1 from "../../assets/images/slider_1.jpg";
import slider_2 from "../../assets/images/slider_2.jpg";
import slider_3 from "../../assets/images/slider_3.jpg";
import slider_4 from "../../assets/images/slider_4.jpg";
import leftArrow from "../../assets/SVGS/svgexport-11.svg";
import RightArrow from "../../assets/SVGS/svgexport-12.svg";
import Arrow from "../../assets/SVGS/svgexport-10.svg";

const ProcessSlide = () => {
    const sliderRef = useRef(null);
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        customPaging: (i) => (
            <div className="custom-dot">
                <span className={`dot ${i === 0 ? "" : ""}`}></span>
            </div>
        ),
        appendDots: (dots) => (
            <div className="custom-dots-wrapper">
                <ul>{dots}</ul>
            </div>
        ),
    };

    return (
        <div className="slider">
            {/* Left Arrow */}
            <img
                src={leftArrow}
                alt="Previous Slide"
                className="left-arrow"
                onClick={() => sliderRef.current.slickPrev()} // Go to previous slide
            />
            <Slider ref={sliderRef} {...settings}>
                <div className="slide-screen">
                    <div className="relative">
                        <img src={slider_1} alt="" className="inside-img" />
                        <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent"></div>
                    </div>

                    <div className="text-container-inside">
                        <div className="headline">Digitalization</div>
                        <h3 className="subline">
                            Get to know the digital twin   <br />
                            of your production plant!
                        </h3>
                        <button className="btn">
                            <img src={Arrow} alt="" className="arrow" />
                            Learn More!
                        </button>
                    </div>
                </div>
                <div className="slide-screen">

                    <div className="relative">
                        <img src={slider_2} alt="" className="inside-img" />
                        <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent"></div>
                    </div>
                    <div className="text-container-inside">
                        <div className="headline">Food Engineering</div>
                        <h3 className="subline">
                            Pioneering technologies for
                            <br /> sustainable nutrition. From scale
                            <br />up to process and food safety.
                        </h3>
                        <button className="btn">
                            <img src={Arrow} alt="" className="arrow" />
                            Learn More!
                        </button>
                    </div>
                </div>
                <div className="slide-screen">
                    <div className="relative">
                        <img src={slider_3} alt="" className="inside-img" />
                        <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent"></div>
                    </div>
                    <div className="text-container-inside">
                        <div className="headline">Process Engineering</div>
                        <h3 className="subline">
                            ZETA implements highly complex
                            <br /> projects in the shortest possible <br />
                            time.
                        </h3>
                        <button className="btn">
                            <img src={Arrow} alt="" className="arrow" />
                            Learn More!
                        </button>
                    </div>
                </div>
                <div className="slide-screen">
                    <div className="relative">
                        <img src={slider_4} alt="" className="inside-img" />
                        <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent"></div>
                    </div>
                    <div className="text-container-inside">
                        <div className="headline">Digitalization</div>
                        <h3 className="subline">
                            Get to know the digital twin   <br />
                            of your production plant!
                        </h3>
                        <button className="btn">
                            <img src={Arrow} alt="" className="arrow" />
                            Learn More!
                        </button>
                    </div>
                </div>
            </Slider>
            {/* Right Arrow */}
            <img
                src={RightArrow}
                alt="Next Slide"
                className="right-arrow"
                onClick={() => sliderRef.current.slickNext()} // Go to next slide
            />
        </div>
    );
};

export default ProcessSlide;
