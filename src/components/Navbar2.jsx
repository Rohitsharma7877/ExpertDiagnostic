import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaPlus, FaMinus, FaPhoneVolume } from "react-icons/fa6";
import { IoMdCloudDownload } from "react-icons/io";
import { LuDot } from "react-icons/lu";
// import doctor from './assests/indianGroupDoctors.jpg'
import { IoClose } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import "./navbar2.css";

const Navbar2 = () => {
  const [showForm, setShowForm] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    setOpenSubmenu(null);
  };

  const toggleSubmenu = (menu) => {
    setOpenSubmenu(openSubmenu === menu ? null : menu); // Toggle submenu
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const handleBookNowClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <div className="navbar-container">
      <nav className="desktop-navbar ">
        <ul className="nav-links ">
          <li>
            <Link to="/patient-portal">Patient Portal</Link>
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
                        <Link to="#">HAEMATOLOGY TESTS</Link>
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
                        <Link to="#">LIVER FUNCTION TESTS</Link>
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
                        <Link to="#">BODY FLUID ANALYSIS</Link>
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
                <Link to="/radiology-test/ultrasonography">
                  Ultrasonography
                </Link>
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
                <Link to="/special-test/bone-density-test">
                  Bone Density Test
                </Link>
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
            <Link to="#">
              Expert Care Package <span className="down-icon">▼</span>
            </Link>
            <ul className="dropdown-menu">
              <li>
                <Link to="/health-package/section1">Coming Soon...</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/download-report" className="flex items-start gap-2">
              <IoMdCloudDownload className="text-[18px] " />
              <div className="text-left text-[#f0a500]">Download Report</div>
            </Link>
          </li>
          <li>
            <Link to="/mobile" className="flex items-start gap-2">
              <FaPhoneVolume className="text-[18px] " />
              <div className="text-left text-[#f0a500]">+91 0123456789</div>
            </Link>
          </li>
        </ul>
      </nav>

      {/* Navbar for Mobile */}
      <nav className=" mobile-navbar">
        <button className="hamburger-icon" onClick={toggleSidebar}>
          <RxHamburgerMenu size={24} />
        </button>
      </nav>

      {/* Sidebar Drawer */}
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <div className="sidebar-content">
          <button className="close-icon" onClick={closeSidebar}>
            <IoClose size={24} />
          </button>
          <ul className="sidebar-links">
            <li>
              <Link to="/patient-portal" onClick={closeSidebar}>
              Patient Portal
              </Link>
            </li>

            {/* Lab Test Menu */}
            <li>
              <div
                className="submenu-header"
                onClick={() => toggleSubmenu("labTest")}
              >
                <span>Lab Test</span>
                {openSubmenu === "labTest" ? (
                  <FaMinus className="submenu-icon" />
                ) : (
                  <FaPlus className="submenu-icon" />
                )}
              </div>
              {openSubmenu === "labTest" && (
                <ul className="slider-dropdown-menu">
                  <li>
                    <Link to="#" onClick={closeSidebar}>
                      Book Now
                    </Link>
                  </li>
                  
                </ul>
              )}
            </li>

            <li>
              <div
                className="submenu-header"
                onClick={() => toggleSubmenu("radiologyTest")}
              >
                <span>Radiology Test</span>
                {openSubmenu === "radiologyTest" ? (
                  <FaMinus className="submenu-icon" />
                ) : (
                  <FaPlus className="submenu-icon" />
                )}
              </div>
              {openSubmenu === "radiologyTest" && (
                <ul className="slider-dropdown-menu">
                  <li>
                    <Link to="/radiology-test/mri" onClick={closeSidebar}>
                      MRI
                    </Link>
                  </li>
                  <li>
                    <Link to="/radiology-test/ct-scan" onClick={closeSidebar}>
                      CT-Scan
                    </Link>
                  </li>
                  <li>
                    <Link to="/radiology-test/x-ray" onClick={closeSidebar}>
                      X-Ray
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/radiology-test/ultrasonography"
                      onClick={closeSidebar}
                    >
                      Ultrasonography
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <div
                className="submenu-header"
                onClick={() => toggleSubmenu("specialTest")}
              >
                <span>Special Test</span>
                {openSubmenu === "specialTest" ? (
                  <FaMinus className="submenu-icon" />
                ) : (
                  <FaPlus className="submenu-icon" />
                )}
              </div>
              {openSubmenu === "specialTest" && (
                <ul className="slider-dropdown-menu">
                  <li>
                    <Link to="/special-test/tmt" onClick={closeSidebar}>
                      TMT
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/special-test/mri-mammography"
                      onClick={closeSidebar}
                    >
                      MRI Mammography
                    </Link>
                  </li>
                  <li>
                    <Link to="/special-test/mammography" onClick={closeSidebar}>
                      Mammography
                    </Link>
                  </li>
                  <li>
                    <Link to="/special-test/ecg" onClick={closeSidebar}>
                      ECG
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/special-test/bone-density-test"
                      onClick={closeSidebar}
                    >
                      Bone Density Test
                    </Link>
                  </li>
                  <li>
                    <Link to="/special-test/eeg" onClick={closeSidebar}>
                      EEG
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/special-test/pulmonary-function-test"
                      onClick={closeSidebar}
                    >
                      Pulmonary Function Test
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <div
                className="submenu-header"
                onClick={() => toggleSubmenu("ExpertCarePackage")}
              >
                <span>Expert Care Package</span>
                {openSubmenu === "ExpertCarePackage" ? (
                  <FaMinus className="submenu-icon" />
                ) : (
                  <FaPlus className="submenu-icon" />
                )}
              </div>
              {openSubmenu === "ExpertCarePackage" && (
                <ul className="slider-dropdown-menu">
                  <li>
                    <Link to="/health-package/#" onClick={closeSidebar}>
                      Coming Soon...
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <Link to="/download-report" onClick={closeSidebar}>
                Download Report
              </Link>
            </li>
            <li>
              <Link to="/mobile" onClick={closeSidebar}>
                +91 0123456789
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {isSidebarOpen && <div className="overlay" onClick={closeSidebar}></div>}
    </div>
  );
};

export default Navbar2;
