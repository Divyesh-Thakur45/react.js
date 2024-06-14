import '../Component/Footer.css'
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
                <img src="https://via.placeholder.com/20" alt="Facebook"></img>
              </a>
            </li>
            <li>
              <a href="#">
                <img src="https://via.placeholder.com/20" alt="Twitter"></img>
              </a>
            </li>
            <li>
              <a href="#">
                <img src="https://via.placeholder.com/20" alt="YouTube"></img>
              </a>
            </li>
            <li>
              <a href="#">
                <img src="https://via.placeholder.com/20" alt="Instagram"></img>
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
