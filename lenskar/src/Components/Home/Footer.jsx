import React from "react";
import "../../Style/Footer.css";

const Footer = () => {
  return (
    <div>
      {/* whatsapp img */}
      <div>
        <img
          src="https://static5.lenskart.com/media/uploads/whatsapp-1.png"
          alt=""
        />
      </div>

      {/* Youtube Video */}
      <div className="testimonials-container">
        <p className="testimonials-title">MEET OUR HAPPY CUSTOMERS</p>
        <div className="testimonials-videos">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/HYPqf_eVvvM"
            title="Customer Reviews"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/SQm3RxXRunw"
            title="Lenskart Customer Testimonial"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/IZpUQ-S_LcM"
            title="Lenskart - The Customer Diaries"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Footer    */}
      <div className="footer-container">
        <div className="footer-content">
          <h2>Buy The Best Eyewear From Lenskart</h2>
          <p>
            Lenskart Is The Leading E-Commerce Portal For Eyewear In India. It
            Has Revolutionised The Eyewear Industry In The Country With Its
            Omni-Channel Approach. From An Ever-Growing Number Of Offline Stores
            Across Major Cities In The Country To Innovative Integration Of
            Technology While Purchasing Online, Lenskart Caters To Every
            Customer With Several Deals And Offers.
          </p>
          <p>
            A One-Stop Online Solution For Purchasing Eyewear And Its
            Accessories, Lenskart Delivers Them Right At Your Doorstep With
            Convenient Methods Of Payment. <a href="#">Sunglasses</a> as well as{" "}
            <a href="#">Eyeglasses</a> Are Available For Men And Women In A
            Diverse Array Of Styles And Trendy Colours. If You Want To Try Out{" "}
            <a href="#">Contact Lenses</a>, Pick The Ones Of Your Choice From
            The Extensive Variety Of Coloured Contact Lenses From Our Online
            Store.
          </p>
        </div>
        <div className="footer-links">
          <div className="footer-section">
            <h3>Services</h3>
            <ul>
              <li>
                <a href="#">Store Locator</a>
              </li>
              <li>
                <a href="#">Buying Guide</a>
              </li>
              <li>
                <a href="#">Frame Size</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>About Us</h3>
            <ul>
              <li>
                <a href="#">We Are Hiring</a>
              </li>
              <li>
                <a href="#">Refer And Earn</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Lenskart Coupons</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Help</h3>
            <ul>
              <li>
                <a href="#">FAQ's</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <a href="#" className="app-links">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/512px-Google_Play_Store_badge_EN.svg.png"
                alt="Google Play Store"
              />
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
              />
            </a>
            <p>
              Download Lenskart App to buy Eyeglasses, Sunglasses and Contact
              Lenses
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
