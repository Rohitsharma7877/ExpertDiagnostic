import React, { useState } from "react";
import { GrSearch } from "react-icons/gr";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "./assests/logo.png";
import navbarImage from "./assests/navbckimg.png";
import { IoClose } from "react-icons/io5"; // Import the close icon
import doctor from "./assests/indianGroupDoctors.jpg";
// import "./Navbar.css";
import { IoMdCloudUpload } from "react-icons/io";

const Navbar = () => {
  const [showForm, setShowForm] = useState(false);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const searchInput = useLocation();
  const URLSearch = new URLSearchParams(searchInput?.search);
  const searchQuery = URLSearch.getAll("q");

  // Set initial search value if there's any query parameter
  if (searchQuery.length > 0) {
    setSearch(searchQuery[0]);
  }

  const handleBookNowClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  const handleSearch = (e) => {
    const { value } = e.target;
    setSearch(value);

    if (value) {
      navigate(`/search?q=${value}`);
    } else {
      navigate("/search");
    }
  };

  return (
    <>
      <header
        className="el-messiri-navbar h-16 shadow-md fixed w-full z-1000"
        style={{
          backgroundImage: `url(${navbarImage})`,
          backgroundSize: "cover",
          backgroundPosition: "left start", 
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container w-[100%] flex items-center justify-between px-5 h-full">
          <div className="flex items-center   justify-center   ">
            <Link to={"/"}>
              <img src={logo} alt="Logo" className="w-21 h-16 object-contain" />
            </Link>
          </div>

          <div className="hidden lg:flex items-start justify-center flex-grow pr-18 search-bar-container">
            <div className="flex items-center justify-center max-w-sm w-full mx-auto border rounded-full focus-within:shadow pl-2 bg-transparent">
              <input
                type="text"
                placeholder="Search product here..."
                className="w-full outline-none bg-transparent text-black placeholder-gray-500"
                onChange={handleSearch}
                value={search}
              />
              <div className="text-lg min-w-[50px] h-8 cursor-pointer bg-[#eb7801] flex items-center justify-center rounded-r-full text-white ">
                <GrSearch />
              </div>
            </div>

            {/* Directly add these items below the search bar */}
            <ul className="flex space-x-4 ml-4">
              <li>
                <button
                  onClick={handleBookNowClick} // Open modal
                  className="text-[#ffffff] no-underline text-[14px] font-bold py-2 px-4 block transition-all duration-300 hover:text-[#f0a500] italic"
                >
                  Book Your Test
                </button>
              </li>
              <li>
                <Link
                  to="/upload-prescription"
                  className="flex items-center gap-2 text-[#ffffff] no-underline text-[14px] font-bold py-2 px-4 block transition-all duration-300 hover:text-[#f0a500] italic"
                >
                  <IoMdCloudUpload className="text-[18px]" />
                  Upload Prescription
                </Link>
              </li>
            </ul>
          </div>

          <div
            className="flex items-center pl-15  gap-4 px-2 sm:ml-6"
            style={{ marginLeft: "3rem" }} // Adjust the value as needed
          >
            <Link
              to={"/login"}
              className="px-5 py-1 rounded-full text-white bg-purpleCustom hover:bg-orange-700"
            >
              Login
            </Link>
            <Link
              to={"/signup"}
              className="px-5 py-1 rounded-full text-white bg-purpleCustom hover:bg-orange-700"
              style={{ whiteSpace: "nowrap" }}
            >
              Sign Up
            </Link>
          </div>
        </div>
        {/* <Navbar2/> */}
      </header>
      {showForm && (
        <div className="form-overlay">
          <div className="form-wrapper">
            {/* Left Section: Image */}
            <div className="form-image-section">
              <img src={doctor} alt="Doctors" className="form-image" />
            </div>

            {/* Right Section: Form */}
            <div className="form-container">
              {/* Close Icon */}
              <button className="form-close-icon" onClick={handleCloseForm}>
                <IoClose size={24} color="#f44336" />
              </button>
              <h2>Book Your Test</h2>
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
    </>
  );
};

export default Navbar;
