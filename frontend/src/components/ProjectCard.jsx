import "../css/ProjectCard.css";

function ProjectCard({ logo, title, description, techs, demoLink }) {
  return (
    <div className="card">
      <img src={logo} alt={`${title} logo`} className="card-logo" />

      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>

        <div className="card-techs">
          {techs.map((tech, index) => (
            <span key={index} className="tech-badge">{tech}</span>
          ))}
        </div>

        <a href={demoLink} className="card-button" target="_blank" rel="noopener noreferrer">
        github link
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
