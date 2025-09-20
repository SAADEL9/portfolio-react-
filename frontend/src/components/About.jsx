import "../css/about.css";
function About() {
  const progLanguage = [
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg"
  ];

  const front = [
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg"
  ];

  const back = [
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/symfony/symfony-original.svg",
    
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original-wordmark.svg"
          
  ];

  const database = [
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg"
  ];
  const tools =[
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/intellij/intellij-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqldeveloper/sqldeveloper-original.svg" ,
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original-wordmark.svg" 
  ]

  return (
    <div className="about-container">
      <h2>My Skills</h2>

      <h3>Programming Languages</h3>
      <div className="about-img">
        {progLanguage.map((link, index) => (
          <img key={index} src={link} alt={`language ${index + 1}`} className="tech-icon2" />
        ))}
      </div>

      <h3>Frontend</h3>
      <div className="about-img">
        {front.map((link, index) => (
          <img key={index} src={link} alt={`frontend ${index + 1}`} className="tech-icon2" />
        ))}
      </div>

      <h3>Backend</h3>
      <div className="about-img">
        {back.map((link, index) => (
          <img key={index} src={link} alt={`backend ${index + 1}`} className="tech-icon2" />
        ))}
      </div>

      <h3>Database</h3>
      <div className="about-img">
        {database.map((link, index) => (
          <img key={index} src={link} alt={`database ${index + 1}`} className="tech-icon2" />
        ))}
      </div>

       <h3>tools</h3>
      <div className="about-img">
        {tools.map((link, index) => (
          <img key={index} src={link} alt={`database ${index + 1}`} className="tech-icon2" />
        ))}
      </div>
    </div>
  );
}

export default About;
