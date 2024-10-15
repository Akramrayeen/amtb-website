import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { useRef } from 'react';
import { Link } from 'react-router-dom';

import '../../styles/Logistics.css'; // Import the CSS file for the Custom Development page
import Footer from '../../components/Footer'; // Import Footer component
import FAQ from '../../components/FAQ';
import ContactForm from '../../components/ContactForm';
import image1 from '../../assets/images/INDUSTRY/Logistics/image1.webp';
import { FaArrowRight } from 'react-icons/fa'; // Import an arrow icon
import { FaAws, FaMicrosoft, FaGoogle, FaReact, FaAngular, FaNodeJs, FaPython, FaDocker } from 'react-icons/fa';  // Add more icons as needed
import { SiMicrosoftazure, SiGooglecloud, SiTerraform,SiDatabricks, SiKubernetes, SiMysql, SiMongodb, SiPostgresql, SiRedis, SiElasticsearch, SiRabbitmq } from 'react-icons/si'; // From 'simple-icons'


const Logistics = () =>{

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
      

      {/* Ulogisticsated Hero Section with Two Circles and Image */}


<section className="hero-section">
      <div className="logistics-hero-content" data-aos="fade-up">
        <h1>LOGISTICS SOFTWARE SOLUTIONS</h1>
        <p>
          Revolutionize the logistics industry with software solutions that optimize supply chain management, improve efficiency, and enhance operational control.
        </p>
        <div className="logistics-circle-container">
          <div className="logistics-wing-circle logistics-left-circle gradient-border" data-aos="fade-up"></div>
          <div className="logistics-center-image-circle">
            <img
              src={image1}
              alt="Logistics Innovation"
              className="logistics-center-image"
            />
          </div>
          <div className="logistics-wing-circle logistics-right-circle gradient-border" data-aos="fade-up"></div>
        </div>
        <div className="logistics-small-circle-wrapper" onClick={scrollToContact}>
          <div className="logistics-small-circle gradient-border">
            <span className="logistics-arrow">→</span>
          </div>
          <p className="logistics-small-circle-text">Contact us today</p>
        </div>
      </div>
    </section>

    {/* Development Process Section */}
    <section className="journey-section" data-aos="fade-up">
      <h2>OUR LOGISTICS SOFTWARE DEVELOPMENT PROCESS</h2>
      <p>
        At AMTB Solutions, we specialize in logistics software development that drives innovation, enhances supply chain visibility, and streamlines operational processes. Here’s our approach:
      </p>

      <div className="journey-steps">
        <div className="step-item" data-aos="fade-up">
          <div className="step-number">1</div>
          <div className="step-content">
            <h3>IDEATION</h3>
            <p>Collaborate with our experts to identify logistics challenges and define project requirements.</p>
          </div>
        </div>
        <div className="step-item" data-aos="fade-up">
          <div className="step-number">2</div>
          <div className="step-content">
            <h3>STRATEGY</h3>
            <p>Develop a strategic roadmap to optimize logistics processes, improve delivery times, and reduce costs.</p>
          </div>
        </div>
        <div className="step-item" data-aos="fade-up">
          <div className="step-number">3</div>
          <div className="step-content">
            <h3>USER EXPERIENCE DESIGN</h3>
            <p>Design intuitive logistics platforms that prioritize ease of use for both operators and supply chain managers.</p>
          </div>
        </div>
        <div className="step-item" data-aos="fade-up">
          <div className="step-number">4</div>
          <div className="step-content">
            <h3>IMPLEMENTATION</h3>
            <p>Develop scalable, secure logistics systems that streamline your supply chain and ensure seamless operations.</p>
          </div>
        </div>
        <div className="step-item" data-aos="fade-up">
          <div className="step-number">5</div>
          <div className="step-content">
            <h3>DEPLOYMENT</h3>
            <p>Seamlessly integrate logistics software into your infrastructure, ensuring minimal disruption and maximum efficiency.</p>
          </div>
        </div>
        <div className="step-item" data-aos="fade-up">
          <div className="step-number">6</div>
          <div className="step-content">
            <h3>SUPPORT</h3>
            <p>Provide ongoing support, including maintenance and updates, to ensure your logistics system runs smoothly.</p>
          </div>
        </div>
      </div>
    </section>

    {/* Services Section */}
    <section className="logistics-section">
      <div className="custom-services-content" data-aos="fade-up">
        <h2>TRANSFORMING LOGISTICS THROUGH TECHNOLOGY</h2>
        <p>
          For over a decade, we’ve been delivering impactful logistics solutions, transforming the way supply chains operate.
        </p>
      </div>

      <div className="services-container">
        <div className="service-item" data-aos="fade-up">
          <h3>LOGISTICS APPLICATION DEVELOPMENT</h3>
          <p>
            Build customized logistics applications that enhance supply chain management, improve real-time tracking, and streamline operations.
          </p>

          <div className="ss-small-circle-container" onClick={scrollToContact}>
            <div className="ss-small-circle gradient-border">
              <span className="ss-arrow">→</span>
            </div>
          </div>

          <div className="logistics-service-tags" data-aos="fade-up">
            <span>Warehouse Management Systems</span>
            <span>Fleet Management</span>
            <span>Supply Chain Optimization</span>
          </div>
        </div>

        <div className="service-item" data-aos="fade-up">
          <h3>PROTOTYPING & VALIDATION</h3>
          <p>
            Test and validate logistics solutions to ensure they meet operational standards and improve supply chain performance.
          </p>

          <div className="ss-small-circle-container" onClick={scrollToContact}>
            <div className="ss-small-circle gradient-border">
              <span className="ss-arrow">→</span>
            </div>
          </div>

          <div className="logistics-service-tags" data-aos="fade-up">
            <span>Clickable Prototypes</span>
            <span>Proof of Concept for Logistics Platforms</span>
          </div>
        </div>

        <div className="service-item" data-aos="fade-up">
          <h3>UI/UX DESIGN FOR LOGISTICS</h3>
          <p>
            Design logistics interfaces that are user-friendly, scalable, and compliant with industry standards, enhancing efficiency and control.
          </p>

          <div className="ss-small-circle-container" onClick={scrollToContact}>
            <div className="ss-small-circle gradient-border">
              <span className="ss-arrow">→</span>
            </div>
          </div>

          <div className="logistics-service-tags" data-aos="fade-up">
            <span>Streamlined UI/UX for Logistics Platforms</span>
          </div>
        </div>

        <div className="service-item" data-aos="fade-up">
          <h3>AI-ENABLED SOLUTIONS</h3>
          <p>
            Leverage AI to develop logistics solutions that optimize routing, enhance demand forecasting, and reduce operational costs.
          </p>

          <div className="ss-small-circle-container" onClick={scrollToContact}>
            <div className="ss-small-circle gradient-border">
              <span className="ss-arrow">→</span>
            </div>
          </div>

          <div className="logistics-service-tags" data-aos="fade-up">
            <span>AI-Based Demand Forecasting</span>
            <span>Route Optimization</span>
          </div>
        </div>
      </div>
    </section>


      {/* Technology Tools Section */}
     <section className="tools-section" data-aos="fade-up">
      <h2>Future-proof your business with advanced technology</h2>
      <p>AMTB Solution uses a platform-based approach to technology architecture,minimizing risk,cost, and development time,We Build Integrated solutions that samlessly,support your entire business ecosystem,ensuring long-term success and adaptablity</p>
     
      <div className="tools-logos">
        <div className="logistics-tool-icon" data-aos="fade-up">
          <FaAws size={50} />
          <p>AWS</p>
        </div>
        <div className="logistics-tool-icon" data-aos="fade-up">
          <SiMicrosoftazure size={50} />
          <p>Microsoft Azure</p>
        </div>
        <div className="logistics-tool-icon" data-aos="fade-up">
          <SiGooglecloud size={50} />
          <p>Google Cloud</p>
        </div>
        <div className="logistics-tool-icon" data-aos="fade-up">
          <FaReact size={50} />
          <p>React</p>
        </div>
        <div className="logistics-tool-icon" data-aos="fade-up">
          <FaAngular size={50} />
          <p>Angular</p>
        </div>
        <div className="logistics-tool-icon" data-aos="fade-up">
          <FaNodeJs size={50} />
          <p>Node.js</p>
        </div>
        <div className="logistics-tool-icon" data-aos="fade-up">
          <FaPython size={50} />
          <p>Python</p>
        </div>
        <div className="logistics-tool-icon" data-aos="fade-up">
          <SiDatabricks size={50} />
          <p>Databricks</p>
        </div>
        <div className="logistics-tool-icon" data-aos="fade-up">
          <FaDocker size={50} />
          <p>Docker</p>
        </div>
        <div className="logistics-tool-icon" data-aos="fade-up">
          <SiTerraform size={50} />
          <p>Terraform</p>
        </div>
        <div className="logistics-tool-icon" data-aos="fade-up">
          <SiKubernetes size={50} />
          <p>Kubernetes</p>
        </div>
        <div className="logistics-tool-icon" data-aos="fade-up">
          <SiMysql size={50} />
          <p>MySQL</p>
        </div>
        <div className="logistics-tool-icon" data-aos="fade-up">
          <SiPostgresql size={50} />
          <p>PostgreSQL</p>
        </div>
        <div className="logistics-tool-icon" data-aos="fade-up">
          <SiMongodb size={50} />
          <p>MongoDB</p>
        </div>
        <div className="logistics-tool-icon" data-aos="fade-up">
          <SiRedis size={50} />
          <p>Redis</p>
        </div>
        <div className="logistics-tool-icon" data-aos="fade-up">
          <SiElasticsearch size={50} />
          <p>Elasticsearch</p>
        </div>
        <div className="logistics-tool-icon" data-aos="fade-up">
          <SiRabbitmq size={50} />
          <p>RabbitMQ</p>
        </div>
      </div>
    </section>

    {/* Custom Development for Industries Section */}
<section className="logistics-industry-section" data-aos="fade-up">
      <h2>Custom Logistics Solutions Tailored to Your Needs</h2>
      <p>AMTB Solution delivers logistics software solutions that address the unique challenges of the industry, from fleet management to supply chain optimization. We've built solutions for shipping companies, warehouses, and logistics providers worldwide.</p>
      <div className="industry-container">
        <div className="industry-column">
          <div className="industry-box">
            <Link onClick={scrollToContact}>
              <span>Fleet Management <FaArrowRight /></span>
            </Link>
          </div>
          <div className="industry-box" data-aos="fade-up">
            <Link onClick={scrollToContact}>
              <span>Warehouse Management <FaArrowRight /></span>
            </Link>
          </div>
          <div className="industry-box" data-aos="fade-up">
            <Link onClick={scrollToContact}>
              <span>Supply Chain Visibility <FaArrowRight /></span>
            </Link>
          </div>
        </div>
        <div className="industry-column">
          <div className="industry-box" data-aos="fade-up">
            <Link onClick={scrollToContact}>
              <span>Inventory Tracking <FaArrowRight /></span>
            </Link>
          </div>
          <div className="industry-box" data-aos="fade-up">
            <Link onClick={scrollToContact}>
              <span>Freight & Shipping <FaArrowRight /></span>
            </Link>
          </div>
          <div className="industry-box" data-aos="fade-up">
            <Link onClick={scrollToContact}>
              <span>Logistics Analytics <FaArrowRight /></span>
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
                <a class="logistics-circle-button" >
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
                <a  class="logistics-circle-button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="arrow-icon">
                        <path d="M8 4l8 8-8 8" fill="none" stroke="white" stroke-width="2" />
                    </svg>
                </a>
                <span class="circle-text">Hire a team</span>
            </div>
        </div>
    </div>
</section>

<section className="logistics-mad-services-section" data-aos="fade-up">
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



                <ContactForm  />


      <Footer /> {/* Use the imported Footer component */}
    </div>
  );
};

export default Logistics;
