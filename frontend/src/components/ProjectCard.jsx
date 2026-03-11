import "../css/ProjectCard.css";

// Map tech names to colors for badges
const techColorMap = {
  react: "#61DAFB",
  "react native": "#61DAFB",
  javascript: "#F7DF1E",
  typescript: "#3178C6",
  python: "#3572A5",
  django: "#092E20",
  html: "#E34F26",
  css: "#1572B6",
  bootstrap: "#7952B3",
  php: "#777BB4",
  java: "#ED8B00",
  "spring boot": "#6DB33F",
  mongodb: "#47A248",
  ".net": "#512BD4",
  "c#": "#178600",
  c: "#555555",
  "c++": "#F34B7D",
  docker: "#2496ED",
  kubernetes: "#326CE5",
  firebase: "#FFCA28",
  redis: "#DC382D",
  postgresql: "#336791",
  sqlite: "#003B57",
  "sql server": "#CC2927",
  symfony: "#000000",
  tailwindcss: "#38BDF8",
  "scikit-learn": "#F7931E",
  spacy: "#09A3D5",
  websocket: "#010101",
  dialogflow: "#FF9800",
  stripe: "#635BFF",
  "react native": "#61DAFB",
};

function getTechColor(tech) {
  return techColorMap[tech.toLowerCase()] || "#ffffff";
}

// SVG icon that looks like a code bracket / terminal icon
function CodeIcon() {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="brutalist-card__svg">
      <path d="M8 6L2 12L8 18M16 6L22 12L16 18" strokeWidth="2.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function ProjectCard({ title, description, techs, demoLink }) {
  return (
    <div className="brutalist-card">
      <div className="brutalist-card__header">
        <div className="brutalist-card__icon">
          <CodeIcon />
        </div>
        <div className="brutalist-card__alert">{title}</div>
      </div>

      <div className="brutalist-card__message">{description}</div>

      <div className="brutalist-card__techs">
        {techs.map((tech, index) => (
          <span
            key={index}
            className="brutalist-tech-badge"
            style={{ "--tech-color": getTechColor(tech) }}
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="brutalist-card__actions">
        <a
          className="brutalist-card__button brutalist-card__button--github"
          href={demoLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          &lt;/&gt; View on GitHub
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
