import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import "./UploadPrescription.css";

const UploadPrescription = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    pincode: "",
  });

  const [uploadedFile, setUploadedFile] = useState(null);

  // Handle input field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // File Dropzone
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/jpeg, image/png, application/pdf",
    onDrop: (acceptedFiles) => {
      setUploadedFile(acceptedFiles[0]);
    },
  });

  // Form Submit Handler
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the uploaded file and all form fields are filled
    if (formData.name && formData.mobile && formData.pincode && uploadedFile) {
      console.log("Form Data:", formData);
      console.log("Uploaded File:", uploadedFile);

      // Show success alert
      alert("Upload Prescription is successful!");

      // Reset form data and file upload
      setFormData({
        name: "",
        mobile: "",
        pincode: "",
      });

      setUploadedFile(null);
    } else {
      alert("Please fill all fields and upload a file before submitting.");
    }
  };

  return (
    <div className="upload-prescription-main">
      <div className="upload-prescription-container">
        <h2 className="heading">Upload prescription</h2>
        <p className="subheading">
          Save time, ensure privacy, and enjoy 24/7 accessibility with our
          Streamlined process.
        </p>

        <div className="form-container">
          {/* File Upload Box */}
          <div className="file-upload" {...getRootProps()}>
            <input {...getInputProps()} />
            <p>
              Drag and drop to upload the file or{" "}
              <span className="browse">Browse</span>
            </p>
            <small className="file-format">
              PDF, JPG & PNG format are supported.
            </small>
            {uploadedFile && <p className="file-name">{uploadedFile.name}</p>}
          </div>

          {/* Form Fields */}
          <form className="details-form" onSubmit={handleSubmit}>
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

            <label htmlFor="mobile">Mobile Number*</label>
            <input
              type="text"
              id="mobile"
              name="mobile"
              placeholder="Enter Your Mobile Number"
              value={formData.mobile}
              onChange={handleChange}
              required
            />

            <label htmlFor="pincode">Pincode</label>
            <input
              type="text"
              id="pincode"
              name="pincode"
              placeholder="Enter Your Area Pincode"
              value={formData.pincode}
              onChange={handleChange}
            />

            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UploadPrescription;
