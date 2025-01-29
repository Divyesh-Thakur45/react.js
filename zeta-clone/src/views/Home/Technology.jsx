import React from 'react';
import light from "../../assets/images/light.jpg";
import "./technology.css";
import clock from "../../assets/SVGS/clock.svg"
import costumize from "../../assets/SVGS/customize.svg"
import innovation from "../../assets/SVGS/innovation.svg"
import landingPage from "../../assets/SVGS/svgexport-4.svg"
import line from "../../assets/images/mainline.png";

const Technology = () => {
    return (
        <div className='main-technology'>
            <div className='main'>
                <div className="left">
                    <div className='left-main'>
                        <img src={landingPage} className='landingPage' alt="" />
                        <img src={light} alt="" className='light' />
                    </div>
                    <div>
                        <div className="circle">
                            <div className="small-circle">
                                <div className="sub-small-circel">
                                    <h1>60</h1>
                                    <p>VACANCIES <br /><span className='available'>available</span>!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={line} alt="" className='mainLine' />
                </div>
                <div className="right">
                    <div className='right-side-content'>
                        <h3>Evolution</h3>
                        <h1><strong>of Technology</strong></h1>
                        <h2>From Concept to Realization:</h2>
                        <h4>ZETA – Your Partner for the Pharmaceutical and Biotech Industry!</h4>
                    </div>
                    <div className='main-circle'>
                        <ul className='sub-circle'>
                            <li>
                                <div className="outer">
                                    <div className="inner">
                                        <span className='line'></span>
                                        <div className="innerContent">
                                            <img src={clock} alt="clockimage" className='clockimag' />
                                            <p>Time To<br />Market</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="outer">
                                    <div className="inner">
                                        <span className='line'></span>
                                        <div className="innerContent">
                                            <img src={costumize} alt="clockimage" className='clockimag' />
                                            <p>Customize<br />Solution</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="outer">
                                    <div className="inner">
                                        <span className='line'></span>
                                        <div className="innerContent">
                                            <img src={innovation} alt="clockimage" className='clockimag' />
                                            <p>Innovation<br />Driver</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Technology