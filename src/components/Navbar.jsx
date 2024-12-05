import React, { useState } from "react";
import { GrSearch } from "react-icons/gr";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { IoMdAdd, IoMdRemove } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "./assests/logo.png";

const Navbar = () => {
  const [menuDisplay, setMenuDisplay] = useState(false);
  const [dropdowns, setDropdowns] = useState({
    labRadiology: false,
    facilities: false,
    healthPackage: false,
  });
  const navigate = useNavigate();
  const searchInput = useLocation();
  const URLSearch = new URLSearchParams(searchInput?.search);
  const searchQuery = URLSearch.getAll("q");
  const [search, setSearch] = useState(searchQuery);

  const handleSearch = (e) => {
    const { value } = e.target;
    setSearch(value);

    if (value) {
      navigate(`/search?q=${value}`);
    } else {
      navigate("/search");
    }
  };

  const toggleDropdown = (key) => {
    setDropdowns((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <header className="el-messiri-navbar h-16 shadow-md bg-white fixed w-full z-40">
      <div className="container mx-auto flex items-center justify-between px-12 h-full">
        <button
          onClick={() => setMenuDisplay((prev) => !prev)}
          className="text-xl lg:text-2xl flex items-center"
        >
          {menuDisplay ? (
            <AiOutlineClose size={24} />
          ) : (
            <RxHamburgerMenu size={24} />
          )}
        </button>

        <div className="flex items-center justify-center ml-5">
          <Link to={"/"}>
            <img src={logo} alt="Logo" className="w-21 h-16 object-contain" />
          </Link>
        </div>

        <div className="hidden lg:flex items-start justify-center flex-grow pr-15">
          <div className="flex items-center justify-center max-w-sm w-full mx-auto border rounded-full focus-within:shadow pl-2">
            <input 
              type="text"
              placeholder="Search product here..."
              className="w-full outline-none"
              onChange={handleSearch}
              value={search}
            />
            <div className="text-lg min-w-[50px] h-8 cursor-pointer bg-purpleCustom flex items-center justify-center rounded-r-full text-white border">
              <GrSearch />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 px-2 sm:pr-4">
          <Link
            to={"/login"}
            className="px-3 py-1 rounded-full text-white bg-purpleCustom hover:bg-orange-700"
          >
            Login
          </Link>
          <Link
            to={"/signup"}
            className="px-3 py-1 rounded-full text-white bg-purpleCustom hover:bg-orange-700"
            style={{ whiteSpace: "nowrap" }}
          >
            Sign Up
          </Link>
        </div>
      </div>

      {menuDisplay && (
        <div className="fixed top-0 left-0 h-full  text-white w-64 transform translate-x-0 transition-transform duration-300 ease-in-out z-50"  style={{ backgroundColor: "#603c86" }}>
          <div className="flex justify-between items-center p-4 ">
            <h2 className="text-lg font-bold ">Categories</h2>
            <button onClick={() => setMenuDisplay(false)}>
              <AiOutlineClose size={24} />
            </button>
          </div>
          <div className="p-4 mt-6 h-[calc(100vh-4rem)] overflow-y-auto">
            <ul className="space-y-2 leading-loose ">
              <li>
                <Link
                  to="/patient-portal"
                  className="font-bold hover:text-[#f0a500] p-2 rounded transition-colors"
                >
                  Patient-Portal
                </Link>
              </li>
              <li>
                <Link
                  to="/doctor-portal"
                  className="font-bold hover:text-[#f0a500] p-2 rounded transition-colors"
                >
                  Doctor-Portal
                </Link>
              </li>

              {/* Lab & Radiology */}
              <li className="dropdown">
                <div
                  className="flex items-center justify-between cursor-pointer font-bold hover:text-[#f0a500] p-2 rounded transition-colors"
                  onClick={() => toggleDropdown("labRadiology")}
                >
                  <span>Lab & Radiology</span>
                  {dropdowns.labRadiology ? (
                    <IoMdRemove size={16} />
                  ) : (
                    <IoMdAdd size={16} />
                  )}
                </div>
                {dropdowns.labRadiology && (
                  <ul className="ml-4 mt-2 space-y-1">
                    <li>
                      <Link
                        to="/lab-radiology/mri"
                        className="hover:text-[#f0a500] p-2 rounded transition-colors"
                      >
                        MRI
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/lab-radiology/ct-scan"
                        className="hover:text-[#f0a500] p-2 rounded transition-colors"
                      >
                        CT Scan
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/lab-radiology/x-ray"
                        className="hover:text-[#f0a500] p-2 rounded transition-colors"
                      >
                        X-Ray
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/lab-radiology/ultra-sound"
                        className="hover:text-[#f0a500] p-2 rounded transition-colors"
                      >
                        Ultra-Sound
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/lab-radiology/mammography"
                        className="hover:text-[#f0a500] p-2 rounded transition-colors"
                      >
                        Mammography
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/lab-radiology/lab-test"
                        className="hover:text-[#f0a500] p-2 rounded transition-colors"
                      >
                        Lab Test
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/lab-radiology/tmt"
                        className="hover:text-[#f0a500] p-2 rounded transition-colors"
                      >
                        TMT
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              <li>
                <Link
                  to="/about"
                  className="font-bold hover:text-[#f0a500] p-2 rounded transition-colors"
                >
                  About Us
                </Link>
              </li>

              {/* Facilities */}
              <li className="dropdown">
                <div
                  className="flex items-center justify-between cursor-pointer font-bold  hover:text-[#f0a500] p-2 rounded transition-colors"
                  onClick={() => toggleDropdown("facilities")}
                >
                  <span>Facilities</span>
                  {dropdowns.facilities ? (
                    <IoMdRemove size={16} />
                  ) : (
                    <IoMdAdd size={16} />
                  )}
                </div>
                {dropdowns.facilities && (
                  <ul className="ml-4 mt-2 space-y-1">
                    <li>
                      <Link
                        to="/facilities/ecg"
                        className="hover:text-[#f0a500] p-2 rounded transition-colors"
                      >
                        ECG
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/facilities/bone-density-test"
                        className="hover:text-[#f0a500] p-2 rounded transition-colors"
                      >
                        Bone Density Test
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/facilities/eeg"
                        className="hover:text-[#f0a500] p-2 rounded transition-colors"
                      >
                        EEG
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/facilities/pulmonary-function-test"
                        className="hover:text-[#f0a500] p-2 rounded transition-colors"
                      >
                        Pulmonary Test
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/facilities/covid-testing"
                        className="hover:text-[#f0a500] p-2 rounded transition-colors"
                      >
                        Covid Testing
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/facilities/lab-testing"
                        className="hover:text-[#f0a500] p-2 rounded transition-colors"
                      >
                        Lab Testing (Laboratory)
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/facilities/digital-X-ray"
                        className="hover:text-[#f0a500] p-2 rounded transition-colors"
                      >
                        Digital X-Ray
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/facilities/health-checkups"
                        className="hover:text-[#f0a500] p-2 rounded transition-colors"
                      >
                        Health Checkups
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/facilities/radiology-imaging"
                        className="hover:text-[#f0a500] p-2 rounded transition-colors"
                      >
                        Radiology & Imaging
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/facilities/tmt"
                        className="hover:text-[#f0a500] p-2 rounded transition-colors"
                      >
                        TMT
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/facilities/mammography"
                        className="hover:text-[#f0a500] p-2 rounded transition-colors"
                      >
                        Mammography
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/facilities/ultra-sonography"
                        className="hover:text-[#f0a500] p-2 rounded transition-colors"
                      >
                        Ultra Sonography
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              {/* Health Package */}
              <li className="dropdown">
                <div
                  className="flex items-center justify-between cursor-pointer font-bold  hover:text-[#f0a500] p-2 rounded transition-colors"
                  onClick={() => toggleDropdown("healthPackage")}
                >
                  <span>Health Package</span>
                  {dropdowns.healthPackage ? (
                    <IoMdRemove size={16} />
                  ) : (
                    <IoMdAdd size={16} />
                  )}
                </div>
                {dropdowns.healthPackage && (
                  <ul className="ml-4 mt-2 space-y-1">
                    <li>
                      <Link
                        to="/health-package/section1"
                        className="hover:text-[#f0a500] p-2 rounded transition-colors"
                      >
                        Section 1
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/health-package/section2"
                        className="hover:text-[#f0a500] p-2 rounded transition-colors"
                      >
                        Section 2
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/health-package/section3"
                        className="hover:text-[#f0a500] p-2 rounded transition-colors"
                      >
                        Section 3
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/health-package/section4"
                        className="hover:text-[#f0a500] p-2 rounded transition-colors"
                      >
                        Section 4
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              <li>
                <Link
                  to="/download-report"
                  className="font-bold hover:text-[#f0a500] p-2 rounded transition-colors"
                >
                  Download Report
                </Link>
              </li>

              <li>
                <Link
                  to="/contact-us"
                  className="font-bold hover:text-[#f0a500] p-2 rounded transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}

      {menuDisplay && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={() => setMenuDisplay(false)}
        ></div>
      )}
    </header>
  );
};

export default Navbar;
