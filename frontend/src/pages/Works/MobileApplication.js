import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import '../../styles/MobileappDev.css'; // Import the CSS file for the Custom Development page
import Footer from '../../components/Footer'; // Import Footer component
import FAQ from '../../components/FAQ';
import ContactForm from '../../components/ContactForm';
import image1 from '../../assets/images/Services/mobileappdev/image2.jpg';
import { FaArrowRight } from 'react-icons/fa'; // Import an arrow icon
import { 
  FaAws, FaReact, FaJava, FaDocker, FaNodeJs, FaGitAlt, FaGithub 
} from 'react-icons/fa';  // Add more icons as needed

import { 
  SiMicrosoftazure, SiGooglecloud, SiFirebase, SiExpo, SiSwift, SiKotlin, 
  SiAndroid, SiIos, SiMongodb, SiMysql, SiSqlite, SiGraphql, SiApollographql, 
  SiJenkins, SiCircleci, SiFastlane 
} from 'react-icons/si'; // From 'simple-icons'


const MobileApplication = () => { const contactRef = useRef(null);

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
 

      {/* Umobiledevated Hero Section with Two Circles and Image */}
   <section className="hero-section">
  <div className="mobiledev-hero-content" data-aos="fade-up">
     <h1>MOBILE APP DEVELOPMENT SOLUTIONS</h1>
        <p>
          Develop and launch your mobile app with ease, supported by a skilled team that brings your vision to life and ensures success in the competitive app market.
        </p>
    <div className="mobiledev-circle-container">
      <div className="mobiledev-wing-circle mobiledev-left-circle gradient-border" data-aos="fade-up"></div>
      <div className="mobiledev-center-image-circle">
        <img
          src={image1}
          alt="Innovative Solution"
          className="mobiledev-center-image"
        />
      </div>
      <div className="mobiledev-wing-circle mobiledev-right-circle gradient-border" data-aos="fade-up"></div>
    </div>
    <div className="mobiledev-small-circle-wrapper" onClick={scrollToContact}>
      <div className="mobiledev-small-circle gradient-border">
        <span className="mobiledev-arrow">→</span>
      </div>
      <p className="mobiledev-small-circle-text">Get in touch with us</p>
    </div>
  </div>
</section>


    

      <section className="journey-section" data-aos="fade-up">
        <h2>OUR DEVELOPMENT PROCESS</h2>
        <p>
          At AMTB Solutions, we combine expertise and technology to deliver personalized product development solutions that push the boundaries of innovation. Here's how we do it:
        </p>

        <div className="journey-steps">
          <div className="step-item" data-aos="fade-up">
            <div className="step-number">1</div>
            <div className="step-content">
              <h3>IDEATION</h3>
              <p>Brainstorm and define project scope, requirements, and technical challenges with our expert team.</p>
            </div>
          </div>
          <div className="step-item" data-aos="fade-up" >
            <div className="step-number">2</div>
            <div className="step-content">
              <h3>STRATEGY</h3>
              <p>Map out a strategic development plan, focusing on timelines, resources, and goals.</p>
            </div>
          </div>
          <div className="step-item" data-aos="fade-up">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3>UX/UI DESIGN</h3>
            <p>We create engaging and intuitive user experiences to maximize your app's appeal and usability.</p>
          </div>
          </div>
          <div className="step-item" data-aos="fade-up">
            <div className="step-number">4</div>
            <div className="step-content">
              <h3>DEVELOPMENT</h3>
            <p>We code and build your mobile app, ensuring seamless performance across Android and iOS platforms.</p>
          </div>
          </div>
          <div className="step-item" data-aos="fade-up">
            <div className="step-number">5</div>
            <div className="step-content">
               <h3>LAUNCH</h3>
            <p>Your app is launched on the App Store and Google Play, fully optimized and market-ready.</p>
          </div>
          </div>
          <div className="step-item" data-aos="fade-up">
            <div className="step-number">6</div>
            <div className="step-content">
              <h3>ONGOING SUPPORT</h3>
            <p>We provide continuous support, maintenance, and umobiledevates to keep your app performing flawlessly.</p>
          </div>
          </div>
        </div>
      </section>


      {/* Services Section */}
      <section className="mobiledev-section" data-aos="fade-up">
        <div className="custom-services-content">
          <h2>FROM IDEA TO APP STORE SUCCESS</h2>
        <p>
          With over a decade of experience, we bring your mobile app idea to life with a smooth and efficient process.
        </p>
        </div>

        <div className="services-container" data-aos="fade-up">
          <div className="service-item" data-aos="fade-up">
            <h3>APP DISCOVERY</h3>
          <p>
            We help refine your app idea, define user needs, and identify the best solutions to ensure your app's success.
          </p>

                 <div className="ss-small-circle-container" onClick={scrollToContact}>
                 <div className="ss-small-circle gradient-border">
                 <span className="ss-arrow">→</span>
                 </div>
                 </div>

            <div className="mobiledev-service-tags" data-aos="fade-up">
              <span>Market Research</span>
            <span>User Journey Mapping</span>
            <span>Wireframe Designs</span>
            </div>
          </div>

          <div className="service-item" data-aos="fade-up">
            <h3>PROTOTYPING</h3>
          <p>
            Test your concept with a functional prototype before development begins to validate your app’s potential.
          </p>
             <div className="ss-small-circle-container" onClick={scrollToContact}>
                 <div className="ss-small-circle gradient-border">
                 <span className="ss-arrow">→</span>
                 </div>
                 </div>

            <div className="mobiledev-service-tags" data-aos="fade-up">
               <span>Interactive Prototypes</span>
            <span>Proof of Concept</span>
              
            </div>
          </div>

          <div className="service-item" data-aos="fade-up">
            <h3>UI/UX DESIGN</h3>
          <p>
            We design user-centered interfaces that enhance user engagement and ensure a seamless app experience.
          </p>
             <div className="ss-small-circle-container" onClick={scrollToContact}>
                 <div className="ss-small-circle gradient-border">
                 <span className="ss-arrow">→</span>
                 </div>
                 </div>

            <div className="mobiledev-service-tags" data-aos="fade-up">
              <span>Optimized UI/UX for Android & iOS</span>

            </div>
          </div>

          <div className="service-item" data-aos="fade-up">
           <h3>MVP DEVELOPMENT</h3>
          <p>
            Launch your app quickly with a Minimum Viable Product (MVP) to gather market feedback and iterate rapidly.
          </p>
             <div className="ss-small-circle-container" onClick={scrollToContact}>
                 <div className="ss-small-circle gradient-border">
                 <span className="ss-arrow">→</span>
                 </div>
                 </div>

            <div className="mobiledev-service-tags" data-aos="fade-up">
             <span>Fast, Cost-efficient MVPs</span>
            <span>Market Testing</span>
            </div>
          </div>
        </div>
      </section>


      {/* Technology Tools Section */}
     <section className="tools-section" data-aos="fade-up">
      <h2>Advanced Tools for App Development</h2>
      <p>
        We utilize cutting-edge tools and technologies to build mobile apps that scale with your business and stand the test of time.
      </p>
      <div className="tools-logos">
  <div className="mobiledev-tool-icon" data-aos="fade-up">
    <FaReact size={50} />
    <p>React Native</p>
  </div>

  <div className="mobiledev-tool-icon" data-aos="fade-up">
    <SiSwift size={50} />
    <p>Swift</p>
  </div>
  <div className="mobiledev-tool-icon" data-aos="fade-up">
    <FaJava size={50} />
    <p>Java</p>
  </div>
  <div className="mobiledev-tool-icon" data-aos="fade-up">
    <SiKotlin size={50} />
    <p>Kotlin</p>
  </div>
  <div className="mobiledev-tool-icon" data-aos="fade-up">
    <SiAndroid size={50} />
    <p>Android SDK</p>
  </div>
  <div className="mobiledev-tool-icon" data-aos="fade-up">
    <SiIos size={50} />
    <p>iOS SDK</p>
  </div>
  <div className="mobiledev-tool-icon" data-aos="fade-up">
    <SiExpo size={50} />
    <p>Expo</p>
  </div>
  <div className="mobiledev-tool-icon" data-aos="fade-up">
    <FaDocker size={50} />
    <p>Docker</p>
  </div>
  <div className="mobiledev-tool-icon" data-aos="fade-up">
    <SiFirebase size={50} />
    <p>Firebase</p>
  </div>
  <div className="mobiledev-tool-icon" data-aos="fade-up">
    <SiGooglecloud size={50} />
    <p>Google Cloud</p>
  </div>
  <div className="mobiledev-tool-icon" data-aos="fade-up">
    <FaAws size={50} />
    <p>AWS</p>
  </div>
  <div className="mobiledev-tool-icon" data-aos="fade-up">
    <SiMicrosoftazure size={50} />
    <p>Microsoft Azure</p>
  </div>
  <div className="mobiledev-tool-icon" data-aos="fade-up">
    <SiMongodb size={50} />
    <p>MongoDB</p>
  </div>
  <div className="mobiledev-tool-icon" data-aos="fade-up">
    <SiMysql size={50} />
    <p>MySQL</p>
  </div>
  <div className="mobiledev-tool-icon" data-aos="fade-up">
    <SiSqlite size={50} />
    <p>SQLite</p>
  </div>
  <div className="mobiledev-tool-icon" data-aos="fade-up">
    <SiGraphql size={50} />
    <p>GraphQL</p>
  </div>
  <div className="mobiledev-tool-icon" data-aos="fade-up">
    <SiApollographql size={50} />
    <p>Apollo</p>
  </div>
  <div className="mobiledev-tool-icon" data-aos="fade-up">
    <FaNodeJs size={50} />
    <p>Node.js</p>
  </div>
  <div className="mobiledev-tool-icon" data-aos="fade-up">
    <FaGitAlt size={50} />
    <p>Git</p>
  </div>
  <div className="mobiledev-tool-icon" data-aos="fade-up">
    <SiJenkins size={50} />
    <p>Jenkins</p>
  </div>
  <div className="mobiledev-tool-icon" data-aos="fade-up">
    <FaGithub size={50} />
    <p>GitHub</p>
  </div>
  <div className="mobiledev-tool-icon" data-aos="fade-up">
    <SiCircleci size={50} />
    <p>CircleCI</p>
  </div>
  <div className="mobiledev-tool-icon" data-aos="fade-up">
    <SiFastlane size={50} />
    <p>Fastlane</p>
  </div>
</div>

    </section>

    {/* Custom Development for Industries Section */}
<section className="mobiledev-industry-section" data-aos="fade-up">
  <h2>Custom Mobile App Solutions for Every Industry</h2>
      <p>
        AMTB Solution delivers mobile apps across various industries, including healthcare, education, and e-commerce, tailored to meet specific business goals.
      </p> <div className="industry-container">
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
                <a class="mobiledev-circle-button" >
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
                <a  class="mobiledev-circle-button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="arrow-icon">
                        <path d="M8 4l8 8-8 8" fill="none" stroke="white" stroke-width="2" />
                    </svg>
                </a>
                <span class="circle-text">Hire a team</span>
            </div>
        </div>
    </div>
</section>

<section className="mobiledev-mad-services-section" data-aos="fade-up">
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
export default MobileApplication;
