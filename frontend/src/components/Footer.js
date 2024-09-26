import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';  // Add custom CSS styles in this file
import logo from '../assets/logo2.png';  // Update with the path to your logo
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';  // Using React Icons for social media logos

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                {/* Logo and Company Name */}
                <div className="footer-logo">
                    <img src={logo} alt="Company Logo" className="footer-logo-img" />
                    <h2>AMTB Solutions PVT.LTD</h2>
                </div>

                {/* Mobile Menu Links */}
                <div className="footer-links">
                    <h3>Services</h3>
                    <Link to="/product-development">Product Development</Link>
                    <Link to="/custom-software-development">Custom Software Development</Link>
                    <Link to="/software-reengineering">Software Re-engineering & Support</Link>
                    <Link to="/it-consulting">IT Consulting</Link>
                    <Link to="/team-augmentation">Team Augmentation</Link>
                    <Link to="/saas-development">SaaS Development</Link>
                    <Link to="/web-development">Web Development</Link>
                    <Link to="/mobile-app-development">Mobile App Development</Link>
                    <Link to="/ui-ux-design">UI/UX Design</Link>
                    <Link to="/devops">DevOps</Link>
                    <Link to="/test-automation">Test Automation</Link>
                </div>

                <div className="footer-links">
                    <h3>Industries</h3>
                    <Link to="/health-care">Health Care</Link>
                    <Link to="/education">Education</Link>
                    <Link to="/bank">Bank</Link>
                    <Link to="/ecommerce">E-commerce</Link>
                </div>

                <div className="footer-links">
                    <h3>Works</h3>
                    <Link to="/web-app">Web Application</Link>
                    <Link to="/mobile-app">Mobile Application</Link>
                    <Link to="/websites">Websites</Link>
                </div>

                <div className="footer-links">
                    <h3>More</h3>
                    <Link to="/offers">Offers & Subscription</Link>
                    <Link to="/contact-us">Contact Us</Link>
                    <Link to="/about-us">About Us</Link>
                </div>

                {/* Social Media Links */}
                <div className="footer-social">
                    <h3>Follow Us</h3>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                </div>
            </div>

            {/* Copyright */}
            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} AMTB Solutions PVT.LTD. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
