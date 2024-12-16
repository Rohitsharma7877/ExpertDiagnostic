import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { FaPhoneVolume } from "react-icons/fa6"; // Import the close icon
import doctor from './indianGroupDoctors.jpg'
import "./doctorportal.css";
import {
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
  FaGlobe,
  FaMapMarkerAlt,
} from "react-icons/fa";

const DoctorPortal = () => {
  const [showForm, setShowForm] = useState(false);

  const handleBookNowClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };
  return (
    <div className="doctorPortal-main1">
      <div className="doctorPortal-main2">
        <div className="doctorPortal-box">
          <div className="doctorPortal-title-box">
            <h1 className="doctorPortal-title">Patient Registration</h1>
            <p className="doctorPortal-title2">
              Patient registration is the process of collecting essential
              patient details, ensuring accurate records for seamless healthcare
              delivery and efficient management.
            </p>
            <div className="doctorPortal-buttons">
              <button className="doctorPortal-btn" onClick={handleBookNowClick}>Book Now</button>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="contact-section">
        <div className="contact-info">
          <FaPhoneVolume className="contact-icon" />
          <p>+91 0123456789</p>
        </div>
        <div className="contact-info">
          <FaWhatsapp className="contact-icon" />
          <p>+91 0123456789</p>
        </div>
        <div className="contact-info">
          <FaEnvelope className="contact-icon" />
          <p>info@expertdiagnostics.in</p>
        </div>
        <div className="contact-info">
          <FaGlobe className="contact-icon" />
          <p>www.expertdiagnostics.in</p>
        </div>
      </div>

      {/* Locations Section */}
      <div className="locations-section">
        <FaMapMarkerAlt className="locations-icon" />
        <p className="text-gray text-sm">
          <span className="text-black">Address: </span>
          Expert Diagnostics Ground Floor Sri Venkatadri Arcade <br/>(Next to
          Reliance Smart) 3rd Cross, 1st Main K R Puram, Hassan - 573201
        </p>
      </div>
      {showForm && (
        <div className="form-overlay">
          <div className="form-wrapper">
            {/* Left Section: Image */}
            <div className="form-image-section">
              <img
                src={doctor}
                alt="Doctors"
                className="form-image"
              />
            </div>

            {/* Right Section: Form */}
            <div className="form-container">
              {/* Close Icon */}
              <button className="form-close-icon" onClick={handleCloseForm}>
                <IoClose size={24} color="#f44336" />
              </button>
              <h2>Book Your Appointment</h2>
              <form className="book-test-form">
                <input type="text" placeholder="Name" required />
                <input type="email" placeholder="Email" required />
                <textarea placeholder="Message" rows="5" required></textarea>
                <button type="submit" className="form-submit-btn">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DoctorPortal;  