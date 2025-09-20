import { Link } from 'react-router-dom';
import { useState } from 'react';
import "../css/Navstyle.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navClass">
      <nav className="navbar">
        <div className="logo">SAAD ELMAHI</div>

        {/* Hamburger Icon */}
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>

        {/* Nav Links */}
        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
          <Link to="/cv" onClick={() => setMenuOpen(false)}>CV</Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
