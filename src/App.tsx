import React from 'react';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero';
import { FeaturedServices } from './components/FeaturedServices';
import { About } from './components/About';
import { Booking } from './components/Booking';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedServices />
      <About />
      <Booking />
      <Contact />
    </div>
  );
}

export default App;