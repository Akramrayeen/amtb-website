import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS
import '../styles/Home.css';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

import topImage from '../assets/top-image.jpg';
import gifImage from '../assets/images/HOME/gif3.gif';
import image1 from '../assets/images/HOME/image2.jpg';
import image2 from '../assets/images/HOME/image3.jpg';
import image3 from '../assets/images/HOME/image4.png';
import image4 from '../assets/images/HOME/image5.webp';
import bottomImage1 from '../assets/images/HOME/image6.jpeg';
import bottomImage2 from '../assets/images/HOME/image7.jpg';

const Home = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [menuOpen, setMenuOpen] = useState(false);
    const [isHomePage, setIsHomePage] = useState(window.location.pathname === '/');
    const navigate = useNavigate();

    useEffect(() => {
        // Initialize AOS
        AOS.init({ duration: 500 }); // Set animation duration

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

    // Function to scroll to the top of the page
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="home-page">
            <div className="top-section" data-aos="fade-up">
                <img src={topImage} alt="Top" className="top-image" />
                <div className="header-text">
                    <h1>Premium Value, Minimal Expense</h1>
                    <p>Bring your vision to life with AI, web, and mobile development. High-quality results, delivered faster, and at a fraction of the cost. Build smarter and more affordably with us.</p>
                </div>
                <div className="semi-circle-container">
                    <div className="semi-circle semi-circle-1"></div>
                    <div className="semi-circle semi-circle-2"></div>
                    <img src={gifImage} alt="Animated GIF" className="centered-gif" />
                </div>
            </div>

            <div className="image-grid">
                <div className="image-wrapper" data-aos="fade-up">
                    <img src={image1} alt="Image 1" className="image" />
                    <div className="image-overlay">
                        <div className="image-buttons">
                            <Link to="/CustomDevelopmet" onClick={() => { closeMenu(); scrollToTop(); }} className="button">Custom Web App Development</Link>
                            <Link to="/Ecommerce" onClick={() => { closeMenu(); scrollToTop(); }} className="button">E-commerce Platform Development</Link>
                            <Link to="/WebappDev" onClick={() => { closeMenu(); scrollToTop(); }} className="button">Enterprise Web Solutions</Link>
                            <Link to="/WebappDev" onClick={() => { closeMenu(); scrollToTop(); }} className="button">Single Page Applications (SPA)</Link>
                        </div>
                    </div>
                </div>
                <div className="image-wrapper" data-aos="fade-up" data-aos-delay="100">
                    <img src={image2} alt="Image 2" className="image" />
                    <div className="image-overlay">
                        <div className="image-buttons">
                            <Link to="/AiToolsBuilding" onClick={() => { closeMenu(); scrollToTop(); }} className="button">Custom AI Solutions</Link>
                            <Link to="/AiToolsBuilding" onClick={() => { closeMenu(); scrollToTop(); }} className="button">NLP Applications</Link>
                            <Link to="/TestAutomation" onClick={() => { closeMenu(); scrollToTop(); }} className="button">AI-Powered Automation Tools</Link>
                            <Link to="/AiToolsBuilding" onClick={() => { closeMenu(); scrollToTop(); }} className="button">Recommendation Systems</Link>
                        </div>
                    </div>
                </div>
                <div className="image-wrapper" data-aos="fade-up" data-aos-delay="100">
                    <img src={image3} alt="Image 3" className="image" />
                    <div className="image-overlay">
                        <div className="image-buttons">
                            <Link to="/MoileappDev" onClick={() => { closeMenu(); scrollToTop(); }} className="button">Custom Mobile App Development</Link>
                            <Link to="/MoileappDev" onClick={() => { closeMenu(); scrollToTop(); }} className="button">Cross-Platform Mobile Apps</Link>
                            <Link to="/MoileappDev" onClick={() => { closeMenu(); scrollToTop(); }} className="button">Native App Development</Link>
                            <Link to="/MoileappDev" onClick={() => { closeMenu(); scrollToTop(); }} className="button">Enterprise Mobile Solutions</Link>
                        </div>
                    </div>
                </div>
                <div className="image-wrapper" data-aos="fade-up" data-aos-delay="100">
                    <img src={image4} alt="Image 4" className="image" />
                    <div className="image-overlay">
                        <div className="image-buttons">
                            <Link to="/UiDesign" onClick={() => { closeMenu(); scrollToTop(); }} className="button">Custom UI/UX Design</Link>
                            <Link to="/UiDesign" onClick={() => { closeMenu(); scrollToTop(); }} className="button">Responsive Web Design</Link>
                            <Link to="/UiDesign" onClick={() => { closeMenu(); scrollToTop(); }} className="button">User Research and Testing</Link>
                            <Link to="/UiDesign" onClick={() => { closeMenu(); scrollToTop(); }} className="button">Interaction Design</Link>
                        </div>
                    </div>
                </div>
                <div className="image-wrapper" data-aos="fade-up" data-aos-delay="100">
                    <img src={bottomImage1} alt="Bottom Image 1" className="image" />
                    <div className="image-overlay">
                        <h1>Increase Your Productivity</h1>
                        <div className="image-buttons">
                            <Link to="/SoftwareRengineer" onClick={() => { closeMenu(); scrollToTop(); }} className="button">Software Audit and Refactoring</Link>
                            <Link to="/SoftwareRengineer" onClick={() => { closeMenu(); scrollToTop(); }} className="button">Re-engineering and Cloud Migration</Link>
                            <Link to="/SoftwareRengineer" onClick={() => { closeMenu(); scrollToTop(); }} className="button">Test Automation</Link>
                            <Link to="/SoftwareRengineer" onClick={() => { closeMenu(); scrollToTop(); }} className="button">DevOps Services</Link>
                        </div>
                    </div>
                </div>
                <div className="image-wrapper" data-aos="fade-up" data-aos-delay="100">
                    <img src={bottomImage2} alt="Bottom Image 2" className="image" />
                    <div className="image-overlay">
                        <h1>Scale your Team With US</h1>
                        <div className="image-buttons">
                            <Link to="/TestAutomation" onClick={() => { closeMenu(); scrollToTop(); }} className="button">Web Developers</Link>
                            <Link to="/TestAutomation" onClick={() => { closeMenu(); scrollToTop(); }} className="button">Mobile App Developers</Link>
                            <Link to="/TestAutomation" onClick={() => { closeMenu(); scrollToTop(); }} className="button">DevOps Engineers</Link>
                            <Link to="/TestAutomation" onClick={() => { closeMenu(); scrollToTop(); }} className="button">QA Engineers</Link>
                        </div>
                    </div>
                </div>
            </div>
            <FAQ />
            <ContactForm />
            <Footer />
        </div>
    );
};

export default Home;
