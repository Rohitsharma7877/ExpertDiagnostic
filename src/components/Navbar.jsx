import React, { useState } from "react";
import { GrSearch } from "react-icons/gr";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "./assests/logo.png";
import navbarImage from "./assests/navbckimg.png";
import { IoClose } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdCloudUpload } from "react-icons/io";
import "./Navbar.css";
import homecollect from "./assests/homecollection1.png";
import hospitalimage from "./assests/hospitalimage.png";

const Navbar = () => {
  const [showForm, setShowForm] = useState(false); // Controls modal visibility
  const [search, setSearch] = useState(""); // Controls search input
  const navigate = useNavigate();
  const searchInput = useLocation();
  const URLSearch = new URLSearchParams(searchInput?.search);
  const searchQuery = URLSearch.getAll("q");

  if (searchQuery.length > 0) {
    setSearch(searchQuery[0]);
  }

  const handleBookNowClick = () => {
    // Open the modal form
    setShowForm(true);
  };

  const handleCloseForm = () => {
    console.log("Close button clicked");
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
          <div className="flex items-center justify-center">
            <Link to={"/"}>
              <img src={logo} alt="Logo" className="w-21 h-16 object-contain" />
            </Link>
          </div>

          <div className="hidden lg:flex items-start justify-center flex-grow pr-18 search-bar-container">
            <div className="flex items-center justify-center max-w-sm w-full mx-auto border rounded-full focus-within:shadow pl-2 bg-transparent bg-white">
              <input
                type="text"
                placeholder="Search product here..."
                className="w-full outline-none bg-transparent text-black placeholder-gray-500"
                onChange={handleSearch}
                value={search}
              />
              <div className="text-lg min-w-[50px] h-8 cursor-pointer bg-[#eb7801] flex items-center justify-center rounded-r-full text-white">
                <GrSearch />
              </div>
            </div>

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

          <div className="flex items-center gap-4 px-2 sm:ml-6">
            <div>
              <Link to={"/cart"} className="text-2xl relative">
                <span>
                  <FaShoppingCart />
                </span>
                <div className="bg-red-600 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-3">
                  <p className="text-sm">1</p>
                </div>
              </Link>
            </div>
            <Link
              to={"/log-in"}
              className="px-5 py-1 rounded-full text-white bg-purpleCustom hover:bg-orange-700"
            >
              Login
            </Link>
            <Link
              to={"/sign-up"}
              className="px-5 py-1 rounded-full text-white bg-purpleCustom hover:bg-orange-700"
              style={{ whiteSpace: "nowrap" }}
            >
              Sign Up
            </Link>
          </div>
        </div>
      </header>
      {showForm && (
        <div className="nav-form-overlay" onClick={handleCloseForm}>
        <div
      className="book-test-container"
      onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
    >
            <button className="form-close-iconss" onClick={handleCloseForm}>
              <IoClose size={24} color="#f44336" />
            </button>
            <h2>Book Your Test</h2>
            <div className="options-container">
              <div
                className="option-card"
                onClick={() => {
                  setShowForm(false); // Close the form
                  navigate("/home-collection"); // Navigate to Home Collection
                }}
              >
                <img src={homecollect} alt="Home Collection" />
                <p>Home Collection</p>
              </div>
              <div
                className="option-card"
                onClick={() => {
                  setShowForm(false); // Close the form
                  navigate("/book-appointment"); // Navigate to Book Appointment
                }}
              >
                <img src={hospitalimage} alt="Book Your Appointment" />
                <p>Book Appointment</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
