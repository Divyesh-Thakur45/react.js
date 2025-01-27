import React from 'react'
import "./solution.css"
import line from "../../assets/SVGS/svgexport-13.svg";
import Airoplane from "../../assets/SVGS/svgexport-15.svg";
import PetrolPump from "../../assets/SVGS/svgexport-16.svg";
import co from "../../assets/SVGS/svgexport-17.svg";
import tv from "../../assets/SVGS/svgexport-18.svg";
import pharma from "../../assets/SVGS/svgexport-19.svg";
import basket from "../../assets/SVGS/svgexport-20.svg";
import gold from "../../assets/SVGS/svgexport-21.svg";
import hand from "../../assets/SVGS/svgexport-22.svg";
import magnetic from "../../assets/SVGS/svgexport-23.svg";
// import water from "../../assets/SVGS/svgexport-14.svg";
import lineEnd from "../../assets/SVGS/svgexport-24.svg";
import Arrow_1 from "../../assets/SVGS/svgexport-10.svg";
import Arrow_2 from "../../assets/SVGS/svgexport-31.svg";
import RightTop from "../../assets/SVGS/rightTop.svg"
import LeftBottom from "../../assets/SVGS/LeftBottom.svg"
import RightBottom from "../../assets/SVGS/RightBottom.svg"

const Solutaion = () => {
  return (
    <div className='solution-page'>
      <div className='center-content'>
        <div className="heading">
          <h1>Zeta Solution Path</h1>
          <p>We have developed <strong>a unique solution</strong> for implementing your project efficiently and successfully!</p>
        </div>
        <div className="animation">
          <img src={line} alt="" />
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
        <div className="">
          <img src={lineEnd} alt="" className='LineEnd' />
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
          <p>No, I need more info!</p>
          <div className='line'></div>
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