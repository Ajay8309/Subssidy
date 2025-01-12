import './Footer.css';

function Footer() {
    return (
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <h2>Bharat Subsidy</h2>
            <p>Empowering Indian Agriculture with government support and guidance for a sustainable future.</p>
          </div>
  
          <div className="footer-contact">
            <h3>Contact Us</h3>
            <ul>
              <li>📍 New Delhi, India</li>
              <li>📞 +91 1234567890</li>
              <li>✉️ info@bharatsubsidy.com</li>
            </ul>
          </div>
  
          <div className="social-links">
            <h3>Follow Us</h3>
            <div className="icons">
              <a href="#" aria-label="Facebook" className="facebook">📱</a>
              <a href="#" aria-label="Twitter" className="twitter">💬</a>
              <a href="#" aria-label="LinkedIn" className="linkedin">💼</a>
              <a href="#" aria-label="Instagram" className="instagram">📷</a>
            </div>
          </div>
        </div>
  
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Bharat Subsidy. All rights reserved.</p>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  