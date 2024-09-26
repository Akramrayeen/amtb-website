import React from 'react';
import Header from '../../components/Navbar'; // Import the Header component
import '../../styles/CustomDevelopment.css'; // Import the CSS file for the Custom Development page
import Footer from '../../components/Footer'; // Import Footer component
import FAQ from '../../components/FAQ';
import ContactForm from '../../components/ContactForm';
import image1 from '../../assets/images/Services/customedevelopment/image1.jpg';
import { FaArrowRight } from 'react-icons/fa'; // Import an arrow icon
import { FaAws, FaMicrosoft, FaGoogle, FaReact, FaAngular, FaNodeJs, FaPython, FaDocker } from 'react-icons/fa';  // Add more icons as needed
import { SiMicrosoftazure, SiGooglecloud, SiTerraform,SiDatabricks, SiKubernetes, SiMysql, SiMongodb, SiPostgresql, SiRedis, SiElasticsearch, SiRabbitmq } from 'react-icons/si'; // From 'simple-icons'


const CustomDevelopment = () => {
  return (
    <div className="container">
      <Header /> {/* Use the imported Header component */}

      {/* Updated Hero Section with Two Circles and Image */}
   <section className="hero-section">
  <div className="hero-content">
    <h1>INNOVATIVE SOFTWARE SOLUTIONS</h1>
    <p>
      AMTB Solutions brings cutting-edge innovation to your business through
      tailored software solutions, enhancing efficiency and driving growth.
    </p>
    <div className="circle-container">
      <div className="wing-circle left-circle gradient-border"></div>
      <div className="center-image-circle">
        <img
          src={image1}
          alt="Innovative Solution"
          className="center-image"
        />
      </div>
      <div className="wing-circle right-circle gradient-border"></div>
    </div>
    <div className="small-circle-wrapper">
      <div className="small-circle gradient-border">
        <span className="arrow">→</span>
      </div>
      <p className="small-circle-text">Get in touch with us</p>
    </div>
  </div>
</section>


    

      <section className="journey-section">
        <h2>OUR DEVELOPMENT PROCESS</h2>
        <p>
          At AMTB Solutions, we combine expertise and technology to deliver personalized software solutions that push the boundaries of innovation. Here's how we do it:
        </p>

        <div className="journey-steps">
          <div className="step-item">
            <div className="step-number">1</div>
            <div className="step-content">
              <h3>IDEATION</h3>
              <p>Brainstorm and define project scope, requirements, and technical challenges with our expert team.</p>
            </div>
          </div>
          <div className="step-item">
            <div className="step-number">2</div>
            <div className="step-content">
              <h3>STRATEGY</h3>
              <p>Map out a strategic development plan, focusing on timelines, resources, and goals.</p>
            </div>
          </div>
          <div className="step-item">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3>USER EXPERIENCE DESIGN</h3>
              <p>Design user-centered interfaces and experiences that are intuitive and engaging.</p>
            </div>
          </div>
          <div className="step-item">
            <div className="step-number">4</div>
            <div className="step-content">
              <h3>IMPLEMENTATION</h3>
              <p>Develop, test, and iterate robust systems, following best practices to ensure high performance and reliability.</p>
            </div>
          </div>
          <div className="step-item">
            <div className="step-number">5</div>
            <div className="step-content">
              <h3>DEPLOYMENT</h3>
              <p>Launch the solution and ensure it operates seamlessly within your environment.</p>
            </div>
          </div>
          <div className="step-item">
            <div className="step-number">6</div>
            <div className="step-content">
              <h3>SUPPORT</h3>
              <p>Provide ongoing maintenance, upgrades, and support to keep your solution running smoothly.</p>
            </div>
          </div>
        </div>
      </section>


      {/* Services Section */}
      <section className="custom-services-section">
        <div className="custom-services-content">
          <h2>OUR SOFTWARE DEVELOPMENT SERVICES</h2>
          <p>
            We offer a range of services tailored to meet the diverse needs of industries worldwide, from healthcare to FinTech. Our team has developed over 80 successful applications.
          </p>
        </div>

        <div className="services-container">
          <div className="service-item">
            <h3>WEB APPLICATION DEVELOPMENT</h3>
            <p>
              We build customized web applications to enhance your business's digital presence, including progressive web apps and cloud-native solutions.
            </p>

                 <div className="ss-small-circle-container">
                 <div className="ss-small-circle gradient-border">
                 <span className="ss-arrow">→</span>
                 </div>
                 </div>

            <div className="service-tags">
              <span>Cloud-native applications</span>
              <span>Progressive Web Apps (PWA)</span>
              <span>Single-page applications (SPA)</span>
            </div>
          </div>

          <div className="service-item">
            <h3>MOBILE APP DEVELOPMENT</h3>
            <p>
              Our mobile app services bring your ideas to life with native, cross-platform, or hybrid apps designed for exceptional user experiences.
            </p>
             <div className="ss-small-circle-container">
                 <div className="ss-small-circle gradient-border">
                 <span className="ss-arrow">→</span>
                 </div>
                 </div>

            <div className="service-tags">
              <span>Native iOS/Android apps</span>
              <span>Cross-platform apps</span>
              <span>Hybrid apps</span>
            </div>
          </div>

          <div className="service-item">
            <h3>AI-POWERED MVP DEVELOPMENT</h3>
            <p>
              We accelerate your product development using AI tools to deliver fast and cost-effective MVPs, getting your product to market efficiently.
            </p>
             <div className="ss-small-circle-container">
                 <div className="ss-small-circle gradient-border">
                 <span className="ss-arrow">→</span>
                 </div>
                 </div>

            <div className="service-tags">
              <span>Web apps</span>
              <span>Mobile apps</span>
              <span>Code refactoring</span>
              <span>Test automation</span>
            </div>
          </div>

          <div className="service-item">
            <h3>SOFTWARE MODERNIZATION</h3>
            <p>
              Modernize your existing software with our services, from UI/UX redesigns to cloud migrations and technical upgrades.
            </p>
             <div className="ss-small-circle-container">
                 <div className="ss-small-circle gradient-border">
                 <span className="ss-arrow">→</span>
                 </div>
                 </div>

            <div className="service-tags">
              <span>UI/UX redesign</span>
              <span>Cloud integration</span>
              <span>Tech modernization</span>
            </div>
          </div>

          <div className="service-item">
            <h3>CLOUD ENGINEERING SERVICES</h3>
            <p>
              We offer cloud engineering services to help businesses migrate, manage, and optimize their cloud solutions.
            </p>
             <div className="ss-small-circle-container">
                 <div className="ss-small-circle gradient-border">
                 <span className="ss-arrow">→</span>
                 </div>
                 </div>

            <div className="service-tags">
              <span>Service-based architecture</span>
              <span>CI/CD & automation</span>
              <span>Container orchestration</span>
            </div>
          </div>
        </div>
      </section>


      {/* Technology Tools Section */}
     <section className="tools-section">
      <h2>Future-proof your business with advanced technology</h2>
      <p>AMTB Solution uses a platform-based approach to technology architecture,minimizing risk,cost, and development time,We Build Integrated solutions that samlessly,support your entire business ecosystem,ensuring long-term success and adaptablity</p>
     
      <div className="tools-logos">
        <div className="tool-icon">
          <FaAws size={50} />
          <p>AWS</p>
        </div>
        <div className="tool-icon">
          <SiMicrosoftazure size={50} />
          <p>Microsoft Azure</p>
        </div>
        <div className="tool-icon">
          <SiGooglecloud size={50} />
          <p>Google Cloud</p>
        </div>
        <div className="tool-icon">
          <FaReact size={50} />
          <p>React</p>
        </div>
        <div className="tool-icon">
          <FaAngular size={50} />
          <p>Angular</p>
        </div>
        <div className="tool-icon">
          <FaNodeJs size={50} />
          <p>Node.js</p>
        </div>
        <div className="tool-icon">
          <FaPython size={50} />
          <p>Python</p>
        </div>
        <div className="tool-icon">
          <SiDatabricks size={50} />
          <p>Databricks</p>
        </div>
        <div className="tool-icon">
          <FaDocker size={50} />
          <p>Docker</p>
        </div>
        <div className="tool-icon">
          <SiTerraform size={50} />
          <p>Terraform</p>
        </div>
        <div className="tool-icon">
          <SiKubernetes size={50} />
          <p>Kubernetes</p>
        </div>
        <div className="tool-icon">
          <SiMysql size={50} />
          <p>MySQL</p>
        </div>
        <div className="tool-icon">
          <SiPostgresql size={50} />
          <p>PostgreSQL</p>
        </div>
        <div className="tool-icon">
          <SiMongodb size={50} />
          <p>MongoDB</p>
        </div>
        <div className="tool-icon">
          <SiRedis size={50} />
          <p>Redis</p>
        </div>
        <div className="tool-icon">
          <SiElasticsearch size={50} />
          <p>Elasticsearch</p>
        </div>
        <div className="tool-icon">
          <SiRabbitmq size={50} />
          <p>RabbitMQ</p>
        </div>
      </div>
    </section>

    {/* Custom Development for Industries Section */}
 <section className="industry-section">
      <h2>Custom Development for Your Unique Industry Needs</h2>
      <p>At AMTB Solution,We offer a comprehensive range of sutom software development services,having successfully delivered 180 tailored application.Our experties spans various domains,including healthcare,education and FinTech,ensuring that we meet the unique needs of each industry.</p>
      <div className="industry-container">
        <div className="industry-column">
          <div className="industry-box">
            <span>Healthcare <FaArrowRight /></span>
          </div>
          <div className="industry-box">
            <span>Education <FaArrowRight /></span>
          </div>
          <div className="industry-box">
            <span>HR & Recruitment <FaArrowRight /></span>
          </div>
          <div className="industry-box">
            <span>FinTech <FaArrowRight /></span>
          </div>
        </div>
        
        {/* Vertical Line */}
        <div className="vertical-line"></div>

        <div className="industry-column">
          <div className="industry-box">
            <span>Real Estate <FaArrowRight /></span>
          </div>
          <div className="industry-box">
            <span>Advertising <FaArrowRight /></span>
          </div>
          <div className="industry-box">
            <span>Logistics <FaArrowRight /></span>
          </div>
          <div className="industry-box">
            <span>Energy Management <FaArrowRight /></span>
          </div>
        </div>
      </div>
    </section>

 <section class="options-section">
    <h2>Choose Your Service Option</h2>
    <p>AMTB Solutions offer Two Flexible engagement models to suit your needs.</p>
    <div class="options-container">
        <div class="option-box">
            <h3>Product Development</h3>
            <p>Launch your new product with our dedicated cross-functional team, perfect for those without an in-house development team.</p>
            <div class="circle-with-text">
                <a href="ContactForm" class="circle-button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="arrow-icon">
                        <path d="M8 4l8 8-8 8" fill="none" stroke="white" stroke-width="2" />
                    </svg>
                </a>
                <span class="circle-text">Start your project</span>
            </div>
        </div>
        <div class="option-box">
            <h3>Team Augmentation</h3>
            <p>Supplement your existing team with our experienced software developers to meet your technology needs.</p>
            <div class="circle-with-text">
                <a href="ContactForm" class="circle-button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="arrow-icon">
                        <path d="M8 4l8 8-8 8" fill="none" stroke="white" stroke-width="2" />
                    </svg>
                </a>
                <span class="circle-text">Hire a team</span>
            </div>
        </div>
    </div>
</section>

<section className="mad-services-section">
    <div className="mad-services-content">
        <h2>OUR SOFTWARE DEVELOPMENT SERVICES</h2>
        <p>
            We offer a range of services tailored to meet the diverse needs of industries worldwide, from healthcare to FinTech. Our team has developed over 80 successful applications.
        </p>
    </div>

    <div className="mad-services-container">
        <div className="mad-service-item">
            <h3>WEB APPLICATION DEVELOPMENT</h3>
            <p>
                We build customized web applications to enhance your business's digital presence, including progressive web apps and cloud-native solutions.
            </p>
            <div className="mad-circle-container">
                <div className="mad-small-circle gradient-border">
                    <span className="mad-arrow">→</span>
                </div>
            </div>
        </div>

        <div className="mad-service-item">
            <h3>MOBILE APP DEVELOPMENT</h3>
            <p>
                Our mobile app services bring your ideas to life with native, cross-platform, or hybrid apps designed for exceptional user experiences.
            </p>
            <div className="mad-circle-container">
                <div className="mad-small-circle gradient-border">
                    <span className="mad-arrow">→</span>
                </div>
            </div>
        </div>

        <div className="mad-service-item">
            <h3>AI-POWERED MVP DEVELOPMENT</h3>
            <p>
                We accelerate your product development using AI tools to deliver fast and cost-effective MVPs, getting your product to market efficiently.
            </p>
            <div className="mad-circle-container">
                <div className="mad-small-circle gradient-border">
                    <span className="mad-arrow">→</span>
                </div>
            </div>
        </div>

        <div className="mad-service-item">
            <h3>SOFTWARE MODERNIZATION</h3>
            <p>
                Modernize your existing software with our services, from UI/UX redesigns to cloud migrations and technical upgrades.
            </p>
            <div className="mad-circle-container">
                <div className="mad-small-circle gradient-border">
                    <span className="mad-arrow">→</span>
                </div>
            </div>
        </div>

        <div className="mad-service-item">
            <h3>CLOUD ENGINEERING SERVICES</h3>
            <p>
                We offer cloud engineering services to help businesses migrate, manage, and optimize their cloud solutions.
            </p>
            <div className="mad-circle-container">
                <div className="mad-small-circle gradient-border">
                    <span className="mad-arrow">→</span>
                </div>
            </div>
        </div>
    </div>
</section>







     
            {/* Insert the FAQ component */}
            <FAQ />

            <div className="contact-container">
                <h2>Let's Bring Your Idea to Life</h2>
                <ContactForm className="home-contact-form" />
            </div>  

      <Footer /> {/* Use the imported Footer component */}
    </div>
  );
};

export default CustomDevelopment;
