import React, { useState } from "react";
import { IoClose } from "react-icons/io5"; // Import the close icon
import doctor from './indianGroupDoctors.jpg'
import './Mammography2Header.css'


const Mammography2Header = () => {
  const [showForm, setShowForm] = useState(false);
  
    const handleBookNowClick = () => {
      setShowForm(true);
    };
  
    const handleCloseForm = () => {
      setShowForm(false);
    };
  return (
    <div className="mammography2Header-main1">
          <div className="mammography2Header-main2">
            <div className="mammography2Header-box">
              <div className="mammography2Header-title-box">
                <h1 className="mammography2Header-title">Mammography</h1>
                <p className="mammography2Header-title2">
                Mammography is an imaging technique used to detect and diagnose breast abnormalities, such as tumors or cysts, often crucial for early detection of breast cancer.
                </p>
                <div className="mammography2Header-buttons">
                  <button className="mammography2Header-btn" onClick={handleBookNowClick}>Book Now</button>
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

export default Mammography2Header