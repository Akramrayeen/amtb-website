import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { Link } from 'react-router-dom';
import { useRef } from 'react';

import '../../styles/TestAutomation.css'; // Import the CSS file for the Custom Development page
import Footer from '../../components/Footer'; // Import Footer component
import FAQ from '../../components/FAQ';
import ContactForm from '../../components/ContactForm';
import image1 from '../../assets/images/Services/testautomation/image1.jpeg';
import { FaArrowRight } from 'react-icons/fa'; // Import an arrow icon
import {  FaJenkins, FaRobot, FaAppStore, } from 'react-icons/fa'; // Importing Font Awesome icons
import { SiCypress, SiTestcafe, SiPostman, SiQase, SiMocha } from 'react-icons/si'; // Importing Simple Icons


const TestAutomation = () => {

  const contactRef = useRef(null);

  // Function to scroll to the contact section
  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
   

      useEffect(() => {
  AOS.init({ duration: 5000 });
}, []);

  return (
    <div className="container">
    

    {/* Hero Section for Test Automation */}
    <section className="hero-section">
      <div className="test-hero-content" data-aos="fade-up">
        <h1>TEST AUTOMATION SOLUTIONS</h1>
        <p>
          Enhance your software quality and accelerate time-to-market with our comprehensive test automation services, ensuring reliability and performance.
        </p>
        <div className="test-circle-container">
          <div className="test-wing-circle test-left-circle gradient-border" data-aos="fade-up"></div>
          <div className="test-center-image-circle">
            <img
              src={image1}
              alt="Test Automation"
              className="test-center-image"
            />
          </div>
          <div className="test-wing-circle test-right-circle gradient-border" data-aos="fade-up"></div>
        </div>
        <div className="test-small-circle-wrapper" onClick={scrollToContact}>
          <div className="test-small-circle gradient-border">
            <span className="test-arrow">→</span>
          </div>
          <p className="test-small-circle-text">Get in touch with us</p>
        </div>
      </div>
    </section>

    {/* Test Automation Process Section */}
    <section className="journey-section" data-aos="fade-up">
      <h2>OUR TEST AUTOMATION PROCESS</h2>
      <p>
        At AMTB Solutions, we utilize cutting-edge technology and best practices to deliver effective test automation solutions that enhance software quality. Here’s how we do it:
      </p>

      <div className="journey-steps">
        <div className="step-item" data-aos="fade-up">
          <div className="step-number">1</div>
          <div className="step-content">
            <h3>ASSESSMENT</h3>
            <p>Evaluate your existing testing processes and define the scope for automation, identifying high-impact areas.</p>
          </div>
        </div>
        <div className="step-item" data-aos="fade-up">
          <div className="step-number">2</div>
          <div className="step-content">
            <h3>STRATEGY</h3>
            <p>Develop a comprehensive automation strategy that aligns with your project goals and timelines.</p>
          </div>
        </div>
        <div className="step-item" data-aos="fade-up">
          <div className="step-number">3</div>
          <div className="step-content">
            <h3>FRAMEWORK DESIGN</h3>
            <p>Create a robust test automation framework that supports scalable and maintainable test cases.</p>
          </div>
        </div>
        <div className="step-item" data-aos="fade-up">
          <div className="step-number">4</div>
          <div className="step-content">
            <h3>IMPLEMENTATION</h3>
            <p>Develop and implement automated test scripts, ensuring coverage across various test scenarios.</p>
          </div>
        </div>
        <div className="step-item" data-aos="fade-up">
          <div className="step-number">5</div>
          <div className="step-content">
            <h3>EXECUTION & MONITORING</h3>
            <p>Run automated tests and monitor results in real-time, providing quick feedback on software quality.</p>
          </div>
        </div>
        <div className="step-item" data-aos="fade-up">
          <div className="step-number">6</div>
          <div className="step-content">
            <h3>OPTIMIZATION</h3>
            <p>Continuously improve test scripts and strategies based on feedback and changing project requirements.</p>
          </div>
        </div>
      </div>
    </section>

    {/* Services Section */}
    <section className="test-section"  data-aos="fade-up">
      <div className="custom-services-content">
        <h2>FROM MANUAL TESTING TO AUTOMATION SUCCESS</h2>
        <p>
          For over a decade, we’ve been delivering impactful test automation solutions, enhancing software quality and reducing time-to-market.
        </p>
      </div>

      <div className="services-container">
        <div className="service-item" data-aos="fade-up">
          <h3>TEST STRATEGY DEVELOPMENT</h3>
          <p>
            Craft a tailored test automation strategy that aligns with your business goals and improves efficiency.
          </p>
          <div className="ss-small-circle-container" onClick={scrollToContact}>
            <div className="ss-small-circle gradient-border">
              <span className="ss-arrow">→</span>
            </div>
          </div>
          <div className="test-service-tags" data-aos="fade-up">
            <span>Comprehensive Test Planning</span>
            <span>Risk Assessment</span>
          </div>
        </div>

        <div className="service-item" data-aos="fade-up">
          <h3>TEST SCRIPT DEVELOPMENT</h3>
          <p>
            Create high-quality automated test scripts that ensure robust coverage and minimize manual effort.
          </p>
          <div className="ss-small-circle-container" onClick={scrollToContact}>
            <div className="ss-small-circle gradient-border">
              <span className="ss-arrow">→</span>
            </div>
          </div>
          <div className="test-service-tags" data-aos="fade-up">
            <span>Functional Testing</span>
            <span>Regression Testing</span>
          </div>
        </div>

        <div className="service-item" data-aos="fade-up">
          <h3>TEST FRAMEWORK SETUP</h3>
          <p>
            Establish a scalable test automation framework that facilitates easy maintenance and integration with CI/CD pipelines.
          </p>
          <div className="ss-small-circle-container" onClick={scrollToContact}>
            <div className="ss-small-circle gradient-border">
              <span className="ss-arrow">→</span>
            </div>
          </div>
          <div className="test-service-tags" data-aos="fade-up">
            <span>Integration with CI/CD</span>
            <span>Framework Customization</span>
          </div>
        </div>

        <div className="service-item" data-aos="fade-up">
          <h3>CONTINUOUS TESTING</h3>
          <p>
            Implement continuous testing practices that enhance software delivery speed and quality.
          </p>
          <div className="ss-small-circle-container" onClick={scrollToContact}>
            <div className="ss-small-circle gradient-border">
              <span className="ss-arrow">→</span>
            </div>
          </div>
          <div className="test-service-tags" data-aos="fade-up">
            <span>Real-time Feedback</span>
            <span>Automation Integration</span>
          </div>
        </div>
      </div>
    </section>

      {/* Technology Tools Section */}
     <section className="tools-section" data-aos="fade-up">
      <h2>Empower Your Testing with Advanced Tools</h2>
      <p>AMTB Solution employs leading test automation tools and frameworks to ensure efficient and effective testing, reducing time and costs while maximizing quality.</p>

      <div className="tools-logos">
        {/* <div className="test-tool-icon">
          <FaSelenium size={50} />
          <p>Selenium</p>
        </div> */}
        <div className="test-tool-icon" data-aos="fade-up">
          <SiCypress size={50} />
          <p>Cypress</p>
        </div>
        <div className="test-tool-icon" data-aos="fade-up">
          <FaJenkins size={50} />
          <p>Jenkins</p>
        </div>
        <div className="test-tool-icon" data-aos="fade-up">
          <FaRobot size={50} />
          <p>Selenium</p>
        </div>
        <div className="test-tool-icon" data-aos="fade-up">
          <FaAppStore size={50} />
          <p>Appium</p>
        </div>
        <div className="test-tool-icon" data-aos="fade-up">
          <SiTestcafe size={50} />
          <p>TestCafe</p>
        </div>
        <div className="test-tool-icon" data-aos="fade-up">
          <SiPostman size={50} />
          <p>Postman</p>
        </div>
        <div className="test-tool-icon" data-aos="fade-up">
          <SiQase size={50} />
          <p>Qase</p>
        </div>
        <div className="test-tool-icon" data-aos="fade-up">
          <SiMocha size={50} />
          <p>Mocha</p>
        </div>
      </div>
    </section>

    {/* Custom Development for Industries Section */}
<section className="test-industry-section" data-aos="fade-up">
  <h2>Software Development for Your Unique Industry Needs</h2>
  <p>At AMTB Solution, we offer a comprehensive range of custom software development services, having successfully delivered 180 tailored applications. Our expertise spans various domains, including healthcare, education, and FinTech, ensuring that we meet the unique needs of each industry.</p>
  <div className="industry-container">
    <div className="industry-column">
      <div className="industry-box" data-aos="fade-up">
        <Link to="/HealthCare">
          <span>Healthcare <FaArrowRight /></span>
        </Link>
      </div>
      <div className="industry-box" data-aos="fade-up">
        <Link to="/Education">
          <span>Education <FaArrowRight /></span>
        </Link>
      </div>
      <div className="industry-box" data-aos="fade-up">
        <Link to="/Ecommerce">
          <span>E-commerce <FaArrowRight /></span>
        </Link>
      </div>
    </div>

    {/* Vertical Line */}
    <div className="vertical-line"></div>

    <div className="industry-column">
      <div className="industry-box" data-aos="fade-up">
        <Link to="/RealState">
          <span>Real Estate <FaArrowRight /></span>
        </Link>
      </div>
      <div className="industry-box" data-aos="fade-up">
        <Link to="/Bank">
          <span>Bank <FaArrowRight /></span>
        </Link>
      </div>
      <div className="industry-box" data-aos="fade-up">
        <Link to="/Logistics">
          <span>Logistics <FaArrowRight /></span>
        </Link>
      </div>
      
    </div>
  </div>
</section>

 <section class="options-section" data-aos="fade-up">
    <h2>Choose Your Service Option</h2>
    <p>AMTB Solutions offer Two Flexible engagement models to suit your needs.</p>
    <div class="options-container">
        <div class="option-box" data-aos="fade-up">
            <h3>Product Development</h3>
            <p>Launch your new product with our dedicated cross-functional team, perfect for those without an in-house development team.</p>
            <div class="circle-with-text" onClick={scrollToContact}>
                <a class="test-circle-button" >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="arrow-icon">
                        <path d="M8 4l8 8-8 8" fill="none" stroke="white" stroke-width="2" />
                    </svg>
                </a>
                <span class="circle-text">Start your project</span>
            </div>
        </div>
        <div class="option-box" data-aos="fade-up">
            <h3>Team Augmentation</h3>
            <p>Supplement your existing team with our experienced software developers to meet your technology needs.</p>
            <div class="circle-with-text" onClick={scrollToContact}>
                <a  class="test-circle-button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="arrow-icon">
                        <path d="M8 4l8 8-8 8" fill="none" stroke="white" stroke-width="2" />
                    </svg>
                </a>
                <span class="circle-text">Hire a team</span>
            </div>
        </div>
    </div>
</section>

<section className="test-mad-services-section" data-aos="fade-up">
    <div className="mad-services-content" data-aos="fade-up">
        <h2>COMPREHENSIVE RISK ASSESSMENT</h2>
        <p>
           We tackle potential risks upfront during our product discovery phase. By addressing value, usability, and feasibility risks, we help you build a solution that meets market needs and your business goals.
        </p>
    </div>

    <div className="mad-services-container">
        <div className="mad-service-item" data-aos="fade-up">
            <h3>COLLABORATIVE PRODUCT DEVELOPMENT</h3>
            <p>
                Our team of product managers, designers, engineers, and QA experts work together to shape and refine your solution, ensuring it aligns with customer expectations and delivers the desired outcomes.
                  </p>
            <div className="mad-circle-container" onClick={scrollToContact}>
                <div className="mad-small-circle gradient-border">
                    <span className="mad-arrow">→</span>
                </div>
            </div>
        </div>

        <div className="mad-service-item" data-aos="fade-up">
            <h3>FOCUS ON PROBLEM SOLVING</h3>
            <p>
               We don’t just implement features. We work to solve the core challenges your product addresses, ensuring that it delivers meaningful results for both users and your business.
            </p>
            <div className="mad-circle-container" onClick={scrollToContact}>
                <div className="mad-small-circle gradient-border">
                    <span className="mad-arrow">→</span>
                </div>
            </div>
        </div>
    </div>
</section>








            <FAQ />



                <ContactForm />


      <Footer /> {/* Use the imported Footer component */}
    </div>
  );
};

export default TestAutomation;
