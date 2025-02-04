import React from 'react';
import light from "../../assets/images/light.jpg";
import "./technology.css";
import clock from "../../assets/SVGS/clock.svg"
import costumize from "../../assets/SVGS/customize.svg"
import innovation from "../../assets/SVGS/innovation.svg"
import landingPage from "../../assets/SVGS/svgexport-4.svg"
import brainimage from "../../assets/images/brain-new.png"
import star from "../../assets/images/star.png"
import star2 from "../../assets/images/star-2.png"
import star3 from "../../assets/images/star-3.png"
import star4 from "../../assets/images/star-4.png"


const Technology = () => {
    return (
        <div className='main-technology'>
            <div className="technology-page">
                <div className="left">
                    <div className='landingPage'>
                        <img src={landingPage} alt="" className='landingPageImg' />
                        <div className='light'>
                            <img src={light} alt="" className='lightImg' />
                            <div className="stars">
                                <img src={star} className='starImg1' alt="" />
                                <img src={star2} className='starImg2' alt="" />
                                <img src={star3} className='starImg3' alt="" />
                                <img src={star4} className='starImg4' alt="" />
                                <img src={star} className='starImg5' alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="circle">
                    <div className="small-circle">
                        <div className="sub-small-circel">
                            <h1>51</h1>
                            <p>VACANCIES <br /><span className='available'>available</span>!</p>
                        </div>
                    </div>
                </div>
                <div className='right-side-content'>
                    <p>Evolution</p>
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
                <div className="fixed-round">
                    <img src={brainimage} alt="" className='brainImage' />
                </div>
            </div>
        </div>
    )
}

export default Technology