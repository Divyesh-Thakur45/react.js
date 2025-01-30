import React, { useState } from 'react'
import "./footer.css"
import logo from "../assets/SVGS/Logo.svg"
import whiteArrow from "../assets/SVGS/svgexport-31.svg";
import call from "../assets/SVGS/svgexport-33.svg";
import email from "../assets/SVGS/svgexport-34.svg";
import linkdin from "../assets/SVGS/svgexport-35.svg";
import facebook from "../assets/SVGS/svgexport-36.svg";
import youtube from "../assets/SVGS/svgexport-37.svg";
import v from "../assets/SVGS/svgexport-38.svg";
import insta from "../assets/SVGS/svgexport-39.svg";

const Footer = () => {
  const [firstShow, setfirstShow] = useState(false)
  return (
    <div className='footer-page'>
      <div className="footer-top">
        <div className="footer-logo">
          <img src={logo} alt="" />
        </div>
        <div className="two-button">
          <button className='webnar-btn'>
            <img src={whiteArrow} alt="" />
            Next Webinar
          </button>
          <button className='subscribe-btn'>
            <img src={whiteArrow} alt="" />
            Subscribe to the newsletter
          </button>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="first">
          <h1 className='title-head' onClick={() => setfirstShow(!firstShow)}>ZETA Holding <br />
            Headquarter</h1>
          <div className='' style={{ display: firstShow ? "none" : "block" }}>
            <p>Zetaplatz 1, 8501 Lieboch <br />
              Austria</p>
            <div className='selft-detail'>
              <img src={call} alt="" />
              <span className='di'>+91 8347346187<span className='line-2'></span></span>
            </div>
            <div className='selft-detail'>
              <img src={email} alt="" />
              <span className='di'>office@zeta.com<span className='line-2'></span></span>
            </div>
          </div>
        </div>
        <div className="second">
          <h1 className='title-head'>Company</h1>
          <div className="text">
            <ul>
              <li><a href="">About <span className='underline'></span></a></li>
              <li><a href="">Locations<span className='underline'></span></a></li>
              <li><a href="">Contact<span className='underline'></span></a></li>
              <li><a href="">Career<span className='underline'></span></a></li>
              <li><a href="">Vacancies<span className='underline'></span></a></li>
            </ul>
          </div>
        </div>
        <div className="third">
          <h1 className='title-head'>INFO & ESSENTIALS</h1>
          <div className="text">
            <ul>
              <li><a href="">Success Stories<span className='underline'></span></a></li>
              <li><a href="">ZETA Videos<span className='underline'></span></a></li>
              <li><a href="">Events<span className='underline'></span></a></li>
              <li><a href="">Media Relations<span className='underline'></span></a></li>
              <li><a href="">Downloads<span className='underline'></span></a></li>
              <li><a href="">FAQs<span className='underline'></span></a></li>
            </ul>
          </div>
        </div>
        <div className="fourth">
          <h1 className='title-head'>LEGAL</h1>
          <div className="text">
            <ul>
              <li><a href="">Data protection<span className='underline'></span></a></li>
              <li><a href="">Legal notice<span className='underline'></span></a></li>
              <li><a href="">General terms and conditions<span className='underline'></span></a></li>
              <li><a href="">Compliance<span className='underline'></span></a></li>
              <li><a href="">Cookies<span className='underline'></span></a></li>
            </ul>
          </div>
        </div>
      </div>
      <hr className='footer-btm-line' />
      <div className="footer-end">
        <div className="start">
          © 2025 ZETA
        </div>
        <div className="middle-icones">
          <div className="icones">
            <img src={linkdin} alt="" />
          </div>
          <div className="icones">
            <img src={facebook} alt="" />
          </div>
          <div className="icones">
            <img src={youtube} alt="" />
          </div>
          <div className="icones">
            <img src={v} alt="" />
          </div>
          <div className="icones">
            <img src={insta} alt="" />
          </div>
        </div>
        <div className="end">
          <p>made by Rittler & Co</p>
        </div>
      </div>
    </div>
  )
}

export default Footer