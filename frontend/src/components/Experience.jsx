import "../css/experience.css";

// Fake data — edit these entries with your real experience
const experiences = [
  {
    role: "software engineer Intern",
    company: "Pharma 5 · Casablanca",
    period: "Jul 2025 – Sep 2025",
    description:
      "Developed a Python solution to automate data exchange between Sage X3 and Excel , Automated the export of customer and product  data, data validation, and generation of import files for Sage X3.",
    tags: ["Python", "Sage X3 web service", "excel","vba","task scheduler","google cloud"],
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
