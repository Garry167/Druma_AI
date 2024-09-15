import React from 'react'
import './About.css';

export default function About() {
  return (
    <div id='about' className="about-section">
      <h1 className='animate__animated animate__backInDown'>About Us</h1>
      <div className="container">
        <div className="row align-items-center">
          {/* Left side - YouTube Video */}
          <div className="col-lg-6 col-md-12 video-wrapper wow animate__animated animate__fadeInRight">
            <iframe 
              className="video-embed"
              src="https://www.youtube.com/embed/ntBVBAx3iLw" 
              title="YouTube video" 
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
          {/* Right side - Text */}
          <div className="col-lg-6 col-md-12 text-wrapper wow animate__animated animate__fadeInRight">
          <h3>What we do</h3>
            <p>
              We specialize in innovative AI solutions that focus on computer vision and SaaS products. 
              Our goal is to deliver high-quality, customizable services that meet your business needs.
            </p>
            <p>
              Explore our range of services and learn how we can help your business grow with cutting-edge technology.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

