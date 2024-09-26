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
import Industry from './pages/Industry';
import Work from './pages/Work';
import Contact from './pages/Contact';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/CustomDevelopmet" element={<CustomDevelopment />} />
        <Route path="/ProductDevelopment" element={<ProductDevelopment />} />
        <Route path="/industry" element={<Industry />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contactForm" element={<ContactForm />} />
        {/* <Route path="/Header" element={<Header />} /> */}
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/Footer" element={<Footer />} />
      </Routes>
    </Router>
  );
}

export default App;
