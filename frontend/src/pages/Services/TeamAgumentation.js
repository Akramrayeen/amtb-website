import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { Link } from 'react-router-dom';
import { useRef } from 'react';

import '../../styles/TeamAgumentation.css'; // Import the CSS file for the Custom Development page
import Footer from '../../components/Footer'; // Import Footer component
import FAQ from '../../components/FAQ';
import ContactForm from '../../components/ContactForm';
import image1 from '../../assets/images/Services/teamagumentation/image2.webp';
import { FaArrowRight } from 'react-icons/fa'; // Import an arrow icon
import { FaAws, FaMicrosoft, FaGoogle, FaReact, FaAngular, FaNodeJs, FaPython, FaDocker } from 'react-icons/fa';  // Add more icons as needed
import { SiMicrosoftazure, SiGooglecloud, SiTerraform,SiDatabricks, SiKubernetes, SiMysql, SiMongodb, SiPostgresql, SiRedis, SiElasticsearch, SiRabbitmq } from 'react-icons/si'; // From 'simple-icons'


const TeamAgumentation = () => {

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


      {/* Utaated Hero Section with Two Circles and Image */}
   <section className="hero-section">
  <div className="ta-hero-content" data-aos="fade-up">
     <h1>TEAM AUGMENTATION SOLUTIONS</h1>
        <p>
          Strengthen your development capabilities with a flexible, skilled team that seamlessly integrates with your in-house staff to drive your projects forward.
        </p>
    <div className="ta-circle-container">
      <div className="ta-wing-circle ta-left-circle gradient-border" data-aos="fade-up"></div>
      <div className="ta-center-image-circle">
        <img
          src={image1}
          alt="Innovative Solution"
          className="ta-center-image"
        />
      </div>
      <div className="ta-wing-circle ta-right-circle gradient-border" data-aos="fade-up"></div>
    </div>
    <div className="ta-small-circle-wrapper" onClick={scrollToContact}>
      <div className="ta-small-circle gradient-border">
        <span className="ta-arrow">→</span>
      </div>
      <p className="ta-small-circle-text">Get in touch with us</p>
    </div>
  </div>
</section>


    

      <section className="journey-section" data-aos="fade-up">
        <h2>OUR TEAM AUGMENTATION PROCESS</h2>
      <p>
        At AMTB Solutions, we ensure a seamless integration of our experts into your team. Here’s how we support your business:
      </p>

        <div className="journey-steps">
          <div className="step-item" data-aos="fade-up">
            <div className="step-number">1</div>
            <div className="step-content">
               <h3>REQUIREMENTS ASSESSMENT</h3>
            <p>Analyze your project requirements and identify the specific skill sets you need to augment your team.</p>
          </div>
          </div>
          <div className="step-item" data-aos="fade-up">
            <div className="step-number">2</div>
            <div className="step-content">
               <h3>TALENT MATCHING</h3>
            <p>Carefully select and recommend qualified professionals who are the best fit for your technology stack and business needs.</p>
          </div>
          </div>
          <div className="step-item" data-aos="fade-up">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3>SEAMLESS ONBOARDING</h3>
            <p>Facilitate a smooth onboarding process to ensure our developers quickly integrate into your workflows and company culture.</p>
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
             <h3>CONTINUOUS SUPPORT</h3>
            <p>Provide ongoing management, feedback loops, and support to ensure peak team performance.</p>
          </div>
          </div>
        </div>
      </section>


      {/* Services Section */}
      <section className="teamagumentation-section" data-aos="fade-up">
        <div className="custom-services-content">
          <h2>SCALABLE TECH TALENT FOR YOUR PROJECTS</h2>
        <p>
          Whether you're expanding your development team or addressing short-term project needs, our experienced software engineers and developers are ready to support your objectives.
        </p>
        </div>

        <div className="services-container" data-aos="fade-up">
          <div className="service-item" data-aos="fade-up">
            <h3>EXPERIENCED DEVELOPERS</h3>
          <p>
            Our pool of skilled developers ensures that you have the technical talent to meet project deadlines and goals, no matter the complexity.
          </p>

                 <div className="ss-small-circle-container" onClick={scrollToContact}>
                 <div className="ss-small-circle gradient-border">
                 <span className="ss-arrow">→</span>
                 </div>
                 </div>

            <div className="ta-service-tags" data-aos="fade-up">
             <span>Full-Stack Development</span>
            <span>Specialized Skills</span>
            <span>Cross-Platform Expertise</span>
            </div>
          </div>

          <div className="service-item" data-aos="fade-up">
           <h3>FLEXIBLE ENGAGEMENT</h3>
          <p>
            Adapt to changing business demands with scalable team augmentation models tailored to your specific project needs.
          </p>

             <div className="ss-small-circle-container" onClick={scrollToContact}>
                 <div className="ss-small-circle gradient-border">
                 <span className="ss-arrow">→</span>
                 </div>
                 </div>

            <div className="ta-service-tags" data-aos="fade-up">
               <span>Contract & Full-Time Options</span>
            <span>On-Demand Expertise</span>
              
            </div>
          </div>

          <div className="service-item" data-aos="fade-up">
             <h3>CONTINUOUS INNOVATION</h3>
          <p>
            We keep your team up-to-date with the latest technologies and industry trends, ensuring your projects stay ahead of the curve.
          </p>
             <div className="ss-small-circle-container" onClick={scrollToContact}>
                 <div className="ss-small-circle gradient-border">
                 <span className="ss-arrow">→</span>
                 </div>
                 </div>

            <div className="ta-service-tags" data-aos="fade-up">
               <span>AI-Driven Solutions</span>
            <span>Agile Methodology</span>

            </div>
          </div>

        </div>
      </section>


      {/* Technology Tools Section */}
     <section className="tools-section" data-aos="fade-up">
      <h2>Future-proof your business with advanced technology</h2>
      <p>AMTB Solution uses a platform-based approach to technology architecture,minimizing risk,cost, and development time,We Build Integrated solutions that samlessly,support your entire business ecosystem,ensuring long-term success and adaptablity</p>
     
      <div className="tools-logos">
        <div className="ta-tool-icon" data-aos="fade-up">
          <FaAws size={50} />
          <p>AWS</p>
        </div>
        <div className="ta-tool-icon" data-aos="fade-up">
          <SiMicrosoftazure size={50} />
          <p>Microsoft Azure</p>
        </div>
        <div className="ta-tool-icon" data-aos="fade-up">
          <SiGooglecloud size={50} />
          <p>Google Cloud</p>
        </div>
        <div className="ta-tool-icon" data-aos="fade-up">
          <FaReact size={50} />
          <p>React</p>
        </div>
        <div className="ta-tool-icon" data-aos="fade-up">
          <FaAngular size={50} />
          <p>Angular</p>
        </div>
        <div className="ta-tool-icon" data-aos="fade-up">
          <FaNodeJs size={50} />
          <p>Node.js</p>
        </div>
        <div className="ta-tool-icon" data-aos="fade-up">
          <FaPython size={50} />
          <p>Python</p>
        </div>
        <div className="ta-tool-icon" data-aos="fade-up">
          <SiDatabricks size={50} />
          <p>Databricks</p>
        </div>
        <div className="ta-tool-icon" data-aos="fade-up">
          <FaDocker size={50} />
          <p>Docker</p>
        </div>
        <div className="ta-tool-icon" data-aos="fade-up">
          <SiTerraform size={50} />
          <p>Terraform</p>
        </div>
        <div className="ta-tool-icon" data-aos="fade-up">
          <SiKubernetes size={50} />
          <p>Kubernetes</p>
        </div>
        <div className="ta-tool-icon" data-aos="fade-up">
          <SiMysql size={50} />
          <p>MySQL</p>
        </div>
        <div className="ta-tool-icon" data-aos="fade-up">
          <SiPostgresql size={50} />
          <p>PostgreSQL</p>
        </div>
        <div className="ta-tool-icon" data-aos="fade-up">
          <SiMongodb size={50} />
          <p>MongoDB</p>
        </div>
        <div className="ta-tool-icon" data-aos="fade-up">
          <SiRedis size={50} />
          <p>Redis</p>
        </div>
        <div className="ta-tool-icon" data-aos="fade-up">
          <SiElasticsearch size={50} />
          <p>Elasticsearch</p>
        </div>
        <div className="ta-tool-icon" data-aos="fade-up">
          <SiRabbitmq size={50} />
          <p>RabbitMQ</p>
        </div>
      </div>
    </section>

    {/* Custom Development for Industries Section */}
<section className="ta-industry-section" data-aos="fade-up">
  <h2>Team-Agumentation for Your Unique Industry Needs</h2>
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
                <a class="ta-circle-button" >
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
                <a  class="ta-circle-button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="arrow-icon">
                        <path d="M8 4l8 8-8 8" fill="none" stroke="white" stroke-width="2" />
                    </svg>
                </a>
                <span class="circle-text">Hire a team</span>
            </div>
        </div>
    </div>
</section>

<section className="ta-mad-services-section" data-aos="fade-up">
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

export default TeamAgumentation;
