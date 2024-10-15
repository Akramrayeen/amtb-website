import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { Link } from 'react-router-dom';
import { useRef } from 'react';

import '../../styles/UiDesign.css'; // Import the CSS file for the Custom Development page
import Footer from '../../components/Footer'; // Import Footer component
import FAQ from '../../components/FAQ';
import ContactForm from '../../components/ContactForm';
import image1 from '../../assets/images/Services/uidesign/image2.webp';
import { FaArrowRight } from 'react-icons/fa'; // Import an arrow icon
import { FaAws, FaMicrosoft, FaGoogle, FaReact, FaAngular, FaNodeJs, FaPython, FaDocker } from 'react-icons/fa';  // Add more icons as needed
import { SiMicrosoftazure, SiGooglecloud, SiTerraform,SiDatabricks, SiKubernetes, SiMysql, SiMongodb, SiPostgresql, SiRedis, SiElasticsearch, SiRabbitmq } from 'react-icons/si'; // From 'simple-icons'


const UiDesign = () => { const contactRef = useRef(null);

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


      {/* Uuiated Hero Section with Two Circles and Image */}
   <section className="hero-section">
  <div className="ui-hero-content" data-aos="fade-up">
    <h1>INTUITIVE UI/UX DESIGN SOLUTIONS</h1>
      <p>
        Craft user experiences that captivate, engage, and convert. Our design philosophy revolves around aesthetics, functionality, and user satisfaction.
      </p>
    <div className="ui-circle-container">
      <div className="ui-wing-circle ui-left-circle gradient-border" data-aos="fade-up"></div>
      <div className="ui-center-image-circle">
        <img
          src={image1}
          alt="Innovative Solution"
          className="ui-center-image"
        />
      </div>
      <div className="ui-wing-circle ui-right-circle gradient-border" data-aos="fade-up"></div>
    </div>
    <div className="ui-small-circle-wrapper" onClick={scrollToContact}>
      <div className="ui-small-circle gradient-border">
        <span className="ui-arrow">→</span>
      </div>
      <p className="ui-small-circle-text">Get in touch with us</p>
    </div>
  </div>
</section>


    

      <section className="journey-section" data-aos="fade-up">
       <h2>OUR UI/UX DESIGN PROCESS</h2>
    <p>
      At AMTB Solutions, we believe that exceptional design is a balance between creativity and usability. Our team follows a meticulous process to ensure that every design decision is intentional and user-focused.
    </p>

        <div className="journey-steps">
          <div className="step-item" data-aos="fade-up">
            <div className="step-number">1</div>
            <div className="step-content">
             <h3>RESEARCH & DISCOVERY</h3>
          <p>Understanding your users' needs through research and insights to create tailored design solutions.</p>
         </div>
          </div>
          <div className="step-item" data-aos="fade-up">
            <div className="step-number">2</div>
            <div className="step-content">
              <h3>WIREFRAMING & PROTOTYPING</h3>
          <p>Create wireframes and prototypes to visualize user interactions and design functionality.</p>
        </div>
          </div>
          <div className="step-item" data-aos="fade-up">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3>USER INTERFACE DESIGN</h3>
          <p>Design visually engaging interfaces that prioritize user experience, brand identity, and usability.</p>
         </div>
          </div>
          <div className="step-item" data-aos="fade-up">
            <div className="step-number">4</div>
            <div className="step-content">
              <h3>USER TESTING & ITERATION</h3>
          <p>Validate designs through user testing and make necessary adjustments for optimal results.</p>
        </div>
          </div>
          <div className="step-item" data-aos="fade-up">
            <div className="step-number">5</div>
            <div className="step-content">
              <h3>LAUNCH & SUPPORT</h3>
          <p>Launch the design across platforms, ensuring continuous improvements based on user feedback.</p>
           </div>
          </div>
        
        </div>
      </section>


      {/* Services Section */}
      <section className="ui-services-section" data-aos="fade-up">
         <div className="custom-services-content">
          
           <h2>COMPREHENSIVE UI/UX DESIGN SERVICES</h2>
         <p>
           Transform your vision into reality with our design services, ensuring user engagement and satisfaction at every step.
         </p>
        </div>

        <div className="services-container">
          <div className="service-item" data-aos="fade-up">
           <h3>USER RESEARCH</h3>
        <p>
          We analyze your target audience to design experiences that are not only beautiful but also intuitive and user-centric.
        </p>

                 <div className="ss-small-circle-container" onClick={scrollToContact}>
                 <div className="ss-small-circle gradient-border">
                 <span className="ss-arrow">→</span>
                 </div>
                 </div>

            <div className="ui-service-tags" data-aos="fade-up">
             <span>Behavioral Insights</span>
          <span>Persona Development</span>
          <span>User Journey Mapping</span>
            </div>
          </div>

          <div className="service-item" data-aos="fade-up">
           <h3>INTERACTION DESIGN</h3>
        <p>
          Design smooth and responsive interactions that enhance the overall user experience, making every click meaningful.
        </p>
             <div className="ss-small-circle-container" onClick={scrollToContact}>
                 <div className="ss-small-circle gradient-border">
                 <span className="ss-arrow">→</span>
                 </div>
                 </div>

            <div className="ui-service-tags" data-aos="fade-up">
             <span>Interactive Prototypes</span>
          <span>Microinteractions</span>
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

            <div className="ui-service-tags" data-aos="fade-up">
              <span>Streamlined UI/UX for Web and Mobile</span>

            </div>
          </div>

          <div className="service-item" data-aos="fade-up">
           <h3>VISUAL DESIGN</h3>
        <p>
          Elevate your brand through stunning visuals that create memorable and engaging digital experiences.
        </p>
             <div className="ss-small-circle-container" onClick={scrollToContact}>
                 <div className="ss-small-circle gradient-border">
                 <span className="ss-arrow">→</span>
                 </div>
                 </div>

            <div className="ui-service-tags" data-aos="fade-up">
              <span>Brand Integration</span>
          <span>Pixel-Perfect Design</span>
            </div>
          </div>
        </div>
      
      </section>


      {/* Technology Tools Section */}
     <section className="tools-section" data-aos="fade-up">
      <h2>Future-proof your business with advanced technology</h2>
      <p>AMTB Solution uses a platform-based approach to technology architecture,minimizing risk,cost, and development time,We Build Integrated solutions that samlessly,support your entire business ecosystem,ensuring long-term success and adaptablity</p>
     
      <div className="tools-logos">
        <div className="ui-tool-icon" data-aos="fade-up">
          <FaAws size={50} />
          <p>AWS</p>
        </div>
        <div className="ui-tool-icon" data-aos="fade-up">
          <SiMicrosoftazure size={50} />
          <p>Microsoft Azure</p>
        </div>
        <div className="ui-tool-icon" data-aos="fade-up">
          <SiGooglecloud size={50} />
          <p>Google Cloud</p>
        </div>
        <div className="ui-tool-icon" data-aos="fade-up">
          <FaReact size={50} />
          <p>React</p>
        </div>
        <div className="ui-tool-icon" data-aos="fade-up">
          <FaAngular size={50} />
          <p>Angular</p>
        </div>
        <div className="ui-tool-icon" data-aos="fade-up">
          <FaNodeJs size={50} />
          <p>Node.js</p>
        </div>
        <div className="ui-tool-icon" data-aos="fade-up">
          <FaPython size={50} />
          <p>Python</p>
        </div>
        <div className="ui-tool-icon" data-aos="fade-up">
          <SiDatabricks size={50} />
          <p>Databricks</p>
        </div>
        <div className="ui-tool-icon" data-aos="fade-up">
          <FaDocker size={50} />
          <p>Docker</p>
        </div>
        <div className="ui-tool-icon" data-aos="fade-up">
          <SiTerraform size={50} />
          <p>Terraform</p>
        </div>
        <div className="ui-tool-icon" data-aos="fade-up">
          <SiKubernetes size={50} />
          <p>Kubernetes</p>
        </div>
        <div className="ui-tool-icon" data-aos="fade-up">
          <SiMysql size={50} />
          <p>MySQL</p>
        </div>
        <div className="ui-tool-icon" data-aos="fade-up">
          <SiPostgresql size={50} />
          <p>PostgreSQL</p>
        </div>
        <div className="ui-tool-icon" data-aos="fade-up">
          <SiMongodb size={50} />
          <p>MongoDB</p>
        </div>
        <div className="ui-tool-icon" data-aos="fade-up">
          <SiRedis size={50} />
          <p>Redis</p>
        </div>
        <div className="ui-tool-icon" data-aos="fade-up">
          <SiElasticsearch size={50} />
          <p>Elasticsearch</p>
        </div>
        <div className="ui-tool-icon" data-aos="fade-up">
          <SiRabbitmq size={50} />
          <p>RabbitMQ</p>
        </div>
      </div>
    </section>

    {/* Custom Development for Industries Section */}
<section className="ui-industry-section" data-aos="fade-up">
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
                <a class="ui-circle-button" >
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
                <a  class="ui-circle-button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="arrow-icon">
                        <path d="M8 4l8 8-8 8" fill="none" stroke="white" stroke-width="2" />
                    </svg>
                </a>
                <span class="circle-text">Hire a team</span>
            </div>
        </div>
    </div>
</section>

<section className="ui-mad-services-section" data-aos="fade-up">
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

export default UiDesign;
