import React, { useState } from 'react';
import './Solution.css'; // Import the CSS file
import solLogo1 from '../assets/Obj_Det.png'
import solLogo2 from '../assets/tracking.png'
import solLogo3 from '../assets/analytics.avif'

export default function Solution() {
    const [activeTab, setActiveTab] = useState('object-detection');

    const handleClick = (tab) => {
        setActiveTab(tab);
    };
  return (
    <div id='solution' className="solution-container">
            <h1>Solutions We Provide</h1>
            <div className="button-container wow animate__animated animate__pulse">
                <button className="btn" onClick={() => handleClick('object-detection')}>Object Detection</button>
                <button className="btn" onClick={() => handleClick('tracking')}>Tracking</button>
                <button className="btn" onClick={() => handleClick('analytics')}>Analytics</button>
            </div>
            <div className="content-container">
                {activeTab === 'object-detection' && (
                    <div className="content">
                        <div className="content-half">
                            <h2>Object Detection</h2>
                            <p>Our object detection technology helps identify and classify objects in images and videos with high accuracy.</p>
                        </div>
                        <div className="content-half wow animate__animated animate__pulse">
                            <img src={solLogo1} alt="Object Detection" />
                        </div>
                    </div>
                )}
                {activeTab === 'tracking' && (
                    <div className="content">
                        <div className="content-half">
                            <h2>Tracking</h2>
                            <p>Track objects or people in real-time with our advanced tracking solutions.</p>
                        </div>
                        <div className="content-half">
                            <img src={solLogo2} alt="Tracking" />
                        </div>
                    </div>
                )}
                {activeTab === 'analytics' && (
                    <div className="content">
                        <div className="content-half">
                            <h2>Analytics</h2>
                            <p>Leverage our AI-driven analytics tools to gain insights and make data-driven decisions.</p>
                        </div>
                        <div className="content-half">
                            <img src={solLogo3} alt="Analytics" />
                        </div>
                    </div>
                )}
            </div>
        </div>
  )
}
