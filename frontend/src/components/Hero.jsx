import heroImg from '../assets/saad.png';
import cvPdf from '../assets/SAAD_EL_MAHI.pdf';
import "../css/heroStyle.css";

function Hero() {
  return (
    <div className="heroContainer">
      <div className="heroLeft">
        {/* Terminal line */}
        <span className="terminal-line">
          saad@portfolio:~$ whoami<span className="cursor"></span>
        </span>

        {/* Badge */}
        <span className="hero-badge">Software Engineer · 4th Year</span>

        {/* Main Heading */}
        <h3 className="hero-title">
          <span className="hero-hi">Hi, I'm</span>
          <span className="hero-name">Saad Elmahi</span>
        </h3>

        <p className="hero-intro">
          Passionate about building modern, scalable web applications. Always exploring new technologies and pushing creative boundaries.
        </p>

        {/* CTAs */}
        <div className="hero-cta-row">
          <a href="#projects" className="btn-primary">View Projects <span className="btn-arrow">→</span></a>
          <a href={cvPdf} download className="btn-ghost">Download CV</a>
        </div>

        {/* Stats */}
        <div className="hero-stats">
          <div className="hero-stat">
            <div className="hero-stat-value">9+</div>
            <div className="hero-stat-label">Projects Built</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-value">6+</div>
            <div className="hero-stat-label">Certifications</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-value">5+</div>
            <div className="hero-stat-label">Technologies</div>
          </div>
        </div>
      </div>

      <div className="heroRight">
        <figure className="hero-figure">
          <img src={heroImg} alt="Saad Elmahi - Software Engineer" />
          <figcaption className="hero-caption">CASABLANCA, MOROCCO</figcaption>
        </figure>
      </div>
    </div>
  );
}

export default Hero;
