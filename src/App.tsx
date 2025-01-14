import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import ParticleBackground from './components/ParticleBackground';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Internship from './components/Internship';
import InternshipPreview from './components/InternshipPreview';

// Scroll to top component
const ScrollToTop = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Handle hash navigation
    if (location.hash) {
      const id = location.hash.substring(1); // remove the # symbol
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 0);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return null;
};

// Home page component
const Home = () => (
  <>
    <Hero />
    <Services />
    <InternshipPreview />
    <About />
    <Gallery />
    <Testimonials />
  </>
);

function App() {
  return (
    <Router>
      <ThemeProvider>
        <div className="min-h-screen bg-gradient-to-b from-[var(--bg-primary)] to-[var(--bg-secondary)] text-[var(--text-primary)] overflow-x-hidden">
          <ParticleBackground />
          <Nav />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/internship" element={<Internship />} />
          </Routes>
          <Footer />
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;