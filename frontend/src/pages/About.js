import React from 'react';
import Header from '../components/Navbar'; // Import the Header component
import '../styles/About.css'; // Import the CSS file for the About page
import Footer from '../components/Footer'; // Import Footer component

import image1 from '../assets/images/ABOUT/image1.webp';
import image2 from '../assets/images/ABOUT/image2.jpg';
import image3 from '../assets/images/ABOUT/image3.jpg';
import image4 from '../assets/images/ABOUT/image4.jpg';
import image5 from '../assets/images/ABOUT/image5.webp';
import image6 from '../assets/images/ABOUT/image6.jpg';
import image7 from '../assets/images/ABOUT/image7.jpg';
import akram from '../assets/images/ABOUT/akram.png';
import muskan from '../assets/images/ABOUT/muskan.jpg';
import sumaiya from '../assets/images/ABOUT/sumaiya.jpg';


const About = () => {
  return (
    <div className="container">
      <Header /> {/* Use the imported Header component */}


     <section className="hero-section">
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

      <section className="section mission-section">
        
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

      <section className="section">
        <h2 style={{ textAlign: 'center' }}>OUR CORE VALUES</h2>
         <p style={{ textAlign: 'center' }} >To guide our clients towards a brighter future, fueled by innovative and transformative technology solutions.</p>
        <div className="values-section">
          <div className="value">
            <h3>Make it Happen</h3>
            <img
              src={image3}
              alt="Value"
            />
          </div>
          <div className="value">
            <h3>Take Responsibility</h3>
            <img
             src={image4}
              alt="Value"
            />
          </div>
          <div className="value">
            <h3>Understand Deeper</h3>
            <img
              src={image5}
              alt="Value"
            />
          </div>
          <div className="value">
            <h3>Embrace Challenges</h3>
            <img
              src={image6}
              alt="Value"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <h2 style={{ textAlign: 'center' }}>OUR LEADERSHIP TEAM</h2>
        <div className="team-section">
          <div className="team-member">
            <h3>Mohammad Akram </h3>
            <img
              src={akram}
              alt="Team Member"
            />
            <p>CEO & Founder</p>
          </div>
          <div className="team-member">
            <h3>Syeda Muskan</h3>
            <img
              src={muskan}
              alt="Team Member"
            />
            <p>CTO & Co-Founder</p>
          </div>
          <div className="team-member">
            <h3>Sumaiya Begum</h3>
            <img
              src={sumaiya}
              alt="Team Member"
            />
            <p>Head of Marketing</p>
          </div>
        </div>
      </section>

   <section className="cta-section">
  <h2>Now that you know us, we want to know you!</h2>
  
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
