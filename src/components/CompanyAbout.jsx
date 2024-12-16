import React from "react";
import "./companyabout.css";
import { RxDotFilled } from "react-icons/rx";

const CompanyAbout = () => {
  return (
    <div className="about-main1">
      <div className="about-main2">
        <div className="about-box2">
          <h1>About Us!</h1>
        </div>
        <div className="about-box3">
          {/* Meliora is a Latin adjective meaning "better". It may be used in the accusative and substantively */}
        </div>
        <div className="about-box4">
          <p>
            Expert Diagnostics fills the long-awaited gap for high-end
            diagnostic services in the Hassan district, setting a new standard
            in healthcare. With a commitment to care and precision, the center
            ensures patients receive the highest level of respect, empathy, and
            attention.
            <br />
            <br />
            Spanning over 7000 sqft, the center features state-of-the-art
            facilities, including a 1.5 Tesla MRI, Mammography, 128 Slice CT
            with Cardiac CT, cutting-edge ultrasound technology, Digital X-Ray,
            TMT, Echo, ECG, ENMG, EEG, and a comprehensive range of laboratory.
            <br />
            <br />
            Led by experienced doctors, Expert Diagnostics is dedicated to
            providing accurate and timely reports, contributing to faster
            recovery and improved patient outcomes. The center's advanced
            technology and compassionate approach work in harmony to deliver
            exceptional healthcare, making it a trusted name in the region.
          </p>
        </div>
        {/* <div className="about-box5">
          <div className="about-list">
            <ul>
              <li>
                <p>
                  <RxDotFilled />
                </p>
                <h1>MELIORA BRANDS</h1>
              </li>
              <li>
                <p>
                  <RxDotFilled />
                </p>
                <h1>MELIORA PRODUCTS </h1>
              </li>
            </ul>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default CompanyAbout;
