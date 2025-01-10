import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { FaGlobe, FaPhoneVolume } from "react-icons/fa6"; // Import the close icon
import doctor from "./indianGroupDoctors.jpg";
import "./doctorportal.css";
import {
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import {useNavigate } from 'react-router-dom';


const DoctorPortal = () => {
  const [showForm, setShowForm] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status
  const navigate = useNavigate();


  const handleBookNowClick = () => {
    setShowForm(true);
    setIsExpanded(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setIsExpanded(false);
  };

  const handleBookNow = () => {
    if (isLoggedIn) {
      navigate('/book'); // Redirect to book page if logged in
    } else {
      alert('You need to log in first!');
      navigate('/log-in'); // Redirect to registration page if not logged in
    }
  };


  return (
    <div className="doctorPortal-main1">
      {/* Main Content */}
      <div className="doctorPortal-main2">
        <div className="doctorPortal-box">
          <div className="doctorPortal-title-box">
            <h1 className="doctorPortal-title">Patient Registration</h1>
            <p className="doctorPortal-title2">
              Patient registration is the process of collecting essential
              patient details, ensuring accurate records for seamless healthcare
              delivery and efficient management.
            </p>
            <div className="doctorPortal-buttons">
              <button className="doctorPortal-btn" onClick={handleBookNowClick}>
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="contact-section">
        <div className="contact-info">
          <FaPhoneVolume className="contact-icon" />
          <p>+91 coming soon</p>
        </div>
        <div className="contact-info">
          <FaWhatsapp className="contact-icon" />
          <p>+91 coming soon</p>
        </div>
        <div className="contact-info">
          <FaEnvelope className="contact-icon" />
          <p>info@expertdiagnostics.in</p>
        </div>
        <div className="contact-info">
          <FaGlobe className="contact-icon" />
          <p>www.expertdiagnostics.in</p>
        </div>
      </div>

      {/* Locations Section */}
      <div className="locations-section">
        <FaMapMarkerAlt className="locations-icon" />
        <p className="text-gray text-sm">
          <span className="text-black">Address: </span>
          Expert Diagnostics Ground Floor Sri Venkatadri Arcade <br />
          (Next to Reliance Smart) 3rd Cross, 1st Main K R
          Puram, Hassan - 573201
        </p>
      </div>

      {/* form section */}
      {showForm && (
        <div className="patient-form-overlay">
          <div
            className={`patient-form-wrapper ${isExpanded ? "expanded" : ""}`}
          >
            {/* Left Section: Image */}
            <div className="patient-form-image-section">
              <img src={doctor} alt="Doctors" className="patient-form-image" />
            </div>

            {/* Right Section: Form */}
            <div className="patient-form-container">
              {/* Close Icon */}
              <button
                className="patient-form-close-icon"
                onClick={handleCloseForm}
              >
                <IoClose size={24} color="#f44336" />
              </button>
              <h2 className="patient-book-test-tittle">
                Book Your Appointment
              </h2>
              <form className="patient-book-test-form">
                <div className="patient-book-form-name">
                  <label>Name:</label>
                  <input
                    type="text"
                    placeholder="Enter your Name"
                    required
                    maxLength="50"
                  />
                </div>
                <div className="patient-book-form-name">
                  <label>Email:</label>
                  <input
                    type="text"
                    placeholder="Enter your Email"
                    required
                    maxLength="50"
                  />
                </div>
                <div className="patient-book-form-name">
                  <label>Mobile:</label>
                  <input
                    type="tel"
                    placeholder="Enter your Mobile"
                    required
                    pattern="[0-9]{10}"
                    title="Enter a valid 10-digit mobile number"
                  />
                </div>
                <div className="patient-book-form-name">
                  <label>Age:</label>
                  <input
                    type="Number"
                    placeholder="Enter your Age"
                    required
                    maxLength="50"
                  />
                </div>
                <div className="patient-book-form-name">
                  <FormControl>
                    <FormLabel id="demo-row-radio-buttons-group-label">
                      Gender
                    </FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                    >
                      <FormControlLabel
                        value="female"
                        control={<Radio />}
                        label="Female"
                      />
                      <FormControlLabel
                        value="male"
                        control={<Radio />}
                        label="Male"
                      />
                      <FormControlLabel
                        value="other"
                        control={<Radio />}
                        label="Other"
                      />
                    </RadioGroup>
                  </FormControl>
                </div>

                <div className="patient-book-form-name">
                  <label>Appointment Date:</label>
                  <input
                    type="date"
                    required
                    min={new Date().toISOString().split("T")[0]}
                  />
                </div>

                <button type="submit" onClick={handleBookNow} className="patient-form-submit-btn">
                  Submit
                </button>

                {/* {!isLoggedIn  ? (
                  <button onClick={() => setIsLoggedIn(true)} className="patient-form-submit-reg-btn">Login</button>
                ) : (
                  <button onClick={() => setIsLoggedIn(false)} className="patient-form-submit-reg-btn">Logout</button>
                )} */}
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DoctorPortal;
