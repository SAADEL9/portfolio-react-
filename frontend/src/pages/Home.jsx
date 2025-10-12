import About from '../components/About';

import Certifications from '../components/certifications'; // <-- watch uppercase!
import Footer from '../components/Footer'; 
import Hero from '../components/Hero';
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

const certifs = [
  { title: "Introduction to DevOps", school: "IBM" },
  { title: "Interactivity with JavaScript", school: "University of Michigan" },
  { title: "IThe Unix Workbench", school: "Johns Hopkins University" },
  { title: "React Basics", school: "Meta" },
  { title: "Introduction à la programmation orientée objet (en C++)", school: "École Polytechnique Fédérale de Lausanne" }
];

function Home() {
  return (
    <>
      
      <Hero />

      {/* Projects */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          padding: '32px',
          backgroundColor: '#000',
          borderTop: "1px solid #374151"
        }}
      >
        {projects.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </div>

      <About />

      {/* Certifications */}
     <div className="certif-section">
  <h2>Certifications</h2>
  <div className="certif-grid">
    {certifs.map((certif, i) => (
      <Certifications key={i} title={certif.title} school={certif.school} />
    ))}
  </div>
</div>

      <Footer />
    </>
  );
}

export default Home;
