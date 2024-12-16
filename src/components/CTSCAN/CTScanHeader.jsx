import React, { useState } from "react";
import { IoClose } from "react-icons/io5"; // Import the close icon
import doctor from './indianGroupDoctors.jpg'
import "./ctScanHeader.css";
// import { FaRadiation } from "react-icons/fa";
// import { BsPersonStanding } from "react-icons/bs";
// import { FaUserDoctor } from "react-icons/fa6";

const CTScanHeader = () => {
  const [showForm, setShowForm] = useState(false);

  const handleBookNowClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };
  return (
    <div className="ctscanHeader-main1">
      <div className="ctscanHeader-main2">
        <div className="ctscanHeader-box">
          <div className="ctscanHeader-title-box">
            <h1 className="ctscanHeader-title">CT Scan</h1>
            <p className="ctscanHeader-title2">
            A 128-slice CT scan with cardiac CT capability provides high-resolution imaging for detailed assessments of the heart and other body parts. It ensures accurate diagnoses with faster scanning and enhanced clarity.
            </p>
            <div className="ctscanHeader-buttons">
            <button className="ctscanHeader-btn" onClick={handleBookNowClick}>Book Now</button>
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

export default CTScanHeader; /* Main Container */
