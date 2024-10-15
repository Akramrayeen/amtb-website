import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';  // Import AOS styles
import '../styles/Footer.css';  // Add custom CSS styles in this file
import logo from '../assets/logo2.png';  // Update with the path to your logo
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';  // Using React Icons for social media logos

const Footer = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const navigate = useNavigate();

    useEffect(() => {
        AOS.init({ duration: 500, once: true });  // Initialize AOS animations
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const scrollToTopAndNavigate = (path) => {
        window.scrollTo(0, 0);  // Scroll to the top
        navigate(path);  // Navigate to the specified path
    };

    return (
        <footer className="footer">
            <div className="footer-content" data-aos="fade-up">
                {/* Logo and Company Name */}
                <div className="footer-logo" data-aos="fade-right">
                    <img src={logo} alt="Company Logo" className="footer-logo-img" />
                    <h2>AMTB Solutions PVT.LTD</h2>
                </div>

                {/* Services Links */}
                <div className="footer-links" data-aos="fade-left">
                    <h3>Services</h3>
                    <Link to="/ProductDevelopment" onClick={() => scrollToTopAndNavigate('/ProductDevelopment')}>Product Development</Link>
                    <Link to="/CustomDevelopmet" onClick={() => scrollToTopAndNavigate('/CustomDevelopmet')}>Custom Software Development</Link>
                    <Link to="/SoftwareRengineer" onClick={() => scrollToTopAndNavigate('/SoftwareRengineer')}>Software Re-engineering </Link>
                    <Link to="/ITConsulting" onClick={() => scrollToTopAndNavigate('/ITConsulting')}>IT Consulting</Link>
                    <Link to="/TeamAgumentation" onClick={() => scrollToTopAndNavigate('/TeamAgumentation')}>Team Augmentation</Link>
                    <Link to="/SaasDevelopment" onClick={() => scrollToTopAndNavigate('/SaasDevelopment')}>SaaS Development</Link>
                    <Link to="/WebappDev" onClick={() => scrollToTopAndNavigate('/WebappDev')}>Web Development</Link>
                    <Link to="/MoileappDev" onClick={() => scrollToTopAndNavigate('/MoileappDev')}>Mobile App Development</Link>
                    <Link to="/UiDesign" onClick={() => scrollToTopAndNavigate('/UiDesign')}>UI/UX Design</Link>
                    <Link to="/DevOps" onClick={() => scrollToTopAndNavigate('/DevOps')}>DevOps</Link>
                    <Link to="/TestAutomation" onClick={() => scrollToTopAndNavigate('/TestAutomation')}>Test Automation</Link>
                </div>

                {/* Industries Links */}
                <div className="footer-links" data-aos="fade-right">
                    <h3>Industries</h3>
                    <Link to="/Healthcare" onClick={() => scrollToTopAndNavigate('/Healthcare')}>Health Care</Link>
                    <Link to="/Education" onClick={() => scrollToTopAndNavigate('/Education')}>Education</Link>
                    <Link to="/Bank" onClick={() => scrollToTopAndNavigate('/Bank')}>Bank</Link>
                    <Link to="/Ecommerce" onClick={() => scrollToTopAndNavigate('/Ecommerce')}>E-commerce</Link>
                    <Link to="/RealState" onClick={() => scrollToTopAndNavigate('/RealState')}>Real-State</Link>
                    <Link to="/Logistics" onClick={() => scrollToTopAndNavigate('/Logistics')}>Logistics</Link>
                </div>

                {/* Works Links */}
                <div className="footer-links" data-aos="fade-left">
                    <h3>Works</h3>
                    <Link to="/WebSites" onClick={() => scrollToTopAndNavigate('/WebSites')}>Web Application</Link>
                    <Link to="/MobileApplication" onClick={() => scrollToTopAndNavigate('/MobileApplication')}>Mobile Application</Link>
                    <Link to="/AiToolsBuilding" onClick={() => scrollToTopAndNavigate('/AiToolsBuilding')}>AI-Tools Building</Link>
                </div>

                {/* More Links */}
                <div className="footer-links" data-aos="fade-right">
                    <h3>More</h3>
                    <Link to="/Offer" onClick={() => scrollToTopAndNavigate('/Offer')}><h3>SUBSCRIPTION</h3></Link>
                    <Link to="/Contact" onClick={() => scrollToTopAndNavigate('/Contact')}><h3>Contact Us</h3></Link>
                    <Link to="/About" onClick={() => scrollToTopAndNavigate('/About')}><h3>About Us</h3></Link>
                </div>

                {/* Social Media Links */}
                <div className="footer-social" data-aos="zoom-in">
                    <h3>Follow Us</h3>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                </div>
            </div>

            {/* Copyright */}
            <div className="footer-bottom" data-aos="fade-up">
                <p>© {new Date().getFullYear()} AMTB Solutions PVT.LTD. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
