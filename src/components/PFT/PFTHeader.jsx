import React, { useState } from "react";
import { IoClose } from "react-icons/io5"; // Import the close icon
import doctor from './indianGroupDoctors.jpg'
import './PFTHeader.css'

const PFTHeader = () => {
  const [showForm, setShowForm] = useState(false);
  
    const handleBookNowClick = () => {
      setShowForm(true);
    };
  
    const handleCloseForm = () => {
      setShowForm(false);
    };
  return (
    <div className="PFTHeader-main1">
          <div className="PFTHeader-main2">
            <div className="PFTHeader-box">
              <div className="PFTHeader-title-box">
                <h1 className="PFTHeader-title">Pulmonary Function</h1>
                <p className="PFTHeader-title2">
                A Pulmonary Function Test (PFT) measures lung capacity and airflow to assess respiratory health and diagnose conditions like asthma, COPD, or other lung diseases.
                </p>
                <div className="PFTHeader-buttons">
                <button className="PFTHeader-btn" onClick={handleBookNowClick}>Book Now</button>
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

export default PFTHeader