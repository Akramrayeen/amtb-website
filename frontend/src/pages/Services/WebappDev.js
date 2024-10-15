import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { Link } from 'react-router-dom';
import { useRef } from 'react';

import '../../styles/WebappDev.css'; // Import the CSS file for the Custom Development page
import Footer from '../../components/Footer'; // Import Footer component
import FAQ from '../../components/FAQ';
import ContactForm from '../../components/ContactForm';
import image1 from '../../assets/images/Services/webappdev/image1.jpg';
import { FaArrowRight } from 'react-icons/fa'; // Import an arrow icon
import { FaAws, FaMicrosoft, FaGoogle, FaReact, FaAngular, FaNodeJs, FaPython, FaDocker } from 'react-icons/fa';  // Add more icons as needed
import { SiMicrosoftazure, SiGooglecloud, SiTerraform,SiDatabricks, SiKubernetes, SiMysql, SiMongodb, SiPostgresql, SiRedis, SiElasticsearch, SiRabbitmq } from 'react-icons/si'; // From 'simple-icons'


const Webappdev = () => { const contactRef = useRef(null);

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
      {/* Uwebdevated Hero Section with Two Circles and Image */}
   <section className="hero-section">
  <div className="webdev-hero-content" data-aos="fade-up">
    <h1>
          WEB APP DEVELOPMENT SOLUTIONS
        </h1>
        <p>
          Build and launch your web app seamlessly, backed by a team of experts who turn your vision into a functional, market-ready solution.
        </p>
    <div className="webdev-circle-container">
      <div className="webdev-wing-circle webdev-left-circle gradient-border" data-aos="fade-up"></div>
      <div className="webdev-center-image-circle">
        <img
          src={image1}
          alt="Innovative Solution"
          className="webdev-center-image"
        />
      </div>
      <div className="webdev-wing-circle webdev-right-circle gradient-border" data-aos="fade-up"></div>
    </div>
    <div className="webdev-small-circle-wrapper" onClick={scrollToContact}>
      <div className="webdev-small-circle gradient-border">
        <span className="webdev-arrow">→</span>
      </div>
      <p className="webdev-small-circle-text">Get in touch with us</p>
    </div>
  </div>
</section>


    

      <section className="journey-section" data-aos="fade-up">
       <h2>OUR DEVELOPMENT PROCESS</h2>
      <p>
        At AMTB Solutions, we leverage cutting-edge technology and expertise to deliver bespoke web app development services that exceed expectations. Here’s our approach:
      </p>

        <div className="journey-steps">
          <div className="step-item" data-aos="fade-up">
            <div className="step-number">1</div>
            <div className="step-content">
              <h3>IDEATION</h3>
              <p>Brainstorm and define project scope, requirements, and technical challenges with our expert team.</p>
            </div>
          </div>
          <div className="step-item" data-aos="fade-up">
            <div className="step-number">2</div>
            <div className="step-content">
              <h3>STRATEGY</h3>
              <p>Map out a strategic development plan, focusing on timelines, resources, and goals.</p>
            </div>
          </div>
          <div className="step-item" data-aos="fade-up">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3>USER EXPERIENCE DESIGN</h3>
              <p>Design user-centered interfaces and experiences that are intuitive and engaging.</p>
            </div>
          </div>
          <div className="step-item" data-aos="fade-up">
            <div className="step-number">4</div>
            <div className="step-content">
              <h3>IMPLEMENTATION</h3>
              <p>Develop, test, and iterate robust systems, following best practices to ensure high performance and reliability.</p>
            </div>
          </div>
          <div className="step-item" data-aos="fade-up">
            <div className="step-number">5</div>
            <div className="step-content">
              <h3>DEPLOYMENT</h3>
              <p>Launch the solution and ensure it operates seamlessly within your environment.</p>
            </div>
          </div>
          <div className="step-item" data-aos="fade-up">
            <div className="step-number">6</div>
            <div className="step-content">
              <h3>SUPPORT</h3>
              <p>Provide ongoing maintenance, upgrades, and support to keep your solution running smoothly.</p>
            </div>
          </div>
        </div>
      </section>


      {/* Services Section */}
      <section className="webdev-section" data-aos="fade-up">
        <div className="custom-services-content">
          <h2>FROM CONCEPT TO FULLY FUNCTIONAL WEB APPS</h2>
        <p>
          With years of expertise, we transform your ideas into powerful, scalable web applications that deliver real value.
        </p>
        </div>

        <div className="services-container">
          <div className="service-item" data-aos="fade-up">
            <h3>DISCOVERY & PLANNING</h3>
          <p>
            Shape your idea into a well-structured web app. Our team helps you identify user needs and craft the perfect solution.
          </p>

                 <div className="ss-small-circle-container" onClick={scrollToContact}>
                 <div className="ss-small-circle gradient-border">
                 <span className="ss-arrow">→</span>
                 </div>
                 </div>

            <div className="webdev-service-tags" data-aos="fade-up">
              <span>Competitive & Market Analysis</span>
              <span>User Journey Maps</span>
              <span>Wireframe Design Concepts</span>
            </div>
          </div>

          <div className="service-item" data-aos="fade-up">
            <h3>UI/UX DESIGN</h3>
          <p>
            Enhance user interactions with a sleek, intuitive design that provides a seamless experience across all devices.
          </p>
             <div className="ss-small-circle-container" onClick={scrollToContact}>
                 <div className="ss-small-circle gradient-border">
                 <span className="ss-arrow">→</span>
                 </div>
                 </div>

            <div className="webdev-service-tags" data-aos="fade-up">
              <span>Responsive Web UI/UX</span>
            </div>
          </div>

          <div className="service-item" data-aos="fade-up">
            <h3>UI/UX DESIGN</h3>
            <p>
              Enhance the user experience with refined UI/UX. Every product element is crafted for usability and satisfaction, ensuring users engage effectively.
            </p>
             <div className="ss-small-circle-container" onClick={scrollToContact}>
                 <div className="ss-small-circle gradient-border">
                 <span className="ss-arrow">→</span>
                 </div>
                 </div>

            <div className="webdev-service-tags" data-aos="fade-up">
              <span>Streamlined UI/UX for Web and Mobile</span>

            </div>
          </div>

          <div className="service-item" data-aos="fade-up">
            <h3>WEB APP DEVELOPMENT</h3>
          <p>
            Leverage our expertise to build powerful, scalable web apps using the latest technologies and frameworks.
          </p>
             <div className="ss-small-circle-container" onClick={scrollToContact}>
                 <div className="ss-small-circle gradient-border">
                 <span className="ss-arrow">→</span>
                 </div>
                 </div>

            <div className="webdev-service-tags" data-aos="fade-up">
              <span>High-Performance Web Apps</span>
            <span>Modern Tech Stack</span>
            </div>
          </div>
        </div>
      </section>


      {/* Technology Tools Section */}
     <section className="tools-section" data-aos="fade-up">
      <h2>Empower Your Business with Cutting-edge Web Technologies</h2>
      <p>
        AMTB Solution employs a modern, platform-based approach to web app architecture, ensuring reduced risks and faster time-to-market.
      </p>
      
      <div className="tools-logos">
        <div className="webdev-tool-icon" data-aos="fade-up">
          <FaAws size={50} />
          <p>AWS</p>
        </div>
        <div className="webdev-tool-icon" data-aos="fade-up">
          <SiMicrosoftazure size={50} />
          <p>Microsoft Azure</p>
        </div>
        <div className="webdev-tool-icon" data-aos="fade-up">
          <SiGooglecloud size={50} />
          <p>Google Cloud</p>
        </div>
        <div className="webdev-tool-icon" data-aos="fade-up">
          <FaReact size={50} />
          <p>React</p>
        </div>
        <div className="webdev-tool-icon" data-aos="fade-up">
          <FaAngular size={50} />
          <p>Angular</p>
        </div>
        <div className="webdev-tool-icon" data-aos="fade-up">
          <FaNodeJs size={50} />
          <p>Node.js</p>
        </div>
        <div className="webdev-tool-icon" data-aos="fade-up">
          <FaPython size={50} />
          <p>Python</p>
        </div>
        <div className="webdev-tool-icon" data-aos="fade-up">
          <SiDatabricks size={50} />
          <p>Databricks</p>
        </div>
        <div className="webdev-tool-icon" data-aos="fade-up">
          <FaDocker size={50} />
          <p>Docker</p>
        </div>
        <div className="webdev-tool-icon" data-aos="fade-up">
          <SiTerraform size={50} />
          <p>Terraform</p>
        </div>
        <div className="webdev-tool-icon" data-aos="fade-up">
          <SiKubernetes size={50} />
          <p>Kubernetes</p>
        </div>
        <div className="webdev-tool-icon" data-aos="fade-up">
          <SiMysql size={50} />
          <p>MySQL</p>
        </div>
        <div className="webdev-tool-icon" data-aos="fade-up">
          <SiPostgresql size={50} />
          <p>PostgreSQL</p>
        </div>
        <div className="webdev-tool-icon" data-aos="fade-up">
          <SiMongodb size={50} />
          <p>MongoDB</p>
        </div>
        <div className="webdev-tool-icon" data-aos="fade-up">
          <SiRedis size={50} />
          <p>Redis</p>
        </div>
        <div className="webdev-tool-icon"  data-aos="fade-up">
          <SiElasticsearch size={50} />
          <p>Elasticsearch</p>
        </div>
        <div className="webdev-tool-icon" data-aos="fade-up">
          <SiRabbitmq size={50} />
          <p>RabbitMQ</p>
        </div>
      </div>
    </section>

    {/* Custom Development for Industries Section */}
<section className="webdev-industry-section" data-aos="fade-up">
 <h2>Custom Web Apps for Diverse Industries</h2>
      <p>
        AMTB Solution delivers web applications tailored to the needs of various industries, including healthcare, education, and e-commerce.
      </p>
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
                <a class="webdev-circle-button" >
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
                <a  class="webdev-circle-button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="arrow-icon">
                        <path d="M8 4l8 8-8 8" fill="none" stroke="white" stroke-width="2" />
                    </svg>
                </a>
                <span class="circle-text">Hire a team</span>
            </div>
        </div>
    </div>
</section>

<section className="webdev-mad-services-section" data-aos="fade-up">
    <div className="mad-services-content">
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
export default Webappdev;
