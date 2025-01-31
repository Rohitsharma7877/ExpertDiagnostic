import React, { useState } from "react";
import { GrSearch } from "react-icons/gr";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdCloudUpload } from "react-icons/io";
// import { FcReadingEbook } from "react-icons/fc";
import { TbNotebook } from "react-icons/tb";
import { HiMenu } from "react-icons/hi";
import logo from "./assests/logo223.png";
import navbarImage from "./assests/navbckimg.png";
import homecollect from "./assests/homecollection1.png";
import hospitalimage from "./assests/hospitalimage.png";
import "./Navbar.css";

// Dummy Data for Testing
const dummyData = [
  { id: 1, name: "Paracetamol", category: "Medicine" },
  { id: 2, name: "Aspirin", category: "Medicine" },
  { id: 3, name: "Gloves", category: "Surgical" },
  { id: 4, name: "Thermometer", category: "Device" },
  { id: 5, name: "Stethoscope", category: "Device" },
];

const Navbar = () => {
  const [showForm, setShowForm] = useState(false); // Controls modal visibility
  const [search, setSearch] = useState(""); // Controls search input
  const [searchResults, setSearchResults] = useState([]); // Stores search results
  const [isLoading, setIsLoading] = useState(false); // Simulates API call
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Hamburger menu toggle
  const navigate = useNavigate();
  const searchInput = useLocation();
  const URLSearch = new URLSearchParams(searchInput?.search);
  const searchQuery = URLSearch.getAll("q");

  if (searchQuery.length > 0) {
    setSearch(searchQuery[0]);
  }

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);

    if (value.trim()) {
      // Simulate an API call with dummy data
      setIsLoading(true);
      setTimeout(() => {
        const filteredData = dummyData.filter((item) =>
          item.name.toLowerCase().includes(value.toLowerCase())
        );
        setSearchResults(filteredData);
        setIsLoading(false);
        setIsDropdownVisible(true);
      }, 500); // Simulate delay
    } else {
      setSearchResults([]);
      setIsDropdownVisible(false);
    }
  };

  const handleResultClick = (result) => {
    setSearch(""); // Clear the search bar
    setIsDropdownVisible(false); // Close the dropdown
    navigate(`/product/${result.id}`); // Navigate to the product page
  };

  return (
    <>
      {/* Navbar Container */}
      <header
        className="el-messiri-navbar h-16   fixed w-full z-50"
        style={{
          backgroundImage: `url(${navbarImage})`,
          backgroundSize: "cover",
          backgroundPosition: "left start",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container flex items-center justify-between px-4 h-full">
          {/* Logo */}
          <Link to={"/"}>
            <img
              src={logo}
              alt="Logo" 
              className="w-[79%] h-14 object-contain  "
            />
            <hr className="w-[65%] ml-[10%]" />
            <p className="text-[10px] ml-[15%] text-[#eb7801]">
              Precision with care.
            </p>
          </Link>

          {/* Search Bar */}
          <div className="relative flex-1 max-w-sm mx-auto">
            <div className=" search-bar flex items-center border rounded-full pl-2 bg-white w-full">
              <input
                type="text"
                placeholder="Search product here..."
                className="w-full outline-none bg-transparent text-black placeholder-gray-500 px-2"
                onChange={handleSearch}
                value={search}
                onFocus={() => setIsDropdownVisible(!!searchResults.length)}
                onBlur={() =>
                  setTimeout(() => setIsDropdownVisible(false), 200)
                } // Delay to allow click
              />
              <button className="text-lg bg-orange-500 text-white p-2 rounded-full">
                <GrSearch />
              </button>
            </div>
          </div>

          {/* Search Results Dropdown */}
          {isDropdownVisible && (
            <div
              className={`absolute top-12 bg-white shadow-lg border rounded-lg z-50 
                w-[65%] left-[65%] mt-[0.6%] transform -translate-x-1/2 
                sm:w-[35%] sm:left-[20%] sm:mt-[0.6%] sm:transform-none`}
            >
              {isLoading ? (
                <p className="p-2 text-gray-500 text-center">Loading...</p>
              ) : searchResults.length > 0 ? (
                searchResults.map((result) => (
                  <div
                    key={result.id}
                    className="p-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleResultClick(result)}
                  >
                    <p className="font-medium">{result.name}</p>
                    <p className="text-sm text-gray-500">{result.category}</p>
                  </div>
                ))
              ) : (
                <p className="p-2 text-gray-500 text-center">
                  No results found.
                </p>
              )}
            </div>
          )}

     

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={() => setShowForm(true)}
              className=" flex items-center text-white text-sm font-bold py-2 px-4 hover:text-orange-500"
            >
              <TbNotebook className="mr-1 relative -top-0 text-lg" />
              Book Test
            </button>
            <Link
              to="/upload-prescription"
              className="flex items-center text-white text-sm font-bold py-2 px-4 hover:text-orange-500"
            >
              <IoMdCloudUpload className="mr-1 relative -top-0 text-lg " />
              Upload Prescription
            </Link>
            <Link to="/cart" className="relative text-white text-lg">
              <FaShoppingCart />
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-1">
                1
              </span>
            </Link>
            <Link
              to="/log-in"
              className="text-white bg-[#603c86] hover:bg-orange-700 px-4 py-2 rounded-full text-sm"
            >
              Login
            </Link>
            <Link
              to="/sign-up"
              className="text-white bg-[#603c86] hover:bg-orange-700 px-4 py-2 rounded-full text-sm"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-2xl text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <HiMenu />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-30 left-0 w-full  bg-white shadow-md z-40">
            <div className="flex flex-col items-start p-4 space-y-4">
              <button
                onClick={() => {
                  setShowForm(true);
                  setIsMobileMenuOpen(false);
                }}
                className=" flex items-center text-gray-800 text-sm font-bold hover:text-orange-700"
              >
                <TbNotebook className="mr-1 relative -top-0 text-lg" />
                Book Test
              </button>
              <Link
                to="/upload-prescription"
                className="flex items-center text-gray-800 text-sm font-bold hover:text-orange-700"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <IoMdCloudUpload className="mr-1 relative -top-0 text-lg" />
                Upload Prescription
              </Link>
              <Link
                to="/cart"
                className="flex items-center text-gray-800 text-sm font-bold hover:text-orange-700"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <FaShoppingCart className="mr-1 relative -top-0 text-lg" />
                Cart
              </Link>
              <Link
                to="/log-in"
                className="text-sm font-bold text-white bg-[#603c86] hover:bg-orange-700 px-4 py-2 rounded-full"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/sign-up"
                className="text-sm font-bold text-white bg-[#603c86] hover:bg-orange-700 px-4 py-2 rounded-full"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sign Up
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Modal for Booking Tests */}
      {showForm && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50"
          onClick={() => setShowForm(false)}
        >
          <div
            className="bg-white bg-opacity-90  p-4 md:p-8 w-[90%] md:w-[70%] lg:w-[50%] max-w-3xl rounded-lg shadow-lg relative flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-red-500"
              onClick={() => setShowForm(false)}
            >
              <IoClose size={24} />
            </button>
            <h2 className="text-lg md:text-xl font-bold mb-4 text-center">
              Book Your Test
            </h2>
            <div className="flex flex-col md:flex-row gap-6">
              <div
                className="flex flex-col items-center cursor-pointer border border-gray-500 bg-white  rounded-lg p-4 transition-transform duration-300 hover:shadow-lg hover:scale-105 w-full md:w-1/2"
                onClick={() => {
                  setShowForm(false);
                  navigate("/home-collection");
                }}
              >
                <img
                  src={homecollect}
                  alt="Home Collection"
                  className="w-28 h-16 md:w-40 md:h-20 object-cover"
                />
                <p className="mt-5 text-sm md:text-base">Home Collection</p>
              </div>
              <div
                className="flex flex-col items-center cursor-pointer border border-gray-500 bg-white   rounded-lg p-4 transition-transform duration-300 hover:shadow-lg hover:scale-105 w-full md:w-1/2"
                onClick={() => {
                  setShowForm(false);
                  navigate("/book-appointment");
                }}
              >
                <img
                  src={hospitalimage}
                  alt="Book Appointment"
                  className="w-28 h-16 md:w-40 md:h-20 object-cover"
                />
                <p className="mt-5 text-sm md:text-base">Book Appointment</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
