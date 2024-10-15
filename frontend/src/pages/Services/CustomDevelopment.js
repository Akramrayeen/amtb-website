import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/CustomDevelopment.css'; // Import the CSS file for the Custom Development page
import Footer from '../../components/Footer'; // Import Footer component
import FAQ from '../../components/FAQ';
import ContactForm from '../../components/ContactForm';
import image1 from '../../assets/images/Services/customedevelopment/image1.jpg';
import { FaArrowRight } from 'react-icons/fa'; // Import an arrow icon
import { FaAws, FaMicrosoft, FaGoogle, FaReact, FaAngular, FaNodeJs, FaPython, FaDocker } from 'react-icons/fa';  // Add more icons as needed
import { SiMicrosoftazure, SiGooglecloud, SiTerraform,SiDatabricks, SiKubernetes, SiMysql, SiMongodb, SiPostgresql, SiRedis, SiElasticsearch, SiRabbitmq } from 'react-icons/si'; // From 'simple-icons'


const CustomDevelopment = () => {
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
    
      {/* Updated Hero Section with Two Circles and Image */}
   <section className="hero-section" data-aos="fade-up">
  <div className="hero-content">
    <h1>INNOVATIVE SOFTWARE SOLUTIONS</h1>
    <p>
      AMTB Solutions brings cutting-edge innovation to your business through
      tailored software solutions, enhancing efficiency and driving growth.
    </p>
    <div className="circle-container">
      <div className="wing-circle left-circle gradient-border" data-aos="fade-up"></div>
      <div className="center-image-circle">
        <img
          src={image1}
          alt="Innovative Solution"
          className="center-image"
        />
      </div>
      <div className="wing-circle right-circle gradient-border" data-aos="fade-up"></div>
    </div>
    <div className="small-circle-wrapper" onClick={scrollToContact}>
      <div className="small-circle gradient-border">
        <span className="arrow">→</span>
      </div>
      <p className="small-circle-text">Get in touch with us</p>
    </div>
  </div>
</section>


    

      <section className="journey-section" data-aos="fade-up">
        <h2>OUR DEVELOPMENT PROCESS</h2>
        <p>
          At AMTB Solutions, we combine expertise and technology to deliver personalized software solutions that push the boundaries of innovation. Here's how we do it:
        </p>

        <div className="journey-steps" data-aos="fade-up">
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
      <section className="custom-services-section" data-aos="fade-up">
        <div className="custom-services-content" data-aos="fade-up">
          <h2>OUR SOFTWARE DEVELOPMENT SERVICES</h2>
          <p>
            We offer a range of services tailored to meet the diverse needs of industries worldwide, from healthcare to FinTech. Our team has developed over 80 successful applications.
          </p>
        </div>

        <div className="services-container">
          <div className="service-item" data-aos="fade-up">
            <h3>WEB APPLICATION DEVELOPMENT</h3>
            <p>
              We build customized web applications to enhance your business's digital presence, including progressive web apps and cloud-native solutions.
            </p>

                 <div className="ss-small-circle-container"  onClick={scrollToContact}>
                 <div className="ss-small-circle gradient-border">
                 <span className="ss-arrow">→</span>
                 </div>
                 </div>

            <div className="service-tags" data-aos="fade-up">
              <span>Cloud-native applications</span>
              <span>Progressive Web Apps (PWA)</span>
              <span>Single-page applications (SPA)</span>
            </div>
          </div>

          <div className="service-item" data-aos="fade-up">
            <h3>MOBILE APP DEVELOPMENT</h3>
            <p>
              Our mobile app services bring your ideas to life with native, cross-platform, or hybrid apps designed for exceptional user experiences.
            </p>
             <div className="ss-small-circle-container"  onClick={scrollToContact}>
                 <div className="ss-small-circle gradient-border">
                 <span className="ss-arrow">→</span>
                 </div>
                 </div>

            <div className="service-tags" data-aos="fade-up">
              <span>Native iOS/Android apps</span>
              <span>Cross-platform apps</span>
              <span>Hybrid apps</span>
            </div>
          </div>

          <div className="service-item" data-aos="fade-up">
            <h3>AI-POWERED MVP DEVELOPMENT</h3>
            <p>
              We accelerate your product development using AI tools to deliver fast and cost-effective MVPs, getting your product to market efficiently.
            </p>
             <div className="ss-small-circle-container"  onClick={scrollToContact}>
                 <div className="ss-small-circle gradient-border">
                 <span className="ss-arrow">→</span>
                 </div>
                 </div>

            <div className="service-tags" data-aos="fade-up">
              <span>Web apps</span>
              <span>Mobile apps</span>
              <span>Code refactoring</span>
              <span>Test automation</span>
            </div>
          </div>

          <div className="service-item" data-aos="fade-up">
            <h3>SOFTWARE MODERNIZATION</h3>
            <p>
              Modernize your existing software with our services, from UI/UX redesigns to cloud migrations and technical upgrades.
            </p>
             <div className="ss-small-circle-container"  onClick={scrollToContact}>
                 <div className="ss-small-circle gradient-border">
                 <span className="ss-arrow">→</span>
                 </div>
                 </div>

            <div className="service-tags" data-aos="fade-up">
              <span>UI/UX redesign</span>
              <span>Cloud integration</span>
              <span>Tech modernization</span>
            </div>
          </div>

          <div className="service-item" data-aos="fade-up">
            <h3>CLOUD ENGINEERING SERVICES</h3>
            <p>
              We offer cloud engineering services to help businesses migrate, manage, and optimize their cloud solutions.
            </p>
             <div className="ss-small-circle-container"  onClick={scrollToContact}>
                 <div className="ss-small-circle gradient-border">
                 <span className="ss-arrow">→</span>
                 </div>
                 </div>

            <div className="service-tags" data-aos="fade-up">
              <span>Service-based architecture</span>
              <span>CI/CD & automation</span>
              <span>Container orchestration</span>
            </div>
          </div>
        </div>
      </section>


      {/* Technology Tools Section */}
     <section className="tools-section" data-aos="fade-up">
      <h2>Future-proof your business with advanced technology</h2>
      <p>AMTB Solution uses a platform-based approach to technology architecture,minimizing risk,cost, and development time,We Build Integrated solutions that samlessly,support your entire business ecosystem,ensuring long-term success and adaptablity</p>
     
      <div className="tools-logos">
        <div className="tool-icon" data-aos="fade-up">
          <FaAws size={50} />
          <p>AWS</p>
        </div>
        <div className="tool-icon" data-aos="fade-up">
          <SiMicrosoftazure size={50} />
          <p>Microsoft Azure</p>
        </div>
        <div className="tool-icon" data-aos="fade-up">
          <SiGooglecloud size={50} />
          <p>Google Cloud</p>
        </div>
        <div className="tool-icon" data-aos="fade-up">
          <FaReact size={50} />
          <p>React</p>
        </div>
        <div className="tool-icon" data-aos="fade-up">
          <FaAngular size={50} />
          <p>Angular</p>
        </div>
        <div className="tool-icon" data-aos="fade-up">
          <FaNodeJs size={50} />
          <p>Node.js</p>
        </div>
        <div className="tool-icon" data-aos="fade-up">
          <FaPython size={50} />
          <p>Python</p>
        </div>
        <div className="tool-icon" data-aos="fade-up">
          <SiDatabricks size={50} />
          <p>Databricks</p>
        </div>
        <div className="tool-icon" data-aos="fade-up">
          <FaDocker size={50} />
          <p>Docker</p>
        </div>
        <div className="tool-icon" data-aos="fade-up">
          <SiTerraform size={50} />
          <p>Terraform</p>
        </div>
        <div className="tool-icon" data-aos="fade-up">
          <SiKubernetes size={50} />
          <p>Kubernetes</p>
        </div>
        <div className="tool-icon" data-aos="fade-up">
          <SiMysql size={50} />
          <p>MySQL</p>
        </div>
        <div className="tool-icon" data-aos="fade-up">
          <SiPostgresql size={50} />
          <p>PostgreSQL</p>
        </div>
        <div className="tool-icon" data-aos="fade-up">
          <SiMongodb size={50} />
          <p>MongoDB</p>
        </div>
        <div className="tool-icon" data-aos="fade-up">
          <SiRedis size={50} />
          <p>Redis</p>
        </div>
        <div className="tool-icon" data-aos="fade-up">
          <SiElasticsearch size={50} />
          <p>Elasticsearch</p>
        </div>
        <div className="tool-icon"  data-aos="fade-up">
          <SiRabbitmq size={50} />
          <p>RabbitMQ</p>
        </div>
      </div>
    </section>

    {/* Custom Development for Industries Section */}
 <section className="industry-section" data-aos="fade-up" >
      <h2>Custom Development for Your Unique Industry Needs</h2>
      <p>At AMTB Solution,We offer a comprehensive range of sutom software development services,having successfully delivered 180 tailored application.Our experties spans various domains,including healthcare,education and FinTech,ensuring that we meet the unique needs of each industry.</p>
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

    <div className="industry-column" >
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
            <div class="circle-with-text"  onClick={scrollToContact}>
                <a class="circle-button">
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
            <div class="circle-with-text"  onClick={scrollToContact}>
                <a class="circle-button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="arrow-icon">
                        <path d="M8 4l8 8-8 8" fill="none" stroke="white" stroke-width="2" />
                    </svg>
                </a>
                <span class="circle-text">Hire a team</span>
            </div>
        </div>
    </div>
</section>

<section className="mad-services-section" data-aos="fade-up">
    <div className="mad-services-content">
        <h2>OUR SOFTWARE DEVELOPMENT SERVICES</h2>
        <p>
            We offer a range of services tailored to meet the diverse needs of industries worldwide, from healthcare to FinTech. Our team has developed over 80 successful applications.
        </p>
    </div>

    <div className="mad-services-container" data-aos="fade-up">
        <div className="mad-service-item" data-aos="fade-up">
            <h3>WEB APPLICATION DEVELOPMENT</h3>
            <p>
                We build customized web applications to enhance your business's digital presence, including progressive web apps and cloud-native solutions.
            </p>
            <div className="mad-circle-container"  onClick={scrollToContact}>
                <div className="mad-small-circle gradient-border">
                    <span className="mad-arrow">→</span>
                </div>
            </div>
        </div>

        <div className="mad-service-item" data-aos="fade-up">
            <h3>MOBILE APP DEVELOPMENT</h3>
            <p>
                Our mobile app services bring your ideas to life with native, cross-platform, or hybrid apps designed for exceptional user experiences.
            </p>
            <div className="mad-circle-container"  onClick={scrollToContact}>
                <div className="mad-small-circle gradient-border">
                    <span className="mad-arrow">→</span>
                </div>
            </div>
        </div>

        <div className="mad-service-item" data-aos="fade-up">
            <h3>AI-POWERED MVP DEVELOPMENT</h3>
            <p>
                We accelerate your product development using AI tools to deliver fast and cost-effective MVPs, getting your product to market efficiently.
            </p>
            <div className="mad-circle-container"  onClick={scrollToContact}>
                <div className="mad-small-circle gradient-border">
                    <span className="mad-arrow">→</span>
                </div>
            </div>
        </div>

        <div className="mad-service-item" data-aos="fade-up">
            <h3>SOFTWARE MODERNIZATION</h3>
            <p>
                Modernize your existing software with our services, from UI/UX redesigns to cloud migrations and technical upgrades.
            </p>
            <div className="mad-circle-container"  onClick={scrollToContact}>
                <div className="mad-small-circle gradient-border">
                    <span className="mad-arrow">→</span>
                </div>
            </div>
        </div>

        <div className="mad-service-item" data-aos="fade-up">
            <h3>CLOUD ENGINEERING SERVICES</h3>
            <p>
                We offer cloud engineering services to help businesses migrate, manage, and optimize their cloud solutions.
            </p>
            <div className="mad-circle-container"  onClick={scrollToContact}>
                <div className="mad-small-circle gradient-border">
                    <span className="mad-arrow">→</span>
                </div>
            </div>
        </div>
    </div>
</section>

  {/* Insert the FAQ component */}
      <FAQ />
      <ContactForm /> 
      <Footer /> {/* Use the imported Footer component */}
    </div>
  );
};

export default CustomDevelopment;
