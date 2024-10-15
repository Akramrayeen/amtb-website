import React, { useEffect } from 'react';

import '../styles/About.css'; // Import the CSS file for the About page
import Footer from '../components/Footer'; // Import Footer component
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles

import image1 from '../assets/images/ABOUT/image1.webp';
import image2 from '../assets/images/ABOUT/image2.jpg';
import image3 from '../assets/images/ABOUT/image3.jpg';
import image4 from '../assets/images/ABOUT/image4.jpg';
import image5 from '../assets/images/ABOUT/image5.webp';
import image6 from '../assets/images/ABOUT/image6.jpg';
import image7 from '../assets/images/ABOUT/image7.jpg';
import akram from '../assets/images/ABOUT/profile1.jpg';
import muskan from '../assets/images/ABOUT/profile2.jpg';
import sumaiya from '../assets/images/ABOUT/profile2.jpg';

const About = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  return (
    <div className="container">


      <section className="hero-section" data-aos="fade-up">
        <div className="hero-text">
          <h1 style={{ textAlign: 'center' }}>WE ELEVATE BUSINESSES WITH TAILORED TECHNOLOGY SOLUTIONS</h1>
          <p style={{ textAlign: 'center', fontWeight: 'bold', color: '#fe740e' }}>
            Unlock the power of our tailored solutions.
          </p>
        </div>
        <div className="semicircle-container">
          <div className="semicircle">
            <img
              src={image2} // Replace with your image path
              alt="Above Semicircle"
              className="semicircle-image"
            />
          </div>
        </div>
      </section>

      <section className="mission-section" data-aos="fade-up">
        <div className="mission-text">
          <h2>OUR MISSION</h2>
          <p>To guide our clients towards a brighter future, fueled by innovative and transformative technology solutions.</p>
        </div>
        <div className="mission-image">
          <img
            src={image1}
            alt="Mission"
          />
        </div>
      </section>

      <section className="section" data-aos="fade-up">
        <h2 style={{ textAlign: 'center' }}>OUR CORE VALUES</h2>
        <p style={{ textAlign: 'center' }}>To guide our clients towards a brighter future, fueled by innovative and transformative technology solutions.</p>
        <div className="values-section">
          <div className="value" data-aos="fade-up">
            <h3>Make it Happen</h3>
            <img
              src={image3}
              alt="Value"
            />
          </div>
          <div className="value" data-aos="fade-up">
            <h3>Take Responsibility</h3>
            <img
              src={image4}
              alt="Value"
            />
          </div>
          <div className="value" data-aos="fade-up">
            <h3>Understand Deeper</h3>
            <img
              src={image5}
              alt="Value"
            />
          </div>
          <div className="value" data-aos="fade-up">
            <h3>Embrace Challenges</h3>
            <img
              src={image6}
              alt="Value"
            />
          </div>
        </div>
      </section>

      <section className="section" data-aos="fade-up">
        <h2 style={{ textAlign: 'center' }}>OUR LEADERSHIP TEAM</h2>
        <div className="team-section">
          <div className="team-member" data-aos="fade-up">
            <h3>Mohammad Akram</h3>
            <img
              src={akram}
              alt="Team Member"
            />
            <p>CEO & Founder</p>
          </div>
          <div className="team-member" data-aos="fade-up">
            <h3>Syeda Muskan</h3>
            <img
              src={muskan}
              alt="Team Member"
            />
            <p>CTO & Co-Founder</p>
          </div>
          <div className="team-member" data-aos="fade-up">
            <h3>Sumaiya Begum</h3>
            <img
              src={sumaiya}
              alt="Team Member"
            />
            <p>Head of Marketing</p>
          </div>
        </div>
      </section>

      <section className="cta-section" data-aos="fade-up">
        <h2>Now that you know a bit about us, we'd love to get to know you better!</h2>
        <div className="circle-container">
          <div className="circle-background"></div>
          <img
            src={image7}
            alt="Call to Action"
            className="cta-image"
          />
          <button className="cta-button">Connect with us</button>
        </div>
      </section>

      <Footer /> {/* Footer component */}
    </div>
  );
};

export default About;
