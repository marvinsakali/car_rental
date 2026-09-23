import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="px-6 xl:px-32 md:px-16 lg:px-24 mt-60 text-sm text-gray-500">
      <div className="flex flex-wrap  border-borderColor border-b pb-6 justify-between gap-8">
        <div>
          <img src={assets.logo} className="h-8 md:h-9" alt="logo" />
          <p className=" max-w-80 mt-3">
            Premium car rental service with a wide selection of luxury and
            everyday vehicles for all your driving needs.
          </p>
          <div className="flex flex-wrap items-center gap-3 mt-3">
            <img src={assets.facebook_logo} alt="facebook" />
            <img src={assets.instagram_logo} alt="instagram" />
            <img src={assets.twitter_logo} alt="twitter" />
            <img src={assets.gmail_logo} alt="gmail" />
          </div>
        </div>

        <div>
          <h1 className="font-medium uppercase text-base text-gray-800">
            Quick Links
          </h1>
          <div className="flex flex-col mt-3 gap-1.5">
            <Link to="/"> Home </Link>
            <Link to="/browse-cars">Browse Cars</Link>
            <Link> List Your Car</Link>
            <Link>About us</Link>
          </div>
        </div>

        <div>
          <h1 className="font-medium uppercase text-base text-gray-800">
            Quick Links
          </h1>
          <div className="flex flex-col mt-3 gap-1.5">
            <Link to="/"> Home </Link>
            <Link to="/browse-cars">Browse Cars</Link>
            <Link> List Your Car</Link>
            <Link>About us</Link>
          </div>
        </div>

        <div>
          <h1 className="font-medium uppercase text-base text-gray-800">
            Quick Links
          </h1>
          <div className="flex flex-col mt-3 gap-1.5">
            <Link to="/"> Home </Link>
            <Link to="/browse-cars">Browse Cars</Link>
            <Link> List Your Car</Link>
            <Link>About us</Link>
          </div>
        </div>
      </div>

      <div
        className="flex flex-col md:flex-row gap-2 items-center 
      justify-between py-5
      "
      >
        <p>&copy; {new Date().getFullYear()}  All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
