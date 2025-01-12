import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link className="h21" to="/" onClick={closeMobileMenu}>
          Bharat Subsidy
        </Link>
        <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          ☰
        </div>
      </div>
      <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
        <li><Link to="/" onClick={closeMobileMenu}>Home</Link></li>
        <li><Link to="/about" onClick={closeMobileMenu}>About Us</Link></li>
        <li className={`dropdown ${activeDropdown === 'subsidy' ? 'active' : ''}`}>
          <Link to={"/subsidy"}>
            Subsidies
          </Link>
          <div className="dropdown-content">
            <div className={`nested-dropdown ${activeDropdown === 'agriculture' ? 'active' : ''}`}>
              <span onClick={() => toggleDropdown('agriculture')}>Agriculture</span>
              <div className="nested-dropdown-content">
                <Link to="/subsidy/pmegp" onClick={closeMobileMenu}>PMEGP</Link>
                <Link to="/subsidy/cmegp" onClick={closeMobileMenu}>CMEGP</Link>
                <Link to="/subsidy/nhm" onClick={closeMobileMenu}>NHM</Link>
                <Link to="/subsidy/nhb" onClick={closeMobileMenu}>NHB</Link>
                <Link to="/subsidy/nabard" onClick={closeMobileMenu}>NABARD</Link>
                <Link to="/subsidy/warehouse" onClick={closeMobileMenu}>Warehouse</Link>
                <Link to="/subsidy/cold-storage" onClick={closeMobileMenu}>Cold Storage</Link>
                <Link to="/subsidy/processing" onClick={closeMobileMenu}>Processing</Link>
              </div>
            </div>
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
