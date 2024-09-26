import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Header.css';
import logo from '../assets/logo2.png';

const Navbar = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [menuOpen, setMenuOpen] = useState(false);
    const [isHomePage, setIsHomePage] = useState(window.location.pathname === '/');
    const navigate = useNavigate();

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setIsHomePage(window.scrollY <= 100 && window.location.pathname === '/');
        };
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);
    const goToHomePage = () => navigate('/');

    return (
        <header className={`header ${isHomePage ? 'transparent' : 'white'}`}>
            <div className="header-container">
                <img src={logo} alt="Company Logo" className="logo" onClick={goToHomePage} />
                <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
                    <Link to="/about" className="nav-link">About Us</Link>
                    <Link to="/contact" className="nav-link">Contact Us</Link>
                    {/* Additional links here */}
                </nav>
                <div className="hamburger" onClick={toggleMenu}>
                    &#9776;
                </div>
            </div>

            {menuOpen && (
                <div className="mobile-menu">
                    <div className="mobile-menu-header">
                        <img src={logo} alt="Company Logo" className="mobile-logo" onClick={goToHomePage} />
                        <button className="close-menu" onClick={closeMenu}>X</button>
                    </div>
                    <div className="mobile-menu-content">
                        <div className="mobile-menu-section">
                            <div className="mobile-menu-links">
                                <h3>Services</h3>
                                <Link to="/ProductDevelopment" onClick={closeMenu}>Product Development</Link>
                                <Link to="/CustomDevelopmet" onClick={closeMenu}>Custom Software Development</Link>
                                <Link to="/software-reengineering" onClick={closeMenu}>Software Re-engineering & Support</Link>
                                <Link to="/it-consulting" onClick={closeMenu}>IT Consulting</Link>
                                <Link to="/team-augmentation" onClick={closeMenu}>Team Augmentation</Link>
                                <Link to="/saas-development" onClick={closeMenu}>SaaS Development</Link>
                                <Link to="/web-development" onClick={closeMenu}>Web Development</Link>
                                <Link to="/mobile-app-development" onClick={closeMenu}>Mobile App Development</Link>
                                <Link to="/ui-ux-design" onClick={closeMenu}>UI/UX Design</Link>
                                <Link to="/devops" onClick={closeMenu}>DevOps</Link>
                                <Link to="/test-automation" onClick={closeMenu}>Test Automation</Link>
                            </div>
                        </div>
                        <div className="mobile-menu-section">
                            <div className="mobile-menu-links">
                                <h3>Industries</h3>
                                <Link to="/health-care" onClick={closeMenu}>Health Care</Link>
                                <Link to="/education" onClick={closeMenu}>Education</Link>
                                <Link to="/bank" onClick={closeMenu}>Bank</Link>
                                <Link to="/ecommerce" onClick={closeMenu}>E-commerce</Link>
                            </div>
                        </div>
                        <div className="mobile-menu-section">
                            <div className="mobile-menu-links">
                                <h3>Works</h3>
                                <Link to="/web-app" onClick={closeMenu}>Web Application</Link>
                                <Link to="/mobile-app" onClick={closeMenu}>Mobile Application</Link>
                                <Link to="/websites" onClick={closeMenu}>Websites</Link>
                            </div>
                        </div>
                        <div className="mobile-menu-section">
                            <div className="mobile-menu-links">
                                <Link to="/offers" onClick={closeMenu}><h3>OFFERS & SUBSCRIPTION</h3></Link>
                                <Link to="/Contact" onClick={closeMenu}><h3>Contact Us</h3></Link>
                                <Link to="/About" onClick={closeMenu}><h3>About Us</h3></Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
