import React from "react";
import "./Header.css";
import blueVideo from "./backHead2.mp4"; // Import the video file

function Header() {
  return (
  <div className="hospital-main">
    <div className="hospital-carousel">
      {/* Background Video */}
      <video className="carousel-video" autoPlay loop muted>
        <source src={blueVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Book Now Form */}
      <div className="header-book-now-form">
        <h2>Book Test Now!</h2>
        <form>
          <div className="header-form-group">
            <label>Name:</label>
            <input
              type="text"
              placeholder="Enter your name"
              required
              maxLength="50"
            />
          </div>

          <div className="header-form-group">
            <label>Mobile Number:</label>
            <input
              type="tel"
              placeholder="Enter your mobile number"
              required
              pattern="[0-9]{10}"
              title="Enter a valid 10-digit mobile number"
            />
          </div>

          <div className="header-form-group">
            <label>Appointment Date:</label>
            <input
              type="date"
              required
              min={new Date().toISOString().split("T")[0]}
            />
          </div>

          <div className="header-form-group">
            <label>Pincode:</label>
            <input
              type="text"
              placeholder="Enter your pincode"
              required
              pattern="[0-9]{6}"
              title="Enter a valid 6-digit pincode"
            />
          </div>

          <button type="submit" className="form-submit">
            Book Now
          </button>
        </form>
      </div>
    </div>
  </div>
    
  );
}

export default Header;