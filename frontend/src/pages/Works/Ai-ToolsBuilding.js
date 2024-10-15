import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { useRef } from 'react';
import { Link } from 'react-router-dom';

import '../../styles/Ai-ToolsBuilding.css'; // Import the CSS file for the Custom Development page
import Footer from '../../components/Footer'; // Import Footer component
import FAQ from '../../components/FAQ';
import ContactForm from '../../components/ContactForm';
import image1 from '../../assets/images/WORK/Ai-tools/image1.webp';
import { FaArrowRight } from 'react-icons/fa'; // Import an arrow icon
import { FaAws, FaMicrosoft, FaGoogle, FaReact, FaAngular, FaNodeJs, FaPython, FaDocker } from 'react-icons/fa';  // Add more icons as needed
import { SiMicrosoftazure, SiGooglecloud, SiTerraform,SiDatabricks, SiKubernetes, SiMysql, SiMongodb, SiPostgresql, SiRedis, SiElasticsearch, SiRabbitmq } from 'react-icons/si'; // From 'simple-icons'


const AiToolsBuilding = () => {

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
   

      {/* Uaitoolsated Hero Section with Two Circles and Image */}

 <section className="hero-section">
      <div className="ai-tools-hero-content" data-aos="fade-up">
        <h1>AI-TOOLS SOFTWARE SOLUTIONS</h1>
        <p>
          Transform the AI tools landscape with advanced software solutions that optimize processes, enhance user experiences, and drive innovation across industries.
        </p>
        <div className="ai-tools-circle-container">
          <div className="ai-tools-wing-circle ai-tools-left-circle gradient-border" data-aos="fade-up"></div>
          <div className="ai-tools-center-image-circle">
            <img
              src={image1}
              alt="AI Tools Innovation"
              className="ai-tools-center-image"
            />
          </div>
          <div className="ai-tools-wing-circle ai-tools-right-circle gradient-border" data-aos="fade-up"></div>
        </div>
        <div className="ai-tools-small-circle-wrapper" onClick={scrollToContact}>
          <div className="ai-tools-small-circle gradient-border">
            <span className="ai-tools-arrow">→</span>
          </div>
          <p className="ai-tools-small-circle-text">Contact us today</p>
        </div>
      </div>
    </section>

    {/* Development Process Section */}
    <section className="journey-section" data-aos="fade-up">
      <h2>OUR AI TOOLS DEVELOPMENT PROCESS</h2>
      <p>
        At AMTB Solutions, we specialize in AI tools development that fosters creativity, enhances productivity, and automates repetitive tasks. Here’s our approach:
      </p>

      <div className="journey-steps">
        <div className="step-item" data-aos="fade-up">
          <div className="step-number">1</div>
          <div className="step-content">
            <h3>IDEATION</h3>
            <p>Collaborate with our experts to explore AI challenges and define project objectives.</p>
          </div>
        </div>
        <div className="step-item" data-aos="fade-up">
          <div className="step-number">2</div>
          <div className="step-content">
            <h3>STRATEGY</h3>
            <p>Develop a strategic roadmap to address AI needs, ensuring scalability and innovation.</p>
          </div>
        </div>
        <div className="step-item" data-aos="fade-up">
          <div className="step-number">3</div>
          <div className="step-content">
            <h3>USER EXPERIENCE DESIGN</h3>
            <p>Design intuitive interfaces that prioritize usability for all types of users.</p>
          </div>
        </div>
        <div className="step-item">
          <div className="step-number">4</div>
          <div className="step-content">
            <h3>IMPLEMENTATION</h3>
            <p>Develop secure, scalable AI tools that meet industry standards and ensure optimal performance.</p>
          </div>
        </div>
        <div className="step-item" data-aos="fade-up">
          <div className="step-number">5</div>
          <div className="step-content">
            <h3>DEPLOYMENT</h3>
            <p>Seamlessly launch AI tools, ensuring they integrate smoothly into your current systems.</p>
          </div>
        </div>
        <div className="step-item" data-aos="fade-up">
          <div className="step-number">6</div>
          <div className="step-content">
            <h3>SUPPORT</h3>
            <p>Provide ongoing support, including maintenance and updates, to ensure your AI tools operate efficiently.</p>
          </div>
        </div>
      </div>
    </section>

    {/* Services Section */}
    <section className="ai-tools-section" data-aos="fade-up">
      <div className="custom-services-content">
        <h2>REVOLUTIONIZING WORKFLOWS THROUGH AI</h2>
        <p>
          For over a decade, we’ve been delivering impactful AI solutions, transforming the way businesses operate.
        </p>
      </div>

      <div className="services-container">
        <div className="service-item" data-aos="fade-up">
          <h3>AI TOOL DEVELOPMENT</h3>
          <p>
            Build customized AI tools that enhance productivity, automate tasks, and improve decision-making processes.
          </p>
          <div className="ss-small-circle-container" onClick={scrollToContact}>
            <div className="ss-small-circle gradient-border">
              <span className="ss-arrow">→</span>
            </div>
          </div>
          <div className="ai-tools-service-tags" data-aos="fade-up">
            <span>Data Analytics Tools</span>
            <span>Machine Learning Applications</span>
            <span>Natural Language Processing (NLP)</span>
          </div>
        </div>

        <div className="service-item" data-aos="fade-up">
          <h3>PROTOTYPING & VALIDATION</h3>
          <p>
            Test and validate AI tools to ensure they meet performance expectations and deliver value.
          </p>
          <div className="ss-small-circle-container" onClick={scrollToContact}>
            <div className="ss-small-circle gradient-border">
              <span className="ss-arrow">→</span>
            </div>
          </div>
          <div className="ai-tools-service-tags" data-aos="fade-up">
            <span>Prototyping for AI Applications</span>
            <span>Proof of Concept Development</span>
          </div>
        </div>

        <div className="service-item" data-aos="fade-up">
          <h3>UI/UX DESIGN FOR AI TOOLS</h3>
          <p>
            Design AI interfaces that are user-friendly, secure, and aligned with best practices, enhancing user engagement.
          </p>
          <div className="ss-small-circle-container" onClick={scrollToContact}>
            <div className="ss-small-circle gradient-border">
              <span className="ss-arrow">→</span>
            </div>
          </div>
          <div className="ai-tools-service-tags" data-aos="fade-up">
            <span>Streamlined UI/UX for AI Tools</span>
          </div>
        </div>

        <div className="service-item" data-aos="fade-up">
          <h3>AI-ENABLED SOLUTIONS</h3>
          <p>
            Leverage AI to develop solutions that enhance analytics, optimize workflows, and reduce costs.
          </p>
          <div className="ss-small-circle-container" onClick={scrollToContact}>
            <div className="ss-small-circle gradient-border">
              <span className="ss-arrow">→</span>
            </div>
          </div>
          <div className="ai-tools-service-tags" data-aos="fade-up">
            <span>Predictive Analytics</span>
            <span>AI-Driven Insights</span>
          </div>
        </div>
      </div>
    </section>


      {/* Technology Tools Section */}
     <section className="tools-section" data-aos="fade-up">
      <h2>Future-proof your business with advanced technology</h2>
      <p>AMTB Solution uses a platform-based approach to technology architecture,minimizing risk,cost, and development time,We Build Integrated solutions that samlessly,support your entire business ecosystem,ensuring long-term success and adaptablity</p>
     
      <div className="tools-logos">
        <div className="ai-tools-tool-icon" data-aos="fade-up">
          <FaAws size={50} />
          <p>AWS</p>
        </div>
        <div className="ai-tools-tool-icon" data-aos="fade-up">
          <SiMicrosoftazure size={50} />
          <p>Microsoft Azure</p>
        </div>
        <div className="ai-tools-tool-icon" data-aos="fade-up">
          <SiGooglecloud size={50} />
          <p>Google Cloud</p>
        </div>
        <div className="ai-tools-tool-icon" data-aos="fade-up">
          <FaReact size={50} />
          <p>React</p>
        </div>
        <div className="ai-tools-tool-icon" data-aos="fade-up">
          <FaAngular size={50} />
          <p>Angular</p>
        </div>
        <div className="ai-tools-tool-icon" data-aos="fade-up">
          <FaNodeJs size={50} />
          <p>Node.js</p>
        </div>
        <div className="ai-tools-tool-icon" data-aos="fade-up">
          <FaPython size={50} />
          <p>Python</p>
        </div>
        <div className="ai-tools-tool-icon"data-aos="fade-up">
          <SiDatabricks size={50} />
          <p>Databricks</p>
        </div>
        <div className="ai-tools-tool-icon" data-aos="fade-up">
          <FaDocker size={50} />
          <p>Docker</p>
        </div>
        <div className="ai-tools-tool-icon" data-aos="fade-up">
          <SiTerraform size={50} />
          <p>Terraform</p>
        </div>
        <div className="ai-tools-tool-icon" data-aos="fade-up">
          <SiKubernetes size={50} />
          <p>Kubernetes</p>
        </div>
        <div className="ai-tools-tool-icon" data-aos="fade-up">
          <SiMysql size={50} />
          <p>MySQL</p>
        </div>
        <div className="ai-tools-tool-icon" data-aos="fade-up">
          <SiPostgresql size={50} />
          <p>PostgreSQL</p>
        </div>
        <div className="ai-tools-tool-icon" data-aos="fade-up">
          <SiMongodb size={50} />
          <p>MongoDB</p>
        </div>
        <div className="ai-tools-tool-icon" data-aos="fade-up">
          <SiRedis size={50} />
          <p>Redis</p>
        </div>
        <div className="ai-tools-tool-icon" data-aos="fade-up">
          <SiElasticsearch size={50} />
          <p>Elasticsearch</p>
        </div>
        <div className="ai-tools-tool-icon" data-aos="fade-up">
          <SiRabbitmq size={50} />
          <p>RabbitMQ</p>
        </div>
      </div>
    </section>

    {/* Custom Development for Industries Section */}
<section className="ai-tools-industry-section" data-aos="fade-up">
  <h2>Custom AI Tools Solutions Tailored to Your Needs</h2>
  <p>
    AMTB Solution delivers AI tools software solutions that address the unique challenges of the healthcare industry, from patient management to advanced medical systems. We've built innovative solutions for clinics, hospitals, and healthcare providers across the globe.
  </p>
  <div className="industry-container">
    <div className="industry-column">
      <div className="industry-box" data-aos="fade-up">
        <Link onClick={scrollToContact}>
          <span>Hospital Management Systems <FaArrowRight /></span>
        </Link>
      </div>
      <div className="industry-box" data-aos="fade-up">
        <Link onClick={scrollToContact}>
          <span>Telemedicine Solutions <FaArrowRight /></span>
        </Link>
      </div>
      <div className="industry-box" data-aos="fade-up">
        <Link onClick={scrollToContact}>
          <span>Clinical Trials Management <FaArrowRight /></span>
        </Link>
      </div>
    </div>
    <div className="industry-column">
      <div className="industry-box" data-aos="fade-up">
        <Link onClick={scrollToContact}>
          <span>Patient Portals <FaArrowRight /></span>
        </Link>
      </div>
      <div className="industry-box" data-aos="fade-up">
        <Link onClick={scrollToContact}>
          <span>Electronic Health Records <FaArrowRight /></span>
        </Link>
      </div>
      <div className="industry-box" data-aos="fade-up">
        <Link onClick={scrollToContact}>
          <span>Medical Devices Integration <FaArrowRight /></span>
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
                <a class="aitools-circle-button" >
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
                <a  class="aitools-circle-button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="arrow-icon">
                        <path d="M8 4l8 8-8 8" fill="none" stroke="white" stroke-width="2" />
                    </svg>
                </a>
                <span class="circle-text">Hire a team</span>
            </div>
        </div>
    </div>
</section>

<section className="ai-tools-mad-services-section" data-aos="fade-up">
    <div className="mad-services-content">
        <h2>COMPREHENSIVE RISK ASSESSMENT</h2>
        <p>
           We tackle potential risks upfront during our product discovery phase. By addressing value, usability, and feasibility risks, we help you build a solution that meets market needs and your business goals.
        </p>
    </div>

    <div className="mad-services-container" data-aos="fade-up">
        <div className="mad-service-item">
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

export default AiToolsBuilding;
