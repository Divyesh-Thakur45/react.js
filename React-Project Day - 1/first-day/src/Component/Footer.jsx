import '../Component/Footer.css'
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-section">
          <h3>About</h3>
          <ul>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">FlipCart Stories</a>
            </li>
            <li>
              <a href="#">Press</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Help</h3>
          <ul>
            <li>
              <a href="#">Payments</a>
            </li>
            <li>
              <a href="#">Shipping</a>
            </li>
            <li>
              <a href="#">Cancellation & Returns</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Report Infringement</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Policy</h3>
          <ul>
            <li>
              <a href="#">Return Policy</a>
            </li>
            <li>
              <a href="#">Terms Of Use</a>
            </li>
            <li>
              <a href="#">Security</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
            <li>
              <a href="#">Sitemap</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Social</h3>
          <ul className="social-icons">
            <li>
              <a href="#">
              <FaFacebook />
              </a>
            </li>
            <li>
              <a href="#">
              <FaTwitter />
              </a>
            </li>
            <li>
              <a href="#">
              <FaYoutube />
              </a>
            </li>
            <li>
              <a href="#">
              <FaInstagram />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>This website made by : divyeshthakur370@gmail.com</p>
      </div>
    </footer>
  );
}
