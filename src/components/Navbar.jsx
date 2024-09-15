import React, { useState } from 'react';
import './Navbar.css';
import logo from '../assets/Druma_img.webp';
import logo1 from '../assets/Login_logo.png';

export default function Navbar() {
    // Initialize state for menu links
    const [menuLinks] = useState([
        {
            title: "Home",
            link: "#hero",
            id: 1,
        },
        {
            title: "About",
            link: "#about",
            id: 2,
        },
        {
            title: "Solutions",
            link: "#solution",
            id: 3,
        },
        {
            title: "Services",
            link: "#services",
            id: 4,
        },
        {
            title: "Get In Touch",
            link: "#contact",
            id: 5,
        }
    ]);

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand fw-semibold fs-4" href="#hero">
                    <img className='B_logo me-2' src={logo} alt="Druma logo" />
                    Druma
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto fw-semibold">
                        {menuLinks.map((link) => (
                            <li className="nav-item" key={link.id}>
                                <a className="nav-link" href={link.link}>
                                    {link.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className="user_login">
                        <button className='login_btn'>                       
                             <img className='user_login_logo' src={logo1} alt="User login" />
                        </button>
                    </div>

                </div>
            </div>
        </nav>
    );
}
