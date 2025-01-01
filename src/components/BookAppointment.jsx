import React, { useState } from "react";
import "./BookAppointment.css";
import bookAppointment from "./assests/bookappointment.jpg";

const BookAppointment = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
    pinCode: "",
    state: "",
    gender: "",
    bookFor: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    mobile: "",
    pinCode: "",
    general: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  
  const validateFields = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex = /^[0-9]{10}$/;

    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email.";
    }
    if (!mobileRegex.test(formData.mobile)) {
      newErrors.mobile = "Mobile number must be 10 digits.";
    }
    if (formData.pinCode.length !== 6) {
      newErrors.pinCode = "Pin Code must be 6 digits.";
    }
    if (
      !formData.name ||
      !formData.address ||
      !formData.state ||
      !formData.gender ||
      !formData.bookFor
    ) {
      newErrors.general = "Please fill all required fields.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateFields()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("https://uat.crelio.solutions/patientRegister/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Form submitted successfully!");

        setFormData({
          name: "",
          email: "",
          mobile: "",
          address: "",
          pinCode: "",
          state: "",
          
        });
      } else {
        alert("Error in submitting form. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error in submitting form. Please try again.");
    }

    setIsSubmitting(false);
  };

  // const getTodayDate = () => {
  //   const today = new Date();
  //   const year = today.getFullYear();
  //   const month = String(today.getMonth() + 1).padStart(2, "0");
  //   const date = String(today.getDate()).padStart(2, "0");
  //   return `${year}-${month}-${date}`;
  // };

  return (
    <div className="bookAppointment-main">
      <div className="bookAppointment-container">
        <div className="bookAppointment-image-container">
          <img src={bookAppointment} alt="Prescription Illustration" />
        </div>

        <div className="bookAppointment-form-container">
          <h2 className="bookAppointment-heading">Book Appointment</h2>

          {/* input-form */}
          <form
            className="bookAppointment-details-form"
            onSubmit={handleSubmit}
          >
            <label htmlFor="name">NAME*</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Please Provide Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            {errors.name && <span className="error-text">{errors.name}</span>}

            {/* <div > */}
            {/* <div > */}
            <label htmlFor="gender">Gender*</label>
            <select
              className="bookAppointment-gender"
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {errors.gender && (
              <span className="error-text">{errors.gender}</span>
            )}
            {/* </div> */}
            {/* <div > */}
            <label htmlFor="bookFor">Book For*</label>
            <select
              className="bookAppointment-bookNow"
              id="bookFor"
              name="bookFor"
              value={formData.bookFor}
              onChange={handleChange}
              required
            >
              <option value="">Select Option</option>
              <option value="own">Own</option>
              <option value="relative">Relative/Guardians</option>
            </select>
            {errors.bookFor && (
              <span className="error-text">{errors.bookFor}</span>
            )}

            <label htmlFor="email">Email*</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <span className="error-text">{errors.email}</span>}

            <label htmlFor="mobile">Mobile Number*</label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              placeholder="Enter Your Mobile Number"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
            {errors.mobile && (
              <span className="error-text">{errors.mobile}</span>
            )}

            <label htmlFor="address">Address*</label>
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Please Provide Your Address"
              value={formData.address}
              onChange={handleChange}
              required
            />
            {errors.address && (
              <span className="error-text">{errors.address}</span>
            )}

            <div className="form-group">
              <div className="flex-container">
                <div className="form-item">
                  <label htmlFor="pinCode">Pin Code*</label>
                  <input
                    type="text"
                    id="pinCode"
                    name="pinCode"
                    placeholder="Enter Pin Code"
                    value={formData.pinCode}
                    onChange={handleChange}
                    required
                  />
                  {errors.pinCode && (
                    <span className="error-text">{errors.pinCode}</span>
                  )}
                </div>
                <div className="form-item">
                  <label htmlFor="state">State*</label>
                  <select
                    className="bookAppointment-state"
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select State</option>
                    <option value="Karnataka">Karnataka</option>
                   
                  </select>
                  {errors.state && (
                    <span className="error-text">{errors.state}</span>
                  )}
                </div>
              </div>
            </div>

            {/* <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem", width: "50%" }}>
              <div style={{ flex: 1 }}>
                <label htmlFor="date">Date*</label>
                <input
                
                  type="date"
                  id="date"
                  name="date"
                  min={getTodayDate()}
                  value={formData.date}
                  onChange={handleChange}
                  required
                  style={{ cursor: 'pointer' }}
                />
                {errors.date && (
                  <span className="error-text">{errors.date}</span>
                )}
              </div>
              <div style={{ flex: 1 }}>
                <label htmlFor="time">Time*</label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  step="3600"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  style={{ cursor: 'pointer' }}
                />
                {errors.time && (
                  <span className="error-text">{errors.time}</span>
                )}
              </div>
            </div> */}

            <button
              type="submit"
              className="bookAppointment-submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </form>

          {errors.general && <div className="error-text">{errors.general}</div>}
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;
