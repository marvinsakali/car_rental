import React, { useState } from "react";
import { assets, menuLinks } from "../assets/assets";
import { Link, useLocation, useNavigate } from "react-router-dom";

const NavBar = ({ setShowLogin }) => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <div
      className={`flex items-center px-6 py-4 border-b border-borderColor transition-all
    justify-between relative xl:px-32 lg:px-24 md:px-16 text-gray-600
    ${location.pathname === "/" && "bg-light"}`}
    >
      <Link to="/">
        <img src={assets.logo} alt="logo" className="h-8" />
      </Link>

      <div
        className={`max-sm:fixed max-sm:h-screen max-sm:w-full sm:gap-8 flex max-sm:flex-col
          sm:flex-row right-0 items-start max-sm:border-t border-borderColor sm:items-center gap-4 transition-all duration-300 z-50
          max-sm:top-16 max-sm:p-4 ${location.pathname === "/" ? "bg-light" : "bg-white"} ${open ? "max-sm:translate-x-0" : "max-sm:translate-x-full"}`}
      >
        
        {menuLinks.map((link, index) => (
          <Link key={index} className="hover:border-b-2">{link.name}</Link>
        ))}
        
        <div className="hidden lg:flex gap-2 items-center rounded-full px-3 max-w-56 border border-borderColor">
          <input
            type="text"
            className="outline-none bg-transparent py-1.5
          w-full placeholder-gray-500"
            placeholder="search car"
          />
          <img src={assets.search_icon} alt="search" />
        </div>

        <div className="flex max-sm:flex-col items-start sm:items-center gap-6">
          <button onClick={() => navigate("/owner")} className="cursor-pointer">
            Dashboard
          </button>
          <button
            onClick={() => setShowLogin(true)}
            className="text-white hover:bg-primary-dull py-2 bg-primary rounded-lg px-8"
          >
            Login
          </button>
        </div>
      </div>

      <button
        onClick={() => setOpen(!open)}
        className="sm:hidden cursor-pointer"
      >
        <img
          src={open ? assets.close_icon : assets.menu_icon}
          alt="menu"
          aria-label="menu"
        />
      </button>
    </div>
  );
};

export default NavBar;
