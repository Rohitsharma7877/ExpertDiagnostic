import React from "react";
import "./whydoneed.css";
import ultrSoundDoctor from './assests/iNEEDultrasonography.png'

const WhyDoNeed = () => {
  return (
    <div className="whydoneed-main1">
      <div className="whydoneed-main2">
        <div className="whydoneed-box1">
          <div className="whydoneed-box1-header">
            <h1>Why do I need an Ultrasound test?</h1>
          </div>
          <div className="whydoneed-box1-pragha">
            <p>
              Your doctor may advice an ultrasound test if you are having pain,
              swelling, or any other symptom that needs an internal view of your
              organs. Through ultrasound doctor can view following organs:
            </p>
          </div>
          <div className="checklist">
            <ul>
              <li>uterus</li>
              <li>bladder</li>
              <li>gallbladder</li>
              <li>kidneys</li>
              <li>liver</li>
              <li>ovaries</li>
              <li>pancreas</li>
              <li>spleen</li>
              <li>thyroid</li>
              <li>testicles</li>
              <li>blood vessels</li>
            </ul>
          </div>
        </div>
        <div className="whydoneed-box2">
          <div className="whydoneed-doctor">
          
            <img src={ultrSoundDoctor} alt="whydoneedImage"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyDoNeed;
