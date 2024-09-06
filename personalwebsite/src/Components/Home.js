import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <header>
        <div className="container">
        <div class="logo">
          <h1><span class="first-letter">R</span>eynaldo Concellado</h1>
        </div>
          <nav>
            <ul className="nav-links">
              <li><a href="#home">Home</a></li>
              <li><Link to="/skills">Skills</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/contacts">Contact</Link></li>
            </ul>
          </nav>
          {/* <div className="hire-me">
            <a href="#contact" className="btn-hire-me">Hire Me</a>
          </div> */}
        </div>
      </header>

      <section id="home" className="home">
        <div className="container home-content">
          <div className="text-content">
            <h2>I Am <span>Software Developer</span></h2>
            {/* <p>I am a web developer, proficient in coding and maintaining websites to ensure functionality and responsiveness.</p> */}
            <p>
              I am a seasoned software developer with a solid foundation in both full-stack web development and desktop application development. 
              Over the course of my career, I have honed my skills across various industries, and I have had the privilege of working on complex projects 
              that have significantly contributed to the success of the organizations I’ve been a part of.
            </p>
            <div className="hire-me">
              <Link to="/contacts" className="btn-hire-me">Hire Me</Link>
              <Link to="/projects" className="btn-hire-me">See Projects</Link>
            </div>
            {/* <div className="cta-buttons">
              <a href="resume.pdf" className="btn-download-cv" download>Download CV</a>
              <a href="#portfolio" className="btn-play"><i className="play-icon">▶</i></a>
            </div> */}
            {/* <div className="social-links">
              <a href="#"><img src="github-icon.png" alt="GitHub" /></a>
              <a href="#"><img src="linkedin-icon.png" alt="Linkedin" /></a>
              <a href="#"><img src="twitter-icon.png" alt="Twitter" /></a>
              <a href="#"><img src="facebook-icon.png" alt="Facebook" /></a>
            </div> */}
          </div>
          <div className="image-content">
            <img src="profile.jpg" alt="Profile" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
