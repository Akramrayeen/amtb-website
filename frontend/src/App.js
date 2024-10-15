import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// import Header from './components/Header';
import FAQ from './components/FAQ';
import Home from './pages/Home';
import About from './pages/About';
import CustomDevelopment from './pages/Services/CustomDevelopment';
import ProductDevelopment from './pages/Services/ProductDevelopment';
import DevOps from './pages/Services/DevOps';
import ITConsulting from './pages/Services/IT-Consulting';
import WebappDev from './pages/Services/WebappDev';
import MoileappDev from './pages/Services/MobileappDev';
import SaasDevelopment from './pages/Services/SaasDevelopment';
import SoftwareRengineer from './pages/Services/SoftwareRe-engeering';
import TeamAgumentation from './pages/Services/TeamAgumentation';
import TestAutomation from './pages/Services/TestAutomation';
import UiDesign from './pages/Services/UiDesign';

import Bank from './pages/Industry/Bank';
import Ecommerce from './pages/Industry/E-commerce';
import Education from './pages/Industry/Education';
import Healthcare from './pages/Industry/HealthCare';
import RealState from './pages/Industry/Real-State';
import Logistics from './pages/Industry/Logistics';

import AiToolsBuilding from './pages/Works/Ai-ToolsBuilding';
import MobileApplication from './pages/Works/MobileApplication';
import WebSites from './pages/Works/WebSites';


import Contact from './pages/Contact';
import ContactForm from './components/ContactForm';
import Offer from './pages/Offers&Subsription';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/CustomDevelopment" element={<CustomDevelopment />} />
        <Route path="/ProductDevelopment" element={<ProductDevelopment />} />
        <Route path="/DevOps" element={<DevOps />} />
        <Route path="/ITConsulting" element={<ITConsulting />} />
        <Route path="/MoileappDev" element={<MoileappDev />} />
        <Route path="/WebappDev" element={<WebappDev />} />
        <Route path="/SaasDevelopment" element={<SaasDevelopment />} />
        <Route path="/SoftwareRengineer" element={<SoftwareRengineer />} />
        <Route path="/TeamAgumentation" element={<TeamAgumentation />} />
        <Route path="/TestAutomation" element={<TestAutomation />} />
        <Route path="/UiDesign" element={<UiDesign />} />

        <Route path="/Bank" element={<Bank />} />
        <Route path="/Ecommerce" element={<Ecommerce />} />
        <Route path="/Education" element={<Education />} />
        <Route path="/Healthcare" element={<Healthcare />} />
        <Route path="/RealState" element={<RealState />} />
        <Route path="/Logistics" element={<Logistics />} />
         

        <Route path="/AiToolsBuilding" element={<AiToolsBuilding />} />
        <Route path="/MobileApplication" element={<MobileApplication />} />
        <Route path="/WebSites" element={<WebSites />} />
        

        <Route path="/contact" element={<Contact />} />
        <Route path="/contactForm" element={<ContactForm />} />
        <Route path="/Offer" element={<Offer />} />
        {/* <Route path="/Header" element={<Header />} /> */}
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/Footer" element={<Footer />} />
      </Routes>
    </Router>
  );
}

export default App;
