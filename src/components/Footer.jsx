import React from 'react';
import logo from '../assets/Druma_img.webp';
import logo_insta from '../assets/instagram.png';
import logo_linkedin from '../assets/linkedin.png';
import './Footer.css';

export default function Footer() {
    return (
        <div className="footer-container wow animate__animated animate__fadeInUp">
            <div className="content">
                <div className="Links">
                    <ul className="link-itemSet-1">
                        <li className="link-item">
                            <a href="#about">About</a>
                        </li>
                        <li className="link-item">
                            <a href="#solution">Computer Vision</a>
                        </li>
                        <li className="link-item">
                            <a href="#solution">SaaS</a>
                        </li>
                        <li className="link-item">
                            <a href="#contact">Get In Touch</a>
                        </li>
                    </ul>

                </div>
                <div className="about">
                    <ul>
                        <li className="link-item">Privacy Policy</li>
                        <li className="link-item">Terms of Use</li>
                        <li className="link-item">Cancellations</li>
                    </ul>
                </div>
                <div className="socials">
                    <div className="insta"><img src={logo_insta} alt="Instagram" /></div>
                    <div className="linkedin"><img src={logo_linkedin} alt="LinkedIn" /></div>
                </div>
                <div className="logo_sec">
                    <img src={logo} alt="Druma Logo" />
                </div>
            </div>
            <div className="copyR">
                <p>&copy; 2024 Druma Technologies Pvt. Ltd. All rights reserved.</p>
            </div>
        </div>
    );
}
