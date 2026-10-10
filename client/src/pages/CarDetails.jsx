import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import BreadCrump from "../components/BreadCrump";
import { assets, dummyCarData } from "../assets/assets";
import { ArrowLeft, Heart } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

const CarDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [car, setCar] = useState(null);

  useEffect(() => {
    setCar(dummyCarData.find((car) => car._id === id));
  }, [id]);

  if (!car) {
    return <div>Loading...</div>;
  }
  return (
    <div className="min-h-screen bg-white">
      

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back */}
        <button
          onClick={() => navigate(-1)}
          type="button"
          className="flex items-center gap-2 text-gray-600 hover:text-black transition mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          <span className="font-medium">Back</span>
        </button>

        {/* Breadcrumb */}
        <div className="mb-8">
          <BreadCrump />
        </div>

        {/*  MAIN PRODUCT SECTION */}
        <div className="grid grid-cols-[auto-fit, repeat(minmax(13.75rem, 1fr))] gap-10 lg:gap-14">
          {/* LEFT: IMAGE GALLERY */}
          <div>
            {/* Main Image */}
            <div className="bg-gray-100 rounded-2xl overflow-hidden h-[380px] sm:h-[450px]">
              <img
                src={car.image}
                alt={`${car.brand} ${car.model}`}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnails */}
           <div className="grid grid-cols-4 gap-3 mt-4">
               {Array(4).fill(null).map((_, index)=>(
                <button key={index} className=" cursor-pointer h-20 sm:h-24 rounded-xl overflow-hidden border-2 border-green-600">
                <img
                
                  src={car.image}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </button>))}
            </div>
          </div>

          {/*  RIGHT: CAR INFORMATION  */}
          <div className="flex flex-col">
            {/* Status Badge */}
            <div className="mb-3">
              <span className="inline-flex items-center rounded-full bg-primary text-white px-3 py-1 text-xs font-semibold">
                Available for rent
              </span>
            </div>

            {/* Car Name */}
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
              {car.brand} {car.model}
            </h1>

            {/* Category */}
            <p className="mt-2 text-gray-500">{car.category} · {car.year}</p>

            {/* Rating */}
            {/* <div className="flex items-center gap-2 mt-4">
              {/* <div className="flex items-center gap-1">
                <span className="text-yellow-400">★</span>
                <span className="text-yellow-400">★</span>
                <span className="text-yellow-400">★</span>
                <span className="text-yellow-400">★</span>
                <span className="text-yellow-400">★</span>
              </div> 

              <span className="text-sm font-medium text-gray-700">4.8</span>

              <span className="text-sm text-gray-400">(126 reviews)</span>
            </div> */}

            {/* Price */}
            <div className="mt-5">
              <span className="text-4xl font-bold text-gray-900">${car.pricePerDay}</span>

              <span className="text-sm text-gray-500 ml-2">/day</span>
            </div>

            {/*  FEATURES  */}
            <div className="mt-7">
              <h2 className="text-sm font-semibold text-gray-700 mb-3">
                Features
              </h2>

              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-2 rounded-lg border border-gray-200 bg-gray-50 text-sm">
                  {car.transmission}
                </span>

                <span className="px-4 py-2 rounded-lg border border-gray-200 bg-gray-50 text-sm">
                  {car.seating_capacity} seats
                </span>

                <span className="px-4 py-2 rounded-lg border border-gray-200 bg-gray-50 text-sm">
                  {car.fuel_type}
                </span>

                <span className="px-4 py-2 rounded-lg border border-gray-200 bg-gray-50 text-sm">
                  Air Conditioning
                </span>
              </div>
            </div>

            {/*  DATES  */}
            <div className="mt-7">
              <h2 className="text-sm font-semibold text-gray-700 mb-3">
                Rental period
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex flex-col">
                  <label
                    htmlFor="pickup-date"
                    className="text-xs text-gray-500 mb-2"
                  >
                    Pickup Date
                  </label>

                  <input
                    type="date"
                    id="pickup-date"
                    className="w-full h-12 rounded-lg border border-gray-200 px-4 text-sm outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600"
                  />
                </div>

                <div className="flex flex-col">
                  <label
                    htmlFor="dropoff-date"
                    className="text-xs text-gray-500 mb-2"
                  >
                    Drop-off Date
                  </label>

                  <input
                    type="date"
                    id="dropoff-date"
                    className="w-full h-12 rounded-lg border border-gray-200 px-4 text-sm outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600"
                  />
                </div>
              </div>
            </div>

            {/*  BOOKING  */}
            <div className="flex gap-3 mt-7">
              <button
                type="button"
                className="flex-1 h-13 rounded-lg bg-green-700 hover:bg-green-800 text-white font-semibold transition flex items-center justify-center gap-2"
              >
                Book now
              </button>

              <button
                type="button"
                className="h-13 w-13 rounded-lg border border-gray-200 hover:bg-gray-50 flex items-center justify-center transition"
                aria-label="Add to wishlist"
              >
                <Heart className="h-5 w-5 text-gray-600" />
              </button>
            </div>

            {/*  BENEFITS  */}
            <div className="grid grid-cols-3 gap-3 mt-6 pt-6 border-t border-gray-100">
              <div className="text-center">
                <p className="text-sm font-semibold text-gray-800">
                  Free pickup
                </p>
                <p className="text-xs text-gray-400 mt-1">Easy collection</p>
              </div>

              <div className="text-center border-x border-gray-100">
                <p className="text-sm font-semibold text-gray-800">
                  24/7 Support
                </p>
                <p className="text-xs text-gray-400 mt-1">Always available</p>
              </div>

              <div className="text-center">
                <p className="text-sm font-semibold text-gray-800">Secure</p>
                <p className="text-xs text-gray-400 mt-1">Trusted rental</p>
              </div>
            </div>
          </div>
        </div>

        {/* INFORMATION TABS */}
        <div className="mt-16">
          <div className="grid grid-cols-3 bg-gray-100 rounded-xl p-1">
            <button className="bg-white rounded-lg py-3 text-sm font-medium shadow-sm">
              Description
            </button>

            <button className="py-3 text-sm font-medium text-gray-500">
              Specifications
            </button>

            <button className="py-3 text-sm font-medium text-gray-500">
              Reviews
            </button>
          </div>

          <div className="py-8 max-w-4xl">
            <p className="text-gray-600 leading-7">
              Experience a comfortable and reliable ride with the {car.brand}{" "}
              {car.model}. This vehicle is ideal for both city driving and
              longer journeys, offering a smooth driving experience, comfortable
              seating and modern features.
            </p>

            <ul className="mt-5 space-y-3 text-gray-600">
              <li className="flex items-center gap-2">
                <span className="text-green-600">✓</span>
                Comfortable interior
              </li>

              <li className="flex items-center gap-2">
                <span className="text-green-600">✓</span>
                Well maintained vehicle
              </li>

              <li className="flex items-center gap-2">
                <span className="text-green-600">✓</span>
                Flexible rental options
              </li>
            </ul>
          </div>
        </div>

        {/*  RELATED CARS  */}
        <div className="mt-6 pb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">
              You may also like
            </h2>

            <button className="text-sm text-green-700 font-medium hover:underline">
              View all
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {dummyCarData.slice(0, 4).map((car) => (
              <div className="rounded-xl border border-gray-100 overflow-hidden hover:shadow-md transition">
                <div className="h-44 bg-gray-100">
                  <img
                    src={car.image}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-4">
                  {car.isAvaliable && (
                    <span className="text-xs text-green-600 font-medium">
                      Available
                    </span>
                  )}

                  <h3 className="font-semibold mt-1">
                    {car.brand} {car.model}
                  </h3>

                  <div className="flex items-center justify-between mt-3">
                    <p className="text-green-700 font-bold">
                      $130
                      <span className="text-xs text-gray-400 font-normal">
                        {" "}
                        /day
                      </span>
                    </p>

                    <button>
                      <Heart className="h-4 w-4 text-gray-400" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
