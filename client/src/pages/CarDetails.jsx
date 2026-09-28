import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import BreadCrump from "../components/BreadCrump";
import { assets, dummyCarData } from "../assets/assets";
import { ArrowLeft } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

const CarDetails = () => {
  const navigate = useNavigate()
  const {id} = useParams()
  const [car, setCar ] = useState(null)

  console.log(id);
  
  useEffect(()=>{
    setCar(dummyCarData.find(car => car._id === id))
  }, [id])
  return (
    <div>
      <NavBar />

      <div className="mt-8 max-w-7xl mx-auto">
        <div className="space-y-6">
          {/* Back */}
          <button
          onClick={()=>navigate(-1)}
            type="button"
            className="flex items-center gap-1 text-gray-500 cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="font-bold">Back</span>
          </button>

          {/* Breadcrumb */}
          <BreadCrump />
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-4">
          {/* Left section */}
          <div className="bg-light rounded-xl h-auto">
            <img src={car.image} alt="" className="w-full h-auto object-cover rounded-xl"/>
          </div>

          {/* Right section */}
          <div className="w-lg mx-auto">
            <div className="flex flex-col gap-2">
              <div className="flex flex-col">
                <h1 className="text-2xl text-gray-900 font-bold">
                  Toyota Corolla
                </h1>

                <p className="text-xl font-medium text-gray-500/80">
                  Sedan · 2021
                </p>
              </div>

              <h1 className="text-xl font-bold">
                $130
                <span className="text-sm text-gray-500"> /day</span>
              </h1>
            </div>

            <div className="mt-4 font-semibold text-gray-500">
              <h1>Features</h1>

            </div>

            {/* Dates */}
            <form className=" flex flex-col gap-4  mt-4 font-semibold text-gray-500">
              <div className="flex gap-6">
              <div className="flex flex-col flex-1">
                <label htmlFor="pickup-date">Pickup Date</label>

                <input
                  type="date"
                  id="pickup-date"
                  className="rounded-lg border border-borderColor h-11 px-4"
                />
              </div>

              <div className="flex flex-col flex-1">
                <label htmlFor="dropoff-date">Drop-off Date</label>

                <input
                  type="date"
                  id="dropoff-date"
                  className="rounded-lg border border-borderColor h-11 px-4"
                />
              </div>
              </div>
              
              <button className="rounded-lg bg-black cursor-pointer text-white h-11 text-xl"> Book now</button>
            </form>

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
