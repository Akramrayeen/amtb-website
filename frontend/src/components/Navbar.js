import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Header.css';
import logo from '../assets/logo2.png';

const Navbar = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [menuOpen, setMenuOpen] = useState(false);
    const [isHomePage, setIsHomePage] = useState(window.location.pathname === '/');
    const [showMore, setShowMore] = useState({
        services: false,
        industries: false,
        works: false,
    });
    const [plusClicked, setPlusClicked] = useState({ services: false, industries: false, works: false });
    const navigate = useNavigate();

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        const handleScroll = () => setIsHomePage(window.scrollY <= 100 && window.location.pathname === '/');

        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => setMenuOpen(prev => !prev);
    const closeMenu = () => setMenuOpen(false);
    const goToHomePage = () => {
        navigate('/');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const toggleShowMore = (section) => {
        setShowMore(prev => ({ ...prev, [section]: !prev[section] }));
        setPlusClicked(prev => ({ ...prev, [section]: !prev[section] })); // Toggle clicked state for plus symbol
    };

    return (
        <header className={`header ${isHomePage ? 'transparent' : 'white'}`}>
            <div className="header-container">
                <img 
                    src={logo} 
                    alt="Company Logo" 
                    className="logo" 
                    onClick={goToHomePage} 
                />
                <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
                    <Link to="/about" className="nav-link" onClick={closeMenu}>About Us</Link>
                    <Link to="/contact" className="nav-link" onClick={closeMenu}>Contact Us</Link>
                </nav>
                <div className="hamburger" onClick={toggleMenu}>
                    &#9776;
                </div>
            </div>

            {menuOpen && (
                <div className="mobile-menu">
                    <div className="mobile-menu-header">
                        <img 
                            src={logo} 
                            alt="Company Logo" 
                            className="mobile-logo" 
                            onClick={goToHomePage} 
                        />
                        <button className="close-menu" onClick={closeMenu}>X</button>
                    </div>
                    <div className="mobile-menu-content">
                        <div className="mobile-menu-section">
                            <div className="mobile-menu-links">
                                <div className="menu-item">
                                    <h3>Services <span className={`plus-symbol ${plusClicked.services ? 'clicked' : ''}`} onClick={() => toggleShowMore('services')}>+</span></h3>
                                  </div>
                                 <div className={`mobile-menu-links ${showMore.services ? 'visible' : 'hidden'}`}>
                                    <Link to="/ProductDevelopment" onClick={closeMenu}>Product Development</Link>
                                    <Link to="/CustomDevelopment" onClick={closeMenu}>Custom Software Development</Link>
                                    <Link to="/SoftwareRengineer" onClick={closeMenu}>Software Re-engineering & Support</Link>
                                    <Link to="/ITConsulting" onClick={closeMenu}>IT Consulting</Link>
                                    <Link to="/TeamAgumentation" onClick={closeMenu}>Team Augmentation</Link>
                                    <Link to="/SaaSDevelopment" onClick={closeMenu}>SaaS Development</Link>
                                    <Link to="/WebappDev" onClick={closeMenu}>Web Development</Link>
                                    <Link to="/MoileappDev" onClick={closeMenu}>Mobile App Development</Link>
                                    <Link to="/UiDesign" onClick={closeMenu}>UI/UX Design</Link>
                                    <Link to="/DevOps" onClick={closeMenu}>DevOps</Link>
                                    <Link to="/TestAutomation" onClick={closeMenu}>Test Automation</Link>
                                </div>
                            </div>
                        </div>
                        <div className="mobile-menu-section">
                            <div className="mobile-menu-links">
                                <div className="menu-item">
                                    <h3>Industries<span className={`plus-symbol ${plusClicked.industries ? 'clicked' : ''}`} onClick={() => toggleShowMore('industries')}>+</span></h3>
                                    
                                </div>
                                 <div className={`mobile-menu-links ${showMore.industries ? 'visible' : 'hidden'}`}>
                                    <Link to="/Healthcare" onClick={closeMenu}>Health Care</Link>
                                    <Link to="/Education" onClick={closeMenu}>Education</Link>
                                    <Link to="/Bank" onClick={closeMenu}>Bank</Link>
                                    <Link to="/Ecommerce" onClick={closeMenu}>E-commerce</Link>
                                    <Link to="/RealState" onClick={closeMenu}>Real-State</Link>
                                    <Link to="/Logistics" onClick={closeMenu}>Logistics</Link>
                                </div>
                            </div>
                        </div>
                        <div className="mobile-menu-section">
                            <div className="mobile-menu-links">
                                <div className="menu-item">
                                    <h3>Works <span className={`plus-symbol ${plusClicked.works ? 'clicked' : ''}`} onClick={() => toggleShowMore('works')}>+</span></h3>
                                </div>
                                 <div className={`mobile-menu-links ${showMore.works ? 'visible' : 'hidden'}`}>
                                <Link to="/WebSites" onClick={closeMenu}>Web Application</Link>
                                <Link to="/MobileApplication" onClick={closeMenu}>Mobile Application</Link>
                                <Link to="/AiToolsBuilding" onClick={closeMenu}>AI-Tools Building</Link>
                                </div>
                            </div>
                        </div>
                        <div className="mobile-menu-section">
                            <div className="mobile-menu-links">
                                <Link to="/Offer" onClick={closeMenu}><h3>OFFERS & SUBSCRIPTION</h3></Link>
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
