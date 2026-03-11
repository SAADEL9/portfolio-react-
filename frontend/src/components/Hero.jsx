import heroImg from '../assets/hero.png';
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
        <h3>
          Hi, I'm{" "}
          <span className="name-gradient">Saad Elmahi</span>
        </h3>

        <p>
          Passionate about building modern, scalable web applications. Always exploring new technologies and pushing creative boundaries.
        </p>

        {/* CTAs */}
        <div className="hero-cta-row">
          <a href="/cv.pdf" download className="btn-primary">Download CV</a>
          <a href="#projects" className="btn-ghost">View Projects</a>
        </div>

        {/* Stats */}
        <div className="hero-stats">
          <div>
            <div className="hero-stat-value">9+</div>
            <div className="hero-stat-label">Projects Built</div>
          </div>
          <div>
            <div className="hero-stat-value">6+</div>
            <div className="hero-stat-label">Certifications</div>
          </div>
          <div>
            <div className="hero-stat-value">5+</div>
            <div className="hero-stat-label">Technologies</div>
          </div>
        </div>
      </div>

      <div className="heroRight">
        <img src={heroImg} alt="Saad Elmahi - Software Engineer" />
      </div>
    </div>
  );
}

export default Hero;