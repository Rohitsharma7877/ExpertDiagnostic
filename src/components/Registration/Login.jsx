import React, { useState } from "react";
import "./login.css";
import loginimg from "./logSigimg.jpg";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ mobile: "" });
  const [otp, setOtp] = useState("");
  const [showOtp, setShowOtp] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Handle input field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle OTP input change
  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  // Handle Phone number submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const { mobile } = formData;

    const mobilePattern = /^[0-9]{10}$/;
    if (!mobilePattern.test(mobile)) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    // Simulate sending OTP
    setOtpSent(true);
    setShowOtp(true);
    alert("OTP has been sent to your mobile.");
  };

  // Handle OTP verification
  const handleVerifyOtp = () => {
    const correctOtp = "1234"; // Replace with actual OTP logic

    if (otp === correctOtp) {
      alert("OTP verified successfully!");
      // Redirect to Home Page (or Dashboard)
      window.location.href = "/home"; // Example redirection
    } else {
      setErrorMessage("Incorrect OTP. Please try again.");
    }
  };

  // Resend OTP
  const handleResendOtp = () => {
    setOtpSent(false);
    setOtp("");
    setErrorMessage("");
    setShowOtp(false);
    alert("OTP resent to your mobile.");
  };

  return (
    <div className="Login-main">
      <div className="Login-container">
        {/* Left Side - Image */}
        <div className="Login-image-container">
          <img src={loginimg} alt="Login Illustration" />
        </div>

        {/* Right Side - Form */}
        <div className="Login-form-container">
          <h2 className="Login-heading">User Login</h2>

          {/* Phone Number Form */}
          {!showOtp && !otpSent && (
            <form className="Login-details-form" onSubmit={handleSubmit}>
              <label htmlFor="mobile">Mobile Number*</label>
              <input
                type="text"
                id="mobile"
                name="mobile"
                placeholder="Enter Your Mobile Number (+91)"
                value={formData.mobile}
                onChange={handleChange}
                required
              />
              {/* Add "Create Account" Link */}
              <p className="create-account">
                New User?{" "}
                <Link to="/sign-up" className="create-account-link">
                  Create Account
                </Link>
              </p>
              <button type="submit" className="Login-submit-btn">
                Submit
              </button>
            </form>
          )}

          {/* OTP Form */}
          {showOtp && (
            <div className="login-otp-form">
              <label htmlFor="otp" className="otp-label">
                Enter OTP*
              </label>
              <div className="otp-boxes">
                {Array(4)
                  .fill("")
                  .map((_, index) => (
                    <input
                      key={index}
                      type="text"
                      className="otp-box"
                      maxLength="1"
                      value={otp[index] || ""}
                      onChange={(e) => handleOtpChange(e, index)}
                    />
                  ))}
              </div>
              <p className="resend-link" onClick={handleResendOtp}>
                Resend OTP
              </p>
              <button onClick={handleVerifyOtp} className="Login-verify-btn">
                Verify OTP
              </button>
              {errorMessage && <p className="error-message">{errorMessage}</p>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
