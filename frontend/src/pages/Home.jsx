import { useState } from 'react';
import About from '../components/About';

import Certifications from '../components/certifications'; // <-- watch uppercase!
import Footer from '../components/Footer'; 
import Hero from '../components/Hero';
import ProjectCard from "../components/ProjectCard";
import Experience from "../components/Experience";
import Education from "../components/Education";
import askLogo from "../assets/home1.png";


const projects = [
  {
    title: "Fit Trainer",
    description: "A personalized fitness training application that tracks workouts, provides customized exercise routines, and monitors progress with real-time analytics and recommendations.",
    techs: ["html", "css", "javascript"],
    demoLink: "#"
  },
  {
    title: "Hotel Management Website",
    description: "A comprehensive hotel booking and management platform with room reservations, guest management, payment processing via Stripe, and admin dashboard for hotel operations.",
    techs: ["html", "javascript", "django", "sqLite", "bootstrap", "stripe"],
    demoLink: "#"
  },
  {
    title: "Job Recommendation System",
    description: "An intelligent job matching platform using natural language processing and machine learning to recommend suitable job positions based on candidate profiles and skills analysis.",
    techs: ["react", "css", "django", "python", "spacy", "scikit-learn", "SQLite"],
    demoLink: "#"
  },
  {
    title: "Garage Auto Management",
    description: "An automotive garage management system with appointment scheduling, service tracking, customer management, and integration with AI chatbot for customer support.",
    techs: ["html", "css", "bootstrap", "dialogflow", "django"],
    demoLink: "#"
  },
  {
    title: "Hotel Management System",
    description: "A backend hotel management system built in C for managing reservations, billing, guest records, and staff operations with efficient data management.",
    techs: ["c"],
    demoLink: "#"
  },
  {
    title: "School Management Dashboard",
    description: "An interactive school management dashboard for tracking students, managing classes, attendance monitoring, and generating performance reports with an intuitive user interface.",
    techs: ["html", "css", "javascript"],
    demoLink: "#"
  },
  {
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce website with product catalog, shopping cart, payment integration, order management, and admin panel for inventory control.",
    techs: ["symfony"],
    demoLink: "#"
  },
  {
    title: "CodeMaster - LeetCode Clone",
    description: "A comprehensive coding problem-solving platform built with .NET, featuring algorithm problems, code editor with multi-language support, test case validation, and real-time leaderboards.",
    techs: [".NET", "C#", "SQL Server", "React", "Docker"],
    demoLink: "#"
  },
  {
    title: "GameArena - Tournament Platform",
    description: "A mobile gaming tournament platform allowing users to participate in competitive gaming events, track rankings, manage teams, and view live leaderboards with real-time updates.",
    techs: ["React Native", "Spring Boot", "MongoDB", "WebSocket", "Firebase"],
    demoLink: "#"
  },
  {
    title: "Android Quiz Mobile App",
    description: "An interactive Android quiz application with dynamic question sets, real-time scoring, user authentication, and cloud-synced data for a seamless quiz experience across devices.",
    techs: ["Java", "XML", "Firebase", "Firestore", "Git", "GitHub"],
    demoLink: "#"
  },
  {
    title: "Android Movies App",
    description: "A feature-rich Android movie browsing app with a personal watchlist, integrated AI chatbot for movie recommendations, and real-time data powered by a cloud backend.",
    techs: ["Java", "XML", "Ollama", "OpenRouter API", "Supabase", "Git", "GitHub"],
    demoLink: "#"
  },
  {
    title: "Application de Pointage QR Code",
    description: "A QR code-based attendance tracking application that enables fast and accurate check-ins, real-time presence monitoring, and detailed attendance reporting.",
    techs: ["Next.js"],
    demoLink: "#"
  },
  {
    title: "Gestion Action Charité",
    description: "A charity action management platform for organizing fundraising campaigns, tracking donations, managing volunteers, and generating reports on charitable activities.",
    techs: ["Spring Boot", "PostgreSQL", "Postman", "Thymeleaf", "Git", "GitHub"],
    demoLink: "#"
  },
  {
    title: "Application de Guide Touristique",
    description: "A tourist guide application offering interactive exploration of destinations, points of interest, itinerary planning, and rich location-based content powered by a robust backend.",
    techs: ["React", "Spring Boot", "MongoDB", "Git", "GitHub", "Agile", "Jira"],
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

const VISIBLE_PROJECTS = 6;

function Home() {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const visibleProjects = showAllProjects
    ? projects
    : projects.slice(0, VISIBLE_PROJECTS);

  return (
    <>
      
      <Hero />

      {/* Projects Section */}
      <section className="projects-section" id="projects">
        <header className="sec-head">
          <span className="sec-num">01</span>
          <h2>Projects</h2>
        </header>
        <div className="projects-list">
          {visibleProjects.map((project, i) => (
            <ProjectCard key={i} {...project} index={i} featured={i === 0} />
          ))}
        </div>
        {projects.length > VISIBLE_PROJECTS && (
          <div className="see-more-wrap">
            <button
              className="btn-ghost see-more-btn"
              onClick={() => setShowAllProjects((v) => !v)}
            >
              {showAllProjects ? '↑ See Less' : `See More (${projects.length - VISIBLE_PROJECTS}+)`}
            </button>
          </div>
        )}
      </section>

      <About />

      <Experience />

      <Education />

      {/* Certifications */}
      <div className="certif-section">
        <header className="sec-head">
          <span className="sec-num">05</span>
          <h2>Certifications</h2>
        </header>
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
