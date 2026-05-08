import { Link } from 'react-router-dom';
import { useState } from 'react';
import cvPdf from '../assets/SAAD_EL_MAHI.pdf';
import "../css/Navstyle.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navClass">
      <nav className="navbar">
        <Link to="/" className="logo" onClick={() => setMenuOpen(false)}>SAAD ELMAHI</Link>

        {/* Hamburger Icon */}
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>

        {/* Nav Links */}
        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
          <a href={cvPdf} download onClick={() => setMenuOpen(false)} style={{textDecoration: 'none', color: 'inherit'}}>CV</a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
