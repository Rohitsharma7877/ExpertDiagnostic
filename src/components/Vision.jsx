import React from "react";
import "./vision.css";
import vision from '../components/assests/visionlogo.png'
import mission from '../components/assests/missssionn.png'
import goal from '../components/assests/valueIcons.png'


const Vision = () => {
  return (
    <section className="vision-mission-section">
      <h2 className="section-title">Vision & Mission</h2>
      <div className="cards-container">
        <div className="card">
          <img src={vision} alt="Vision Logo" className="card-logo" />
          <h3 className="card-title">Vision</h3>
          <p className="card-description">
          "Providing precise, innovative, and compassionate diagnostic services that are accessible and affordable for everyone."
          </p>
        </div>
        <div className="card">
          <img src={mission} alt="Mission Logo" className="card-logo" />
          <h3 className="card-title">Mission</h3>
          <p className="card-description">
          "Delivering accurate and timely diagnostics through advanced technology and expertise for every patient."
          </p>
        </div>
        <div className="card">
          <img src={goal} alt="Goal Logo" className="card-logo" />
          <h3 className="card-title">Our Value</h3>
          <p className="card-description">
          "Transforming lives through continuous improvement of healthcare delivery."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Vision;
