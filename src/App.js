import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import 'animate.css';


import Navbar from "./components/Navbar";
import HeroSec from './components/HeroSec';
import About from './components/About';
import Solution from './components/Solution';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Spinner from './components/Spinner';

function App() {
  const [loading, setLoading] = useState(true);

  // Simulate loading or fetching data
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after 2 seconds
    }, 2000);

    return () => clearTimeout(timer); // Clean up timer
  }, []);

  return (
    <>
      {loading && <Spinner />} {/* Show spinner while loading is true */}
      <Navbar />
      <HeroSec />
      <About />
      <Solution />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
