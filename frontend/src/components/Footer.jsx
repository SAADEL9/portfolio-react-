import "../css/FooterStyle.css";

function Footer() {
  return (
    <div className="FooterContainer">
      <div className="info">
        <div className="info-left">
          <p>Casablanca, Morocco</p>
          <p>saadelmahi123@gmail.com</p>
          <p>0656991767</p>
        </div>
        <div className="info-right">
          <li>
            <a href="https://www.linkedin.com/in/saad-elmahi-13888028a/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://github.com/SAADEL9" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
        </div>
      </div>
      <p className="footer-copy">© 2025 Saad Elmahi · All rights reserved</p>
    </div>
  );
}

export default Footer;