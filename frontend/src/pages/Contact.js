import React, { useEffect } from 'react';

import Footer from '../components/Footer'; // Import Footer component
import ContactForm from '../components/ContactForm';
import '../styles/Contact.css'; // Import CSS for this specific page
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles

import contact from '../assets/images/ABOUT/contact.jpg'; // Background image
import akram from '../assets/images/ABOUT/akram.png'; // Profile image

const Contact = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animations
    });
  }, []);

  return (
    <div className="contact-page">
      
      <div className="top-section" style={{ backgroundImage: `url(${contact})` }}>
        <div className="contact-section">
          {/* Left Half: Contact Form */}
          <div className="contact-form-container" data-aos="fade-up">
            <h1 className="title">GET IN TOUCH</h1>
            <p className="intro">
              Tell us about your project and challenges. We'll respond within 24 hours to arrange a free consultation, and an NDA is available if needed.
            </p>
            <ContactForm className="home-contact-form" />
          </div>

          {/* Right Half: Partner Info */}
          <div className="partner-info-container">
            <div className="partner-info fade-in" data-aos="fade-left">
              <div className="profile-picture">
                <div className="profile-bg"></div>
                <img src={akram} alt="Profile Picture" />
              </div>
              <h2 className="partner-name">Mohammad Akram Rayeen</h2>
              <p className="partner-title">Founder, AMTB Solutions</p>
              <p className="partner-location">India</p>
            </div>
            <div className="partner-content fade-in" data-aos="fade-right">
              <h2 className="partner-heading">YOUR PARTNER IN TECH EXCELLENCE</h2>
              <p className="partner-description">
                Partner with AMTB Solution and experience a new level of tech development. Our team's passion
                and proficiency set us apart, offering you more than just standard services. We bring visionary
                ideas and cutting-edge solutions to turn your challenges into success stories.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Offices Section */}
      <div className="offices-section" data-aos="fade-up">
        <h2 className="offices-heading">OFFICES</h2>
        <p className="offices-description">
          AMTB Solution operates with a global outlook while maintaining a strong local presence. Our team spans
          various regions to provide you with exceptional service wherever you are.
        </p>
        <div className="offices-grid">
          <section className="office-card">
            <h3 className="office-title">INDIA</h3>
            <p className="office-location">Bangalore</p>
            <p className="office-phone">+918431960546</p>
            <p className="office-email">support@amtbsolution.com</p>
            <p className="office-address">
              Unit 101, Oxford Tower, 108 HAL Old Airport Road, HAL 1 Stage, Bangalore 560008, Karnataka
            </p>
          </section>
          <section className="office-card">
            <h3 className="office-title">NEPAL</h3>
            <p className="office-location">Dhanusha</p>
            <p className="office-phone">+9779800825100</p>
            <p className="office-email">info@amtbsolution.com</p>
            <p className="office-address">Thaila-4, Charusha, lasakpur, Nepal</p>
          </section>
          <section className="office-card">
            <h3 className="office-title">QATAR</h3>
            <p className="office-location">Doha</p>
            <p className="office-phone">+97474463625</p>
            <p className="office-email">info@amtbsolution.com</p>
            <p className="office-address">Indistrial Area,Doha Qatar</p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
