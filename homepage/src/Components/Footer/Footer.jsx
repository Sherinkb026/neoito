import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                
                <div className="footer-section">
                    <h3>Explore more links</h3>
                    <ul>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#careers">Careers <span className="hiring-text">→ WE ARE HIRING</span></a></li>
                        <li><a href="#contact">Contact Us</a></li>
                    </ul>
                </div>

               
                <div className="footer-section">
                    <h3>Resources</h3>
                    <ul>
                        <li><a href="#case-studies">Case Studies</a></li>
                        <li><a href="#blog">Blog</a></li>
                    </ul>
                </div>

                
                <div className="footer-section">
                    <h3>Services</h3>
                    <ul>
                        <li><a href="#startup-product">Startup Product Development</a></li>
                        <li><a href="#web-development">Web Development</a></li>
                        <li><a href="#mobile-app">Mobile App Development</a></li>
                        <li><a href="#iot-app">IoT App Development</a></li>
                        <li><a href="#ai-development">AI Development</a></li>
                        <li><a href="#more-services">More Services</a></li>
                    </ul>
                </div>

                
                <div className="footer-section">
                    <h3>Follow us on</h3>
                    <div className="social-links">
                        <a href="#facebook">Facebook</a>
                        <a href="#linkedin">LinkedIn</a>
                        <a href="#twitter">Twitter</a>
                        <a href="#instagram">Instagram</a>
                    </div>
                    <div className="reviews">
                        <p>Reviewed on Clutch</p>
                        <div className="stars">★★★★★</div>
                        <p>12 Reviews</p>
                    </div>
                    <button className="cta-button">Book a strategy call</button>
                </div>
            </div>
            <div className="footer-bottom">
                <p>NEOITO TECHNOLOGIES PRIVATE LIMITED</p>
                <p>Copyright © 2024 | <a href="#privacy-policy">Privacy Policy</a> | <a href="#cookie-policy">Cookie Policy</a> | <a href="#terms-of-use">Terms of Use</a></p>
            </div>
        </footer>
    );
}

export default Footer;
