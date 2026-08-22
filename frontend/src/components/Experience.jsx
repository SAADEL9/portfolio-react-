import "../css/experience.css";

// Fake data — edit these entries with your real experience
const experiences = [
  {
    role: "Full Stack Developer Intern",
    company: "NovaTech Solutions · Casablanca",
    period: "Jul 2025 – Sep 2025",
    description:
      "Built and maintained web application features using React and Spring Boot, collaborated in an Agile team, and helped containerize and deploy services with Docker.",
    tags: ["React", "Spring Boot", "Docker"],
  },
  {
    role: "Frontend Developer Intern",
    company: "DigitalWave Agency · Remote",
    period: "Feb 2025 – Jun 2025",
    description:
      "Developed responsive landing pages and client dashboards with React and Tailwind CSS, improving page load times and accessibility.",
    tags: ["React", "Tailwind CSS", "JavaScript"],
  },
  {
    role: "Freelance Web Developer",
    company: "Self-employed · Remote",
    period: "2024 – Present",
    description:
      "Designed and delivered full-stack websites for local businesses, from requirement gathering to deployment and maintenance.",
    tags: ["HTML", "CSS", "Django", "MySQL"],
  },
];

function Experience() {
  return (
    <section className="xp-section">
      <header className="sec-head">
        <span className="sec-num">03</span>
        <h2>Experience</h2>
      </header>

      <div className="xp-list">
        {experiences.map((xp, i) => (
          <div className="xp-row" key={i}>
            <div className="xp-when">{xp.period}</div>
            <div className="xp-body">
              <h3 className="xp-title">{xp.role}</h3>
              <p className="xp-company">{xp.company}</p>
              <p className="xp-desc">{xp.description}</p>
              <p className="xp-tags">{xp.tags.join(" · ")}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
