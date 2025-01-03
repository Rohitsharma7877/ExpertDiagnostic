import React, { useState } from "react";
import { IoClose } from "react-icons/io5"; // Import the close icon
import doctor from "./indianGroupDoctors.jpg";
import "./EEGHeader.css";

const EEGHeader = () => {
  const [showForm, setShowForm] = useState(false);

  const handleBookNowClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };
  return (
    <div className="EEGHeader-main1">
      <div className="EEGHeader-main2">
        <div className="EEGHeader-box">
          <div className="EEGHeader-title-box">
            <h1 className="EEGHeader-title">Electroencephalogram</h1>
            <p className="EEGHeader-title2">
              An electroencephalogram (EEG) is a non-invasive test that records
              the brain's electrical activity via electrodes placed on the
              scalp. It is commonly used to diagnose conditions such as
              epilepsy, sleep disorders, and brain injuries.{" "}
            </p>
            <div className="EEGHeader-buttons">
              <button className="EEGHeader-btn" onClick={handleBookNowClick}>
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
              <img src={doctor} alt="Doctors" className="form-image" />
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

export default EEGHeader;
