import React, { useState } from "react";
import "./App.css";
import myPhoto from "./myphoto.jpg";

function App() {
  const [activeSection, setActiveSection] = useState("Home");

  const renderSection = () => {
    switch (activeSection) {
      case "Home":
        return (
          <section className="hero hero--split">
            <div className="hero-text">
              <p className="small-title">Hello, It's Me</p>
              <h1>Gillyvic Omandam</h1>
              <h2>
                And I'm a <span className="accent">Frontend Developer</span>
              </h2>
              <p className="hero-desc">
                Passionate Computer Science student building modern, responsive
                web and mobile interfaces with clean code and smooth interactions.
              </p>
              <div className="social-row">
                <a href="https://facebook.com" className="social-circle">Fb</a>
                <a href="https://instagram.com" className="social-circle">Ig</a>
                <a href="https://tiktok.com" className="social-circle">Tk</a>
                <a href="https://telegram.org" className="social-circle">In</a>
              </div>
              <button
                className="btn-primary btn-primary--wide"
                onClick={() => setActiveSection("Contact")}
              >
                Contact Me
              </button>
            </div>

            <div className="hero-figure">
              <div className="hex-wrapper">
                <div className="hex-glow">
                  <img src={myPhoto} alt="Gillyvic" className="hex-photo" />
                </div>
              </div>
            </div>
          </section>
        );

      case "About":
        return (
          <section id="about" className="section about">
            <div className="section-inner">
              <h2>About Me</h2>
              <p>
                I'm Gillyvic, a Computer Science student who enjoys turning ideas
                into real digital products. I focus on clean code and simple,
                modern interfaces.
              </p>
              <p>
                My goal is to grow as a professional frontend / full‑stack
                developer and work on real‑world projects with great teams.
              </p>
            </div>
          </section>
        );

      case "Skills":
        return (
          <section id="skills" className="section skills">
            <div className="section-inner">
              <h2>Skills</h2>
              <div className="skills-grid">
                <div>
                  <h3>Frontend</h3>
                  <ul>
                    <li>HTML, CSS, JavaScript</li>
                    <li>React, Responsive Design</li>
                  </ul>
                </div>
                <div>
                  <h3>Backend &amp; Database</h3>
                  <ul>
                    <li>Laravel, REST APIs</li>
                    <li>MySQL / SQL</li>
                  </ul>
                </div>
                <div>
                  <h3>Mobile &amp; Tools</h3>
                  <ul>
                    <li>Android Studio (Java)</li>
                    <li>Git, GitHub, VS Code</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        );

      case "Projects":
        return (
          <section id="projects" className="section projects">
            <div className="section-inner">
              <h2>Projects</h2>
              <div className="projects-grid">
                <div className="project-card">
                  <h3>Personal Portfolio</h3>
                  <p>Single‑page React portfolio with a dark professional UI.</p>
                </div>
                <div className="project-card">
                  <h3>Task Manager App</h3>
                  <p>Task tracking web app using Laravel, React, and MySQL.</p>
                </div>
                <div className="project-card">
                  <h3>Student Information System</h3>
                  <p>Java / SQL app for managing student records.</p>
                </div>
              </div>
            </div>
          </section>
        );

      case "Contact":
        return (
          <section id="contact" className="section contact">
            <div className="section-inner">
              <h2>Contact</h2>
              <p>
                If you want to collaborate or have a project in mind, feel free to
                reach out.
              </p>
              <div className="contact-details">
                <p>
                  Email:{" "}
                  <a href="mailto:geomandam@nemsu.edu.ph">
                    geomandam@nemsu.edu.ph
                  </a>
                </p>
                <p>Facebook: Gillyvic Guibone Ebrado Omandam</p>
                <p>Instagram: @Nemux11</p>
                <p>TikTok: @jhingjhingguibone</p>
              </div>
            </div>
          </section>
        );

      default:
        return null;
    }
  };

  return (
    <div className="App">
      <header className="nav">
        <div className="logo">Portfolio.</div>
        <nav className="nav-links">
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <button
              key={item}
              className={
                "nav-btn" + (activeSection === item ? " nav-btn--active" : "")
              }
              onClick={() => setActiveSection(item)}
            >
              {item}
            </button>
          ))}
        </nav>
      </header>

      {renderSection()}
    </div>
  );
}

export default App;
