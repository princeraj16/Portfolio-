import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="min-h-screen bg-ivory-white">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Certifications />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;