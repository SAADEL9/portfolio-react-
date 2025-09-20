import About from '../components/About';
import Navbar from '../components/Navbar'; 
 
import Footer from '../components/Footer'; 
import Hero from '../components/Hero';
import ProjectCard from "../components/ProjectCard";
import askLogo from "../assets/home1.png"; // your image

const projects = [
  {
    logo: askLogo,
    title: "AskFinancee",
    description: "A modern financial services platform built with Next.js...",
    techs: [
      "html", "css", "bootstrap", "dialogflow",
      "django", 
    ],
    demoLink: "#"
  },
  {logo: askLogo,
    title: "AskFinancee",
    description: "A modern financial services platform built with Next.js...",
    techs: [
       "html", "css", "bootstrap", "dialogflow",
      "django", 
    ],
    demoLink: "#"},
    {logo: askLogo,
    title: "AskFinancee",
    description: "A modern financial services platform built with Next.js...",
    techs: [
       "html", "css", "bootstrap", "dialogflow",
      "django", 
    ],
    demoLink: "#"},
];

function Home() {
 
  return (
    <>
      
      <Hero />
      <div style={{ 
      display: 'flex', 
      flexWrap: 'wrap', 
      justifyContent: 'center', 
      padding: '32px',
      backgroundColor: '#000'
    }}>
      {projects.map((project, i) => (
        <ProjectCard key={i} {...project} />
      ))}
    </div>
      <About  />
       <Footer />
    </>
  );
}

export default Home;