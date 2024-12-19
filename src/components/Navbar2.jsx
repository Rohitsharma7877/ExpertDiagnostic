import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar2.css";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoMdCloudDownload } from "react-icons/io";
import { LuDot } from "react-icons/lu";
import doctor from './assests/indianGroupDoctors.jpg'
import { IoClose } from "react-icons/io5";


const Navbar2 = () => {
  const [showForm, setShowForm] = useState(false);

  const handleBookNowClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <div className="main1">
      <nav className="navbar el-messiri-navbar">
        <ul className="nav-links ">
          <li>
            <Link to="/doctor-portal">Doctor Portal</Link>
          </li>

          <li className="dropdown">
            <Link to="#">
              Lab Test <span className="down-icon">▼</span>
            </Link>
            <ul className="dropdown2-menu2">
              {/* main div */}
              <div className="droupdown-main1">
                <div className="droupdown-box1">
                  <div className="droupdown-grid-box">
                    <div className="droupdown-list-tag1">
                      <li>
                        <Link to="#">
                          HAEMATOLOGY TESTS
                        </Link>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <LuDot style={{ marginRight: "8px" }} />
                          <p style={{ color: "#eb7801" }}>
                            Complete blood count
                          </p>
                        </div>

                        <div style={{ display: "flex", alignItems: "center" }}>
                          <LuDot style={{ marginRight: "8px" }} />
                          <p style={{ color: "#eb7801" }}>Haemoglobin</p>
                        </div>

                        <div style={{ display: "flex", alignItems: "center" }}>
                          <LuDot style={{ marginRight: "8px" }} />
                          <p style={{ color: "#eb7801" }}>Platelet Count</p>
                        </div>
                      </li>
                      <li>
                        <Link to="#">DIABETIC TESTS</Link>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <LuDot style={{ marginRight: "8px" }} />
                          <p style={{ color: "#eb7801" }}>
                            Glucose Random with urin sugar
                          </p>
                        </div>

                        <div style={{ display: "flex", alignItems: "center" }}>
                          <LuDot style={{ marginRight: "8px" }} />
                          <p style={{ color: "#eb7801" }}>
                            Oral Glucos Tolerance Test
                          </p>
                        </div>

                        <div style={{ display: "flex", alignItems: "center" }}>
                          <LuDot style={{ marginRight: "8px" }} />
                          <p style={{ color: "#eb7801" }}>Urine Microalbumin</p>
                        </div>
                      </li>
                      <li>
                        <Link to="#">LIPIDS</Link>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <LuDot style={{ marginRight: "8px" }} />
                          <p style={{ color: "#eb7801" }}>Lipid Profile</p>
                        </div>

                        <div style={{ display: "flex", alignItems: "center" }}>
                          <LuDot style={{ marginRight: "8px" }} />
                          <p style={{ color: "#eb7801" }}>Semen Analysis</p>
                        </div>    
                      </li>
                    </div>


                <div className="droupdown-list-tag2">
                      <li>
                        <Link to="#">
                          LIVER FUNCTION TESTS
                        </Link>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <LuDot style={{ marginRight: "8px" }} />
                          <p style={{ color: "#eb7801" }}>Semen Prepration</p>
                        </div>

                        <div style={{ display: "flex", alignItems: "center" }}>
                          <LuDot style={{ marginRight: "8px" }} />
                          <p style={{ color: "#eb7801" }}>Doner Semen</p>
                        </div>

                        <div style={{ display: "flex", alignItems: "center" }}>
                          <LuDot style={{ marginRight: "8px" }} />
                          <p style={{ color: "#eb7801" }}>S. Bilbrium</p>
                        </div>
                      </li>
                      <li>
                        <Link to="#">RENAL TESTS</Link>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <LuDot style={{ marginRight: "8px" }} />
                          <p style={{ color: "#eb7801" }}>Bun</p>
                        </div>

                        <div style={{ display: "flex", alignItems: "center" }}>
                          <LuDot style={{ marginRight: "8px" }} />
                          <p style={{ color: "#eb7801" }}>Creatinine</p>
                        </div>

                        <div style={{ display: "flex", alignItems: "center" }}>
                          <LuDot style={{ marginRight: "8px" }} />
                          <p style={{ color: "#eb7801" }}>Urea</p>
                        </div>
                      </li>
                      <li>
                        <Link to="#">CULTURES/SENSITIVITY</Link>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <LuDot style={{ marginRight: "8px" }} />
                          <p style={{ color: "#eb7801" }}>Urine</p>
                        </div>

                        <div style={{ display: "flex", alignItems: "center" }}>
                          <LuDot style={{ marginRight: "8px" }} />
                          <p style={{ color: "#eb7801" }}>Pus</p>
                        </div>

                        <div style={{ display: "flex", alignItems: "center" }}>
                          <LuDot style={{ marginRight: "8px" }} />
                          <p style={{ color: "#eb7801" }}>Stool</p>
                        </div>
                      </li>
                      
                    </div>
                    <div className="droupdown-list-tag1">
                      <li>
                        <Link to="#">HORMONALASSAY</Link>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <LuDot style={{ marginRight: "8px" }} />
                          <p style={{ color: "#eb7801" }}>Triple Marker test</p>
                        </div>

                        <div style={{ display: "flex", alignItems: "center" }}>
                          <LuDot style={{ marginRight: "8px" }} />
                          <p style={{ color: "#eb7801" }}>Anti TPO</p>
                        </div>

                        <div style={{ display: "flex", alignItems: "center" }}>
                          <LuDot style={{ marginRight: "8px" }} />
                          <p style={{ color: "#eb7801" }}>Double Marker test</p>
                        </div>
                      </li>
                      <li>
                        <Link to="#">CLINICAL PATHOLOGY</Link>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <LuDot style={{ marginRight: "8px" }} />
                          <p style={{ color: "#eb7801" }}>Urine Analysis</p>
                        </div>

                        <div style={{ display: "flex", alignItems: "center" }}>
                          <LuDot style={{ marginRight: "8px" }} />
                          <p style={{ color: "#eb7801" }}>
                            Urine Complete Analysis
                          </p>
                        </div>

                        <div style={{ display: "flex", alignItems: "center" }}>
                          <LuDot style={{ marginRight: "8px" }} />
                          <p style={{ color: "#eb7801" }}>Pregnancy Test</p>
                        </div>
                      </li>
                      <li>
                        <Link to="#">SEROLOGY FOR INFECTIOUS</Link>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <LuDot style={{ marginRight: "8px" }} />
                          <p style={{ color: "#eb7801" }}>Widal Slide Method</p>
                        </div>

                        <div style={{ display: "flex", alignItems: "center" }}>
                          <LuDot style={{ marginRight: "8px" }} />
                          <p style={{ color: "#eb7801" }}>Mantoux Test</p>
                        </div>

                        <div style={{ display: "flex", alignItems: "center" }}>
                          <LuDot style={{ marginRight: "8px" }} />
                          <p style={{ color: "#eb7801" }}>HIV Rapid</p>
                        </div>
                      </li>
                    </div>
                    <div className="droupdown-list-tag1">
                      <li>
                        <Link to="#">
                          BODY FLUID ANALYSIS
                        </Link>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <LuDot style={{ marginRight: "8px" }} />
                          <p style={{ color: "#eb7801" }}>Cell Count</p>
                        </div>

                        <div style={{ display: "flex", alignItems: "center" }}>
                          <LuDot style={{ marginRight: "8px" }} />
                          <p style={{ color: "#eb7801" }}>LDH Fluid</p>
                        </div>

                        <div style={{ display: "flex", alignItems: "center" }}>
                          <LuDot style={{ marginRight: "8px" }} />
                          <p style={{ color: "#eb7801" }}>ADA Level</p>
                        </div>
                      </li>
                      <li>
                        <Link to="#">MICRO-BIOLOGY </Link>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <LuDot style={{ marginRight: "8px" }} />
                          <p style={{ color: "#eb7801" }}>Gram Stain</p>
                        </div>

                        <div style={{ display: "flex", alignItems: "center" }}>
                          <LuDot style={{ marginRight: "8px" }} />
                          <p style={{ color: "#eb7801" }}>
                            KOH prep for Fungus
                          </p>
                        </div>

                        <div style={{ display: "flex", alignItems: "center" }}>
                          <LuDot style={{ marginRight: "8px" }} />
                          <p style={{ color: "#eb7801" }}>ZN Staining for TB</p>
                        </div>
                      </li>
                      <li>
                        <Link to="/lab-test/#">STOOL EXAMINATION </Link>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <LuDot style={{ marginRight: "8px" }} />
                          <p style={{ color: "#eb7801" }}>Stool Analysis</p>
                        </div>

                        <div style={{ display: "flex", alignItems: "center" }}>
                          <LuDot style={{ marginRight: "8px" }} />
                          <p style={{ color: "#eb7801" }}>
                            Stool Reducing Substance
                          </p>
                        </div>

                        <div style={{ display: "flex", alignItems: "center" }}>
                          <LuDot style={{ marginRight: "8px" }} />
                          <p style={{ color: "#eb7801" }}>
                            Stool for occult blood
                          </p>
                        </div>
                      </li>
                    </div>
                  </div>
                </div>

                {/* button   div*/}
                <div className="droupdown-box2">
                  <div
                    className="droup-buttons"
                    style={{
                      display: "flex",
                      justifyContent: "end",
                      marginTop: "3%",
                    }}
                  >
                    <button
                      className="droup-btn"
                      style={{
                        backgroundColor: "#eb7801",
                        color: "#fff",
                        border: "none",
                        padding: "8px 15px",
                        borderRadius: "5px",
                        cursor: "pointer",
                        fontSize: "16px",
                      }}
                      onMouseOver={(e) =>
                        (e.target.style.backgroundColor = "#7737a1")
                      }
                      onMouseOut={(e) =>
                        (e.target.style.backgroundColor = "#eb7801")
                      }
                      onClick={handleBookNowClick}
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </ul>
          </li>

          <li className="dropdown">
            <Link to="#">
              Radiology Test <span className="down-icon">▼</span>
            </Link>
            <ul className="dropdown-menu">
              <li>
                <Link to="/radiology-test/mri">MRI</Link>
              </li>
              <li>
                <Link to="/radiology-test/ct-scan">CT-Scan</Link>
              </li>
              <li>
                <Link to="/radiology-test/x-ray">X-Ray</Link>
              </li>
              <li>
                <Link to="/radiology-test/ultrasonography">Ultrasonography</Link>
              </li>
            </ul>
          </li>

          <li className="dropdown">
            <Link to="#">
              Special Test <span className="down-icon">▼</span>
            </Link>
            <ul className="dropdown-menu">
              <li>
                <Link to="/special-test/tmt">TMT</Link>
              </li>
              <li>
                <Link to="/special-test/mri-mammography">MRI Mammography</Link>
              </li>
              <li>
                <Link to="/special-test/mammography">Mammography</Link>
              </li>
              <li>
                <Link to="/special-test/ecg">ECG</Link>
              </li>
              <li>
                <Link to="/special-test/bone-density-test">Bone Density Test</Link>
              </li>

              <li>
                <Link to="/special-test/eeg">EEG</Link>
              </li>
              <li>
                <Link to="/special-test/pulmonary-function-test">
                  Pulmonary Function Test
                </Link>
              </li>
            </ul>
          </li>

          
          <li className="dropdown">
            <Link to="/health-package">
              Expert Care Package <span className="down-icon">▼</span>
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
            <Link to="/mobile" className="flex items-start gap-2">
              <IoMdCloudDownload className="text-[18px] " />
              <div className="text-left text-[#f0a500]">Download Report</div>
            </Link>
          </li>
          <li>
            <Link to="/mobile" className="flex items-start gap-2">
              <FaPhoneVolume className="text-[18px] " />
              <div className="text-left text-[#f0a500]">
                +91 0123456789
                
              </div>
            </Link>
          </li>
        </ul>
      </nav>

      {showForm && (
        <div className="form-overlay">
          <div className="form-wrapper">
            {/* Left Section: Image */}
            <div className="form-image-section">
              <img
                src={doctor}
                alt="Doctors"
                className="form-image"
              />
            </div>

            {/* Right Section: Form */}
            <div className="form-container">
              {/* Close Icon */}
              <button className="form-close-icon" onClick={handleCloseForm}>
                <IoClose size={24} color="#f44336" />
              </button>
              <h2>Book Your Tests</h2>
              <form className="book-test-form">
                <input type="text" placeholder="Name" required />
                <input type="email" placeholder="Email" required />
                <textarea placeholder="Message" rows="5" required></textarea>
                <button type="submit" className="form-submit-btn">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar2;
