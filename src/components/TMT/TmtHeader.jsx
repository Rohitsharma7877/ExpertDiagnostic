import React, { useState } from "react";
import { IoClose } from "react-icons/io5"; // Import the close icon
import doctor from "./indianGroupDoctors.jpg";
import { FaHeart, FaHeartbeat, FaCalendarCheck } from "react-icons/fa"; // Import icons from react-icons

import "./tmtHeader.css";

const TmtHeader = () => {
  const [showForm, setShowForm] = useState(false);

  const handleBookNowClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };
  return (
    <div className="tmtHeader-main1">
      <div className="tmtHeader-main2">
        <div className="tmtHeader-box">
          <div className="tmtHeader-title-box">
            <h1 className="tmtHeader-title">Treadmill Testing</h1>
            <p className="tmtHeader-title2">
              At our hospital, we offer state-of-the-art treadmill testing to
              assess your cardiac health. Our expert medical team ensures
              precise evaluations in a safe and supportive environment, helping
              you stay proactive about your heart care.
            </p>
            <div className="tmtHeader-buttons">
              <button className="tmtHeader-btn" onClick={handleBookNowClick}>
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

export default TmtHeader;
