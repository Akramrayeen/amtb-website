import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { useRef } from 'react';
import { Link } from 'react-router-dom';

import '../../styles/E-commerce.css'; // Import the CSS file for the Custom Development page
import Footer from '../../components/Footer'; // Import Footer component
import FAQ from '../../components/FAQ';
import ContactForm from '../../components/ContactForm';
import image1 from '../../assets/images/INDUSTRY/E-commerce/image1.jpg';
import { FaArrowRight } from 'react-icons/fa'; // Import an arrow icon
import { FaAws, FaMicrosoft, FaGoogle, FaReact, FaAngular, FaNodeJs, FaPython, FaDocker } from 'react-icons/fa';  // Add more icons as needed
import { SiMicrosoftazure, SiGooglecloud, SiTerraform,SiDatabricks, SiKubernetes, SiMysql, SiMongodb, SiPostgresql, SiRedis, SiElasticsearch, SiRabbitmq } from 'react-icons/si'; // From 'simple-icons'


const Ecommerce = () =>{

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


      {/* Uecommerceated Hero Section with Two Circles and Image */}


<section className="hero-section">
      <div className="ecommerce-hero-content" data-aos="fade-up">
        <h1>E-COMMERCE SOFTWARE SOLUTIONS</h1>
        <p>
          Revolutionize your online retail experience with advanced e-commerce software solutions that optimize operations, enhance user experience, and drive business growth.
        </p>
        <div className="ecommerce-circle-container">
          <div className="ecommerce-wing-circle ecommerce-left-circle gradient-border" data-aos="fade-up"></div>
          <div className="ecommerce-center-image-circle">
            <img
              src={image1}
              alt="E-commerce Innovation"
              className="ecommerce-center-image"
            />
          </div>
          <div className="ecommerce-wing-circle ecommerce-right-circle gradient-border" data-aos="fade-up"></div>
        </div>
        <div className="ecommerce-small-circle-wrapper" onClick={scrollToContact}>
          <div className="ecommerce-small-circle gradient-border">
            <span className="ecommerce-arrow">→</span>
          </div>
          <p className="ecommerce-small-circle-text">Contact us today</p>
        </div>
      </div>
    </section>

    <section className="journey-section" data-aos="fade-up">
      <h2>OUR E-COMMERCE DEVELOPMENT PROCESS</h2>
      <p>
        At AMTB Solutions, we specialize in crafting e-commerce platforms that drive sales, enhance customer experience, and ensure seamless business operations. Here’s how we make it happen:
      </p>

      <div className="journey-steps">
        <div className="step-item" data-aos="fade-up">
          <div className="step-number">1</div>
          <div className="step-content">
            <h3>IDEATION</h3>
            <p>Work with our team to identify your unique e-commerce challenges and define project requirements.</p>
          </div>
        </div>
        <div className="step-item" data-aos="fade-up">
          <div className="step-number">2</div>
          <div className="step-content">
            <h3>STRATEGY</h3>
            <p>Create a comprehensive e-commerce roadmap focused on driving traffic, boosting sales, and ensuring scalability.</p>
          </div>
        </div>
        <div className="step-item" data-aos="fade-up">
          <div className="step-number">3</div>
          <div className="step-content">
            <h3>USER EXPERIENCE DESIGN</h3>
            <p>Design intuitive interfaces that provide seamless shopping experiences across all devices.</p>
          </div>
        </div>
        <div className="step-item" data-aos="fade-up">
          <div className="step-number">4</div>
          <div className="step-content">
            <h3>IMPLEMENTATION</h3>
            <p>Develop secure, scalable, and optimized e-commerce platforms tailored to your business needs.</p>
          </div>
        </div>
        <div className="step-item" data-aos="fade-up">
          <div className="step-number">5</div>
          <div className="step-content">
            <h3>DEPLOYMENT</h3>
            <p>Launch your e-commerce site with confidence, ensuring smooth integration with your existing systems.</p>
          </div>
        </div>
        <div className="step-item" data-aos="fade-up">
          <div className="step-number">6</div>
          <div className="step-content">
            <h3>SUPPORT</h3>
            <p>Provide ongoing support and updates to ensure your platform runs smoothly and adapts to new market trends.</p>
          </div>
        </div>
      </div>
    </section>

    {/* Services Section */}
    <section className="ecommerce-section" data-aos="fade-up">
      <div className="custom-services-content">
        <h2>TRANSFORMING E-COMMERCE WITH INNOVATIVE SOLUTIONS</h2>
        <p>
          With over a decade of experience, we deliver high-impact e-commerce solutions that revolutionize the way businesses sell online.
        </p>
      </div>

      <div className="services-container" data-aos="fade-up">
        <div className="service-item" data-aos="fade-up">
          <h3>E-COMMERCE APPLICATION DEVELOPMENT</h3>
          <p>
            Build custom e-commerce platforms that drive conversions, streamline checkout processes, and offer an engaging shopping experience.
          </p>
          <div className="ss-small-circle-container" onClick={scrollToContact}>
            <div className="ss-small-circle gradient-border">
              <span className="ss-arrow">→</span>
            </div>
          </div>

          <div className="ecommerce-service-tags" data-aos="fade-up">
            <span>Custom Shopping Cart Development</span>
            <span>Payment Gateway Integration</span>
            <span>Inventory Management</span>
          </div>
        </div>

        <div className="service-item" data-aos="fade-up">
          <h3>PROTOTYPING & VALIDATION</h3>
          <p>
            Test and validate e-commerce features to ensure they meet user expectations and drive business success.
          </p>
          <div className="ss-small-circle-container" onClick={scrollToContact}>
            <div className="ss-small-circle gradient-border">
              <span className="ss-arrow">→</span>
            </div>
          </div>

          <div className="ecommerce-service-tags" data-aos="fade-up"> 
            <span>Clickable Prototypes</span>
            <span>User Acceptance Testing (UAT)</span>
          </div>
        </div>

        <div className="service-item" data-aos="fade-up">
          <h3>UI/UX DESIGN FOR E-COMMERCE</h3>
          <p>
            Design visually appealing and user-friendly interfaces that keep customers engaged and drive conversions.
          </p>
          <div className="ss-small-circle-container" onClick={scrollToContact}>
            <div className="ss-small-circle gradient-border">
              <span className="ss-arrow">→</span>
            </div>
          </div>

          <div className="ecommerce-service-tags" data-aos="fade-up">
            <span>Responsive Design</span>
            <span>Customer-Centric Navigation</span>
          </div>
        </div>

        <div className="service-item" data-aos="fade-up">
          <h3>AI-ENABLED SOLUTIONS</h3>
          <p>
            Utilize AI to personalize shopping experiences, predict trends, and optimize business operations.
          </p>
          <div className="ss-small-circle-container" onClick={scrollToContact}>
            <div className="ss-small-circle gradient-border">
              <span className="ss-arrow">→</span>
            </div>
          </div>

          <div className="ecommerce-service-tags" data-aos="fade-up">
            <span>AI-Based Product Recommendations</span>
            <span>Predictive Analytics</span>
          </div>
        </div>
      </div>
    </section>



      {/* Technology Tools Section */}
     <section className="tools-section" data-aos="fade-up">
        <h2>Empower your business with cutting-edge technology</h2>
      <p>
        AMTB Solution leverages advanced technologies to build e-commerce platforms that are scalable, secure, and future-ready.
      </p>
      <div className="tools-logos">
        <div className="ecommerce-tool-icon" data-aos="fade-up">
          <FaAws size={50} />
          <p>AWS</p>
        </div>
        <div className="ecommerce-tool-icon" data-aos="fade-up">
          <SiMicrosoftazure size={50} />
          <p>Microsoft Azure</p>
        </div>
        <div className="ecommerce-tool-icon" data-aos="fade-up">
          <SiGooglecloud size={50} />
          <p>Google Cloud</p>
        </div>
        <div className="ecommerce-tool-icon" data-aos="fade-up">
          <FaReact size={50} />
          <p>React</p>
        </div>
        <div className="ecommerce-tool-icon" data-aos="fade-up">
          <FaAngular size={50} />
          <p>Angular</p>
        </div>
        <div className="ecommerce-tool-icon" data-aos="fade-up">
          <FaNodeJs size={50} />
          <p>Node.js</p>
        </div>
        <div className="ecommerce-tool-icon" data-aos="fade-up">
          <FaPython size={50} />
          <p>Python</p>
        </div>
        <div className="ecommerce-tool-icon" data-aos="fade-up">
          <SiDatabricks size={50} />
          <p>Databricks</p>
        </div>
        <div className="ecommerce-tool-icon" data-aos="fade-up">
          <FaDocker size={50} />
          <p>Docker</p>
        </div>
        <div className="ecommerce-tool-icon" data-aos="fade-up">
          <SiTerraform size={50} />
          <p>Terraform</p>
        </div>
        <div className="ecommerce-tool-icon" data-aos="fade-up">
          <SiKubernetes size={50} />
          <p>Kubernetes</p>
        </div>
        <div className="ecommerce-tool-icon" data-aos="fade-up">
          <SiMysql size={50} />
          <p>MySQL</p>
        </div>
        <div className="ecommerce-tool-icon" data-aos="fade-up">
          <SiPostgresql size={50} />
          <p>PostgreSQL</p>
        </div>
        <div className="ecommerce-tool-icon" data-aos="fade-up">
          <SiMongodb size={50} />
          <p>MongoDB</p>
        </div>
        <div className="ecommerce-tool-icon" data-aos="fade-up">
          <SiRedis size={50} />
          <p>Redis</p>
        </div>
        <div className="ecommerce-tool-icon" data-aos="fade-up">
          <SiElasticsearch size={50} />
          <p>Elasticsearch</p>
        </div>
        <div className="ecommerce-tool-icon" data-aos="fade-up">
          <SiRabbitmq size={50} />
          <p>RabbitMQ</p>
        </div>
      </div>
    </section>

    {/* Custom Development for Industries Section */}
<section className="ecommerce-industry-section" data-aos="fade-up">
      <h2>Custom E-Commerce Solutions Tailored to Your Business</h2>
      <p>
        AMTB Solution delivers tailor-made e-commerce solutions to suit the unique needs of various industries, from retail to wholesale. Our platforms help businesses sell more effectively and scale operations effortlessly.
      </p>
      <div className="industry-container">
        <div className="industry-column">
          <div className="industry-box" data-aos="fade-up">
            <Link onClick={scrollToContact}>
              <span>Retail Platforms <FaArrowRight /></span>
            </Link>
          </div>
          <div className="industry-box" data-aos="fade-up">
            <Link onClick={scrollToContact}>
              <span>Wholesale Solutions <FaArrowRight /></span>
            </Link>
          </div>
          <div className="industry-box" data-aos="fade-up">
            <Link onClick={scrollToContact}>
              <span>Subscription-Based Models <FaArrowRight /></span>
            </Link>
          </div>
        </div>
        <div className="industry-column">
          <div className="industry-box" data-aos="fade-up">
            <Link onClick={scrollToContact}>
              <span>Marketplace Integrations <FaArrowRight /></span>
            </Link>
          </div>
          <div className="industry-box" data-aos="fade-up">
            <Link onClick={scrollToContact}>
              <span>Supply Chain Management <FaArrowRight /></span>
            </Link>
          </div>
          <div className="industry-box" data-aos="fade-up">
            <Link onClick={scrollToContact}>
              <span>Omnichannel Commerce <FaArrowRight /></span>
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
                <a class="ecommerce-circle-button" >
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
                <a  class="ecommerce-circle-button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="arrow-icon">
                        <path d="M8 4l8 8-8 8" fill="none" stroke="white" stroke-width="2" />
                    </svg>
                </a>
                <span class="circle-text">Hire a team</span>
            </div>
        </div>
    </div>
</section>

<section className="ecommerce-mad-services-section" data-aos="fade-up">
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

export default Ecommerce;
