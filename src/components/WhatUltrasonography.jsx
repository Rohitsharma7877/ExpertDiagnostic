import React, { useState } from 'react';
import './whatultrasonography.css';
import ultrasound from './assests/Ultrasound3.png';

const WhatUltrasonography = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModalToggle = () => {
    setShowModal(!showModal);
  };

  return (
    <div className='whatultrasonography-main1'>
      <div className={`whatultrasonography-main2 ${showModal ? 'blur-background' : ''}`}>
        <div className='whatultrasonography-box1'>
          <div className='whatultrasonography-header'>
            <h1>What is ultrasonography or ultrasound?</h1>
          </div>
          <div className='whatultrasonography-pragraph'>
            <p>
            Ultrasonography is a safe and non-invasive medical imaging method that assists doctors in diagnosing and managing various health conditions. This painless procedure utilizes sound waves to generate detailed images of the internal structures of the body. A small device called a transducer, along with a special ultrasound gel, is applied to the skin. The transducer emits high-frequency sound waves, which travel through the body and reflect back from tissues and organs. These reflected waves are captured and converted by a computer into real-time images. Unlike X-rays, ultrasound imaging does not involve radiation exposure, making it a safer option for patients.
            </p>
          </div>
          <div className='whatultrasonography-form'>
            <button className="whatultrasonography-btn" onClick={handleModalToggle}>
              FILL ENQUIRY FORM
            </button>
          </div>
        </div>
        <div className='whatultrasonography-box2'>
          <div className='whatultrasonography-image'>
            <img src={ultrasound} alt='ultraSound-Image' />
          </div>
          <div className='whatultrasonography-image-button'>
            <button className='whatultrasonography-image-btn'>Click Me</button>
          </div>
        </div>
      </div>

      {showModal && (
        <div className='modal'>
          <div className='modal-content'>
            <button className="close-btn" onClick={handleModalToggle}>
              &times;
            </button>
            <h2>Request for Facility Service</h2>
            <form>
              <input type="text" placeholder="Full Name *" required />
              <input type="email" placeholder="Email *" required />
              <input type="text" placeholder="Phone No. *" required />
              <button type="submit">NEXT</button>
            </form>
            <p><strong>TAT Attention!</strong> Response Time to FORMs: Within 6 hours on best effort basis</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default WhatUltrasonography;
