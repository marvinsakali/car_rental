import React from "react";
import { assets } from "../assets/assets";
import { CircleDotIcon, ClipboardListIcon, Phone } from "lucide-react";

const Listing = () => {
  return (
    <div className="min-h-screen grid grid-cols-[280px_1fr]">
      {/* left sidebar */}
      <div className="border-r border-r-borderColor py-12 px-8 space-y-6">
        <div className=" flex flex-col space-y-4">
          <div className="flex gap-4 items-center cursor-pointer">
            <img src={assets.dashboardIcon} className="w-5 h-5" alt="" />
            <p className=" text-[14px]">Dashboard</p>
          </div>
          <div className="flex gap-4 items-center cursor-pointer">
            <img src={assets.addIcon} className="w-5 h-5" alt="" />
            <p className=" text-[14px]">Add Car</p>
          </div>
        </div>

        <div className="">
          <h3 className="text-gray-500/90 mb-3 text-muted text-sm">
            Vehicle finder
          </h3>
          <div className="space-y-4 text-gray-500/80">
            <div className="flex gap-4 items-center cursor-pointer">
              <img src={assets.search_icon} className="w-5 h-5" alt="" />
              <p className=" text-[14px]">Search</p>
            </div>
            <div className="flex gap-4 items-center cursor-pointer">
              <ClipboardListIcon className="w-5 h-5" />
              <p className=" text-[14px]">Listing</p>
            </div>
            <button className="flex gap-4 items-center cursor-pointer">
              <CircleDotIcon className="w-5 h-5" />
              <p className=" text-[14px]">Book Services</p>
            </button>
            <div className="flex gap-4 items-center cursor-pointer">
              <Phone className="w-5 h-5" />
              <p className=" text-[14px]">Help center</p>
            </div>
          </div>

          <div className="mt-8 px-2 py-4 bg-light rounded-lg flex flex-col gap-4 items-center text-center text-xs justify-center ">
            <p className="text-gray-500">
              The best way to buy new and sell old cars
            </p>
            <button className="bg-white px-4 py-2 rounded-md font-bold"> Sell your car</button>
          </div>
        </div>
      </div>

      {/* right  side */}
      <main className=""> main</main>
    </div>
  );
};

export default Listing;
