
import ProjectCard from "../components/ProjectCard";
import askLogo from "../assets/home1.png";

const projects = [
  {
    logo: askLogo,
    title: "AskFinancee",
    description: "A modern financial services platform built with Next.js...",
    techs: ["html", "css", "django", "dialogflow", "Shadcn UI"],
    demoLink: "#"
  },
  {
    logo: askLogo,
    title: "AskFinancee",
    description: "A modern financial services platform built with Next.js...",
    techs: ["html", "css", "django", "dialogflow", "Shadcn UI"],
    demoLink: "#"
  },
  {
    logo: askLogo,
    title: "AskFinancee",
    description: "A modern financial services platform built with Next.js...",
    techs: ["html", "css", "django", "dialogflow", "Shadcn UI"],
    demoLink: "#"
  },
];

function ProjectsDetail() {
  return (
    <div style={{ minHeight: '60vh', background: '#000', color: '#fff', padding: '40px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '32px' }}>My Projects</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {projects.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </div>
    </div>
  );
}
export default ProjectsDetail;