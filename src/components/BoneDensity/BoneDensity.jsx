import React, { useState } from "react";
import { IoClose } from "react-icons/io5"; // Import the close icon
import doctor from './indianGroupDoctors.jpg'
import "./boneDensity.css";


const BoneDensity = () => {
  const [showForm, setShowForm] = useState(false);

  const handleBookNowClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <div className="boneDensity-main1">
      <div className="boneDensity-main2">
        <div className="boneDensity-box">
          <div className="boneDensity-title-box">
            <h1 className="boneDensity-title">Bone Density Test</h1>
            <p className="boneDensity-title2">
              A bone density test measures the strength and mineral content of
              bones to assess the risk of fractures and conditions like
              osteoporosis.
            </p>
            <div className="boneDensity-buttons">
              <button className="boneDensity-btn" onClick={handleBookNowClick}>
                Book Now
              </button>
            </div>
          </div>
        </div>
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

export default BoneDensity;
