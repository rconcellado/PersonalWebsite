import React, { useState } from 'react';
import './Home.css';
import Skills from './Skills'; // Import the Skills component
import ProjectsPage from './ProjectsPage'; // Import the ProjectsPage component
import ContactPage from './ContactPage'; // Import the ContactPage component
import AboutPage from './AboutPage'; // Import the AboutPage component

const Home = () => {
  const [activeSection, setActiveSection] = useState('about'); // Default to 'about'

  const handleNavClick = (section) => {
    setActiveSection(section); // Set the active section (Skills, Projects, Contact, About)
  };

  return (
    <div className="linkedin-style-container">
      {/* Profile Section */}
      <section className="profile-section">
        <div className="image-content">
          <img src="profile.jpg" alt="Profile" className="profile-img" />
        </div>
        <div className="profile-info">
          <h1>Reynaldo Concellado</h1>
          <h2>Full Stack Software Developer | System Optimization, Database Integration</h2>
          <p>rey.concellado@gmail.com - <a href="#contact">Contact Info</a></p>
        </div>
      </section>

      {/* Navigation Bar */}
      <header className="nav-header">
        <div className="container">
          <nav>
            <ul className="nav-links">
              {/* <li><a href="#home" onClick={() => handleNavClick(null)}>Home</a></li> */}
              <li><a href="#about" onClick={() => handleNavClick('about')}>About</a></li> {/* About link */}
              <li><a href="#skills" onClick={() => handleNavClick('skills')}>Skills</a></li>
              <li><a href="#projects" onClick={() => handleNavClick('projects')}>Projects</a></li>
              <li><a href="#contact" onClick={() => handleNavClick('contact')}>Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
      
      {/* Conditional Rendering of Sections */}
      {activeSection === 'about' && <AboutPage />} {/* AboutPage will show by default */}
      {activeSection === 'skills' && <Skills />} 
      {activeSection === 'projects' && <ProjectsPage />} 
      {activeSection === 'contact' && <ContactPage />} 
    </div>
  );
};

export default Home;
