import React, { useState } from "react";
import { assets, cityList } from "../assets/assets";

const HeroSection = () => {
    const [pickupLocation, setPickupLocation] = useState("")
  return (
    <div
      className="h-screen flex flex-col items-center text-center 
    gap-14 justify-center bg-light"
    >
      <h1 className="text-4xl md:text-5xl font-semibold">
        Luxary cars available
      </h1>
      <form
        className="flex flex-col rounded-lg items-start w-full 
        justify-between bg-white p-6 md:rounded-full md:flex-row md:items-center max-w-80 md:max-w-200 
        shadow-[0px_8px_20px_rgba(0,0,0,0.1)]"
      >
        <div className="flex flex-col md:flex-row items-start md:items-center min-md:ml-8 max-sm:gap-6 gap-12">
          <div className="flex flex-col gap-2 items-start max-sm:gap-1">
          <select required value={pickupLocation} onChange={(e)=> setPickupLocation(e.target.value)}>
            <option value="">Pickup Location</option>
            {cityList.map(city => <option key={city}>{city}</option>)}
            
          </select>
          <p className="text-gray-500 px-1 text-sm">{pickupLocation ? pickupLocation:"Please select location"}</p>
          </div>

          <div className="flex flex-col items-start gap-2 max-sm:gap-1">
            <label htmlFor="pickup-date">Pick-up date</label>
            <input className="text-gray-500 text-sm" type="date" 
            min={new Date().toLocaleString()} required id="pickup-date"/>
          </div>

          <div className="flex flex-col items-start gap-2 max-sm:gap-1">
            <label htmlFor="return-date">Return date</label>
            <input className="text-gray-500 text-sm" required type="date" id="return-date"/>
          </div>

        
            
            <button className="flex items-center justify-center cursor-pointer gap-1 px-9 py-3  
            max-sm:mt-4 bg-primary rounded-full text-white">
                <img src={assets.search_icon} alt="" className="brightness-300 "/>
               Search 
            </button>
           
          
        </div>
      </form>

      <img src={assets.main_car} alt="" className="max-h-74" />
    </div>
  );
};

export default HeroSection;
