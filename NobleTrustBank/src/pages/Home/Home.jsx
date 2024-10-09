import React from 'react';
import './home.css';
import AboutUs from '../../components/about-us/AboutUs';
import OurServices from '../../components/our-services/OurServices';
import ContactUs from '../../components/contact-us/Contact-us';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import HeroSection from '../../components/hero-section/Hero-section';


// import Footer from '../../components/footer-a/Footer.jsx';




const HomePage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutUs/>
      <OurServices />
      <ContactUs />
      <Footer />
  
      
      
    </div>
  );
};

export default HomePage;