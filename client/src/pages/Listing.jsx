import React from "react";
import { assets } from "../assets/assets";
import { CircleDotIcon, ClipboardListIcon, Phone } from "lucide-react";
import { NavLink, Outlet, Route, Routes } from "react-router-dom";
import MyListing from "../components/MyListing";

const Listing = () => {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-[280px_1fr]">
      {/* left sidebar */}
      <div className="border-r border-r-borderColor py-12 px-8 space-y-6">
        <div>
          <h3 className="text-gray-500/90 mb-3 text-muted text-sm">
            Main menu
          </h3>
          <div className=" flex flex-col space-y-4">
            <NavLink
              to="dashboard"
              className={({
                isActive,
              }) => `flex gap-4 items-center px-3 py-2 rounded-lg cursor-pointer
          ${isActive ? "bg-light" : "text-gray-500/80"}`}
            >
              <img src={assets.dashboardIcon} className="w-5 h-5" alt="" />
              <p className=" text-[14px]">Dashboard</p>
            </NavLink>
            <NavLink
              to="add-car"
              className={({
                isActive,
              }) => `flex gap-4 items-center px-3 py-2 rounded-lg cursor-pointer
          ${isActive ? "bg-light" : "text-gray-500/80"}`}
            >
              <img src={assets.addIcon} className="w-5 h-5" alt="" />
              <p className=" text-[14px]">Add Car</p>
            </NavLink>
          </div>
        </div>

        <div className="">
          <h3 className="text-gray-500/90 mb-3 text-muted text-sm">
            Vehicle finder
          </h3>
          <div className="space-y-4 ">
            <NavLink
              to="search"
              className={({
                isActive,
              }) => `flex gap-4 px-3 py-2 rounded-lg items-center cursor-pointer 
            ${isActive ? "bg-light" : "text-gray-500/80"}`}
            >
              <img src={assets.search_icon} className="w-5 h-5" alt="" />
              <p className=" text-[14px]">Search Cars</p>
            </NavLink>
            <NavLink
              to="my-listings"
              className={({
                isActive,
              }) => `flex gap-4 items-center px-3 py-2 rounded-lg cursor-pointer
          ${isActive ? "bg-light" : "text-gray-500/80"}`}
            >
              <ClipboardListIcon className="w-5 h-5" />
              <p className=" text-[14px]">My Listing</p>
            </NavLink>
            <NavLink
              to="my-bookings"
              className={({
                isActive,
              }) => `flex gap-4 items-center px-3 py-2 rounded-lg cursor-pointer
          ${isActive ? "bg-light" : "text-gray-500/80"}`}
            >
              <CircleDotIcon className="w-5 h-5" />
              <p className=" text-[14px]">Manage bookings</p>
            </NavLink>
            <NavLink
              to="support"
              className={({
                isActive,
              }) => `flex gap-4 items-center px-3 py-2 rounded-lg cursor-pointer
          ${isActive ? "bg-light" : "text-gray-500/80"}`}
            >
              <Phone className="w-5 h-5" />
              <p className=" text-[14px]">Help center</p>
            </NavLink>
          </div>

          <div className="mt-8 px-2 py-4 bg-light rounded-lg flex flex-col gap-4 items-center text-center text-xs justify-center ">
            <p className="text-gray-500">
              The best way to buy new and sell old cars
            </p>
            <button className="bg-white px-4 py-2 rounded-md font-bold">
              {" "}
              Sell your car
            </button>
          </div>
        </div>
      </div>

      {/* right  side */}
      <main className="">
        <Outlet />
      </main>
    </div>
  );
};

export default Listing;
