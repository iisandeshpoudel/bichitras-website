import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import ParticleBackground from './components/ParticleBackground';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Nav from './components/Nav';
import ThemeToggle from './components/ThemeToggle';
import GrowthGraph from './components/GrowthGraph';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-b from-[var(--bg-primary)] to-[var(--bg-secondary)] text-[var(--text-primary)] overflow-x-hidden">
        <ParticleBackground />
        <Nav />
        <ThemeToggle />
        <Hero />
        <Services />
        <GrowthGraph />
        <About />
        <Testimonials />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;