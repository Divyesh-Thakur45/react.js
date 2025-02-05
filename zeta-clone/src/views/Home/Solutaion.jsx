import React, { useState } from 'react'
import "./solution.css"
// import line from "../../assets/SVGS/svgexport-13.svg";
// import dotanimation from "../../assets/images/dotanimation2.png";
import Airoplane from "../../assets/SVGS/svgexport-15.svg";
import PetrolPump from "../../assets/SVGS/svgexport-16.svg";
import co from "../../assets/SVGS/svgexport-17.svg";
import tv from "../../assets/SVGS/svgexport-18.svg";
import pharma from "../../assets/SVGS/svgexport-19.svg";
import basket from "../../assets/SVGS/svgexport-20.svg";
import gold from "../../assets/SVGS/svgexport-21.svg";
import hand from "../../assets/SVGS/svgexport-22.svg";
import magnetic from "../../assets/SVGS/svgexport-23.svg";
import lineEnd from "../../assets/SVGS/svgexport-24.svg";
import Arrow_1 from "../../assets/SVGS/svgexport-10.svg";
import Arrow_2 from "../../assets/SVGS/svgexport-31.svg";
import drop from "../../assets/SVGS/svgexport-14.svg";
import RightTop from "../../assets/SVGS/rightTop.svg"
import LeftBottom from "../../assets/SVGS/LeftBottom.svg"
import RightBottom from "../../assets/SVGS/RightBottom.svg"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from 'react';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import CountUp from 'react-countup';

const Solutaion = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [startCount1, setStartCount1] = useState(false);
  const [startCount2, setStartCount2] = useState(false);
  const [startCount3, setStartCount3] = useState(false);
  const [startCount4, setStartCount4] = useState(false);
  const [startCount5, setStartCount5] = useState(false);
  const [startCount6, setStartCount6] = useState(false);
  const [startCount7, setStartCount7] = useState(false);
  const [startCount8, setStartCount8] = useState(false);
  const [startCount9, setStartCount9] = useState(false);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
    gsap.from('.round_1', {
      x: 10,
      opacity: 0,
      duration: 1,
      delay: 1,
      scrollTrigger: {
        trigger: ".sub_round_1",
        start: "top 90%",
        end: "bottom 100%",
        scrub: 2,
        toggleActions: "play reverse play reverse",
        // markers: true,
        onEnter: () => setStartCount1(true), // Start counter when round_1 is fully visible
        onLeaveBack: () => setStartCount1(false), // Reset if scrolling up
      }
    })
    gsap.from('.round_2', {
      x: -10,
      opacity: 0,
      duration: 1,
      delay: 1,
      scrollTrigger: {
        trigger: ".round_2",
        start: "top 90%",
        end: "bottom 100%",
        scrub: 2,
        toggleActions: "play reverse play reverse",
        // markers: true,
        onEnter: () => setStartCount2(true), // Start counter when round_1 is fully visible
        onLeaveBack: () => setStartCount2(false), // Reset if scrolling up
      }
    })
    gsap.from('.round_3', {
      x: 10,
      opacity: 0,
      duration: 1,
      delay: 1,
      scrollTrigger: {
        trigger: ".round_3",
        start: "top 90%",
        end: "bottom 100%",
        scrub: 2,
        toggleActions: "play reverse play reverse",
        // markers: true,
        onEnter: () => setStartCount3(true), // Start counter when round_1 is fully visible
        onLeaveBack: () => setStartCount3(false), // Reset if scrolling up
      }
    })
    gsap.from('.round_4', {
      x: -10,
      opacity: 0,
      duration: 1,
      delay: 1,
      scrollTrigger: {
        trigger: ".round_4",
        start: "top 90%",
        end: "bottom 100%",
        scrub: 2,
        toggleActions: "play reverse play reverse",
        // markers: true,
        onEnter: () => setStartCount4(true), // Start counter when round_1 is fully visible
        onLeaveBack: () => setStartCount4(false), // Reset if scrolling up
      }
    })
    gsap.from('.round_5', {
      x: 10,
      opacity: 0,
      duration: 1,
      delay: 1,
      scrollTrigger: {
        trigger: ".round_5",
        start: "top 90%",
        end: "bottom 100%",
        scrub: 2,
        toggleActions: "play reverse play reverse",
        // markers: true,
        onEnter: () => setStartCount5(true), // Start counter when round_1 is fully visible
        onLeaveBack: () => setStartCount5(false), // Reset if scrolling up
      }
    })
    gsap.from('.round_6', {
      x: 10,
      opacity: 0,
      duration: 1,
      delay: 1,
      scrollTrigger: {
        trigger: ".round_6",
        start: "top 90%",
        end: "bottom 100%",
        scrub: 2,
        toggleActions: "play reverse play reverse",
        // markers: true,
        onEnter: () => setStartCount6(true), // Start counter when round_1 is fully visible
        onLeaveBack: () => setStartCount6(false), // Reset if scrolling up
      }
    })
    gsap.from('.round_7', {
      x: 10,
      opacity: 0,
      duration: 1,
      delay: 1,
      scrollTrigger: {
        trigger: ".round_7",
        start: "top 90%",
        end: "bottom 100%",
        scrub: 2,
        toggleActions: "play reverse play reverse",
        // markers: true,
        onEnter: () => setStartCount7(true), // Start counter when round_1 is fully visible
        onLeaveBack: () => setStartCount7(false), // Reset if scrolling up
      }
    })
    gsap.from('.round_8', {
      x: 10,
      opacity: 0,
      duration: 1,
      delay: 1,
      scrollTrigger: {
        trigger: ".round_8",
        start: "top 90%",
        end: "bottom 100%",
        scrub: 2,
        toggleActions: "play reverse play reverse",
        // markers: true,
        onEnter: () => setStartCount8(true), // Start counter when round_1 is fully visible
        onLeaveBack: () => setStartCount8(false), // Reset if scrolling up
      }
    })
    gsap.from('.round_9', {
      x: -10,
      opacity: 0,
      duration: 1,
      delay: 1,
      scrollTrigger: {
        trigger: ".round_9",
        start: "top 90%",
        end: "bottom 100%",
        scrub: 2,
        toggleActions: "play reverse play reverse",
        // markers: true,
        onEnter: () => setStartCount9(true), // Start counter when round_1 is fully visible
        onLeaveBack: () => setStartCount9(false), // Reset if scrolling up
      }
    })

    // gsap.set("#solution-cursor", {
    //   xPercent: -50, yPercent: -50, transformOrigin: "50% 50%", rotation: 1000,
    //   rotationX: 1000,
    //   rotationY: 0,
    // });
    // gsap.fromTo("#solution-cursor",
    //   { rotation: 360 }, // Starting rotation
    //   {
    //     rotation: 360,
    //     duration: 5,
    //     repeat: -1,
    //     ease: "linear"
    //   }
    // );
    gsap.to("#actioncursor", {
      scrollTrigger: {
        delay: 300,
        transition: 0.2,
        trigger: "#motionPath",
        start: "top 90%",
        end: "bottom 100%",
        scrub: true, // Smoothly scrub through the animation as you scroll
        // markers: true,
        onUpdate: (self) => {
          const img = document.querySelector(".LineEndImg");
          const drop = document.querySelector(".dotanimation");
          if (self.progress === 1) {
            img.style.filter = "drop-shadow(0px 0px 15px rgba(255, 255, 255, 0.52))";
          } else {
            img.style.filter = "none"; // Reset shadow when not at the end
          }
          if (self.progress === 1) {
            drop.style.opacity = 0;
          } else {
            drop.style.opacity = 1; // Reset opacity when not at the end
          }
        },
      },
      motionPath: {
        path: "#motionPath", // The path to follow
        align: "#motionPath", // Align the element to the path
        alignOrigin: [0.5, 0.5], // Center the element on the path
        autoRotate: -90,
        start: 1, // Start at the end of the path
        end: 0, // Move towards the beginning of the path
      },
      ease: "none",
    });

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [])
  return (
    <div className='solution-page'>
      <div className='center-content'>
        <div className="head">
          <h1>Zeta Solution Path</h1>
          <p>We have developed <strong>a unique solution</strong> for implementing your project efficiently and successfully!</p>
        </div>
        <div className="animation">
          {/* <img src={} alt="" className='drop' /> */}
          <span className='animation-line'>
            <svg
              version="1.1"
              id="solution-bg"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 480 2898.1"
              width="505"
              height="2898.1"
              style={{ enableBackground: 'new 0 0 480 2898.1' }}
              xmlSpace="preserve"
            >
              {/* Motion Path */}
              <path
                id="motionPath"
                className="main-path"
                style={{ strokeMiterlimit: 10 }}
                d={
                  isMobile
                    ? 'M 0,2898.1 L0,24' // Mobile path
                    : 'M252,2898.1c0-222.6,121-210.3,121-432.9l0,0c0-405.8-349-401.4-349-807.1s455.5-405.8,455.5-811.5S24,440.7,24,34.9' // Desktop path
                }
                stroke="#80ACD3"
                fill="none"
              />

              {/* Colored Motion Path */}
              <path
                id="motionPathColored"
                style={{
                  strokeMiterlimit: 10,
                  strokeDasharray: '3292.85px',
                  strokeDashoffset: '439.364px',
                }}
                d={
                  isMobile
                    ? 'M 0,2898.1 L0,24' // Mobile path
                    : 'M252,2898.1c0-222.6,121-210.3,121-432.9l0,0c0-405.8-349-401.4-349-807.1s455.5-405.8,455.5-811.5S24,440.7,24,34.9' // Desktop path
                }
                data-length="3292.853759765625"
                stroke="#FFFFFF"
                fill="none"
              />
              <g className="point point1" transform="translate(1499.5 6338) rotate(180)">
                <g transform="translate(857.571 3725.071)">
                  <path d="M617.9,2558.9c-5.5,0-10-4.5-10-10s4.5-10,10-10s10,4.5,10,10S623.4,2558.9,617.9,2558.9z" fill="#80ACD3"></path>
                  <path d="M617.9,2542.5c-3.6,0-6.5,2.9-6.5,6.5s2.9,6.5,6.5,6.5c3.6,0,6.5-2.9,6.5-6.5S621.4,2542.5,617.9,2542.5
M617.9,2535.5c7.4,0,13.5,6,13.5,13.5s-6,13.5-13.5,13.5s-13.5-6-13.5-13.5S610.4,2535.5,617.9,2535.5z" fill="#002A4D"></path>
                </g>
                <g transform="translate(849.5 3717)">
                  <circle cx="625.9" cy="2557" r="14.5" fill="none"></circle>
                  <circle cx="625.9" cy="2557" r="14" stroke="#80ACD3" fill="none"></circle>
                </g>
              </g>
              <g className="point point2" transform="translate(1499.5 6312) rotate(180)">
                <g transform="translate(857.571 3725.071)">
                  <path d="M474.5,2235c-5.5,0-10-4.5-10-10s4.5-10,10-10s10,4.5,10,10S480,2235,474.5,2235z" fill="#80ACD3"></path>
                  <path d="M474.5,2218.6c-3.6,0-6.5,2.9-6.5,6.5s2.9,6.5,6.5,6.5s6.5-2.9,6.5-6.5S478,2218.6,474.5,2218.6
M474.5,2211.6c7.4,0,13.5,6,13.5,13.5s-6,13.5-13.5,13.5s-13.5-6-13.5-13.5S467,2211.6,474.5,2211.6z" fill="#002A4D"></path>
                </g>
                <g transform="translate(849.5 3717)">
                  <circle cx="482.5" cy="2233.1" r="14.5" fill="none"></circle>
                  <circle cx="482.5" cy="2233.1" r="14" stroke="#80ACD3" fill="none"></circle>
                </g>
              </g>
              <g className="point point3" transform="translate(82 564)">
                <g transform="translate(-140 -1555)">
                  <g transform="translate(857.571 3725.071)">
                    <path d="M-461.5-2201.7c-5.8,0-10.5-4.7-10.5-10.5s4.7-10.5,10.5-10.5s10.5,4.7,10.5,10.5
S-455.8-2201.7-461.5-2201.7z" fill="#80ACD3"></path>
                    <path d="M-461.5-2218.6c-3.6,0-6.5,2.9-6.5,6.5s2.9,6.5,6.5,6.5s6.5-2.9,6.5-6.5S-458-2218.6-461.5-2218.6
M-461.5-2226.6c8,0,14.5,6.5,14.5,14.5s-6.5,14.5-14.5,14.5s-14.5-6.5-14.5-14.5S-469.5-2226.6-461.5-2226.6z" fill="#002A4D"></path>
                  </g>
                  <g transform="translate(849.5 3717)">
                    <circle cx="-453.5" cy="-2204.1" r="14.5" fill="none"></circle>
                    <circle cx="-453.5" cy="-2204.1" r="14" stroke="#80ACD3" fill="none"></circle>
                  </g>
                </g>
              </g>
              <g className="point point4" transform="translate(1790.5 6932) rotate(180)">
                <g transform="translate(857.571 3725.071)">
                  <path d="M474.5,2235c-5.5,0-10-4.5-10-10s4.5-10,10-10s10,4.5,10,10S480,2235,474.5,2235z" fill="#80ACD3"></path>
                  <path d="M474.5,2218.6c-3.6,0-6.5,2.9-6.5,6.5s2.9,6.5,6.5,6.5s6.5-2.9,6.5-6.5S478,2218.6,474.5,2218.6
M474.5,2211.6c7.4,0,13.5,6,13.5,13.5s-6,13.5-13.5,13.5s-13.5-6-13.5-13.5S467,2211.6,474.5,2211.6z" fill="#002A4D"></path>
                </g>
                <g transform="translate(849.5 3717)">
                  <circle cx="482.5" cy="2233.1" r="14.5" fill="none"></circle>
                  <circle cx="482.5" cy="2233.1" r="14" stroke="#80ACD3" fill="none"></circle>
                </g>
              </g>
              <g className="point point5" transform="translate(-38 1324)">
                <g transform="translate(-140 -1555)">
                  <g transform="translate(857.571 3725.071)">
                    <path d="M-461.5-2201.7c-5.8,0-10.5-4.7-10.5-10.5s4.7-10.5,10.5-10.5s10.5,4.7,10.5,10.5
S-455.8-2201.7-461.5-2201.7z" fill="#80ACD3"></path>
                    <path d="M-461.5-2218.6c-3.6,0-6.5,2.9-6.5,6.5s2.9,6.5,6.5,6.5s6.5-2.9,6.5-6.5S-458-2218.6-461.5-2218.6
M-461.5-2226.6c8,0,14.5,6.5,14.5,14.5s-6.5,14.5-14.5,14.5s-14.5-6.5-14.5-14.5S-469.5-2226.6-461.5-2226.6z" fill="#002A4D"></path>
                  </g>
                  <g transform="translate(849.5 3717)">
                    <circle cx="-453.5" cy="-2204.1" r="14.5" fill="none"></circle>
                    <circle cx="-453.5" cy="-2204.1" r="14" stroke="#80ACD3" fill="none"></circle>
                  </g>
                </g>
              </g>
              <g className="point point6" transform="translate(-232.5 1706)">
                <g transform="translate(-140 -1555)">
                  <g transform="translate(857.571 3725.071)">
                    <path d="M-461.5-2201.7c-5.8,0-10.5-4.7-10.5-10.5s4.7-10.5,10.5-10.5s10.5,4.7,10.5,10.5
S-455.8-2201.7-461.5-2201.7z" fill="#80ACD3"></path>
                    <path d="M-461.5-2218.6c-3.6,0-6.5,2.9-6.5,6.5s2.9,6.5,6.5,6.5s6.5-2.9,6.5-6.5S-458-2218.6-461.5-2218.6
M-461.5-2226.6c8,0,14.5,6.5,14.5,14.5s-6.5,14.5-14.5,14.5s-14.5-6.5-14.5-14.5S-469.5-2226.6-461.5-2226.6z" fill="#002A4D"></path>
                  </g>
                  <g transform="translate(849.5 3717)">
                    <circle cx="-453.5" cy="-2204.1" r="14.5" fill="none"></circle>
                    <circle cx="-453.5" cy="-2204.1" r="14" stroke="#80ACD3" fill="none"></circle>
                  </g>
                </g>
              </g>
              <g className="point point7" transform="translate(1497.834 7973.382) rotate(180)">
                <g transform="translate(857.571 3725.071)">
                  <path d="M474.5,2235c-5.5,0-10-4.5-10-10s4.5-10,10-10s10,4.5,10,10S480,2235,474.5,2235z" fill="#80ACD3"></path>
                  <path d="M474.5,2218.6c-3.6,0-6.5,2.9-6.5,6.5s2.9,6.5,6.5,6.5s6.5-2.9,6.5-6.5S478,2218.6,474.5,2218.6
M474.5,2211.6c7.4,0,13.5,6,13.5,13.5s-6,13.5-13.5,13.5s-13.5-6-13.5-13.5S467,2211.6,474.5,2211.6z" fill="#002A4D"></path>
                </g>
                <g transform="translate(849.5 3717)">
                  <circle cx="482.5" cy="2233.1" r="14.5" fill="none"></circle>
                  <circle cx="482.5" cy="2233.1" r="14" stroke="#80ACD3" fill="none"></circle>
                </g>
              </g>
              <g className="point point8" transform="translate(82 2304)">
                <g transform="translate(-140 -1555)">
                  <g transform="translate(857.571 3725.071)">
                    <path d="M-461.5-2201.7c-5.8,0-10.5-4.7-10.5-10.5s4.7-10.5,10.5-10.5s10.5,4.7,10.5,10.5
S-455.8-2201.7-461.5-2201.7z" fill="#80ACD3"></path>
                    <path d="M-461.5-2218.6c-3.6,0-6.5,2.9-6.5,6.5s2.9,6.5,6.5,6.5s6.5-2.9,6.5-6.5S-458-2218.6-461.5-2218.6
M-461.5-2226.6c8,0,14.5,6.5,14.5,14.5s-6.5,14.5-14.5,14.5s-14.5-6.5-14.5-14.5S-469.5-2226.6-461.5-2226.6z" fill="#002A4D"></path>
                  </g>
                  <g transform="translate(849.5 3717)">
                    <circle cx="-453.5" cy="-2204.1" r="14.5" fill="none"></circle>
                    <circle cx="-453.5" cy="-2204.1" r="14" stroke="#80ACD3" fill="none"></circle>
                  </g>
                </g>
              </g>
              <g className="point point9" transform="translate(1688.836 8539) rotate(180)">
                <g transform="translate(857.571 3725.071)">
                  <path d="M474.5,2235c-5.5,0-10-4.5-10-10s4.5-10,10-10s10,4.5,10,10S480,2235,474.5,2235z" fill="#80ACD3"></path>
                  <path d="M474.5,2218.6c-3.6,0-6.5,2.9-6.5,6.5s2.9,6.5,6.5,6.5s6.5-2.9,6.5-6.5S478,2218.6,474.5,2218.6
M474.5,2211.6c7.4,0,13.5,6,13.5,13.5s-6,13.5-13.5,13.5s-13.5-6-13.5-13.5S467,2211.6,474.5,2211.6z" fill="#002A4D"></path>
                </g>
                <g transform="translate(849.5 3717)">
                  <circle cx="482.5" cy="2233.1" r="14.5" fill="none"></circle>
                  <circle cx="482.5" cy="2233.1" r="14" stroke="#80ACD3" fill="none"></circle>
                </g>
              </g>

              {/* <g id="solution-cursor">
                <g>
                  <path d="M24,57.8c-2.7,0-5.3-0.5-7.8-1.6c-2.4-1-4.5-2.5-6.4-4.3c-1.8-1.8-3.3-4-4.3-6.4c-1-2.5-1.6-5.1-1.6-7.8
        c0-2.6,0.9-5.9,2.8-10c1.4-3,3.3-6.5,5.7-10.3c2.3-3.8,4.5-6.9,5.6-8.4c0.7-1,1.4-1.9,2-2.6c0.3-0.3,0.5-0.6,0.7-0.8
        C21.1,5.2,22.2,4,24,4c1.2,0,2.2,0.5,3,1.4c0.4,0.4,4.5,5.9,8.5,12.2c2.4,3.8,4.3,7.2,5.7,10.2c1.9,4.1,2.8,7.4,2.8,10
        c0,2.7-0.5,5.3-1.6,7.8c-1,2.4-2.5,4.5-4.3,6.4c-1.8,1.8-4,3.3-6.4,4.3C29.3,57.2,26.7,57.8,24,57.8z" fill="#80ACD3"></path>
                  <path d="M24,8C23.6,8,8,29,8,37.8s7.2,16,16,16s16-7.2,16-16C40,28.9,24.2,8.2,24,8L24,8 M24,0L24,0
        c2.3,0,4.4,1,6,2.7l0,0c0.2,0.2,18,22.7,18,35.1c0,13.2-10.8,24-24,24S0,51,0,37.8C0,30.2,14.8,0,24,0z" fill="#022E55"></path>
                </g>
              </g> */}
              <g id="actioncursor">
                <g>
                  <image
                    href={drop}
                    // rotate={150}
                    x="0"
                    y="0"
                    width="50"
                    height="50"
                    className="dotanimation"
                  />
                </g>
              </g>
              {/* <animateMotion href="#solution-cursor" dur="5s" begin="0s" fill="freeze" repeatCount="indefinite" rotate="auto">
                <mpath href="#motionPath" />
              </animateMotion> */}
            </svg>
          </span>
        </div>
        <div className="all_rounds">
          <div className="round_1">
            <div className="sub_round_1">
              <div className="sub_child_round_1">
                <img src={Airoplane} alt="" className='round_1_img' />
              </div>
            </div>
            <div className="sub_round_1_content">
              <h3>Your Vision</h3>
              <span>Everything starts with your idea and from here, we take over the planning and implementation for you!</span>
            </div>
          </div>
          <div className="round_2">
            <div className="sub_round_2_content">
              <h3>Process Solutions</h3>
              <span>Your process solution from upstream to downstream - everything from a single source!</span>
            </div>
            <div className="sub_round_2">
              <div className="sub_child_round_2">
                <img src={PetrolPump} alt="" className='round_2_img' />
              </div>
            </div>

          </div>
          <div className="round_3">
            <div className="sub_round_3">
              <div className="sub_child_round_3">
                <img src={co} alt="" className='round_3_img' />
              </div>
            </div>
            <div className="sub_round_3_content">
              <h3>CO2 Footprint</h3>
              <span>Whether retrofitting or new planning - optimize the sustainability of your process infrastructure!</span>
            </div>
          </div>
          <div className="round_4">
            <div className="sub_round_4_content">
              <h3>Automation</h3>
              <span>Increase your production efficiency with our flexible automation solutions!</span>
            </div>
            <div className="sub_round_4">
              <div className="sub_child_round_4">
                <img src={tv} alt="" className='round_4_img' />
              </div>
            </div>
          </div>
          <div className="round_5">
            <div className="sub_round_5">
              <div className="sub_child_round_5">
                <img src={pharma} alt="" className='round_5_img' />
              </div>
            </div>
            <div className="sub_round_5_content">
              <h3>Pharma 4.0</h3>
              <span>Get to know the digital twin of your production plant!</span>
            </div>
          </div>
          <div className="round_6">
            <div className="sub_round_6">
              <div className="sub_child_round_6">
                <img src={basket} alt="" className='round_6_img' />
              </div>
            </div>
            <div className="sub_round_6_content">
              <h3>Procurement</h3>
              <span>Time-to-market - our procurement strategies shorten your project's duration!</span>
            </div>
          </div>
          <div className="round_7">
            <div className="sub_round_7">
              <div className="sub_child_round_7">
                <img src={gold} alt="" className='round_7_img' />
              </div>
            </div>
            <div className="sub_round_7_content">
              <h3>CQV</h3>
              <span>From DQ, IQ, OQ to PQ - we ensure your qualification and validation process!</span>
            </div>
          </div>
          <div className="round_8">
            <div className="sub_round_8">
              <div className="sub_child_round_8">
                <img src={hand} alt="" className='round_8_img' />
              </div>
            </div>
            <div className="sub_round_8_content">
              <h3>Lifecycle Management</h3>
              <span>You can rely on us - we are by your side 24/7!</span>
            </div>
          </div>
          <div className="round_9">
            <div className="sub_round_9_content">
              <h3>Automation</h3>
              <span>Increase your production efficiency with our flexible automation solutions!</span>
            </div>
            <div className="sub_round_9">
              <div className="sub_child_round_9">
                <img src={magnetic} alt="" className='round_9_img' />
              </div>
            </div>
          </div>
        </div>
        <div className="all-counters">
          <div className="counterOne">
            <h1> <CountUp start={0} end={startCount1 ? 980 : 0} duration={2.75} /></h1>
            <p>Satisfied <br />
              Customers</p>
          </div>
          <div className="counterTwo">
            <h1> <CountUp start={0} end={startCount2 ? 1400 : 0} duration={2.75} /></h1>
            <p>Employees</p>
          </div>
          <div className="counterThird">
            <h1> <CountUp start={0} end={startCount3 ? 25.500 : 0} duration={2.75} /></h1>
            <p>Square meter<br />
              production area</p>
          </div>
          <div className="counterFourth">
            <h1> <CountUp start={0} end={startCount4 ? 201 : 0} duration={2.75} /></h1>
            <p>Global <br />
              bussness <br />
              partners</p>
          </div>
          <div className="counterFifth">
            <h1> <CountUp start={0} end={startCount5 ? 101 : 0} duration={2.75} /></h1>
            <p>Locations <br />
              in total</p>
          </div>
          <div className="counterSix">
            <h1> <CountUp start={0} end={startCount6 ? 305 : 0} duration={2.75} /></h1>
            <p>Continents</p>
          </div>
          <div className="counterSeven">
            <h1> <CountUp start={0} end={startCount7 ? 901 : 0} duration={2.75} /></h1>
            <p>Countries</p>
          </div>
          <div className="counterEight">
            <h1> <CountUp start={0} end={startCount8 ? 4222 : 0} duration={2.75} /></h1>
            <p>Project hours<br />
              experience</p>
          </div>
          <div className="counterNine">
            <h1> <CountUp start={0} end={startCount9 ? 800 : 0} duration={2.75} /></h1>
            <p>Patents<br />
              applied for</p>
          </div>
        </div>
        <div className="LineEnd">
          <img src={lineEnd} alt="" className='LineEndImg' />
        </div>
        <div className='bottom-heading'>
          <h3>Are you already</h3>
          <h1>convinced of ZETA?</h1>
        </div>
        <button className='btn-2'>
          <img src={Arrow_1} alt="" className='Arrow_1' />
          <img src={Arrow_2} alt="" className='Arrow_2' />
          I'm ready!
        </button>
        <div className="msg">
          <p className='msgContent'>No, I need more info!</p>
        </div>
      </div>
      <div className="images">
        <div className="rt">
          <img src={RightTop} alt="" />
        </div>
        <div className="lb">
          <img src={LeftBottom} alt="" />
        </div>
        <div className="rb">
          <img src={RightBottom} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Solutaion

