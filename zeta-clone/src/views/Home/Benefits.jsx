import React from 'react'
import "./benefit.css"
import Arrow from "../../assets/SVGS/svgexport-26.svg";
import whiteArrow from "../../assets/SVGS/svgexport-31.svg";
import earth from "../../assets/SVGS/svgexport-28.svg";
import sqare from "../../assets/SVGS/svgexport-29.svg";
import idia from "../../assets/SVGS/svgexport-30.svg";
import glob from "../../assets/SVGS/svgexport-18.svg";
import triangle from "../../assets/SVGS/svgexport-25.svg";
import clock from "../../assets/SVGS/clock.svg";
import petrole from "../../assets/SVGS/customize.svg";
import dish from "../../assets/SVGS/svgexport-27.svg";

const Benefits = () => {
    return (
        <div className='benefit-page'>
            <div className="heading">
                <h1>BENEFITS</h1>
            </div>
            <div className="main-box">
                <div className="box">
                    <div className="box-round-main">
                        <div className="box-sub-round">
                            <img src={triangle} alt="" className='box-img' />
                        </div>
                    </div>
                    <h4>Generel <br />Planner</h4>
                    <span>We take over the planning and <br /> coordination of your projects!</span>
                    <button className='learn-btn'>
                        <img src={Arrow} alt="" />
                        Learn More</button>
                </div>
                <div className="box">
                    <div className="box-round-main">
                        <div className="box-sub-round">
                            <img src={clock} alt="" className='box-img' />
                        </div>
                    </div>
                    <h4>Ultra-fast- <br /> Projects</h4>
                    <span>Maximum quality with minimum project <br />duration!</span>
                    <button className='learn-btn'>
                        <img src={Arrow} alt="" />
                        Learn More</button>
                </div>
                <div className="box">
                    <div className="box-round-main">
                        <div className="box-sub-round">
                            <img src={petrole} alt="" className='box-img' />
                        </div>
                    </div>
                    <h4>Process <br />  Solutions</h4>
                    <span>Your expert for large molecules, blood <br /> plasma, vaccines and parenterals!</span>
                    <button className='learn-btn'>
                        <img src={Arrow} alt="" />
                        Learn More</button>
                </div>
                <div className="box">
                    <div className="box-round-main">
                        <div className="box-sub-round">
                            <img src={dish} alt="" className='box-img' />
                        </div>
                    </div>
                    <h4>Customized <br /> Solutions</h4>
                    <span>Challenge accepted – we will find the <br />right solution for your requirement.</span>
                    <button className='learn-btn'>
                        <img src={Arrow} alt="" />
                        Learn More</button>
                </div>
                <div className="box">
                    <div className="box-round-main">
                        <div className="box-sub-round">
                            <img src={glob} alt="" className='box-img' />
                        </div>
                    </div>
                    <h4>Automation <br /> Solutions</h4>
                    <span>Single-user control, DCS system or MTP? <br />We have the right automation solution <br />for you!</span>
                    <button className='learn-btn'>
                        <img src={Arrow} alt="" />
                        Learn More</button>
                </div>
                <div className="box">
                    <div className="box-round-main">
                        <div className="box-sub-round">
                            <img src={earth} alt="" className='box-img' />
                        </div>
                    </div>
                    <h4>Global Player <br /></h4>
                    <span><br />Working for you all over the world! We <br />are always close by with our 17 branch <br />offices.</span>
                    <button className='learn-btn'>
                        <img src={Arrow} alt="" />
                        Learn More</button>
                </div>
                <div className="box">
                    <div className="box-round-main">
                        <div className="box-sub-round">
                            <img src={sqare} alt="" className='box-img' />
                        </div>
                    </div>
                    <h4>Management<br /> of Complexity</h4>
                    <span><br />Whether greenfield or brownfield - we <br />manage your project!</span>
                    <button className='learn-btn'>
                        <img src={Arrow} alt="" />
                        Learn More</button>
                </div>
                <div className="box">
                    <div className="box-round-main">
                        <div className="box-sub-round">
                            <img src={idia} alt="" className='box-img' />
                        </div>
                    </div>
                    <h4>Innolab ZETA <br /> TechCenter</h4>
                    <span>ZETA TechCenter – where the spirit of <br />research and problem-solving skills come <br />together!</span>
                    <button className='learn-btn'>
                        <img src={Arrow} alt="" />
                        Learn More</button>
                </div>
            </div>
            <div className="buttom-btn">
                <button className='btm-btn'>
                    <img src={Arrow} alt="" className='blueArrow' />
                    <img src={whiteArrow} alt="" className='WhiteArrow' />
                    Show all solutions!</button>
            </div>
        </div>
    )
}

export default Benefits