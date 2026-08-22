import "../css/education.css";

// Fake data — edit these entries with your real education
const education = [
  {
    degree: "Software Engineering Degree",
    school: "EMSI · Casablanca",
    period: "2023 – Present",
    description:
      "4th year of the engineering cycle, focusing on software engineering, web development, and distributed systems.",
    tags: [],
  },
  {
    degree: "Classes Préparatoires (Maths & Physics)",
    school: "Lycée Mohammed V · Casablanca",
    period: "2021 – 2023",
    description:
      "Intensive two-year preparation in mathematics and physics for the national engineering schools entrance exams.",
    tags: [],
  },
  {
    degree: "Baccalauréat in Mathematical Sciences",
    school: "High School · Casablanca",
    period: "2020 – 2021",
    description: "Graduated with honors in the mathematical sciences stream.",
    tags: [],
  },
];

function Education() {
  return (
    <section className="edu-section">
      <header className="sec-head">
        <span className="sec-num">04</span>
        <h2>Education</h2>
      </header>

      <div className="edu-list">
        {education.map((edu, i) => (
          <div className="edu-row" key={i}>
            <div className="edu-when">{edu.period}</div>
            <div className="edu-body">
              <h3 className="edu-title">{edu.degree}</h3>
              <p className="edu-school">{edu.school}</p>
              <p className="edu-desc">{edu.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
