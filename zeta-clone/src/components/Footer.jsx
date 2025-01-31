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
import footericone from "../assets/SVGS/footer-icone.svg"

const Footer = () => {
  const [firstShow, setfirstShow] = useState(false)
  const [SecondShow, setSecondShow] = useState(false)
  const [ThirdShow, setThirdShow] = useState(false)
  const [FourthShow, setFourthShow] = useState(false)
  console.log(firstShow)
  return (
    <div className='footer-page'>
      <div className="main-top">
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
      </div>
      <div className="main-middle">
        <div className="footer-bottom">
          <div className="first">
            <h1 className='title-head' onClick={() => setfirstShow(!firstShow)}>ZETA Holding <br />
              Headquarter <img src={footericone} className='footericone' alt="" /></h1>
            <div
              className={`footer-none ${firstShow ? "sm:block" : "sm:hidden"} md:block`}
            >
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
            <h1 className='title-head' onClick={() => setSecondShow(!SecondShow)}>Company <img src={footericone} className='footericone' alt="" /></h1>
            <div className="text">
              <ul className={`footer-none ${SecondShow ? "sm:block" : "sm:hidden"} md:block`}>
                <li><a href="">About </a></li>
                <li><a href="">Locations</a></li>
                <li><a href="">Contact</a></li>
                <li><a href="">Career</a></li>
                <li><a href="">Vacancies</a></li>
              </ul>
            </div>
          </div>
          <div className="third">
            <h1 className='title-head' onClick={() => setThirdShow(!ThirdShow)}>INFO & ESSENTIALS <img src={footericone} className='footericone' alt="" /></h1>
            <div className="text">
              <ul className={`footer-none ${ThirdShow ? "sm:block" : "sm:hidden"} md:block`}>
                <li><a href="">Success Stories</a></li>
                <li><a href="">ZETA Videos</a></li>
                <li><a href="">Events</a></li>
                <li><a href="">Media Relations</a></li>
                <li><a href="">Downloads</a></li>
                <li><a href="">FAQs</a></li>
              </ul>
            </div>
          </div>
          <div className="fourth">
            <h1 className='title-head' onClick={() => setFourthShow(!FourthShow)}>LEGAL <img src={footericone} className='footericone' alt="" /></h1>
            <div className="text">
              <ul className={`footer-none ${FourthShow ? "sm:block" : "sm:hidden"} md:block`}>
                <li><a href="">Data protection</a></li>
                <li><a href="">Legal notice</a></li>
                <li><a href="">General terms and conditions</a></li>
                <li><a href="">Compliance</a></li>
                <li><a href="">Cookies</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr className='footer-btm-line' />
      <div className="end-of-footer">
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
    </div>
  )
}

export default Footer