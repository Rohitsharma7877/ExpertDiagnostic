import React, { useState } from "react";
import { GrSearch } from "react-icons/gr";
// import { FaShoppingCart } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "./assests/logo2.png";

const Navbar = () => {
  const [menuDisplay, setMenuDisplay] = useState(false);
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

  return (
    <header className="h-16 shadow-md bg-white fixed w-full z-40 ">
      <div className="container mx-auto flex items-center justify-between px-12 h-full ">
        {/* Hamburger / Close Menu */}
        <button
          onClick={() => setMenuDisplay((prev) => !prev)}
          className="text-xl lg:text-2xl flex items-center mr-[4px] "
        >
          {menuDisplay ? (
            <AiOutlineClose size={24} />
          ) : (
            <RxHamburgerMenu size={24} />
          )}
        </button>

        {/* Logo */}
        <div className="flex items-center justify-center ml-5">
          <Link to={"/"}>
            <img
              src={logo}
              alt="Logo"
              className="w-21 h-16 object-contain mr-35" // Adjusted margin-right here
            />
          </Link>
        </div>

        {/* Search Bar */}
        <div className="hidden lg:flex items-start justify-center flex-grow  pr-15">
          <div className="flex items-center justify-center max-w-sm w-full mx-auto border rounded-full focus-within:shadow pl-2">
            <input
              type="text"
              placeholder="Search product here..."
              className="w-full outline-none"
              onChange={handleSearch}
              value={search}
            />
            <div className="text-lg min-w-[50px] h-8 bg-purpleCustom flex items-center justify-center rounded-r-full text-white border">
              <GrSearch />
            </div>
          </div>
        </div>

        {/* Right Side: Cart, Login, and Signup */}
        <div className="flex items-center gap-4 px-2 sm:pr-4 ">
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

      {/* Slider Menu */}
      {menuDisplay && (
        <div className="fixed top-0 left-0 h-full bg-gray-800 text-white w-64 transform translate-x-0 transition-transform duration-300 ease-in-out z-50">
          <div className="flex justify-between items-center p-4">
            <h2 className="text-lg font-bold">Categories</h2>
            <button onClick={() => setMenuDisplay(false)}>
              <AiOutlineClose size={24} />
            </button>
          </div>
          <div className="p-4">
            <ul className="space-y-2">
              {[
                "Patient-Portal",
                "Doctor-Portal",
                "Lab-Radiology",
                "About",
                "Facilities",
                "Health-Package",
                "Download-Report",
                "Contact-Us",
              ].map((item) => (
                <li
                  key={item}
                  className="hover:bg-gray-700 p-2 rounded cursor-pointer"
                >
                  <Link
                    to={`/${item.toLowerCase().replace(/\s+/g, "")}`}
                    className="block"
                    onClick={() => setMenuDisplay(false)}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Overlay */}
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
