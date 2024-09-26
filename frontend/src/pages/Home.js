import React from 'react';
import { Link } from 'react-router-dom';
// import Header from '../components/Header'; // Import the Header component
import '../styles/Home.css'; // Import CSS file for HomePage component
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
    return (
        <div className="home-page">
            {/* Include the Header component at the top */}
            
            <div className="top-section">
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
                <div className="image-wrapper">
                    <img src={image1} alt="Image 1" className="image" />
                    <div className="image-overlay">
                        <div className="image-buttons">
                            <Link to="/page1" className="button">Custom Web App Development</Link>
                            <Link to="/page2" className="button">E-commerce Platform Development</Link>
                            <Link to="/page1" className="button">Enterprise Web Solutions</Link>
                            <Link to="/page2" className="button">Single Page Applications (SPA)</Link>
                        </div>
                    </div>
                </div>
                <div className="image-wrapper">
                    <img src={image2} alt="Image 2" className="image" />
                    <div className="image-overlay">
                        <div className="image-buttons">
                            <Link to="/page1" className="button">Custom AI Solutions</Link>
                            <Link to="/page2" className="button">NLP Applications</Link>
                            <Link to="/page1" className="button">AI-Powered Automation Tools</Link>
                            <Link to="/page2" className="button">Recommendation Systems</Link>
                        </div>
                    </div>
                </div>
                <div className="image-wrapper">
                    <img src={image3} alt="Image 3" className="image" />
                    <div className="image-overlay">
                        <div className="image-buttons">
                            <Link to="/page1" className="button">Custom Mobile App Development</Link>
                            <Link to="/page2" className="button">Cross-Platform Mobile Apps</Link>
                            <Link to="/page1" className="button">Native App Development</Link>
                            <Link to="/page2" className="button">Enterprise Mobile Solutions</Link>
                        </div>
                    </div>
                </div>
                <div className="image-wrapper">
                    <img src={image4} alt="Image 4" className="image" />
                    <div className="image-overlay">
                        <div className="image-buttons">
                            <Link to="/page1" className="button">Custom UI/UX Design</Link>
                            <Link to="/page2" className="button">Responsive Web Design</Link>
                            <Link to="/page1" className="button">User Research and Testing</Link>
                            <Link to="/page2" className="button">Interaction Design</Link>
                        </div>
                    </div>
                </div>
                <div className="image-wrapper">
                    <img src={bottomImage1} alt="Bottom Image 1" className="image" />
                    <div className="image-overlay">
                        <h1>Increase Your Productivity</h1>
                        <div className="image-buttons">
                            <Link to="/page1" className="button">Software Audit and Refactoring</Link>
                            <Link to="/page2" className="button">Re-engineering and Cloud Migration</Link>
                            <Link to="/page1" className="button">Test Automation</Link>
                            <Link to="/page2" className="button">DevOps Services</Link>
                        </div>
                    </div>
                </div>
                <div className="image-wrapper">
                    <img src={bottomImage2} alt="Bottom Image 2" className="image" />
                    <div className="image-overlay">
                        <h1>Scale your Team With US</h1>
                        <div className="image-buttons">
                            <Link to="/page1" className="button">Web Developers</Link>
                            <Link to="/page2" className="button">Mobile App Developers</Link>
                            <Link to="/page1" className="button">DevOps Engineers</Link>
                            <Link to="/page2" className="button">QA and Test Automation Experts</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="contact-container">
                <h2>Let's Bring Your Idea to Life</h2>
                <ContactForm className="home-contact-form" />
            </div>

            {/* Insert the FAQ component */}
            <FAQ />

            <Footer />  {/* Footer component added here */}
            
        </div>
    );
};

export default Home;
