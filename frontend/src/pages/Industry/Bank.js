import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { useRef } from 'react';
import { Link } from 'react-router-dom';

import '../../styles/Bank.css'; // Import the CSS file for the Custom Development page
import Footer from '../../components/Footer'; // Import Footer component
import FAQ from '../../components/FAQ';
import ContactForm from '../../components/ContactForm';
import image1 from '../../assets/images/INDUSTRY/Bank/image1.jpg';
import { FaArrowRight } from 'react-icons/fa'; // Import an arrow icon
import { FaAws, FaMicrosoft, FaGoogle, FaReact, FaAngular, FaNodeJs, FaPython, FaDocker } from 'react-icons/fa';  // Add more icons as needed
import { SiMicrosoftazure, SiGooglecloud, SiTerraform,SiDatabricks, SiKubernetes, SiMysql, SiMongodb, SiPostgresql, SiRedis, SiElasticsearch, SiRabbitmq } from 'react-icons/si'; // From 'simple-icons'


const Bank = () => {

  const contactRef = useRef(null);

  // Function to scroll to the contact section
  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

    useEffect(() => {
  AOS.init({ duration: 5000 });
}, [])

  return (
    <div className="container">


      {/* Ubankated Hero Section with Two Circles and Image */}
<section className="hero-section">
      <div className="bank-hero-content" data-aos="fade-up">
        <h1>FINTECH SOFTWARE SOLUTIONS</h1>
        <p>
          Revolutionize the banking sector with innovative software solutions that optimize operations, enhance customer experiences, and ensure regulatory compliance.
        </p>
        <div className="bank-circle-container">
          <div className="bank-wing-circle bank-left-circle gradient-border" data-aos="fade-up"></div>
          <div className="bank-center-image-circle">
            <img
              src={image1}
              alt="Banking Innovation"
              className="bank-center-image"
            />
          </div>
          <div className="bank-wing-circle bank-right-circle gradient-border" data-aos="fade-up"></div>
        </div>
        <div className="bank-small-circle-wrapper" onClick={scrollToContact}>
          <div className="bank-small-circle gradient-border">
            <span className="bank-arrow">→</span>
          </div>
          <p className="bank-small-circle-text">Contact us today</p>
        </div>
      </div>
    </section>



 <section className="journey-section" data-aos="fade-up">
      <h2>OUR BANKING SOFTWARE DEVELOPMENT PROCESS</h2>
      <p>
        At AMTB Solutions, we specialize in developing cutting-edge fintech solutions that drive operational efficiency, elevate customer satisfaction, and streamline compliance. Here’s how we do it:
      </p>

      <div className="journey-steps">
        <div className="step-item" data-aos="fade-up">
          <div className="step-number">1</div>
          <div className="step-content">
            <h3>IDEATION</h3>
            <p>Collaborate with our experts to identify key challenges in banking operations and define project requirements.</p>
          </div>
        </div>
        <div className="step-item" data-aos="fade-up">
          <div className="step-number">2</div>
          <div className="step-content">
            <h3>STRATEGY</h3>
            <p>Develop a strategic roadmap to optimize banking processes while ensuring compliance and security.</p>
          </div>
        </div>
        <div className="step-item" data-aos="fade-up">
          <div className="step-number">3</div>
          <div className="step-content">
            <h3>USER EXPERIENCE DESIGN</h3>
            <p>Design user-friendly banking interfaces that prioritize customer engagement and ease of use.</p>
          </div>
        </div>
        <div className="step-item" data-aos="fade-up">
          <div className="step-number">4</div>
          <div className="step-content">
            <h3>IMPLEMENTATION</h3>
            <p>Develop secure, scalable banking systems that comply with regulatory standards and ensure smooth operations.</p>
          </div>
        </div>
        <div className="step-item" data-aos="fade-up">
          <div className="step-number">5</div>
          <div className="step-content">
            <h3>DEPLOYMENT</h3>
            <p>Seamlessly integrate your new banking software into existing infrastructures, ensuring minimal disruption.</p>
          </div>
        </div>
        <div className="step-item" data-aos="fade-up">
          <div className="step-number">6</div>
          <div className="step-content">
            <h3>SUPPORT</h3>
            <p>Provide continuous support, including maintenance and updates, to ensure long-term efficiency and security.</p>
          </div>
        </div>
      </div>
    </section>


      {/* Services Section */}
<section className="bank-section" data-aos="fade-up">
      <div className="custom-services-content">
        <h2>TRANSFORMING BANKING THROUGH TECHNOLOGY</h2>
        <p>
          For over a decade, we have been pioneering fintech solutions, transforming the way banks operate and serve their customers.
        </p>
      </div>

      <div className="services-container" data-aos="fade-up">
        <div className="service-item">
          <h3>BANKING APPLICATION DEVELOPMENT</h3>
          <p>
            Build customized banking applications that streamline transactions, enhance customer experiences, and improve operational efficiency.
          </p>

          <div className="ss-small-circle-container" onClick={scrollToContact}>
            <div className="ss-small-circle gradient-border">
              <span className="ss-arrow">→</span>
            </div>
          </div>

          <div className="bank-service-tags" data-aos="fade-up">
            <span>Mobile Banking</span>
            <span>Core Banking Systems</span>
            <span>Customer Relationship Management (CRM)</span>
          </div>
        </div>


        <div className="service-item" data-aos="fade-up">
          <h3>PROTOTYPING & VALIDATION</h3>
          <p>
            Test and validate fintech solutions to ensure they meet security standards and customer satisfaction goals.
          </p>
          <div className="ss-small-circle-container" onClick={scrollToContact}>
            <div className="ss-small-circle gradient-border">
              <span className="ss-arrow">→</span>
            </div>
          </div>

          <div className="bank-service-tags" data-aos="fade-up">
            <span>Clickable Prototypes</span>
            <span>Proof of Concept for Financial Systems</span>
          </div>
        </div>

        <div className="service-item" data-aos="fade-up">
          <h3>UI/UX DESIGN FOR BANKING</h3>
          <p>
            Design banking interfaces that are intuitive, secure, and compliant with financial standards, enhancing customer engagement.
          </p>
          <div className="ss-small-circle-container" onClick={scrollToContact}>
            <div className="ss-small-circle gradient-border">
              <span className="ss-arrow">→</span>
            </div>
          </div>

          <div className="bank-service-tags" data-aos="fade-up">
            <span>Optimized UI/UX for Banking Apps</span>
          </div>
        </div>

        <div className="service-item" data-aos="fade-up">
          <h3>AI-ENABLED BANKING SOLUTIONS</h3>
          <p>
            Leverage AI to develop banking solutions that optimize customer service, enhance fraud detection, and improve financial forecasting.
          </p>
          <div className="ss-small-circle-container" onClick={scrollToContact}>
            <div className="ss-small-circle gradient-border">
              <span className="ss-arrow">→</span>
            </div>
          </div>

          <div className="bank-service-tags" data-aos="fade-up">
            <span>AI-Based Fraud Detection</span>
            <span>Predictive Analytics for Financial Risk</span>
          </div>
        </div>
      </div>
    </section>


      {/* Technology Tools Section */}
     <section className="tools-section" data-aos="fade-up">
      <h2>Future-proof your business with advanced technology</h2>
      <p>AMTB Solution uses a platform-based approach to technology architecture,minimizing risk,cost, and development time,We Build Integrated solutions that samlessly,support your entire business ecosystem,ensuring long-term success and adaptablity</p>
     
      <div className="tools-logos">
        <div className="bank-tool-icon" data-aos="fade-up">
          <FaAws size={50} />
          <p>AWS</p>
        </div>
        <div className="bank-tool-icon" data-aos="fade-up">
          <SiMicrosoftazure size={50} />
          <p>Microsoft Azure</p>
        </div>
        <div className="bank-tool-icon" data-aos="fade-up">
          <SiGooglecloud size={50} />
          <p>Google Cloud</p>
        </div>
        <div className="bank-tool-icon" data-aos="fade-up">
          <FaReact size={50} />
          <p>React</p>
        </div>
        <div className="bank-tool-icon" data-aos="fade-up">
          <FaAngular size={50} />
          <p>Angular</p>
        </div>
        <div className="bank-tool-icon" data-aos="fade-up">
          <FaNodeJs size={50} />
          <p>Node.js</p>
        </div>
        <div className="bank-tool-icon" data-aos="fade-up">
          <FaPython size={50} />
          <p>Python</p>
        </div>
        <div className="bank-tool-icon" data-aos="fade-up">
          <SiDatabricks size={50} />
          <p>Databricks</p>
        </div>
        <div className="bank-tool-icon" data-aos="fade-up">
          <FaDocker size={50} />
          <p>Docker</p>
        </div>
        <div className="bank-tool-icon" data-aos="fade-up">
          <SiTerraform size={50} />
          <p>Terraform</p>
        </div>
        <div className="bank-tool-icon" data-aos="fade-up">
          <SiKubernetes size={50} />
          <p>Kubernetes</p>
        </div>
        <div className="bank-tool-icon" data-aos="fade-up">
          <SiMysql size={50} />
          <p>MySQL</p>
        </div>
        <div className="bank-tool-icon" data-aos="fade-up">
          <SiPostgresql size={50} />
          <p>PostgreSQL</p>
        </div>
        <div className="bank-tool-icon" data-aos="fade-up">
          <SiMongodb size={50} />
          <p>MongoDB</p>
        </div>
        <div className="bank-tool-icon" data-aos="fade-up">
          <SiRedis size={50} />
          <p>Redis</p>
        </div>
        <div className="bank-tool-icon" data-aos="fade-up">
          <SiElasticsearch size={50} />
          <p>Elasticsearch</p>
        </div>
        <div className="bank-tool-icon" data-aos="fade-up">
          <SiRabbitmq size={50} />
          <p>RabbitMQ</p>
        </div>
      </div>
    </section>

    {/* Custom Development for Industries Section */}
<section className="bank-industry-section" data-aos="fade-up">
      <h2>Custom Banking Solutions Tailored to Your Needs</h2>
      <p>AMTB Solution delivers fintech software solutions that address the unique challenges of the banking industry, from customer management to advanced financial systems. We've built solutions for global banks, credit unions, and financial institutions.</p>
      <div className="industry-container">
        <div className="industry-column">
          <div className="industry-box" data-aos="fade-up">
            <Link onClick={scrollToContact}>
              <span>Core Banking Systems <FaArrowRight /></span>
            </Link>
          </div>
          <div className="industry-box" data-aos="fade-up">
            <Link onClick={scrollToContact}>
              <span>Mobile Payment Solutions <FaArrowRight /></span>
            </Link>
          </div>
          <div className="industry-box" data-aos="fade-up">
            <Link onClick={scrollToContact}>
              <span>Fraud Detection Systems <FaArrowRight /></span>
            </Link>
          </div>
        </div>
        <div className="industry-column">
          <div className="industry-box" data-aos="fade-up">
            <Link onClick={scrollToContact}>
              <span>Customer Data Platforms <FaArrowRight /></span>
            </Link>
          </div>
          <div className="industry-box" data-aos="fade-up">
            <Link onClick={scrollToContact}>
              <span>Financial Forecasting Tools <FaArrowRight /></span>
            </Link>
          </div>
          <div className="industry-box" data-aos="fade-up">
            <Link onClick={scrollToContact}>
              <span>Loan Management Systems <FaArrowRight /></span>
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
                <a class="bank-circle-button" >
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
                <a  class="bank-circle-button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="arrow-icon">
                        <path d="M8 4l8 8-8 8" fill="none" stroke="white" stroke-width="2" />
                    </svg>
                </a>
                <span class="circle-text">Hire a team</span>
            </div>
        </div>
    </div>
</section>

<section className="bank-mad-services-section" data-aos="fade-up">
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

                <ContactForm className="home-contact-form" />


      <Footer /> {/* Use the imported Footer component */}
    </div>
  );
};

export default Bank;
