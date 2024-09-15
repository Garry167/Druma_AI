import React, { useRef, useState, useEffect } from 'react';
import './HeroSec.css';
import Typed from 'typed.js';
// import Spinner from './Spinner'; 
export default function HeroSec() {
    // const [loading, setLoading] = useState(true); 

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setLoading(false); 
    //     }, 2000);

    //     return () => clearTimeout(timer); 
    // }, []);

    const el = useRef(null);

    useEffect(() => {
        if (el.current) {
            const options = {
                strings: [
                    "AI-Powered Analytics", 
                    "Computer Vision Solutions", 
                    "SaaS for Efficiency", 
                    "Transforming Industries"
                ], 
                startDelay: 100,
                typeSpeed: 50,
                backSpeed: 50, // Adjusted to match typeSpeed
                backDelay: 1000, // Added a longer delay before text backspacing
                loop: true // Ensures the animation loops infinitely
            };

            const typed = new Typed(el.current, options);

            return () => {
                typed.destroy(); // Clean up when component unmounts
            };
        }
    }, []);

    const handleScroll = () => {
        document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
    };

    return (

        <section id='hero' className="hero">
                    <div className="hero-content">
                        <div className='wow animate__animated animate__fadeInDown'>
                            <h1 className="hero-title">
                                Empowering Vision with
                            </h1>
                            <h3 className='hero-typed'>
                                <span ref={el}></span>
                            </h3>
                            <p className="hero-subtitle ">
                                Druma.ai provides cutting-edge computer vision solutions and SaaS offerings
                                to streamline your business with AI-powered analytics.
                            </p>
                            <div className="hero-buttons">
                                <a href="#services" className="btn-primary">Explore Services</a>
                                <a href="#contact" className="btn-secondary">Get Started</a>
                            </div>
                        </div>
                    </div>

                    {/* Scroll Down Animation */}
                    <div className="scroll-down" onClick={handleScroll}>
                        <div className="mouse"></div>
                    </div>
                </section>
    );
}
