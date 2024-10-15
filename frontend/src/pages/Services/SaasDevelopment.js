import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { Link } from 'react-router-dom';
import { useRef } from 'react';

import '../../styles/SaasDevelopment.css'; // Import the CSS file for the Custom Development page
import Footer from '../../components/Footer'; // Import Footer component
import FAQ from '../../components/FAQ';
import ContactForm from '../../components/ContactForm';
import image1 from '../../assets/images/Services/saasdevelopment/image1.jpg';
import { FaArrowRight } from 'react-icons/fa'; // Import an arrow icon
import { FaAws, FaMicrosoft, FaGoogle, FaReact, FaAngular, FaNodeJs, FaPython, FaDocker } from 'react-icons/fa';  // Add more icons as needed
import { SiMicrosoftazure, SiGooglecloud, SiTerraform,SiDatabricks, SiKubernetes, SiMysql, SiMongodb, SiPostgresql, SiRedis, SiElasticsearch, SiRabbitmq } from 'react-icons/si'; // From 'simple-icons'


const SaasDevelopment = () => { const contactRef = useRef(null);

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

      {/* Usaasated Hero Section with Two Circles and Image */}
   <section className="hero-section">
  <div className="saas-hero-content" data-aos="fade-up">
     <h1>SAAS DEVELOPMENT SOLUTIONS</h1>
        <p>
          Build and scale your SaaS product seamlessly with our expert development team. We turn your innovative ideas into robust, market-ready solutions that drive business success.
        </p>
    <div className="saas-circle-container">
      <div className="saas-wing-circle saas-left-circle gradient-border" data-aos="fade-up"></div>
      <div className="saas-center-image-circle">
        <img
          src={image1}
          alt="Innovative Solution"
          className="saas-center-image"
        />
      </div>
      <div className="saas-wing-circle saas-right-circle gradient-border" data-aos="fade-up"></div>
    </div>
    <div className="saas-small-circle-wrapper" onClick={scrollToContact}>
      <div className="saas-small-circle gradient-border">
        <span className="saas-arrow">→</span>
      </div>
      <p className="saas-small-circle-text">Get in touch with us</p>
    </div>
  </div>
</section>


    

      <section className="journey-section" data-aos="fade-up">
       <h2>OUR SAAS DEVELOPMENT PROCESS</h2>
      <p>
        At AMTB Solution, we specialize in delivering cutting-edge SaaS solutions tailored to meet your business needs. Our development process focuses on creating scalable, secure, and user-friendly applications.
      </p>

        <div className="journey-steps">
          <div className="step-item" data-aos="fade-up">
            <div className="step-number">1</div>
            <div className="step-content">
               <h3>REQUIREMENTS GATHERING</h3>
            <p>
              Collaborate with our team to define project goals, understand your users, and outline essential features.
            </p>
             </div>
          </div>
          <div className="step-item" data-aos="fade-up">
            <div className="step-number">2</div>
            <div className="step-content">
              <h3>ARCHITECTURE DESIGN</h3>
            <p>
              Plan a scalable architecture tailored to your SaaS product, ensuring flexibility and long-term success.
            </p>
            </div>
          </div>
          <div className="step-item" data-aos="fade-up">
            <div className="step-number">3</div>
            <div className="step-content">
             <h3>UI/UX DESIGN</h3>
            <p>
              Develop intuitive interfaces that enhance user experience, ensuring smooth interactions across devices.
            </p>
             </div>
          </div>
          <div className="step-item" data-aos="fade-up">
            <div className="step-number">4</div>
            <div className="step-content">
              <h3>DEVELOPMENT & INTEGRATION</h3>
            <p>
              Implement features with cutting-edge technologies, ensuring seamless integration with third-party services.
            </p>
             </div>
          </div>
          <div className="step-item" data-aos="fade-up">
            <div className="step-number">5</div>
            <div className="step-content">
               <h3>TESTING & OPTIMIZATION</h3>
            <p>
              Conduct rigorous testing to ensure performance, security, and scalability before launch.
            </p>
             </div>
          </div>
          <div className="step-item" data-aos="fade-up">
            <div className="step-number">6</div>
            <div className="step-content">
               <h3>LAUNCH & SUPPORT</h3>
            <p>
              Deploy the solution and provide ongoing maintenance and support to ensure your SaaS product evolves smoothly.
            </p>
             </div>
          </div>
        </div>
      </section>


      {/* Services Section */}
      <section className="saas-development-section" data-aos="fade-up">
        <div className="custom-services-content">
         <h2>FROM CONCEPT TO SCALABLE SAAS SOLUTIONS</h2>
        <p>
          For years, we’ve been turning visions into successful SaaS products by delivering reliable and scalable software solutions.
        </p>
        </div>

        <div className="services-container" data-aos="fade-up">
          <div className="service-item">
            <h3>SAAS STRATEGY & DISCOVERY</h3>
          <p>
            Transform your idea into a detailed SaaS product roadmap. We collaborate to analyze the market and define product specifications that resonate with users.
          </p>

                 <div className="ss-small-circle-container" onClick={scrollToContact}>
                 <div className="ss-small-circle gradient-border">
                 <span className="ss-arrow">→</span>
                 </div>
                 </div>

            <div className="saas-service-tags" data-aos="fade-up">
              <span>Market Research & Competitive Analysis</span>
            <span>Concept Development</span>
            <span>User Journey Mapping</span>
            </div>
          </div>

          <div className="service-item" data-aos="fade-up">
            <h3>PROTOTYPE & MVP DEVELOPMENT</h3>
          <p>
            Develop a prototype or MVP quickly to gather user feedback and validate your product concept before full-scale development.
          </p>
             <div className="ss-small-circle-container" onClick={scrollToContact}>
                 <div className="ss-small-circle gradient-border">
                 <span className="ss-arrow">→</span>
                 </div>
                 </div>

            <div className="saas-service-tags" data-aos="fade-up">
              <span>Clickable Prototypes</span>
            <span>Proof of Concept</span>
            <span>MVP Development</span>
              
            </div>
          </div>

          <div className="service-item" data-aos="fade-up">
            <h3>UI/UX DESIGN</h3>
          <p>
            We ensure that your SaaS product delivers exceptional user experiences by focusing on intuitive design that drives user engagement.
          </p>
             <div className="ss-small-circle-container" onClick={scrollToContact}>
                 <div className="ss-small-circle gradient-border">
                 <span className="ss-arrow">→</span>
                 </div>
                 </div>

            <div className="saas-service-tags" data-aos="fade-up">
                <span>Responsive UI for Web & Mobile</span>
            <span>User-centric UX Design</span>
            </div>
          </div>

          <div className="service-item" data-aos="fade-up">
            <h3>FULL-SCALE SAAS DEVELOPMENT</h3>
          <p>
            Leverage our expertise to develop a fully functional, scalable SaaS application that can adapt to future growth and technological advancements.
          </p>
             <div className="ss-small-circle-container" onClick={scrollToContact}>
                 <div className="ss-small-circle gradient-border">
                 <span className="ss-arrow">→</span>
                 </div>
                 </div>

            <div className="saas-service-tags" data-aos="fade-up">
              <span>Custom SaaS Solutions</span>
            <span>API Integration</span>
            <span>Cloud-native Development</span>
            </div>
          </div>
        </div>
      </section>


      {/* Technology Tools Section */}
     <section className="tools-section" data-aos="fade-up">
     <h2>Harness Cutting-Edge Technologies for SaaS Excellence</h2>
      <p>
        AMTB Solution utilizes a robust tech stack to build secure, scalable, and reliable SaaS solutions. We focus on future-proofing your product for long-term success.
      </p>
      <div className="tools-logos">
        <div className="saas-tool-icon" data-aos="fade-up">
          <FaAws size={50} />
          <p>AWS</p>
        </div>
        <div className="saas-tool-icon" data-aos="fade-up">
          <SiMicrosoftazure size={50} />
          <p>Microsoft Azure</p>
        </div>
        <div className="saas-tool-icon" data-aos="fade-up">
          <SiGooglecloud size={50} />
          <p>Google Cloud</p>
        </div>
        <div className="saas-tool-icon" data-aos="fade-up">
          <FaReact size={50} />
          <p>React</p>
        </div>
        <div className="saas-tool-icon" data-aos="fade-up">
          <FaAngular size={50} />
          <p>Angular</p>
        </div>
        <div className="saas-tool-icon" data-aos="fade-up">
          <FaNodeJs size={50} />
          <p>Node.js</p>
        </div>
        <div className="saas-tool-icon" data-aos="fade-up">
          <FaPython size={50} />
          <p>Python</p>
        </div>
        <div className="saas-tool-icon" data-aos="fade-up">
          <SiDatabricks size={50} />
          <p>Databricks</p>
        </div>
        <div className="saas-tool-icon" data-aos="fade-up">
          <FaDocker size={50} />
          <p>Docker</p>
        </div>
        <div className="saas-tool-icon" data-aos="fade-up">
          <SiTerraform size={50} />
          <p>Terraform</p>
        </div>
        <div className="saas-tool-icon" data-aos="fade-up">
          <SiKubernetes size={50} />
          <p>Kubernetes</p>
        </div>
        <div className="saas-tool-icon" data-aos="fade-up">
          <SiMysql size={50} />
          <p>MySQL</p>
        </div>
        <div className="saas-tool-icon" data-aos="fade-up">
          <SiPostgresql size={50} />
          <p>PostgreSQL</p>
        </div>
        <div className="saas-tool-icon" data-aos="fade-up">
          <SiMongodb size={50} />
          <p>MongoDB</p>
        </div>
        <div className="saas-tool-icon" data-aos="fade-up">
          <SiRedis size={50} />
          <p>Redis</p>
        </div>
        <div className="saas-tool-icon" data-aos="fade-up">
          <SiElasticsearch size={50} />
          <p>Elasticsearch</p>
        </div>
        <div className="saas-tool-icon" data-aos="fade-up">
          <SiRabbitmq size={50} />
          <p>RabbitMQ</p>
        </div>
      </div>
    </section>

    {/* Custom Development for Industries Section */}
<section className="saas-industry-section" data-aos="fade-up">
  <h2>SaaS Development for Your Unique Industry Needs</h2>
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
                <a class="saas-circle-button" >
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
                <a  class="saas-circle-button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="arrow-icon">
                        <path d="M8 4l8 8-8 8" fill="none" stroke="white" stroke-width="2" />
                    </svg>
                </a>
                <span class="circle-text">Hire a team</span>
            </div>
        </div>
    </div>
</section>

<section className="saas-mad-services-section" data-aos="fade-up">
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

export default SaasDevelopment;
