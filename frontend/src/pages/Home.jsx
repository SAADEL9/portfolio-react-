import About from '../components/About';

import Certifications from '../components/certifications'; // <-- watch uppercase!
import Footer from '../components/Footer'; 
import Hero from '../components/Hero';
import ProjectCard from "../components/ProjectCard";
import askLogo from "../assets/home1.png"; 

const projects = [
  {
    logo: askLogo,
    title: "Fit Trainer",
    description: "A personalized fitness training application that tracks workouts, provides customized exercise routines, and monitors progress with real-time analytics and recommendations.",
    techs: ["html", "css", "javascript"],
    demoLink: "#"
  },
   {
    logo: askLogo,
    title: "Hotel Management Website",
    description: "A comprehensive hotel booking and management platform with room reservations, guest management, payment processing via Stripe, and admin dashboard for hotel operations.",
    techs: ["html",  "javascript","django","sqLite","bootstrap","stripe"],
    demoLink: "#"
  },
  {
    logo: askLogo,
    title: "Job Recommendation System",
    description: "An intelligent job matching platform using natural language processing and machine learning to recommend suitable job positions based on candidate profiles and skills analysis.",
    techs: ["react", "css", "django", "python", "spacy", "scikit-learn","SQLite"],
    demoLink: "#"
  },
  {
    logo: askLogo,
    title: "Garage Auto Management",
    description: "An automotive garage management system with appointment scheduling, service tracking, customer management, and integration with AI chatbot for customer support.",
    techs: ["html", "css", "bootstrap", "dialogflow", "django"],
    demoLink: "#"
  },
  {
    logo: askLogo,
    title: "Hotel Management System",
    description: "A backend hotel management system built in C for managing reservations, billing, guest records, and staff operations with efficient data management.",
    techs: ["c"],
    demoLink: "#"
  },
  {
   
    title: "School Management Dashboard",
    description: "An interactive school management dashboard for tracking students, managing classes, attendance monitoring, and generating performance reports with an intuitive user interface.",
    techs: ["html ", "css","javascript"],
    demoLink: "#"
  },
   {
    
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce website with product catalog, shopping cart, payment integration, order management, and admin panel for inventory control.",
    techs: ["symfony"],
    demoLink: "#"
  },
  {
    logo: askLogo,
    title: "CodeMaster - LeetCode Clone",
    description: "A comprehensive coding problem-solving platform built with .NET, featuring algorithm problems, code editor with multi-language support, test case validation, and real-time leaderboards.",
    techs: [".NET", "C#", "SQL Server", "React", "Docker"],
    demoLink: "#"
  },
  {
    logo: askLogo,
    title: "GameArena - Tournament Platform",
    description: "A mobile gaming tournament platform allowing users to participate in competitive gaming events, track rankings, manage teams, and view live leaderboards with real-time updates.",
    techs: ["React Native", "Spring Boot", "MongoDB", "WebSocket", "Firebase"],
    demoLink: "#"
  },
];

const certifs = [
  { title: "Introduction to DevOps", school: "IBM" },
  { title: "Interactivity with JavaScript", school: "University of Michigan" },
  { title: "IThe Unix Workbench", school: "Johns Hopkins University" },
  { title: "React Basics", school: "Meta" },
  { title: "Introduction à la programmation orientée objet (en C++)", school: "École Polytechnique Fédérale de Lausanne" },
  {title : "Introduction to Containers w/ Docker, Kubernetes & OpenShift" , school :"IBM"}
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
