import React from 'react'
import bgImg from "../../assets/images/karriere-opt1_final.jpeg"
import Gradiant from "../../assets/SVGS/svgexport-32.svg";
import Arrow from "../../assets/SVGS/svgexport-10.svg";
import ArrowNewJob from "../../assets/SVGS/svgexport-31.svg";
import "./career.css"

const Career = () => {
    return (
        <div className='relative'>
            <div className="career-page">
                <div className='relative'>
                    <img src={bgImg} className='bg-img' alt="" />
                    <img src={Gradiant} className='gradiant-blue' alt="" />
                    <div className='absolute gradient'></div>
                </div>
                <div className='contantandcircle'>
                    <div className="contant">
                        <h3><strong>Career</strong> at ZETA</h3>
                        <h1> Welcome to <br />
                            <strong>the ZETA team</strong></h1>
                        <button className="btn">
                            <img src={Arrow} alt="" className="ArrowNewJob1" />
                            <img src={ArrowNewJob} alt="" className="ArrowNewJob" />
                            My new job
                        </button>
                    </div>
                    <div className="vacancy">
                        <div className="bottom-circle">
                            <div className="bottom-small-circle">
                                <div className="bottom-sub-small-circel">
                                    <h1>56</h1>
                                    <p>VACANCIES <br /><span className='bottom-available'>available</span>!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Career