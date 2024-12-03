import React from 'react'
import './whatdoesecg.css'
import ecggraph from './assests/ecggraphImage.png'

const WhatDoesECG = () => {
  return (
    <div className="whatDoesECG-main1">
      <div className="whatDoesECG-main2">
        <div className="whatDoesECG-box1">
          <div className="whatDoesECG-box1-header">
            <h1>What does it show?</h1>
          </div>
          <div className="whatDoesECG-box1-pragha">
            <p>
            The ECG machine records electrical signals from your heart, helping your cardiologist assess your heart rate and rhythm. It can also detect signs of an enlarged heart or evidence of a heart attack (myocardial infarction). Unlike stress or exercise ECGs or cardiac imaging tests, a resting ECG is performed while the body is at rest.
            </p>
          </div>
          {/* <div className="checklist"> */}
          <div className="whatDoesECG-box1-header">
            <h1>What does it not show?</h1>
          </div>
          <div className="whatDoesECG-box1-pragha">
            <p>
              Your doctor may advice an ultrasound test if you are having pain,
              swelling, or any other symptom that needs an internal view of your
              organs. Through ultrasound doctor can view following organs:
            </p>
          </div>
          <div className="whatDoesECG-box1-header">
            <h1>Who does it?</h1>
          </div>
          <div className="whatDoesECG-box1-pragha">
            <p>
              Your doctor may advice an ultrasound test if you are having pain,
              swelling, or any other symptom that needs an internal view of your
              organs. Through ultrasound doctor can view following organs:
            </p>
          </div>
            {/* <ul>
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
            </ul> */}
          {/* </div> */}
        </div>
        <div className="whatDoesECG-box2">
          <div className="whatDoesECG-doctor">
            <img src={ecggraph} alt="whydoneedImage"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhatDoesECG