import React, { useState } from "react";
import { IoClose } from "react-icons/io5"; // Import the close icon
import doctor from './indianGroupDoctors.jpg'
import './electrocardiogram.css'


const Electrocardiogram = () => {
  const [showForm, setShowForm] = useState(false);

  const handleBookNowClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };
  return (
    <div className="electrocardiogram-main1">
      <div className="electrocardiogram-main2">
        <div className="electrocardiogram-box">
          <div className="electrocardiogram-title-box">
            <h1 className="electrocardiogram-title">Electrocardiogram(ECG)</h1>
            <p className="electrocardiogram-title2">
            An ECG (Electrocardiogram) is a medical test that records the electrical activity of the heart to detect abnormalities in its rhythm, rate, and structure. It is commonly used to diagnose heart conditions like arrhythmias, heart attacks, and other cardiac issues.
            </p>
            <div className="electrocardiogram-buttons">
            <button className="electrocardiogram-btn" onClick={handleBookNowClick}>Book Now</button>
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

export default Electrocardiogram
