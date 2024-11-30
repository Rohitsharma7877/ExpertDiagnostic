import React from "react";
import "./patientPortal.css";
// import { FaCalendarCheck } from 'react-icons/fa';
// import { FaPhone, FaWhatsapp, FaEnvelope, FaGlobe } from 'react-icons/fa';
import {
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
  FaGlobe,
  FaMapMarkerAlt,
} from "react-icons/fa";

const PatientPortal = () => {
  return (
    <div className="patient-portal">
      {/* Header Section */}
      <div className="header-section">
        <div className="overlay">
          <div className="quick-actions">
            <div className="action">
              {/* <FaCalendarCheck className="icon" /> */}
              <div>
                <img
                  src="https://www.shutterstock.com/image-vector/male-doctor-smiling-happy-face-600nw-2481032615.jpg"
                  alt=""
                />
              </div>
              <p>QUICK APPOINTMENT</p>
            </div>
          </div>
          <div className="buttons">
            <button className="btn">Click me</button>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="contact-section">
        <div className="contact-info">
          <FaPhone className="contact-icon" />
          <p>+91 0123456789</p>
        </div>
        <div className="contact-info">
          <FaWhatsapp className="contact-icon" />
          <p>+91 0123456789</p>
        </div>
        <div className="contact-info">
          <FaEnvelope className="contact-icon" />
          <p>ExportDiagnostics@exdn.in</p>
        </div>
        <div className="contact-info">
          <FaGlobe className="contact-icon" />
          <p>exdn.in</p>
        </div>
      </div>

      {/* Locations Section */}
      <div className="locations-section">
        <FaMapMarkerAlt className="contact-icon" />
        <p>Hassan</p>
      </div>
    </div>
  );
};

export default PatientPortal;
