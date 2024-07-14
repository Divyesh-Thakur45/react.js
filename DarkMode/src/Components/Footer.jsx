import React from "react";
import '../Components/Footer.css'
const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer-top">
          <div className="footer-section">
            <h4>ABOUT</h4>
            <ul>
              <li>Contact Us</li>
              <li>About Us</li>
              <li>Careers</li>
              <li>Flipkart Stories</li>
              <li>Press</li>
              <li>Flipkart Wholesale</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>HELP</h4>
            <ul>
              <li>Payments</li>
              <li>Shipping</li>
              <li>Cancellation & Returns</li>
              <li>FAQ</li>
              <li>Report Infringement</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>POLICY</h4>
            <ul>
              <li>Return Policy</li>
              <li>Terms Of Use</li>
              <li>Security</li>
              <li>Privacy</li>
              <li>Sitemap</li>
              <li>EPR Compliance</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>SOCIAL</h4>
            <ul>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>YouTube</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>This Website Made By : divyeshthakur370@gmail.com .</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
