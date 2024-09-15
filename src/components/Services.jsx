import React, { useState, useEffect } from 'react';
import './Services.css'; // For custom styles
import img_CV from '../assets/CV1.jpg';
import img_saas from '../assets/saas.jpg';
import img_CV2 from '../assets/CV(2).avif';

export default function Services() {
    const [items] = useState([
        {
            title: "Computer Vision",
            content: "Some representative placeholder content for the first slide.",
            id: 1,
            img: img_CV,
        },
        {
            title: "Saas",
            content: "Some representative placeholder content for the second slide.",
            id: 2,
            img: img_saas,
        },
        {
            title: "Computer Vision",
            content: "Some representative placeholder content for the third slide.",
            id: 23,
            img: img_CV2,
        }
    ]);

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);

        // Cleanup event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div id="services" className="carousel slide" data-bs-ride="carousel">
            <h1>Services</h1>
            <div className="carousel-inner">
                {items.map((item, index) => (
                    <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={item.id}>
                        <div className="d-flex justify-content-center">
                            <img src={item.img} className="carousel-img w-90" alt={`${item.title}`} />
                        </div>
                        <div className="carousel-caption text-center">
                            <h5>{item.title}</h5>
                            <p>{item.content}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Carousel indicators placed below the image */}
            {windowWidth < 768 && (
                <div className="carousel-indicators">
                    {items.map((item, index) => (
                        <button
                            type="button"
                            data-bs-target="#services"
                            data-bs-slide-to={index}
                            className={index === 0 ? 'active' : ''}
                            aria-current={index === 0 ? 'true' : 'false'}
                            aria-label={`Slide ${index + 1}`}
                            key={item.id}
                        ></button>
                    ))}
                </div>
            )}

            {/* Controls for larger screens */}
            {windowWidth >= 768 && (
                <>
                    <button className="carousel-control-prev" type="button" data-bs-target="#services" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#services" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </>
            )}
        </div>
    );
}
