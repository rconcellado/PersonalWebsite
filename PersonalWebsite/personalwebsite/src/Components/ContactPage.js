import React from 'react';
import './ContactPage.css';
import { Link } from 'react-router-dom'; // Import Link for navigation

const ContactPage = () => {
    return (
        <div className="contact-page">
            <section className="contact-section">
                <h2>Contact Me</h2>
                <p>
                    I’d love to hear from you! Feel free to reach out via email, LinkedIn, or through GitHub for any collaborations, questions, or opportunities.
                </p>

                <div className="contact-details">
                    {/* Email */}
                    <div className="contact-item">
                        <h3>Email:</h3>
                        <a href="mailto:rey.concellado@gmail.com">rey.concellado@gmail.com</a>
                    </div>

                    {/* LinkedIn */}
                    <div className="contact-item">
                        <h3>LinkedIn:</h3>
                        <a href="https://www.linkedin.com/in/rconcellado/" target="_blank" rel="noopener noreferrer">
                            Connect on LinkedIn
                        </a>
                    </div>

                    {/* GitHub */}
                    <div className="contact-item">
                        <h3>GitHub:</h3>
                        <a href="https://github.com/rconcellado" target="_blank" rel="noopener noreferrer">
                            View my GitHub profile
                        </a>
                    </div>

                    {/* Download Resume */}
                    <div className="contact-item">
                        <h3>Resume:</h3>
                        <a href="/Resume - Concellado, Reynaldo A.pdf" target="_blank" rel="noopener noreferrer">
                            Download my Resume
                        </a>
                    </div>
                </div>

                {/* Optional Contact Form */}
                <div className="contact-form">
                    <h3>Or leave a message:</h3>
                    <form>
                        <input type="text" name="name" placeholder="Your Name" required />
                        <input type="email" name="email" placeholder="Your Email" required />
                        <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </section>

            <footer>
                <Link to="/" className="back-to-home">Back to Home</Link> {/* Use Link to navigate back to Home */}
            </footer>
        </div>
    );
};

export default ContactPage;
