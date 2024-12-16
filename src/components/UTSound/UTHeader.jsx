import React, { useState } from "react";
import { IoClose } from "react-icons/io5"; // Import the close icon
import doctor from './indianGroupDoctors.jpg'
import './UTHeader.css'

const UTHeader = () => {
  const [showForm, setShowForm] = useState(false);

  const handleBookNowClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };
  return (
    <div className="uTHeade-main1">
      <div className="uTHeade-main2">
        <div className="uTHeade-box">
          <div className="uTHeade-title-box">
            <h1 className="uTHeade-title">Ultrasonography</h1>
            <p className="uTHeade-title2">
            Ultrasonography is a non-invasive imaging technique that uses high-frequency sound waves to visualize internal body structures and diagnose medical conditions.
            </p>
            <div className="uTHeade-buttons">
            <button className="uTHeade-btn" onClick={handleBookNowClick}>Book Now</button>
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
  )
}

export default UTHeader