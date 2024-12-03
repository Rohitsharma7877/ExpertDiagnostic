import React, { useState } from 'react'
import './whatElectrocardiogram.css'
import ecgImage from './assests/download.jpg'

const WhatElectrocardiogram = () => {
    const [showModal, setShowModal] = useState(false);

    const handleModalToggle = () => {
      setShowModal(!showModal);
    };
  return (
    <div className='whatElectrocardiogram-main1'>
      <div className={`whatElectrocardiogram-main2 ${showModal ? 'blur-background' : ''}`}>
        <div className='whatElectrocardiogram-box1'>
          <div className='whatElectrocardiogram-header'>
            <h1>What is Electrocardiogram?</h1>
          </div>
          <div className='whatElectrocardiogram-pragraph'>
            <p>
            The heart generates subtle electrical impulses that travel through the heart muscle, triggering its contraction. These impulses can be measured on the surface using an Electrocardiogram (ECG). An ECG is a non-invasive and painless test typically performed while the patient is at rest. It provides valuable insights into the heart's electrical activity and overall function. By analyzing these impulses, healthcare professionals can detect irregularities or conditions affecting the heart. This simple yet crucial diagnostic tool plays a vital role in monitoring cardiac health.
            </p>
          </div>
          <div className='whatElectrocardiogram-form'>
            <button className="whatElectrocardiogram-btn" onClick={handleModalToggle}>
              FILL ENQUIRY FORM
            </button>
          </div>
        </div>
        <div className='whatElectrocardiogram-box2'>
          <div className='whatElectrocardiogram-image'>
            <img src={ecgImage} alt='ultraSound-Image' />
          </div>
          <div className='whatElectrocardiogram-image-button'>
            <button className='whatElectrocardiogram-image-btn'>Click Me</button>
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
  )
}

export default WhatElectrocardiogram