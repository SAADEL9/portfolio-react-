import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import cvPdf from '../assets/SAAD_EL_MAHI.pdf';
import avatar from '../assets/saad.png';
import ThemeSwitch, { SketchyFilters } from './ThemeSwitch';
import "../css/Navstyle.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(() => {
    try { return localStorage.getItem('theme') !== 'light'; }
    catch { return true; }
  });
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);
  const toggleTheme = () => setDark(d => !d);

  useEffect(() => {
    document.documentElement.classList.toggle('light', !dark);
    try { localStorage.setItem('theme', dark ? 'dark' : 'light'); }
    catch { /* storage unavailable — theme still applies for this visit */ }
  }, [dark]);

  const linkClass = (path) =>
    `nav-link ${location.pathname === path ? 'active' : ''}`;

  return (
    <div className="navClass">
      <SketchyFilters />
      <div className={`nav-backdrop ${menuOpen ? 'active' : ''}`} onClick={closeMenu} />

      <nav className="navbar">
        {/* Mobile top bar — theme switch takes the CV button's slot;
            the CV stays in the drawer menu and the hero */}
        <div className="nav-bar-row">
          <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
            {menuOpen ? '✕' : '☰'}
          </button>
          <Link to="/" className="logo logo-bar" onClick={closeMenu}>
            <span className="logo-text">SAAD ELMAHI</span>
          </Link>
          <ThemeSwitch checked={dark} onChange={toggleTheme} size={11} />
        </div>

        {/* Sidebar (desktop) / Drawer (mobile) */}
        <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <div className="nav-head">
            <Link to="/" className="logo" onClick={closeMenu}>
              <img className="logo-avatar" src={avatar} alt="" />
              <span className="logo-text">SAAD ELMAHI</span>
            </Link>
            <span className="nav-role">Software Engineer · 4th Year</span>
          </div>

          <div className="nav-menu">
            <Link to="/" className={linkClass('/')} onClick={closeMenu}>
              <span className="nav-index">01</span>Home
            </Link>
            <Link to="/projects" className={linkClass('/projects')} onClick={closeMenu}>
              <span className="nav-index">02</span>Projects
            </Link>
            <a href={cvPdf} download className={linkClass('/cv')} onClick={closeMenu}>
              <span className="nav-index">03</span>CV
            </a>
          </div>

          <div className="nav-socials">
            <a href="https://github.com/SAADEL9" target="_blank" rel="noopener noreferrer">
              GitHub <span className="nav-arrow">↗</span>
            </a>
            <a href="https://www.linkedin.com/in/saad-elmahi-13888028a/" target="_blank" rel="noopener noreferrer">
              LinkedIn <span className="nav-arrow">↗</span>
            </a>
            <a href="mailto:saadelmahi123@gmail.com">
              Email <span className="nav-arrow">↗</span>
            </a>
          </div>

          <div className="nav-theme">
            <ThemeSwitch checked={dark} onChange={toggleTheme} size={26} />
            <span className="nav-theme-mode">{dark ? 'Night' : 'Day'} mode</span>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
