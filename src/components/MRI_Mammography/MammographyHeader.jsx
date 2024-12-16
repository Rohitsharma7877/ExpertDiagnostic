import React, { useState } from "react";
import { IoClose } from "react-icons/io5"; // Import the close icon
import doctor from './indianGroupDoctors.jpg'
import "./mamographyHeader.css"; // Assuming you have custom styles

const MammographyHeader = () => {
  const [showForm, setShowForm] = useState(false);

  const handleBookNowClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };
  return (
    <div className="mammographyHeader-main1">
      <div className="mammographyHeader-main2">
        <div className="mammographyHeader-box">
          <div className="mammographyHeader-title-box">
            <h1 className="mammographyHeader-title">MRI-Mammography</h1>
            <p className="mammographyHeader-title2">
            MRI mammography is an advanced imaging technique used to detect breast cancer by providing detailed images of the breast tissue. It is often used in addition to traditional mammography for high-risk patients or to examine complex cases.
            </p>
            <div className="mammographyHeader-buttons">
              <button className="mammographyHeader-btn" onClick={handleBookNowClick}>Book Now</button>
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

export default MammographyHeader;
