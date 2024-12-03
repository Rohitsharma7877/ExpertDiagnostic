import React from "react";
import { Link } from "react-router-dom";
import "./navbar2.css";
// import * as React from 'react';
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Navbar2 = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className="main1">
      <nav className="navbar">
        <ul className="nav-links">
          <li>{/* <Link to="/hh">Home</Link> */}</li>
          <li>
            <Link to="/patient-portal">Patient Portal</Link>
          </li>
          <li>
            <Link to="/doctor-portal">Doctor Portal</Link>
          </li>
          <li className="dropdown">
            <Link to="/lab-radiology">
              Lab & Radiology <span className="down-icon">▼</span>
            </Link>
            <ul className="dropdown-menu">
              <li>
                <Link to="/lab-radiology/mri">MRI</Link>
              </li>
              <li>
                <Link to="/lab-radiology/ct-scan">CT Scan</Link>
              </li>
              <li>
                <Link to="/lab-radiology/x-ray">X-Ray</Link>
              </li>
              <li>
                <Link to="/lab-radiology/ultra-sound">Ultra-Sound</Link>
              </li>
              <li>
                <Link to="/lab-radiology/mammography">Mammography</Link>
              </li>
              <li>
                <Link to="/lab-radiology/lab-test">Lab Test</Link>
              </li>
              <li>
                <Link to="/lab-radiology/tmt">TMT</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li className="dropdown">
            <Link to="/facilities">
              Facilities <span className="down-icon">▼</span>
            </Link>
            <ul className="dropdown-menu">
              <li>
                <Link to="/facilities/ecg">ECG</Link>
              </li>
              <li>
                <Link to="/facilities/bone-density-test">
                  Bone Density Test
                </Link>
              </li>
              <li>
                <Link to="/facilities/eeg">EEG</Link>
              </li>
              <li>
                <Link to="/facilities/pulmonary-function-test">
                  Pulmonary Function Test
                </Link>
              </li>
              <li>
                <Link to="/facilities/covid-testing">Covid Testing</Link>
              </li>
              <li>
                <Link to="/facilities/lab-testing">
                  Lab Testing (Laboratory)
                </Link>
              </li>
              <li>
                <Link to="/facilities/digital-X-ray">Digital X-Ray</Link>
              </li>
              <li>
                <Link to="/facilities/health-checkups">Health Checkups</Link>
              </li>
              <li>
                <Link to="/facilities/radiology-imaging">
                  Radiology & Imaging
                </Link>
              </li>
              <li>
                <Link to="/facilities/tmt">TMT</Link>
              </li>
              <li>
                <Link to="/facilities/mammography">Mammography</Link>
              </li>
              <li>
                <Link to="/facilities/ultra-sonography">Ultra Sonography</Link>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <Link to="/health-package">
              Health Package <span className="down-icon">▼</span>
            </Link>
            <ul className="dropdown-menu">
              <li>
                <Link to="/health-package/section1">Section 1</Link>
              </li>
              <li>
                <Link to="/health-package/section2">Section 2</Link>
              </li>
              <li>
                <Link to="/health-package/section3">Section 3</Link>
              </li>
              <li>
                <Link to="/health-package/section4">Section 4</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/download-report">Download Report</Link>
          </li>
          <li>
            <Link to="/contact-us">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar2;
