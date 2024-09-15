import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
  // State for managing form input values
  const [formData, setFormData] = useState({
    service: '',
    name: '',
    subject: '',
    companyName: '',
    email: '',
    phone: '',
    details: '',
  });

  // Handler for input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here
    console.log(formData);
  };

  return (
    <div>
      <div id='contact' className="container">
        <h1 className="text-center mt-4">Get In Touch</h1>
        <p className='text-center mt-4'>Fill in the details below and we will get back to you in 24 hours</p>
        <form onSubmit={handleSubmit}>
          <div className="row ">
            {/* First Half */}
            <div className="col-md-6 wow animate__animated animate__fadeInLeft">
              <div className="mb-3 form-input">
                <select id="service" className="form-select " value={formData.service} onChange={handleChange}>
                  <option value="">Select Service</option>
                  <option value="Computer Vision">Computer Vision</option>
                  <option value="SaaS">SaaS</option>
                  <option value="Both">Both</option>
                </select>
              </div>

              <div className="mb-3">
                <input type="text" className="form-control" id="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} />
              </div>

              <div className="mb-3">
                <input type="text" className="form-control" id="subject" placeholder="Enter subject" value={formData.subject} onChange={handleChange} />
              </div>

              <div className="mb-3">
                <input type="text" className="form-control" id="companyName" placeholder="Enter company name" value={formData.companyName} onChange={handleChange} />
              </div>

              <div className="mb-3">
                <input type="email" className="form-control" id="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} />
              </div>

              <div className="mb-3">
                <input type="text" className="form-control" id="phone" placeholder="Enter your phone number" value={formData.phone} onChange={handleChange} />
              </div>
            </div>

            {/* Second Half */}
            <div className="col-md-6 wow animate__animated animate__fadeInRight">
              <div className="mb-3">
                <textarea id="details" className="form-control" rows="10" placeholder="Any additional details" value={formData.details} onChange={handleChange}></textarea>
              </div>
            </div>
          </div>

          <div className="text-center mt-4 wow animate__animated animate__pulse">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
