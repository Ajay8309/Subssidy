import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  const handleMouseEnter = () => {
    setOpenDropdown("subsidy");
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link className="h21" to="/" onClick={closeMobileMenu}>
          Mahabizguru
        </Link>
        <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          ☰
        </div>
      </div>
      <ul className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>
        <li><Link to="/" onClick={closeMobileMenu}>Home</Link></li>
        <li><Link to="/about" onClick={closeMobileMenu}>About Us</Link></li>

        {/* Subsidy Dropdown - Shows Project Categories */}
        <li
          className={`dropdown ${openDropdown === "subsidy" ? "active" : ""}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Link to="/subsidy" className="dropdown-title" onClick={closeMobileMenu}>
            Subsidies
          </Link>
          <div className="dropdown-content">
            <Link to="/subsidy/agriculture" onClick={closeMobileMenu}>Agriculture & Allied</Link>
            <Link to="/subsidy/storage" onClick={closeMobileMenu}>Storage & Processing</Link>
            <Link to="/subsidy/processing" onClick={closeMobileMenu}>Processing Units</Link>
            <Link to="/subsidy/msme" onClick={closeMobileMenu}>MSME</Link>
            <Link to="/subsidy/renewable-energy" onClick={closeMobileMenu}>Renewable Energy</Link>
            <Link to="/subsidy/tourism" onClick={closeMobileMenu}>Tourism</Link>
            <Link to="/subsidy/technology" onClick={closeMobileMenu}>Technology</Link>
          </div>
        </li>

        <li><Link to="/finance" onClick={closeMobileMenu}>Finance</Link></li>
        <li><Link to="/blog" onClick={closeMobileMenu}>Blog</Link></li>
        <li><Link to="/contact" onClick={closeMobileMenu}>Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
