import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { useRef } from 'react';
import { Link } from 'react-router-dom';

import '../../styles/Education.css'; // Import the CSS file for the Custom Development page
import Footer from '../../components/Footer'; // Import Footer component
import FAQ from '../../components/FAQ';
import ContactForm from '../../components/ContactForm';
import image1 from '../../assets/images/INDUSTRY/Education/image1.jpg';
import { FaArrowRight } from 'react-icons/fa'; // Import an arrow icon
import { FaAws, FaMicrosoft, FaGoogle, FaReact, FaAngular, FaNodeJs, FaPython, FaDocker } from 'react-icons/fa';  // Add more icons as needed
import { SiMicrosoftazure, SiGooglecloud, SiTerraform,SiDatabricks, SiKubernetes, SiMysql, SiMongodb, SiPostgresql, SiRedis, SiElasticsearch, SiRabbitmq } from 'react-icons/si'; // From 'simple-icons'


const Education = () =>{

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


      {/* Ueducationated Hero Section with Two Circles and Image */}


 <section className="hero-section">
        <div className="education-hero-content" data-aos="fade-up">
          <h1>EDUCATIONTECH SOFTWARE SOLUTIONS</h1>
          <p>
            Revolutionizing the education landscape with cutting-edge software solutions that streamline learning, enhance engagement, and ensure academic success.
          </p>
          <div className="education-circle-container">
            <div className="education-wing-circle education-left-circle gradient-border" data-aos="fade-up"></div>
            <div className="education-center-image-circle">
              <img
                src={image1}
                alt="Education Innovation"
                className="education-center-image"
              />
            </div>
            <div className="education-wing-circle education-right-circle gradient-border" data-aos="fade-up" ></div>
          </div>
          <div className="education-small-circle-wrapper" onClick={scrollToContact}>
            <div className="education-small-circle gradient-border">
              <span className="education-arrow">→</span>
            </div>
            <p className="education-small-circle-text">Contact us today</p>
          </div>
        </div>
      </section>

      {/* Development Process Section */}
      <section className="journey-section" data-aos="fade-up">
        <h2>OUR EDUCATIONTECH DEVELOPMENT PROCESS</h2>
        <p>
          At AMTB Solutions, we specialize in education software development that drives learning innovation, enhances student outcomes, and streamlines educational processes. Here’s our approach:
        </p>

        <div className="journey-steps">
          <div className="step-item" data-aos="fade-up">
            <div className="step-number">1</div>
            <div className="step-content">
              <h3>IDEATION</h3>
              <p>Collaborate with our experts to identify educational challenges and define project requirements.</p>
            </div>
          </div>
          <div className="step-item" data-aos="fade-up">
            <div className="step-number">2</div>
            <div className="step-content">
              <h3>STRATEGY</h3>
              <p>Develop a strategic roadmap to address educational needs, ensuring impactful learning solutions.</p>
            </div>
          </div>
          <div className="step-item" data-aos="fade-up">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3>USER EXPERIENCE DESIGN</h3>
              <p>Design intuitive education platforms that prioritize usability for both students and educators.</p>
            </div>
          </div>
          <div className="step-item" data-aos="fade-up">
            <div className="step-number">4</div>
            <div className="step-content">
              <h3>IMPLEMENTATION</h3>
              <p>Develop secure, scalable education systems that meet academic standards and ensure optimal performance.</p>
            </div>
          </div>
          <div className="step-item" data-aos="fade-up">
            <div className="step-number">5</div>
            <div className="step-content">
              <h3>DEPLOYMENT</h3>
              <p>Seamlessly launch educational software, ensuring it integrates smoothly into your existing ecosystem.</p>
            </div>
          </div>
          <div className="step-item" data-aos="fade-up">
            <div className="step-number">6</div>
            <div className="step-content">
              <h3>SUPPORT</h3>
              <p>Provide ongoing support, including maintenance and updates, to ensure your education solution runs efficiently.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="education-section" data-aos="fade-up">
        <div className="custom-services-content">
          <h2>REVOLUTIONIZING EDUCATION THROUGH TECHNOLOGY</h2>
          <p>
            For over a decade, we’ve been delivering impactful education solutions, transforming the way learning is delivered.
          </p>
        </div>

        <div className="services-container">
          <div className="service-item" data-aos="fade-up">
            <h3>EDTECH APPLICATION DEVELOPMENT</h3>
            <p>
              Build customized education applications that enhance learning experiences, streamline administrative tasks, and improve educational efficiency.
            </p>

            <div className="ss-small-circle-container" onClick={scrollToContact}>
              <div className="ss-small-circle gradient-border">
                <span className="ss-arrow">→</span>
              </div>
            </div>

            <div className="education-service-tags" data-aos="fade-up">
              <span>Learning Management Systems</span>
              <span>Student Information Systems</span>
              <span>Virtual Classroom Platforms</span>
            </div>
          </div>

          <div className="service-item" data-aos="fade-up">
            <h3>PROTOTYPING & VALIDATION</h3>
            <p>
              Test and validate educational software solutions to ensure they meet academic standards and improve learning outcomes.
            </p>
            <div className="ss-small-circle-container" onClick={scrollToContact}>
              <div className="ss-small-circle gradient-border">
                <span className="ss-arrow">→</span>
              </div>
            </div>

            <div className="education-service-tags" data-aos="fade-up">
              <span>Clickable Prototypes</span>
              <span>Proof of Concept for Educational Tools</span>
            </div>
          </div>

          <div className="service-item" data-aos="fade-up">
            <h3>UI/UX DESIGN FOR EDUCATION</h3>
            <p>
              Design educational interfaces that are user-friendly, secure, and compliant with academic standards, enhancing user engagement.
            </p>
            <div className="ss-small-circle-container" onClick={scrollToContact}>
              <div className="ss-small-circle gradient-border">
                <span className="ss-arrow">→</span>
              </div>
            </div>

            <div className="education-service-tags" data-aos="fade-up">
              <span>Streamlined UI/UX for Education Apps</span>
            </div>
          </div>

          <div className="service-item" data-aos="fade-up">
            <h3>AI-ENABLED SOLUTIONS</h3>
            <p>
              Leverage AI to develop education solutions that personalize learning, optimize curriculum, and reduce administrative workloads.
            </p>
            <div className="ss-small-circle-container" onClick={scrollToContact}>
              <div className="ss-small-circle gradient-border">
                <span className="ss-arrow">→</span>
              </div>
            </div>

            <div className="education-service-tags" data-aos="fade-up">
              <span>AI-Based Learning Analytics</span>
              <span>Predictive Analytics for Student Success</span>
            </div>
          </div>
        </div>
      </section>


      {/* Technology Tools Section */}
     <section className="tools-section" data-aos="fade-up">
      <h2>Future-proof your business with advanced technology</h2>
      <p>AMTB Solution uses a platform-based approach to technology architecture,minimizing risk,cost, and development time,We Build Integrated solutions that samlessly,support your entire business ecosystem,ensuring long-term success and adaptablity</p>
     
      <div className="tools-logos">
        <div className="education-tool-icon" data-aos="fade-up">
          <FaAws size={50} />
          <p>AWS</p>
        </div>
        <div className="education-tool-icon" data-aos="fade-up">
          <SiMicrosoftazure size={50} />
          <p>Microsoft Azure</p>
        </div>
        <div className="education-tool-icon" data-aos="fade-up">
          <SiGooglecloud size={50} />
          <p>Google Cloud</p>
        </div>
        <div className="education-tool-icon" data-aos="fade-up">
          <FaReact size={50} />
          <p>React</p>
        </div>
        <div className="education-tool-icon" data-aos="fade-up">
          <FaAngular size={50} />
          <p>Angular</p>
        </div>
        <div className="education-tool-icon" data-aos="fade-up">
          <FaNodeJs size={50} />
          <p>Node.js</p>
        </div>
        <div className="education-tool-icon" data-aos="fade-up">
          <FaPython size={50} />
          <p>Python</p>
        </div>
        <div className="education-tool-icon" data-aos="fade-up">
          <SiDatabricks size={50} />
          <p>Databricks</p>
        </div>
        <div className="education-tool-icon" data-aos="fade-up">
          <FaDocker size={50} />
          <p>Docker</p>
        </div>
        <div className="education-tool-icon" data-aos="fade-up">
          <SiTerraform size={50} />
          <p>Terraform</p>
        </div>
        <div className="education-tool-icon" data-aos="fade-up">
          <SiKubernetes size={50} />
          <p>Kubernetes</p>
        </div>
        <div className="education-tool-icon" data-aos="fade-up">
          <SiMysql size={50} />
          <p>MySQL</p>
        </div>
        <div className="education-tool-icon" data-aos="fade-up">
          <SiPostgresql size={50} />
          <p>PostgreSQL</p>
        </div>
        <div className="education-tool-icon" data-aos="fade-up">
          <SiMongodb size={50} />
          <p>MongoDB</p>
        </div>
        <div className="education-tool-icon" data-aos="fade-up">
          <SiRedis size={50} />
          <p>Redis</p>
        </div>
        <div className="education-tool-icon" data-aos="fade-up">
          <SiElasticsearch size={50} />
          <p>Elasticsearch</p>
        </div>
        <div className="education-tool-icon" data-aos="fade-up">
          <SiRabbitmq size={50} />
          <p>RabbitMQ</p>
        </div>
      </div>
    </section>

    {/* Custom Development for Industries Section */}
<section className="education-industry-section" data-aos="fade-up">
        <h2>Custom Education Solutions Tailored to Your Needs</h2>
        <p>AMTB Solution delivers software solutions that address the unique challenges of the education industry, from learning management to advanced curriculum systems. We've built solutions for schools, universities, and educational providers across the globe.</p>
        <div className="industry-container">
          <div className="industry-column">
            <div className="industry-box" data-aos="fade-up">
              <Link onClick={scrollToContact}>
                <span>Learning Management Systems <FaArrowRight /></span>
              </Link>
            </div>
            <div className="industry-box" data-aos="fade-up">
              <Link onClick={scrollToContact}>
                <span>Virtual Classroom Solutions <FaArrowRight /></span>
              </Link>
            </div>
            <div className="industry-box" data-aos="fade-up">
              <Link onClick={scrollToContact}>
                <span>Student Information Systems <FaArrowRight /></span>
              </Link>
            </div>
          </div>
          <div className="industry-column">
            <div className="industry-box" data-aos="fade-up">
              <Link onClick={scrollToContact}>
                <span>Assessment Platforms <FaArrowRight /></span>
              </Link>
            </div>
            <div className="industry-box" data-aos="fade-up">
              <Link onClick={scrollToContact}>
                <span>Online Learning Tools <FaArrowRight /></span>
              </Link>
            </div>
            <div className="industry-box" data-aos="fade-up">
              <Link onClick={scrollToContact}>
                <span>Curriculum Management Systems <FaArrowRight /></span>
              </Link>
            </div>
          </div>
        </div>
      </section>



 <section class="options-section"  data-aos="fade-up">
    <h2>Choose Your Service Option</h2>
    <p>AMTB Solutions offer Two Flexible engagement models to suit your needs.</p>
    <div class="options-container">
        <div class="option-box" data-aos="fade-up">
            <h3>Product Development</h3>
            <p>Launch your new product with our dedicated cross-functional team, perfect for those without an in-house development team.</p>
            <div class="circle-with-text" onClick={scrollToContact}>
                <a class="education-circle-button" >
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
                <a  class="education-circle-button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="arrow-icon">
                        <path d="M8 4l8 8-8 8" fill="none" stroke="white" stroke-width="2" />
                    </svg>
                </a>
                <span class="circle-text">Hire a team</span>
            </div>
        </div>
    </div>
</section>

<section className="education-mad-services-section" data-aos="fade-up">
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
export default Education;
