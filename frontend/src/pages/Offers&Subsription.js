import React, { useRef } from 'react';
import '../styles/Offer.css'; // Ensure to update your CSS file accordingly

const Offer = () => {
    const pricingTableRef = useRef(null); // Ref for the pricing table
    let scrollIndex = useRef(0); // To keep track of the current index
    const scrollAmount = 360; // Adjust this based on the width of your pricing cards and gap

    function scrollLeft() {
        if (pricingTableRef.current) {
            scrollIndex.current--; // Decrement the index
            scrollIndex.current = Math.max(scrollIndex.current, 0); // Prevent going below 0
            pricingTableRef.current.style.transform = `translateX(-${scrollIndex.current * scrollAmount}px)`;
        }
    }

    function scrollRight() {
        if (pricingTableRef.current) {
            scrollIndex.current++; // Increment the index
            const maxScroll = Math.ceil(pricingTableRef.current.scrollWidth / scrollAmount) - 1; // Calculate max scroll
            scrollIndex.current = Math.min(scrollIndex.current, maxScroll); // Prevent exceeding max
            pricingTableRef.current.style.transform = `translateX(-${scrollIndex.current * scrollAmount}px)`;
        }
    }

    return (
        <div className="website-package-section">
           
           <section className="web-package">
            <h2 className="website-package-heading">Website Packages</h2>
            <p className="website-package-description">Choose a package that suits your needs.</p>
            <div className="scrollable-container">
                <div className="pricing-table" ref={pricingTableRef}>
                    {/* Basic Plan */}
                    <div className="pricing-card">
                        <div className="card-header">
                            <svg
                                className="wavy-background"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 1440 420"
                                width="180%"
                                height="300"
                            >
                                <defs>
                                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" style={{ stopColor: '#F67280', stopOpacity: 1 }} />
                                        <stop offset="100%" style={{ stopColor: '#7D0552', stopOpacity: 1 }} />
                                    </linearGradient>
                                </defs>
                                <path
                                    fill="url(#gradient)"
                                    fillOpacity="1"
                                    d="M0,96L48,117.3C96,139,192,181,288,176C384,171,480,117,576,128C672,139,768,213,864,256C960,299,1056,309,1152,293.3C1248,277,1344,235,1392,213.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
                                ></path>
                            </svg>
                            <div className="card-title">Basic Plan</div>
                            <div className="pricing-circle">₹20,000</div>
                        </div>
                        <div className="features-section">
                            <div className="feature-list">
                                {/* Features for Basic Plan */}
                                <div className="feature-item">
                                    <span className="feature-name">Responsive Design</span>
                                    <div className="status-circle tick">✔</div>
                                </div>
                                <div className="feature-item">
                                    <span className="feature-name">Number of Web Pages</span>
                                    <div className="status-circle tick">5</div>
                                </div>
                                <div className="feature-item">
                                    <span className="feature-name">Basic SEO Optimization</span>
                                    <div className="status-circle cross">✖</div>
                                </div>
                                <div className="feature-item">
                                    <span className="feature-name">Free Domain Registration</span>
                                    <div className="status-circle cross">✖</div>
                                </div>
                                <div className="feature-item">
                                    <span className="feature-name">Free Hosting</span>
                                    <div className="status-circle tick">✔</div>
                                </div>
                                <div className="feature-item">
                                    <span className="feature-name">Support After Delivery</span>
                                    <div className="status-circle tick">1w</div>
                                </div>
                                <div className="feature-item">
                                    <span className="feature-name">Number of Revisions</span>
                                    <div className="status-circle tick">1</div>
                                </div>
                                <div className="feature-item">
                                    <span className="feature-name">SSL Certificate</span>
                                    <div className="status-circle cross">✖</div>
                                </div>
                                <div className="feature-item">
                                    <span className="feature-name">Customization Options</span>
                                    <div className="status-circle tick">✔</div>
                                </div>
                                <button className="card-button">Buy Now</button>
                            </div>
                        </div>
                    </div>

                    {/* Standard Plan */}
                    <div className="pricing-card">
                        <div className="card-header">
                            <svg
                                className="wavy-background"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 1440 420"
                                width="180%"
                                height="300"
                            >
                                <defs>
                                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" style={{ stopColor: '#F1C40F', stopOpacity: 1 }} />
                                        <stop offset="100%" style={{ stopColor: '#D35400', stopOpacity: 1 }} />
                                    </linearGradient>
                                </defs>
                                <path
                                    fill="url(#gradient)"
                                    fillOpacity="1"
                                    d="M0,96L48,117.3C96,139,192,181,288,176C384,171,480,117,576,128C672,139,768,213,864,256C960,299,1056,309,1152,293.3C1248,277,1344,235,1392,213.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
                                ></path>
                            </svg>
                            <div className="card-title">Standard Plan</div>
                            <div className="pricing-circle">₹35,000</div>
                        </div>
                        <div className="features-section">
                            <div className="feature-list">
                                {/* Features for Standard Plan */}
                                <div className="feature-item">
                                    <span className="feature-name">Responsive Design</span>
                                    <div className="status-circle tick">✔</div>
                                </div>
                                <div className="feature-item">
                                    <span className="feature-name">Number of Web Pages</span>
                                    <div className="status-circle tick">10</div>
                                </div>
                                <div className="feature-item">
                                    <span className="feature-name">Basic SEO Optimization</span>
                                    <div className="status-circle tick">✔</div>
                                </div>
                                <div className="feature-item">
                                    <span className="feature-name">Free Domain Registration</span>
                                    <div className="status-circle tick">✔</div>
                                </div>
                                <div className="feature-item">
                                    <span className="feature-name">Free Hosting</span>
                                    <div className="status-circle tick">✔</div>
                                </div>
                                <div className="feature-item">
                                    <span className="feature-name">Support After Delivery</span>
                                    <div className="status-circle tick">1m</div>
                                </div>
                                <div className="feature-item">
                                    <span className="feature-name">Number of Revisions</span>
                                    <div className="status-circle tick">2</div>
                                </div>
                                <div className="feature-item">
                                    <span className="feature-name">SSL Certificate</span>
                                    <div className="status-circle tick">✔</div>
                                </div>
                                <div className="feature-item">
                                    <span className="feature-name">Limit Customization Options</span>
                                    <div className="status-circle tick">✔</div>
                                </div>
                                <button className="card-button">Buy Now</button>
                            </div>
                        </div>
                    </div>

                    {/* Premium Plan */}
                    <div className="pricing-card">
                        <div className="card-header">
                            <svg
                                className="wavy-background"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 1440 420"
                                width="180%"
                                height="300"
                            >
                                <defs>
                                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" style={{ stopColor: '#2980B9', stopOpacity: 1 }} />
                                        <stop offset="100%" style={{ stopColor: '#8E44AD', stopOpacity: 1 }} />
                                    </linearGradient>
                                </defs>
                                <path
                                    fill="url(#gradient)"
                                    fillOpacity="1"
                                    d="M0,96L48,117.3C96,139,192,181,288,176C384,171,480,117,576,128C672,139,768,213,864,256C960,299,1056,309,1152,293.3C1248,277,1344,235,1392,213.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
                                ></path>
                            </svg>
                            <div className="card-title">Premium Plan</div>
                            <div className="pricing-circle">₹50,000</div>
                        </div>
                        <div className="features-section">
                            <div className="feature-list">
                                {/* Features for Premium Plan */}
                                <div className="feature-item">
                                    <span className="feature-name">Responsive Design</span>
                                    <div className="status-circle tick">✔</div>
                                </div>
                                <div className="feature-item">
                                    <span className="feature-name">Number of Web Pages</span>
                                    <div className="status-circle tick">15</div>
                                </div>
                                <div className="feature-item">
                                    <span className="feature-name">Basic SEO Optimization</span>
                                    <div className="status-circle tick">✔</div>
                                </div>
                                <div className="feature-item">
                                    <span className="feature-name">Free Domain Registration</span>
                                    <div className="status-circle tick">✔</div>
                                </div>
                                <div className="feature-item">
                                    <span className="feature-name">Free Hosting</span>
                                    <div className="status-circle tick">✔</div>
                                </div>
                                <div className="feature-item">
                                    <span className="feature-name">Support After Delivery</span>
                                    <div className="status-circle tick">6m</div>
                                </div>
                                <div className="feature-item">
                                    <span className="feature-name">Number of Revisions</span>
                                    <div className="status-circle tick">5</div>
                                </div>
                                <div className="feature-item">
                                    <span className="feature-name">SSL Certificate</span>
                                    <div className="status-circle tick">✔</div>
                                </div>
                                <div className="feature-item">
                                    <span className="feature-name">Fully Customizable Options</span>
                                    <div className="status-circle tick">✔</div>
                                </div>
                                <button className="card-button">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Scroll Buttons */}
                <button className="scroll-button left" onClick={scrollLeft}>
                    &#9664; {/* Left arrow */}
                </button>
                <button className="scroll-button right" onClick={scrollRight}>
                    &#9654; {/* Right arrow */}
                </button>
            </div>
           </section>
           
<section className='mobile-package'>
  <h2 className="package-heading">Mobile App Packages</h2>
  <p className="package-description">Choose a package that suits your needs.</p>
  <div className="scrollable-container">
    <div className="pricing-table" ref={pricingTableRef}>
      
      {/* Basic Plan */}
      <div className="pricing-card">
        <div className="card-header">
          <svg
            className="wavy-background"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 420"
            width="180%"
            height="300"
          >
            <defs>
              <linearGradient id="mp-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#F67280', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#7D0552', stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            <path
              fill="url(#mp-gradient)"
              fillOpacity="1"
              d="M0,96L48,117.3C96,139,192,181,288,176C384,171,480,117,576,128C672,139,768,213,864,256C960,299,1056,309,1152,293.3C1248,277,1344,235,1392,213.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            ></path>
          </svg>
          <div className="card-title">Basic Plan</div>
          <div className="pricing-circle">₹25,000</div>
        </div>
        <div className="features-section">
          <div className="feature-list">
            <div className="feature-item">
              <span className="feature-name">Responsive Design</span>
              <div className="status-circle tick">✔</div>
            </div>
            <div className="feature-item">
              <span className="feature-name">Number of Screens</span>
              <div className="status-circle tick">5</div>
            </div>
            <div className="feature-item">
              <span className="feature-name">Basic App Features</span>
              <div className="status-circle tick">✔</div>
            </div>
            <div className="feature-item">
              <span className="feature-name">App Store Submission</span>
              <div className="status-circle cross">✖</div>
            </div>
            <div className="feature-item">
              <span className="feature-name">Free Maintenance</span>
              <div className="status-circle tick">1w</div>
            </div>
            <div className="feature-item">
              <span className="feature-name">Number of Revisions</span>
              <div className="status-circle tick">1</div>
            </div>
            <button className="card-button">Buy Now</button>
          </div>
        </div>
      </div>

      {/* Standard Plan */}
      <div className="pricing-card">
        <div className="card-header">
          <svg
            className="wavy-background"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 420"
            width="180%"
            height="300"
          >
            <defs>
              <linearGradient id="lp-gradient" x1="0%" y1="0%" x2="100%">
                <stop offset="0%" style={{ stopColor: '#F1C40F', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#D35400', stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            <path
              fill="url(#lp-gradient)"
              fillOpacity="1"
              d="M0,96L48,117.3C96,139,192,181,288,176C384,171,480,117,576,128C672,139,768,213,864,256C960,299,1056,309,1152,293.3C1248,277,1344,235,1392,213.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            ></path>
          </svg>
          <div className="card-title">Standard Plan</div>
          <div className="pricing-circle">₹50,000</div>
        </div>
        <div className="features-section">
          <div className="feature-list">
            <div className="feature-item">
              <span className="feature-name">Responsive Design</span>
              <div className="status-circle tick">✔</div>
            </div>
            <div className="feature-item">
              <span className="feature-name">Number of Screens</span>
              <div className="status-circle tick">10</div>
            </div>
            <div className="feature-item">
              <span className="feature-name">Basic SEO Optimization</span>
              <div className="status-circle tick">✔</div>
            </div>
            <div className="feature-item">
              <span className="feature-name">App Store Submission</span>
              <div className="status-circle tick">✔</div>
            </div>
            <div className="feature-item">
              <span className="feature-name">Free Maintenance</span>
              <div className="status-circle tick">1m</div>
            </div>
            <div className="feature-item">
              <span className="feature-name">Number of Revisions</span>
              <div className="status-circle tick">2</div>
            </div>
            <button className="card-button">Buy Now</button>
          </div>
        </div>
      </div>

      {/* Premium Plan */}
      <div className="pricing-card">
        <div className="card-header">
          <svg
            className="wavy-background"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 420"
            width="180%"
            height="300"
          >
            <defs>
              <linearGradient id="ap-gradient" x1="0%" y1="0%" x2="100%">
                <stop offset="0%" style={{ stopColor: '#2980B9', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#8E44AD', stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            <path
              fill="url(#ap-gradient)"
              fillOpacity="1"
              d="M0,96L48,117.3C96,139,192,181,288,176C384,171,480,117,576,128C672,139,768,213,864,256C960,299,1056,309,1152,293.3C1248,277,1344,235,1392,213.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            ></path>
          </svg>
          <div className="card-title">Premium Plan</div>
          <div className="pricing-circle">₹1,00,000</div>
        </div>
        <div className="features-section">
          <div className="feature-list">
            <div className="feature-item">
              <span className="feature-name">Responsive Design</span>
              <div className="status-circle tick">✔</div>
            </div>
            <div className="feature-item">
              <span className="feature-name">Number of Screens</span>
              <div className="status-circle tick">15</div>
            </div>
            <div className="feature-item">
              <span className="feature-name">Full SEO Optimization</span>
              <div className="status-circle tick">✔</div>
            </div>
            <div className="feature-item">
              <span className="feature-name">App Store Submission</span>
              <div className="status-circle tick">✔</div>
            </div>
            <div className="feature-item">
              <span className="feature-name">Free Maintenance</span>
              <div className="status-circle tick">6m</div>
            </div>
            <div className="feature-item">
              <span className="feature-name">Number of Revisions</span>
              <div className="status-circle tick">7</div>
            </div>
            <button className="card-button">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

 <section className='whatsapp-automation-package'>
  <h2 className="package-heading">WhatsApp Automation Packages</h2>
  <p className="package-description">Choose the perfect plan to automate and streamline your WhatsApp communication efficiently.</p>
  <div className="scrollable-container">
    <div className="pricing-table" ref={pricingTableRef}>
      {/* Basic Plan */}
      <div className="pricing-card">
        <div className="card-header">
          <svg className="wavy-background" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 420" width="180%" height="300">
            <defs>
              <linearGradient id="gradient-basic" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#00008B', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#0AFFFF', stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            <path fill="url(#gradient-basic)" fillOpacity="1" d="M0,96L48,117.3C96,139,192,181,288,176C384,171,480,117,576,128C672,139,768,213,864,256C960,299,1056,309,1152,293.3C1248,277,1344,235,1392,213.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
          </svg>
          <div className="card-title">Basic Plan</div>
          <div className="pricing-circle">₹500/m</div>
        </div>
        <div className="features-section">
          <div className="feature-list">
            <div className="feature-item">
              <span className="feature-name">100 Messages/Day</span>
              <div className="status-circle tick">✔</div>
            </div>
            <div className="feature-item">
              <span className="feature-name">Basic Automation</span>
              <div className="status-circle tick">✔</div>
            </div>
            <div className="feature-item">
              <span className="feature-name">1 User License</span>
              <div className="status-circle tick">✔</div>
            </div>
            <div className="feature-item">
              <span className="feature-name">Customer Support (Email)</span>
              <div className="status-circle tick">✔</div>
            </div>
            <button className="card-button">Buy Now</button>
          </div>
        </div>
      </div>

      {/* Standard Plan */}
      <div className="pricing-card">
        <div className="card-header">
          <svg className="wavy-background" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 420" width="180%" height="300">
            <defs>
              <linearGradient id="gradient-standard" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#483C32', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#ffbe76', stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            <path fill="url(#gradient-standard)" fillOpacity="1" d="M0,96L48,117.3C96,139,192,181,288,176C384,171,480,117,576,128C672,139,768,213,864,256C960,299,1056,309,1152,293.3C1248,277,1344,235,1392,213.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
          </svg>
          <div className="card-title">Standard Plan</div>
          <div className="pricing-circle">₹800/m</div>
        </div>
        <div className="features-section">
          <div className="feature-list">
            <div className="feature-item">
              <span className="feature-name">500 Messages/Day</span>
              <div className="status-circle tick">✔</div>
            </div>
            <div className="feature-item">
              <span className="feature-name">Advanced Automation</span>
              <div className="status-circle tick">✔</div>
            </div>
            <div className="feature-item">
              <span className="feature-name">3 User Licenses</span>
              <div className="status-circle tick">✔</div>
            </div>
            <div className="feature-item">
              <span className="feature-name">Customer Support (Phone & Email)</span>
              <div className="status-circle tick">✔</div>
            </div>
            <button className="card-button">Buy Now</button>
          </div>
        </div>
      </div>

      {/* Premium Plan */}
      <div className="pricing-card">
        <div className="card-header">
          <svg className="wavy-background" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 420" width="180%" height="300">
            <defs>
              <linearGradient id="gradient-premium" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#F67280', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#ff7979', stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            <path fill="url(#gradient-premium)" fillOpacity="1" d="M0,96L48,117.3C96,139,192,181,288,176C384,171,480,117,576,128C672,139,768,213,864,256C960,299,1056,309,1152,293.3C1248,277,1344,235,1392,213.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
          </svg>
          <div className="card-title">Premium Plan</div>
          <div className="pricing-circle">₹1,800/m</div>
        </div>
        <div className="features-section">
          <div className="feature-list">
            <div className="feature-item">
              <span className="feature-name">Unlimited Messages</span>
              <div className="status-circle tick">✔</div>
            </div>
            <div className="feature-item">
              <span className="feature-name">Full Automation & Custom Integration</span>
              <div className="status-circle tick">✔</div>
            </div>
            <div className="feature-item">
              <span className="feature-name">5+ User Licenses</span>
              <div className="status-circle tick">✔</div>
            </div>
            <div className="feature-item">
              <span className="feature-name">Dedicated Customer Support</span>
              <div className="status-circle tick">✔</div>
            </div>
            <button className="card-button">Buy Now</button>
          </div>
        </div>
      </div>
    </div>

    {/* Scroll Buttons */}
    <button className="scroll-button left" onClick={scrollLeft}>
      &#9664;
    </button>
    <button className="scroll-button right" onClick={scrollRight}>
      &#9654;
    </button>
  </div>
</section>




        </div>

        
    );
};

export default Offer;
