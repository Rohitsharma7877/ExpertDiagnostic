import React, { useState } from "react";
import "./diagnosticsService.css";
import d1 from "./d1.jpg";
import d2 from "./d2.jpg";
import d3 from "./d3.jpg";
import d4 from "./d4.jpg";
import d5 from "./mammogramachine.jpg";
import d6 from "./Treadmill-Header.jpg";
import d7 from "./Portable-ECG-Machine.png";
import d8 from "./1683702062645b412eb1c4e.jpg";
import d9 from "./consultation.jpg"; 
import d10 from "./ambulance.jpg"; 
import d11 from "./hc.jpg"; 
import d12 from "./lab.jpg"; 

const DiagnosticService = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 9,
      image: d9, // Consultation Image
      title: "Free Consultation",
      description: "Book a free consultation with our expert doctors.",
      // formFields: [
      //   { placeholder: "Consultation Type", type: "text" },
      //   { placeholder: "Preferred Date", type: "date" },
      // ],
    },
    {
      id: 10,
      image: d10, // Ambulance Service Image
      title: "Ambulance Service",
      description:
        "We provide ambulance services for transportation and emergency needs.",
      formFields: [
        { placeholder: "Pick-Up Location", type: "text" },
        { placeholder: "Drop Location", type: "text" },
        { label: "Condition Test Above 5000", type: "checkbox" }, // Checkbox with label
      ],
    },
    {
      id: 11,
      image: d11, // Home Collection Image
      title: "Home Collection",
      description:
        "We offer home collection services for lab tests and diagnostic samples.",
      formFields: [
        { placeholder: "Pick-Up Address", type: "text" },
        // { placeholder: "Test Type", type: "text" },
      ],
    },
    {
      id: 12,
      image: d12, // Lab Test Image
      title: "Lab Test",
      description:
        "We provide a wide range of diagnostic lab tests to suit your needs.",
      // formFields: [
      //   { placeholder: "Test Type", type: "text" },
      //   { placeholder: "Test Date", type: "date" },
      // ],
    },
    {
      id: 1,
      image: d1, // MRI image
      title: "MRI",
      description: "We operate the latest generation MRI machines of 3 Tesla.",
      // formFields: [
      //   { placeholder: "Select MRI Type", type: "text" },
      //   { placeholder: "MRI Duration", type: "number" },
      // ],
    },
    {
      id: 2,
      image: d2, // CT image
      title: "CT",
      description:
        "Dual slice, 16, 32, 64, and 128 slice CT scan systems installed at various centers.",
      // formFields: [
      //   { placeholder: "Select X-Ray Type", type: "text" },
      //   { placeholder: "CT Scan Type", type: "text" },
      // ],
    },
    {
      id: 3,
      image: d3, // X-Ray image
      title: "X-Ray",
      description:
        "Comprehensive radiology services with the latest X-Ray equipment for accurate imaging.",
      // formFields: [
      //   { placeholder: "Select X-Ray Type", type: "text" },
      //   { placeholder: "X-Ray Date", type: "date" },
      // ],
    },
    {
      id: 4,
      image: d4, // Ultrasound image
      title: "UltraSound",
      description:
        "All sonography studies, including 2D / 4D imaging, routine scans, Doppler, and advanced diagnostic techniques.",
      // formFields: [
      //   { placeholder: "USG Type", type: "text" },
      //   { placeholder: "Scan Date", type: "date" },
      // ],
    },
    {
      id: 5,
      image: d5, // Mammography image
      title: "Mammography",
      description:
        "State-of-the-art mammography machines for early detection and prevention of breast cancer.",
      // formFields: [
      //   { placeholder: "Mammography Type", type: "text" },
      //   { placeholder: "Mammography Date", type: "date" },
      // ],
    },
    {
      id: 6,
      image: d6, // TMT image
      title: "TMT (Treadmill Test)",
      description:
        "TMT for assessing cardiovascular health through exercise-induced stress tests.",
      // formFields: [
      //   { placeholder: "Test Duration", type: "number" },
      //   { placeholder: "Test Date", type: "date" },
      // ],
    },
    {
      id: 7,
      image: d7, // ECG image
      title: "ECG",
      description:
        "Electrocardiogram (ECG) for diagnosing heart conditions using advanced ECG machines.",
      // formFields: [
      //   { placeholder: "ECG Type", type: "text" },
      //   { placeholder: "ECG Date", type: "date" },
      // ],
    },
    {
      id: 8,
      image: d8, // Health Package image
      title: "Health Package",
      description:
        "Comprehensive health checkup packages covering all major diagnostics and tests.",
      // formFields: [
      //   { placeholder: "Select Package Type", type: "text" },
      //   { placeholder: "Package Duration", type: "number" },
      // ],
    },
    // New services added
  ];

  const handleOpenModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  
  return (
    <div className="diagnosticservice-main">
          <div className="diagnosticservice-container">
    <h2>Our Diagnostic Center</h2>
    <div className="diagnosticservice-cards">
      {services.map((service) => (
        <div key={service.id} className="diagnosticservice-card">
          <img
            src={service.image}
            alt={service.title}
            className="diagnosticservice-card-image"
          />
          <h3 className="diagnosticservice-card-title">{service.title}</h3>
          <p className="diagnosticservice-card-description">
            {service.description}
          </p>
          <div className="diagnosticservice-actions">
            <button
              className="diagnosticservice-booknow-button"
              onClick={() => handleOpenModal(service)}
            >
              Book Now
            </button>
          </div>
        </div>
      ))}
    </div>

    {isModalOpen && selectedService && (
      <div
        className="diagnosticservice-modal-overlay"
        onClick={handleCloseModal}
      >
        <div
          className="diagnosticservice-modal-content"
          onClick={(e) => e.stopPropagation()}
        >
          <div
            className="diagnosticservice-modal-image"
            style={{ backgroundImage: `url(${selectedService.image})` }}
          ></div>
          <div className="diagnosticservice-modal-form">
            <button
              className="diagnosticservice-close-modal"
              onClick={handleCloseModal}
            >
              &#x2715;
            </button>
            <h2>Book Appointment for {selectedService.title}</h2>
            <form>
              <input className="diagser" type="text" placeholder="Name" required />
              <input
              className="diagser"
                type="text"
                placeholder="Mobile"
                pattern="^[0-9]{10}$"
                required
              />
              <input 
              className="diagser"
                type="number"
                placeholder="Age"
                min="1"
                max="120"
                required
              />
              <div className="diagnosticservice-gender-selection">
                <label>
                  <input className="diagser" type="radio" name="gender" value="Male" required />
                  Male
                </label>
                <label>
                  <input className="diagser" type="radio" name="gender" value="Female" required />
                  Female
                </label>
                <label>
                  <input className="diagser" type="radio" name="gender" value="Other" required />
                  Other
                </label>
              </div>
              <input className="diagser" type="email" placeholder="Email" required />
              <input
              className="diagser"
                type="text"
                placeholder="Pincode"
                pattern="^[0-9]{6}$"
                required
              />
              {selectedService.formFields &&
                selectedService.formFields.map((field, index) => (
                  <div key={index}>
                    {field.type === "checkbox" ? (
                      <div>
                        <input type="checkbox" id={`checkbox-${index}`} />
                        <label htmlFor={`checkbox-${index}`}>
                          {field.label}
                        </label>
                      </div>
                    ) : (
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        required
                      />
                    )}
                  </div>
                ))}
              <input  type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    )}
  </div>
    </div>
    

  )
}

export default DiagnosticService