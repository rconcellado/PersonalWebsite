import React from 'react';
import './ProjectsPage.css';
import { Link } from 'react-router-dom'; // Import Link for navigation

const projects = [
    {
        title: 'Edsan Transient House and Resort Management System',
        description: `The Edsan Transient House and Resort Management System is a web application 
                      built with ASP.NET Core MVC to manage guest bookings, room reservations, and 
                      payments for a resort and transient house. It features secure API integration,
                      online payment gateways, and is deployed on Microsoft Azure for scalability and performance.
                      The system provides a seamless user experience, streamlining operations across multiple branches.`,
        imageUrl: '/EdsanHomePage.png', // Corrected URL
        link: 'https://edsanbooking-fja6hqgnfthxayge.canadacentral-01.azurewebsites.net/' // Link to the external site
    },
    {
        title: 'St. Louis Clinic Management System',
        description: `The St. Louis Clinic Management System is a web application designed to streamline 
                      clinic operations, including patient records management, appointments scheduling, 
                      and billing. Built with ASP.NET Core and React.js, it offers integration with secure APIs 
                      and is deployed on Microsoft Azure for high performance and reliability. The system helps clinics 
                      manage their operations effectively, improving patient experiences and operational efficiency.`,
        imageUrl: '/StLouisHomePage.png', // Replace with the correct image URL for the clinic project
        link: 'https://brave-mud-0f3647a0f.5.azurestaticapps.net/' // Replace with the correct link for the clinic project
    }
];

const ProjectsPage = () => {
    return (
        <div className="projects-page">
            <section className="projects-section">
                <h2>Projects</h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div className="project-card" key={index}>
                            {/* Wrap the image with an anchor tag */}
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                <img src={project.imageUrl} alt={project.title} />
                            </a>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                        </div>
                    ))}
                </div>
            </section>
            <footer>
                <Link to="/" className="back-to-home">Back to Home</Link> {/* Use Link to navigate back to Home */}
            </footer>
        </div>
    );
};

export default ProjectsPage;
