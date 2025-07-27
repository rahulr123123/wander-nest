import './Navbar.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import logo from '../../public/assets/logo.png';
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar-container">
      <div className="navbar-logo">
  <Link to="/" onClick={closeMenu}>
   <img src={logo} alt="WanderNest Logo" className="logo-icon" />
    WanderNest
  </Link>
</div>

      <div className={`navbar-links ${menuOpen ? 'active' : ''}`}>
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/packages" onClick={closeMenu}>Packages</Link>
        <Link to="/about" onClick={closeMenu}>About</Link>
        <Link to="/contact" onClick={closeMenu}>Contact</Link>
        <button
          className="book-now-button"
          onClick={() => {
            window.location.href = '/Packages';
            closeMenu();
          }}
        >
          Book Now
        </button>
      </div>

      <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}
