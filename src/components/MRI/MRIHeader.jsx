import React, { useState } from "react";
import { IoClose } from "react-icons/io5"; // Import the close icon
import doctor from './indianGroupDoctors.jpg'
import "./mriHeader.css";


const MRIHeader = () => {
  const [showForm, setShowForm] = useState(false);

  const handleBookNowClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };
  return (
    <div className="mRIHeader-main1">
      <div className="mRIHeader-main2">
        <div className="mRIHeader-box">
          <div className="mRIHeader-title-box">
            <h1 className="mRIHeader-title">MRI Diagnostics</h1>
            <p className="mRIHeader-title2">
              Your health deserves the best care. Experience precision
              diagnostics with our state-of-the-art MRI technology for accurate
              results and faster recovery.
            </p>
            <div className="mRIHeader-buttons">
              <button className="mRIHeader-btn" onClick={handleBookNowClick}>Book Now</button>
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

export default MRIHeader;
