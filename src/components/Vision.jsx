import React from "react";
import "./vision.css";
import vision from '../components/assests/visionlogo.png'
import mission from '../components/assests/mission.png'
import goal from '../components/assests/goall.png'


const Vision = () => {
  return (
    <section className="vision-mission-section">
      <h2 className="section-title">Vision & Mission</h2>
      <div className="cards-container">
        <div className="card">
          <img src={vision} alt="Vision Logo" className="card-logo" />
          <h3 className="card-title">Vision</h3>
          <p className="card-description">
            “To provide quality Pre-Hospital and primary care”
          </p>
        </div>
        <div className="card">
          <img src={mission} alt="Mission Logo" className="card-logo" />
          <h3 className="card-title">Mission</h3>
          <p className="card-description">
            “To operate a chain of world-class medical facilities”
          </p>
        </div>
        <div className="card">
          <img src={goal} alt="Goal Logo" className="card-logo" />
          <h3 className="card-title">Our Goal</h3>
          <p className="card-description">
            “To deliver high-quality medical care in a patient-friendly,
            cost-effective”
          </p>
        </div>
      </div>
    </section>
  );
};

export default Vision;
