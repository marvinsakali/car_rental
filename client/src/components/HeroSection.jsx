import React, { useState } from "react";
import { assets, cityList } from "../assets/assets";

const HeroSection = () => {
  const [pickupLocation, setPickupLocation] = useState("");
  return (
    <div
      className="md:relative h-screen flex flex-col items-center text-center max-sm:gap-2
    md:gap-14 justify-center bg-light bg-[url('D:\car_rental\client\src\assets\hero.jpg')] bg-cover bg-center "
    >
      \
      <div className="absolute top-36 space-y-8 md:space-y-16 text-white ">
        <h1 className="text-center max-sm:max-w-3xl  md:max-w-3xl lg:max-w-4xl text-5xl sm:text-6xl lg:text-8xl font-bold font-heading leading-none ">
          The car is <span className="text-primary">waiting</span>
          <br />
          for you
        </h1>

        <p className="text-center lg:mt-8  max-w-2xl mx-auto text-lg">
          Your journey deserves the perfect car. Discover premium vehicles,
          seamless booking, and a driving experience designed around you.
        </p>

        <div className="flex gap-12 mt-6 mx-8 lg:mx-24 lg:mt-8 items-center justify-center  "> 
          <button
            type="button "
            className=" border border-borderColor px-6 py-2 "
          >
            Buy a car
          </button>
          <button className="border border-borderColor px-6 py-2 bg-primary transition-colors cursor-pointer hover:bg-primary-dull">List car</button>
        </div>
      </div>
      <form
        className="flex flex-col rounded-lg items-start  
        justify-between bg-white p-6 md:rounded-lg md:flex-row md:items-center max-w-80 md:max-w-200 
        shadow-[0px_8px_20px_rgba(0,0,0,0.1)] absolute z-20 left-1/2 -translate-x-1/2
        -bottom-12 w-[calc(100%-32px)] sm:w-[calc(100%-70px)]  lg:w-[calc(100%-170px)]"
      >
        <div className="flex flex-col md:flex-row items-start md:items-center md:ml-8 max-sm:gap-6 gap-12">
          <div className="flex flex-col gap-2 items-start max-sm:gap-1">
            <select
              required
              value={pickupLocation}
              onChange={(e) => setPickupLocation(e.target.value)}
            >
              <option value="">Pickup Location</option>
              {cityList.map((city) => (
                <option key={city}>{city}</option>
              ))}
            </select>
            <p className="text-gray-500 px-1 text-sm">
              {pickupLocation ? pickupLocation : "Please select location"}
            </p>
          </div>

          <div className="flex flex-col items-start gap-2 max-sm:gap-1">
            <label htmlFor="pickup-date">Pick-up date</label>
            <input
              className="text-gray-500 text-sm"
              type="date"
              min={new Date().toLocaleString()}
              required
              id="pickup-date"
            />
          </div>

          <div className="flex flex-col items-start gap-2 max-sm:gap-1">
            <label htmlFor="return-date">Return date</label>
            <input
              className="text-gray-500 text-sm"
              required
              type="date"
              id="return-date"
            />
          </div>

          <button
            className="flex items-center justify-center cursor-pointer gap-1 px-9 py-3  
            max-sm:mt-4 bg-primary rounded-lg text-white"
          >
            <img src={assets.search_icon} alt="" className="brightness-300 " />
            Search
          </button>
        </div>
      </form>
      {/* <img src={assets.main_car} alt="" className="max-h-74" /> */}
    </div>
  );
};

export default HeroSection;
