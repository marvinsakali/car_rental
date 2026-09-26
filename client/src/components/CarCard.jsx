import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const CarCard = ({ car }) => {
  const currency = import.meta.env.VITE_CURRENCY;
  const navigate = useNavigate()
  return (
    <div
      className="group rounded-xl transition-all duration-500 shadow-lg 
    hover:-translate-y-1 overflow-hidden cursor-pointer"
    onClick={()=> {navigate(`/cars/${car._id}`)}}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={car.image}
          alt="car image"
          className="w-full h-full object-cover transition-transform 
            duration-500 hover:scale-105"
        />
        {car.isAvaliable && (
          <p className="text-white absolute top-4 left-4 py-1 rounded-full px-2 text-xs bg-primary/90">
            Avaliable Now
          </p>
        )}
        <div className="absolute bottom-4 right-4 bg-black/80 px-2 py-1 backdrop-blur-sm text-white rounded-lg">
          <span className="font-semibold">
            {currency} {car.pricePerDay}
          </span>
          <span className="text-sm text-white/80">/ day</span>
        </div>
      </div>
      <div className="p-4 sm:p-5">
        <div className="flex item-start mb-2">
          <div className="">
            <h3 className="text-lg font-medium">
              {car.brand} {car.model}
            </h3>
            <p className="text-muted-foreground text-sm ">
              {car.category} . {car.year}
            </p>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-y-2 gap-x-10 text-gray-600 ">
          <div className="flex items-center text-sm text-muted-foreground">
            <img src={assets.users_icon} alt="" className="h-4 mr-2" />
            <span> {car.seating_capacity} Seats</span>
          </div>

          <div className="flex items-center text-sm text-muted-foreground">
            <img src={assets.fuel_icon} alt="" className="h-4 mr-2" />
            <span> {car.fuel_type} </span>
          </div>

          <div className="flex items-center text-sm text-muted-foreground">
            <img src={assets.car_icon} alt="" className="h-4 mr-2" />
            <span> {car.transmission} </span>
          </div>
          
          <div className="flex items-center text-sm text-muted-foreground">
            <img src={assets.location_icon} alt="" className="h-4 mr-2" />
            <span> {car.location} </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
