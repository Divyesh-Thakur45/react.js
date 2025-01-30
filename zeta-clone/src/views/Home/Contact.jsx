import React from 'react'
import "./contact.css"
import alexander from "../../assets/images/alexander.jpg"
import sushaant_bakhru from "../../assets/images/sushaant_bakhru.jpg"
import blueArrow from "../../assets/SVGS/svgexport-26.svg";
import whiteArrow from "../../assets/SVGS/svgexport-31.svg";

const Contact = () => {
    return (
        <div className="contact-page-main">
            <div className='contact-page'>
                <div className="sub-contact-page">
                    <div className='left-side'>
                        <div className="contact-dp-border">
                            <div className="dp">
                                <img src={alexander} alt="" className='dp-img' />
                            </div>
                        </div>
                        <div className="detail">
                            <p className='name'>Contact: <span>Alexander Lausecker</span> </p>
                            <p className='sales'>Head of Sales</p>
                        </div>
                    </div>
                    <div className="right-side">
                        <div className="title">
                            Gerne beraten  <br /> <span>wir Sie auch persönlich!</span>
                        </div>
                        <div className="title-btn">
                            <button>
                                <img src={blueArrow} alt="" className='arrow' />
                                <img src={whiteArrow} alt="" className='WhiteArrow' />
                                Zur Anfrage!
                            </button>
                        </div>
                    </div>
                </div>
                <div className="sub-contact-page">
                    <div className='left-side'>
                        <div className="contact-dp-border">
                            <div className="dp">
                                <img src={sushaant_bakhru} alt="" className='dp-img' />
                            </div>
                        </div>
                        <div className="detail">
                            <p className='name'>Contact: <span>Sushaant Bakhru</span> </p>
                            <p className='sales'>CEO ZETA Singapore</p>
                        </div>
                    </div>
                    <div className="right-side">
                        <div className="title">
                            We are happy to  <br /> <span>advise you personally!</span>
                        </div>
                        <div className="title-btn">
                            <button>
                                <img src={blueArrow} alt="" className='arrow' />
                                <img src={whiteArrow} alt="" className='WhiteArrow' />
                                Get in touch!
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact