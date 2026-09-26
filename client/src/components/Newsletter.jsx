import React from "react";
import Title from "./Title";

const Newsletter = () => {
  return (
    <div className="flex flex-col items-center max-md:mx-4 justify-center text-center space-y-2 mb-10  py-24 md:px-6 lg:px-24 xl:px-32">
      <div>
        <Title
          title="Never Miss a Deal!"
          subtitle="Subscribe to get the latest offers, new arrivals, and exclusive discounts"
        />
      </div>

      <form
        className="flex items-center w-full 
      justify-between max-w-2xl md:h-13 h-12 mt-10 "
      >
        <input
          type="text"
          placeholder="Enter your email"
          className="h-full w-full px-3 border-r-0 
          text-gray-500 rounded-r-none rounded-md 
          border border-gray-300 outline-none"
        />
        <button
          type="submit"
          className="bg-primary text-white text-sm px-8 rounded-l-none
        h-full rounded-md transition-all cursor-pointer"
        >
          {" "}
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
