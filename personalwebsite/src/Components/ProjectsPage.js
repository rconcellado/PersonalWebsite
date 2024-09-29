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
        link: 'https://edsanbooking20240927111936.azurewebsites.net/' // Link to the external site
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
    },
    {
        title: 'AdventureWorks Product Sales by Category',
        description: `This is a downloadable PDF report built using Power BI, which provides an in-depth analysis of sales data 
                      categorized by product type for the AdventureWorks company. The report includes visualizations created in 
                      Power BI, an entity relationship diagram (ERD), and SQL validation queries.`,
        imageUrl: '/AdventureWorksPDF.png', // Replace with a suitable image for PDF
        link: '/Product Sales by Category.pdf' // Add the correct path to your PDF file
    },
    {
        title: 'AdventureWorks Inventory Management Report',
        description: `This Inventory Management Report was created using Power BI to track inventory levels across product categories 
                      and forecast potential stock shortages. The report visualizes inventory depletion trends and helps with inventory 
                      planning by providing a clear breakdown of stock levels per product subcategory.`,
        imageUrl: '/InventoryManagementReport.png', // Replace with a suitable image for the report
        link: '/Inventory Management Report.pdf' // Add the correct path to your PDF file
    }
];

const ProjectsPage = () => {
    return (
        <div className="projects-page">
            <section className="projects-section">
                <h1>List of Freelance Projects</h1> {/* New Title Added Here */}
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
        </div>
    );
};

export default ProjectsPage;
