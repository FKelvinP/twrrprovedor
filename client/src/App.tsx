import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Plans from './components/Plans';
import Benefits from './components/Benefits';
import Features from './components/Features';
import ServiceAreas from './components/ServiceAreas';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Header />
      <main>
        <Hero />
        <Plans />
        <Benefits />
        <Features />
        <ServiceAreas />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
