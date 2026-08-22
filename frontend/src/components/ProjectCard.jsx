import "../css/ProjectCard.css";

function ProjectCard({ title, description, techs, demoLink, featured = false, index = 0 }) {
  const num = String(index + 1).padStart(2, "0");
  const techLine = techs.join(" / ");

  if (featured) {
    return (
      <article className="project-featured">
        <div className="project-featured-left">
          <span className="project-num">{num}</span>
          <h3 className="project-featured-title">{title}</h3>
          <p className="project-techs">{techLine}</p>
        </div>
        <div className="project-featured-right">
          <p className="project-desc">{description}</p>
          <a
            className="project-link"
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            &lt;/&gt; View on GitHub <span className="project-link-arrow">→</span>
          </a>
        </div>
      </article>
    );
  }

  return (
    <article className="project-row">
      <span className="project-num">{num}</span>
      <div className="project-body">
        <h3 className="project-title">{title}</h3>
        <p className="project-techs">{techLine}</p>
        <p className="project-desc">{description}</p>
        <a
          className="project-link"
          href={demoLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          &lt;/&gt; View on GitHub <span className="project-link-arrow">→</span>
        </a>
      </div>
    </article>
  );
}

export default ProjectCard;
