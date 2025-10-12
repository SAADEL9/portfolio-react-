
import ProjectCard from "../components/ProjectCard";
import askLogo from "../assets/home1.png";

const projects = [
  {
    logo: askLogo,
    title: "fit trainer",
    description: "A modern financial services platform built with Next.js...A modern financial services platform built with Next.js...",
    techs: ["html", "css", "javascript"],
    demoLink: "#"
  },
  {
    logo: askLogo,
    title: "job rec",
    description: "A modern financial services platform built with Next.js...",
    techs: ["react", "css", "django", "python", "spacy", "scikit-learn","SQLite"],
    demoLink: "#"
  },
  {
    logo: askLogo,
    title: "garage auto",
    description: "A modern financial services platform built with Next.js...",
    techs: ["html", "css", "bootstrap", "dialogflow", "django"],
    demoLink: "#"
  },
  {
    logo: askLogo,
    title: "gestion d'hotel",
    description: "A modern financial services platform built with Next.js...",
    techs: ["c"],
    demoLink: "#"
  },
  {
   
    title: "school management dashboard",
    description: "A school management dashboard created with HTML, CSS, and JavaScript, featuring student and class tracking.",
    techs: ["html ", "css","javascript"],
    demoLink: "#"
  },
   {
    
    title: "ecomerce website",
    description: "A modern financial services platform built with Next.js...",
    techs: ["symfony"],
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