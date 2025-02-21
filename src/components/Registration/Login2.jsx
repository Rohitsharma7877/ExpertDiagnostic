import React, { useState } from "react";
import "./login2.css";
import loginimg from "./logSigimg.jpg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FiEye, FiEyeOff } from "react-icons/fi";

const Login2 = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    role: "user", // Default role set to admin
  });

  const [formData, setFormData] = useState({ mobile: "" });
  const [otp, setOtp] = useState("");
  const [showOtp, setShowOtp] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const navigate = useNavigate();

  // Handle input field changes for Admin login
  const adminHandleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  // Handle Admin Login
  const handleAdminSubmit = (e) => {
    e.preventDefault();

    // Dummy credentials for Admin
    const adminCredentials = {
      username: "admin",
      password: "admin@123",
    };

    if (
      credentials.role === "admin" &&
      credentials.username === adminCredentials.username &&
      credentials.password === adminCredentials.password
    ) {
      toast.success("Admin Login Successful!", { position: "top-right" });
      // Save role to localStorage
      localStorage.setItem("role", "admin");
      setTimeout(() => {
        navigate("/admin/dashboard"); // Redirect to admin dashboard
      }, 1000);
    } else {
      toast.error("Invalid admin credentials. Try again!", {
        position: "top-right",
      });
    }
  };

  // Handle input field changes for User (OTP)
  const userHandleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle OTP input change
  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  // Handle Phone Number Submission for OTP
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { mobile } = formData;

    const mobilePattern = /^[0-9]{10}$/;
    if (!mobilePattern.test(mobile)) {
      toast.error("Please enter a valid 10-digit mobile number.");
      return;
    }

    try {
      // Call backend API to send OTP
      await axios.post("http://localhost:4000/person/send-otp", { mobile });

      setOtpSent(true);
      setShowOtp(true);
      toast.info("OTP has been sent to your mobile.", {
        position: "top-right",
      });
    } catch (err) {
      console.error("Error sending OTP:", err);
      setErrorMessage("Failed to send OTP. Please try again.");
    }
  };

  // Handle OTP Verification
  const handleVerifyOtp = async () => {
    try {
      const { mobile } = formData;
      const response = await axios.post(
        "http://localhost:4000/person/verify-otp",
        {
          mobile,
          otp,
        }
      );

      toast.success("Login successful!");
      localStorage.setItem("authToken", response.data.token);
      navigate("/");
    } catch (err) {
      console.error("Error verifying OTP:", err);
      setErrorMessage("Invalid OTP. Please try again.");
    }
  };

  // Resend OTP
  const handleResendOtp = async () => {
    try {
      const { mobile } = formData;

      // Call backend API to resend OTP
      await axios.post("http://localhost:4000/person/send-otp", { mobile });

      setOtp("");
      setErrorMessage("");
      toast.info("OTP has been resent to your mobile.");
    } catch (err) {
      console.error("Error resending OTP:", err);
      setErrorMessage("Failed to resend OTP. Please try again.");
    }
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
          <h2 className="Login-heading">
            <span
              className={
                credentials.role === "user" ? "active-link" : "inactive-link"
              }
              onClick={() => setCredentials({ ...credentials, role: "user" })}
            >
              User Login
            </span>
            {" / "}
            <span
              className={
                credentials.role === "admin" ? "active-link" : "inactive-link"
              }
              onClick={() => setCredentials({ ...credentials, role: "admin" })}
            >
              Admin Login
            </span>
          </h2>

          {/* Admin Login Form */}
          {credentials.role === "admin" && (
            <div className="admin-container">
              <form onSubmit={handleAdminSubmit} className="Login-details-form">
                <div className="form-group">
                  <label>Username:</label>
                  <input
                    type="text"
                    name="username"
                    className="form-input"
                    placeholder="Enter Username"
                    value={credentials.username}
                    onChange={adminHandleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Password:</label>
                  <div className="password-container">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      className="form-input"
                      placeholder="Enter Password"
                      value={credentials.password}
                      onChange={adminHandleChange}
                      required
                    />
                    <span
                      className="eye-icon"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <FiEyeOff /> : <FiEye />}
                    </span>
                  </div>
                </div>
                <button type="submit" className="login-button">
                  Admin-Login
                </button>
              </form>
            </div>
          )}

          {credentials.role === "user" && (
            <div>
              {" "}
              {/* Add a wrapping div */}
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
                    onChange={userHandleChange}
                    required
                  />
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
                  <input
                    type="text"
                    id="otp"
                    name="otp"
                    placeholder="Enter the OTP"
                    value={otp}
                    onChange={handleOtpChange}
                    required
                    onFocus={() => setIsFocused(true)} // Set focus state
                    onBlur={() => setIsFocused(false)} // Reset focus state
                    style={{
                      border: `1px solid ${isFocused ? "purple" : "gray"}`, // Dynamic border color
                      borderRadius: "5px",
                      padding: "10px",
                      width: "50%",
                      fontSize: "16px",
                      outline: "none",
                      boxSizing: "border-box",
                    }}
                  />
                  <p className="resend-link" onClick={handleResendOtp}>
                    Resend OTP
                  </p>
                  <button
                    onClick={handleVerifyOtp}
                    className="Login-verify-btn"
                  >
                    Verify OTP
                  </button>
                  {errorMessage && (
                    <p className="error-message">{errorMessage}</p>
                  )}
                </div>
              )}
            </div> // Add this closing tag
          )}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login2;
