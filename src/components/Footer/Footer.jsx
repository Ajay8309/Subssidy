import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h2>Mahabizguru Business <br /> Consultancy</h2>
          <p>
            Empowering businesses with expert solutions in subsidy optimization,
            project finance, and government grants.
          </p>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <ul>
            <li>📍 Office No. 304, “Status Point”,<br /> Near S P College, Sadashiv Peth, Pune 411030, MH.</li>
            <li>📞 <a href="tel:+917030140224">7030140224</a></li>
            <li>✉️ <a href="mailto:mahabizguru@gmail.com">mahabizguru@gmail.com</a></li>
            <li>🌐 <a href="http://www.mahabizguru.co.in" target="_blank" rel="noopener noreferrer">www.mahabizguru.co.in</a></li>
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
        <p>&copy; {new Date().getFullYear()} Mahabizguru Business Consultancy. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
