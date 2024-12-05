import React from 'react'
import './doctorportal.css'
import {
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
  FaGlobe,
  FaMapMarkerAlt,
} from "react-icons/fa";

const DoctorPortal = () => {
  return (
    <div className="doctorPortal-main1">
    <div className="doctorPortal-main2">
      <div className="doctorPortal-box">
        <div className="doctorPortal-title-box">
          <h1 className="doctorPortal-title">Patient Registration</h1>
          <div className="doctorPortal-buttons">
          <button className="doctorPortal-btn">Book Now</button>
        </div>
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
          <p>info@exportdiagnostics.in</p>
        </div>
        <div className="contact-info">
          <FaGlobe className="contact-icon" />
          <p>www.exportdiagnostics.in</p>
        </div>
      </div>

      {/* Locations Section */}
      <div className="locations-section">
        <FaMapMarkerAlt className="locations-icon" />
        <p className="text-black text-sm">
          <span className="text-black">Address: </span>
          Ground Floor, Shri Venkatadri 3rd, Ayyappa <br />
          Swamy Temple Rd, next to Reliance Mart, Krishnaraja Pura, <br />
          Hassan, Karnataka 573201
        </p>
      </div>
  </div>
  )
}

export default DoctorPortal
