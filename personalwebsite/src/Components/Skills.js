import React from 'react';
import './TechnicalSkillsPage.css';
import { Link } from 'react-router-dom'; // Import Link for navigation

const Skills = () => {
    return (
        <div className="technical-skills-page">
            <section className="skills-section">
                <h2>Technical Skills</h2>
                
                {/* Web Development Skills */}
                <div className="skills-category">
                    <h3>Web Development</h3>
                    <ul>
                        <li>ASP.NET Core MVC: Extensive experience in building responsive, user-centric web applications with Razor views, ViewModels, and dependency injection.</li>
                        <li>Front-End Development: Proficient in React JS, HTML5, CSS3, and Bootstrap for creating modern, responsive interfaces.</li>
                        <li>Back-End Development: Skilled in implementing RESTful APIs, integrating with third-party services, and managing server-side logic using ASP.NET Core and C#.</li>
                        <li>Microservices: Experience in developing and deploying scalable microservices architectures, ensuring independent deployment and modularity.</li>
                        <li>Database Management: Strong expertise in Microsoft SQL Server, PostgreSQL, and Oracle, with a focus on optimizing queries and ensuring data integrity.</li>
                        <li>Version Control: Experienced with Git and GitHub for source control, collaborative coding, and version tracking.</li>
                    </ul>
                </div>

                {/* Desktop Application Development Skills */}
                <div className="skills-category">
                    <h3>Desktop Application Development</h3>
                    <ul>
                        <li>C# .NET: Proficient in developing desktop applications using C# and .NET framework, with extensive experience in PowerBuilder Appeon 2022 R2.</li>
                        <li>VB.NET: Skilled in developing Windows applications using VB.NET, focusing on user interfaces, business logic, and database interaction.</li>
                    </ul>
                </div>

                {/* Additional Skills */}
                <div className="skills-category">
                    <h3>Additional Skills</h3>
                    <ul>
                        <li>API Integration: Skilled in integrating various APIs into applications, enhancing functionality and user experience.</li>
                        <li>Testing & Quality Assurance: Conduct thorough testing and quality assurance to ensure software reliability and security.</li>
                        <li>UX/UI Design: Adept at applying UX/UI principles to design intuitive interfaces and improve user experience using tools like Lucidchart and Whimsical.</li>
                    </ul>
                </div>

                {/* Soft Skills */}
                <div className="skills-category">
                    <h3>Soft Skills</h3>
                    <ul>
                        <li>Team Collaboration: Demonstrated team player with strong problem-solving abilities and a commitment to shared success.</li>
                        <li>Growth Mindset: Lifelong learner, consistently updating skills and knowledge to stay current with industry trends.</li>
                        <li>Emotional Intelligence: High emotional intelligence, fostering positive team dynamics and effective communication.</li>
                    </ul>
                </div>

            </section>

            {/* Optional Footer */}
            {/* <footer>
                <Link to="/" className="back-to-home">Back to Home</Link> Use Link to navigate back to Home
            </footer> */}
        </div>
    );
};

export default Skills;
