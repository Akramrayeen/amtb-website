import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { Link } from 'react-router-dom';
import { useRef } from 'react';

import '../../styles/SoftwareRe-engeering.css'; // Import the CSS file for the Custom Development page
import Footer from '../../components/Footer'; // Import Footer component
import FAQ from '../../components/FAQ';
import ContactForm from '../../components/ContactForm';
import image1 from '../../assets/images/Services/re-engeering/image1.jpg';
import { FaArrowRight } from 'react-icons/fa'; // Import an arrow icon
import { FaAws, FaMicrosoft, FaGoogle, FaReact, FaAngular, FaNodeJs, FaPython, FaDocker } from 'react-icons/fa';  // Add more icons as needed
import { SiMicrosoftazure, SiGooglecloud, SiTerraform,SiDatabricks, SiKubernetes, SiMysql, SiMongodb, SiPostgresql, SiRedis, SiElasticsearch, SiRabbitmq } from 'react-icons/si'; // From 'simple-icons'


const SoftwareRengineer = () => { const contactRef = useRef(null);

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
    

      {/* Ureated Hero Section with Two Circles and Image */}
   <section className="hero-section">
  <div className="re-hero-content" data-aos="fade-up">
    <h1>SOFTWARE RE-ENGINEERING SOLUTIONS</h1>
    <p>
    Transform and modernize your legacy systems with cutting-edge technologies to improve performance, scalability, and user experience.
        </p>
    <div className="re-circle-container">
      <div className="re-wing-circle re-left-circle gradient-border" data-aos="fade-up"></div>
      <div className="re-center-image-circle">
        <img
          src={image1}
          alt="Innovative Solution"
          className="re-center-image"
        />
      </div>
      <div className="re-wing-circle re-right-circle gradient-border" data-aos="fade-up"></div>
    </div>
    <div className="re-small-circle-wrapper" onClick={scrollToContact}>
      <div className="re-small-circle gradient-border">
        <span className="re-arrow">→</span>
      </div>
      <p className="re-small-circle-text">Get in touch with us</p>
    </div>
  </div>
</section>


    

      <section className="journey-section" data-aos="fade-up">
        <h2>OUR RE-ENGINEERING PROCESS</h2>
        <p>
          At AMTB Solutions, we specialize in modernizing outdated systems and revitalizing software performance with our comprehensive re-engineering approach. Here’s how we achieve it:
        </p>

        <div className="journey-steps">
          <div className="step-item" data-aos="fade-up">
            <div className="step-number">1</div>
            <div className="step-content">
              <h3>SYSTEM AUDIT & ASSESSMENT</h3>
              <p>Analyze your existing software infrastructure to identify areas of improvement and define modernization requirements.</p>
            </div>
          </div>
          <div className="step-item" data-aos="fade-up">
            <div className="step-number">2</div>
            <div className="step-content">
              <h3>TECHNOLOGY UPGRADE</h3>
            <p>Update your technology stack and architecture to increase system efficiency, maintainability, and future scalability.</p>
          </div>
          </div>
          <div className="step-item" data-aos="fade-up">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3>CODE RESTRUCTURING</h3>
            <p>Revamp your existing codebase to optimize performance, minimize technical debt, and introduce best practices.</p>
          </div>
          </div>
          <div className="step-item" data-aos="fade-up">
            <div className="step-number">4</div>
            <div className="step-content">
              <h3>TESTING & QUALITY ASSURANCE</h3>
            <p>Perform rigorous testing to ensure that re-engineered systems function smoothly and meet all performance goals.</p>
         </div>
          </div>
          <div className="step-item" data-aos="fade-up">
            <div className="step-number">5</div>
            <div className="step-content">
             <h3>SEAMLESS MIGRATION</h3>
            <p>Safely migrate your data and processes to the modernized system without interrupting business operations.</p>
           </div>
          </div>
          <div className="step-item" data-aos="fade-up">
            <div className="step-number">6</div>
            <div className="step-content">
              <h3>ONGOING SUPPORT</h3>
            <p>Offer continuous monitoring, maintenance, and upgrades to keep your software agile and aligned with market trends.</p>
            </div>
          </div>
        </div>
      </section>


      {/* Services Section */}
      <section className="SoftwareRe-engeering-services-section" data-aos="fade-up">
        <div className="custom-services-content" data-aos="fade-up">
          <h2>TRANSFORM YOUR LEGACY SYSTEMS</h2>
        <p>
          Breathe new life into your software with our re-engineering solutions. We help businesses modernize their applications for better performance, security, and scalability.
        </p>
        </div>

        <div className="services-container">
          <div className="service-item" data-aos="fade-up">
            <h3>SYSTEM ASSESSMENT</h3>
          <p>
            Conduct a detailed analysis of your legacy system to understand its limitations and areas where modernization is needed.
          </p>

                 <div className="ss-small-circle-container" onClick={scrollToContact}>
                 <div className="ss-small-circle gradient-border">
                 <span className="ss-arrow">→</span>
                 </div>
                 </div>

            <div className="re-service-tags" data-aos="fade-up">
               <span>Performance Evaluation</span>
            <span>Scalability Analysis</span>
            <span>Security Audit</span>
            </div>
          </div>

          <div className="service-item" data-aos="fade-up">
             <h3>CLOUD MIGRATION</h3>
          <p>
            Move your legacy software to a cloud infrastructure for better scalability, lower costs, and enhanced security.
          </p>
             <div className="ss-small-circle-container" onClick={scrollToContact}>
                 <div className="ss-small-circle gradient-border">
                 <span className="ss-arrow">→</span>
                 </div>
                 </div>

            <div className="re-service-tags" data-aos="fade-up">
              <span>Cloud Readiness Assessment</span>
            <span>Platform Selection</span>
              
            </div>
          </div>

          <div className="service-item" data-aos="fade-up">
            <h3>CODE REFACTORING</h3>
          <p>
            Enhance your software’s performance and maintainability by optimizing and refactoring legacy code.
          </p>
             <div className="ss-small-circle-container" onClick={scrollToContact}>
                 <div className="ss-small-circle gradient-border">
                 <span className="ss-arrow">→</span>
                 </div>
                 </div>

            <div className="re-service-tags" data-aos="fade-up">
              <span>Code Optimization</span>
            <span>Technical Debt Reduction</span>

            </div>
          </div>

          <div className="service-item" data-aos="fade-up">
            <h3>UI/UX MODERNIZATION</h3>
          <p>
            Redesign and modernize the user interface and experience to improve usability, engagement, and satisfaction.
          </p>
             <div className="ss-small-circle-container" onClick={scrollToContact}>
                 <div className="ss-small-circle gradient-border">
                 <span className="ss-arrow">→</span>
                 </div>
                 </div>

            <div className="re-service-tags" data-aos="fade-up">
              <span>Modern UI Frameworks</span>
            <span>User-Centric Design</span>
            </div>
          </div>
        </div>
      </section>


      {/* Technology Tools Section */}
     <section className="tools-section" data-aos="fade-up">
      <h2>Future-proof your business with advanced technology</h2>
      <p>AMTB Solution uses a platform-based approach to technology architecture,minimizing risk,cost, and development time,We Build Integrated solutions that samlessly,support your entire business ecosystem,ensuring long-term success and adaptablity</p>
     
      <div className="tools-logos">
        <div className="re-tool-icon" data-aos="fade-up">
          <FaAws size={50} />
          <p>AWS</p>
        </div>
        <div className="re-tool-icon" data-aos="fade-up">
          <SiMicrosoftazure size={50} />
          <p>Microsoft Azure</p>
        </div>
        <div className="re-tool-icon" data-aos="fade-up">
          <SiGooglecloud size={50} />
          <p>Google Cloud</p>
        </div>
        <div className="re-tool-icon" data-aos="fade-up">
          <FaReact size={50} />
          <p>React</p>
        </div>
        <div className="re-tool-icon" data-aos="fade-up">
          <FaAngular size={50} />
          <p>Angular</p>
        </div>
        <div className="re-tool-icon" data-aos="fade-up">
          <FaNodeJs size={50} />
          <p>Node.js</p>
        </div>
        <div className="re-tool-icon" data-aos="fade-up">
          <FaPython size={50} />
          <p>Python</p>
        </div>
        <div className="re-tool-icon">
          <SiDatabricks size={50} />
          <p>Databricks</p>
        </div>
        <div className="re-tool-icon" data-aos="fade-up">
          <FaDocker size={50} />
          <p>Docker</p>
        </div>
        <div className="re-tool-icon" data-aos="fade-up">
          <SiTerraform size={50} />
          <p>Terraform</p>
        </div>
        <div className="re-tool-icon" data-aos="fade-up">
          <SiKubernetes size={50} />
          <p>Kubernetes</p>
        </div>
        <div className="re-tool-icon" data-aos="fade-up">
          <SiMysql size={50} />
          <p>MySQL</p>
        </div>
        <div className="re-tool-icon" data-aos="fade-up">
          <SiPostgresql size={50} />
          <p>PostgreSQL</p>
        </div>
        <div className="re-tool-icon" data-aos="fade-up">
          <SiMongodb size={50} />
          <p>MongoDB</p>
        </div>
        <div className="re-tool-icon" data-aos="fade-up">
          <SiRedis size={50} />
          <p>Redis</p>
        </div>
        <div className="re-tool-icon" data-aos="fade-up">
          <SiElasticsearch size={50} />
          <p>Elasticsearch</p>
        </div>
        <div className="re-tool-icon" data-aos="fade-up">
          <SiRabbitmq size={50} />
          <p>RabbitMQ</p>
        </div>
      </div>
    </section>

    {/* Custom Development for Industries Section */}
<section className="re-industry-section" data-aos="fade-up">
 <h2>Re-engineering Software Solutions Tailored to Your Industry's Future</h2>
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
                <a class="re-circle-button" >
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
                <a  class="re-circle-button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="arrow-icon">
                        <path d="M8 4l8 8-8 8" fill="none" stroke="white" stroke-width="2" />
                    </svg>
                </a>
                <span class="circle-text">Hire a team</span>
            </div>
        </div>
    </div>
</section>

<section className="re-mad-services-section" data-aos="fade-up">
    <div className="mad-services-content">
        <h2>COMPREHENSIVE RISK ASSESSMENT</h2>
        <p>
           We tackle potential risks upfront during our product discovery phase. By addressing value, usability, and feasibility risks, we help you build a solution that meets market needs and your business goals.
        </p>
    </div>

    <div className="mad-services-container" data-aos="fade-up">
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

export default SoftwareRengineer;
