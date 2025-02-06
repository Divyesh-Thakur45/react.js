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
import fullBlue from "../assets/SVGS/DarkBlue.svg";
import LightBlue from "../assets/SVGS/svgexport-26.svg";
import footericone from "../assets/SVGS/footer-icone.svg"

const Footer = () => {
  const [firstShow, setfirstShow] = useState(false)
  const [SecondShow, setSecondShow] = useState(false)
  const [ThirdShow, setThirdShow] = useState(false)
  const [FourthShow, setFourthShow] = useState(false)
  return (
    <div className='footer-page'>
      <div className="main-top">
        <div className="footer-top">
          <div className="footer-logo">
            <img src={logo} alt="" />
          </div>
          <div className="two-button">
            <button className='webnar-btn'>
              <img src={whiteArrow} className='fullWhite' alt="" />
              <img src={fullBlue} className='fullBlue' alt="" />
              Next Webinar
            </button>
            <button className='subscribe-btn'>
              <img src={whiteArrow} className='fullWhite2' alt="" />
              <img src={LightBlue} className='LightBlue' alt="" />
              Subscribe to the newsletter
            </button>
          </div>
        </div>
      </div>
      <div className="main-middle">
        <div className="footer-bottom">
          <div className="first">
            <h1 className='title-head'>ZETA Holding <br />
              Headquarter <div>
                <img src={footericone} className='footericone' alt="" /></div></h1>
            <div
              className={`footer-none`}
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
            <h1 className='title-head'>Company <div>
              <img src={footericone} className='footericone' alt="" /></div></h1>
            <div className="text">
              <ul className={`footer-none`}>
                <li><a href="" className='footerSubText'>About </a></li>
                <li><a href="" className='footerSubText'>Locations</a></li>
                <li><a href="" className='footerSubText'>Contact</a></li>
                <li><a href="" className='footerSubText'>Career</a></li>
                <li><a href="" className='footerSubText'>Vacancies</a></li>
              </ul>
            </div>
          </div>
          <div className="third">
            <h1 className='title-head'>INFO & ESSENTIALS <div><img src={footericone} className='footericone' alt="" /></div></h1>
            <div className="text">
              <ul className={`footer-none`}>
                <li><a href="" className='footerSubText'>Success Stories</a></li>
                <li><a href="" className='footerSubText'>ZETA Videos</a></li>
                <li><a href="" className='footerSubText'>Events</a></li>
                <li><a href="" className='footerSubText'>Media Relations</a></li>
                <li><a href="" className='footerSubText'>Downloads</a></li>
                <li><a href="" className='footerSubText'>FAQs</a></li>
              </ul>
            </div>
          </div>
          <div className="fourth">
            <h1 className='title-head' >LEGAL <div><img src={footericone} className='footericone' alt="" /></div></h1>
            <div className="text">
              <ul className={`footer-none`}>
                <li><a href="" className='footerSubText'>Data protection</a></li>
                <li><a href="" className='footerSubText'>Legal notice</a></li>
                <li><a href="" className='footerSubText'>General terms and conditions</a></li>
                <li><a href="" className='footerSubText'>Compliance</a></li>
                <li><a href="" className='footerSubText'>Cookies</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* mobile Device */}
      <div className="main-middle-mobile">
        <div className="footer-bottom">
          <div className="first">
            <h1 className='title-head' onClick={() => setfirstShow(!firstShow)}>ZETA Holding <br />
              Headquarter <div>
                <img
                  src={footericone}
                  className="footericone"
                  style={{ transform: firstShow ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s ease-in-out" }}
                  alt=""
                />
              </div>
            </h1>
            <div
              className={`footer-none`}
              style={{ display: firstShow ? "block" : "none" }}
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
            <h1 className='title-head' onClick={() => setSecondShow(!SecondShow)}>Company <div>
              <img src={footericone} className='footericone' alt=""
                style={{ transform: SecondShow ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s ease-in-out" }} /></div></h1>
            <div className="text">
              <ul className={`footer-none`} style={{ display: SecondShow ? "block" : "none" }}>
                <li><a href="" className='footerSubText'>About </a></li>
                <li><a href="" className='footerSubText'>Locations</a></li>
                <li><a href="" className='footerSubText'>Contact</a></li>
                <li><a href="" className='footerSubText'>Career</a></li>
                <li><a href="" className='footerSubText'>Vacancies</a></li>
              </ul>
            </div>
          </div>
          <div className="third">
            <h1 className='title-head' onClick={() => setThirdShow(!ThirdShow)}>INFO & ESSENTIALS <div>
              <img src={footericone} className='footericone' alt=""
                style={{ transform: ThirdShow ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s ease-in-out" }} /></div></h1>
            <div className="text">
              <ul className={`footer-none`} style={{ display: ThirdShow ? "block" : "none" }}>
                <li><a href="" className='footerSubText'>Success Stories</a></li>
                <li><a href="" className='footerSubText'>ZETA Videos</a></li>
                <li><a href="" className='footerSubText'>Events</a></li>
                <li><a href="" className='footerSubText'>Media Relations</a></li>
                <li><a href="" className='footerSubText'>Downloads</a></li>
                <li><a href="" className='footerSubText'>FAQs</a></li>
              </ul>
            </div>
          </div>
          <div className="fourth">
            <h1 className='title-head' onClick={() => setFourthShow(!FourthShow)}>LEGAL <div>
              <img src={footericone} className='footericone' alt=""
                style={{ transform: FourthShow ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s ease-in-out" }} /></div></h1>
            <div className="text">
              <ul className={`footer-none`} style={{ display: FourthShow ? "block" : "none" }}>
                <li><a href="" className='footerSubText'>Data protection</a></li>
                <li><a href="" className='footerSubText'>Legal notice</a></li>
                <li><a href="" className='footerSubText'>General terms and conditions</a></li>
                <li><a href="" className='footerSubText'>Compliance</a></li>
                <li><a href="" className='footerSubText'>Cookies</a></li>
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