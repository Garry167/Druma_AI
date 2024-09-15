import React from 'react';
import './Spinner.css';
import gif from '../assets/Loader_animation.gif'

export default function Spinner() {
    return (
        <div className="spinner-overlay">
            <div className="spinner">
                {/* You can use an animated gif or a CSS-based spinner here */}
                <img src={gif} alt="Loading..." />
            </div>
        </div>
    );
}