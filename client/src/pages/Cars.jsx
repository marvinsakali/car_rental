import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Title from "../components/Title";
import { assets, dummyCarData } from "../assets/assets";
import CarCard from "../components/CarCard";

const Cars = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="h-[70px] border-b border-gray-200 bg-white flex items-center">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between gap-4">
          <div className="rounded-md border border-borderColor px-2.5 py-1.5 flex justify-between gap-4 ">
            <button className=" rounded-md bg-primary px-2 py-1 text-white cursor-pointer ">Buy Car</button>
            <button className="cursor-pointer">Rent car</button>
          </div>
          {/* Search */}

          <div className="flex items-center gap-3 w-full max-w-xl h-11 rounded-xl border border-gray-200 bg-white px-4 ">
            <img src={assets.search_icon} className="w-4 h-4" alt="Search" />

            <input
              type="text"
              placeholder="Search for a car"
              className="w-full h-full text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none"
            />

            <button className="shrink-0">
              <img src={assets.filter_icon} className="w-4 h-4" alt="Filter" />
            </button>
          </div>

          <div>
            <img
              src={assets.location_icon_colored}
              alt=""
              className="w-4 h-4"
            />
          </div>
        </div>
      </header>

      <div className="grid lg:grid-cols-[260px_1fr] w-full mx-auto">
        <aside className="hidden  lg:block border-r border-gray-200 bg-white">
          <div className="sticky top-0 px-6 py-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-lg font-semibold text-gray-900">Filter By</h2>

              <button className="text-xs font-medium text-gray-500 hover:text-black">
                Clear
              </button>
            </div>

            <div className="pb-6 mb-6 border-b border-gray-100">
              <h3 className="text-sm font-semibold text-gray-900 mb-4">
                Model
              </h3>

              <div className="gap-3 grid grid-cols-2">
                {["Toyota", "BMW", "Mercedes", "Audi"].map((model) => (
                  <label
                    key={model}
                    className="flex items-center gap-3 cursor-pointer group"
                  >
                    <input
                      type="checkbox"
                      value={model}
                      className="w-4 h-4 rounded border-gray-300 text-black focus:ring-black"
                    />

                    <span className="text-sm text-gray-600 group-hover:text-gray-900">
                      {model}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div className="pb-6 mb-6 border-b border-gray-100">
              <h3 className="text-sm font-semibold text-gray-900 mb-4">
                Seats
              </h3>

              <div className="grid grid-cols-2 gap-3">
                {[2, 4, 5, 7].map((seat) => (
                  <label
                    key={seat}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      value={seat}
                      className="w-4 h-4 rounded border-gray-300 text-black focus:ring-black"
                    />

                    <span className="text-sm text-gray-600">{seat} Seats</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="pb-6 mb-6 border-b border-gray-100">
              <h3 className="text-sm font-semibold text-gray-900 mb-4">
                Price Range
              </h3>

              <div className="flex items-center gap-2">
                <div className="relative w-full">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-gray-400">
                    $
                  </span>

                  <input
                    type="number"
                    placeholder="Min"
                    className="w-full rounded-lg border border-gray-200 bg-gray-50 px-7 py-2.5 text-sm focus:border-black focus:bg-white focus:outline-none"
                  />
                </div>

                <span className="text-gray-400">—</span>

                <div className="relative w-full">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-gray-400">
                    $
                  </span>

                  <input
                    type="number"
                    placeholder="Max"
                    className="w-full rounded-lg border border-gray-200 bg-gray-50 px-7 py-2.5 text-sm focus:border-black focus:bg-white focus:outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="pb-6 mb-6 border-b border-gray-100">
              <h3 className="text-sm font-semibold text-gray-900 mb-4">
                Transmission
              </h3>

              <div className="space-y-3 grid grid-cols-2">
                {["Automatic", "Manual", "Semi-Automatic"].map((type) => (
                  <label
                    key={type}
                    className="flex items-center gap-3 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      value={type}
                      className="w-4 h-4 rounded border-gray-300 text-black focus:ring-black"
                    />

                    <span className="text-sm text-gray-600">{type}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-sm font-semibold text-gray-900 mb-4">
                Fuel Type
              </h3>

              <div className="space-y-3 grid grid-cols-2">
                {["Petrol", "Diesel", "Electric", "Hybrid"].map((fuel) => (
                  <label
                    key={fuel}
                    className="flex items-center gap-3 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      value={fuel}
                      className="w-4 h-4 rounded border-gray-300 text-black focus:ring-black"
                    />

                    <span className="text-sm text-gray-600">{fuel}</span>
                  </label>
                ))}
              </div>
            </div>

            <button className="w-full rounded-lg bg-black py-3 text-sm font-medium text-white transition hover:bg-gray-800 active:scale-[0.98]">
              Apply Filters
            </button>
          </div>
        </aside>

        <main className="min-w-0 px-4 py-8 md:px-8 ">
          {/* Top Bar */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-8">
            <div>
              <p className="text-xl font-semibold text-gray-900">
                {dummyCarData.length} Cars Found
              </p>

              <p className="text-sm text-gray-500 mt-1">
                Find the perfect car for your journey
              </p>
            </div>

            {/* Sort */}
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-500">Sort by</span>

              <select
                name="sort"
                className="rounded-lg border border-borderColor bg-white px-3 py-2 text-sm text-gray-700 focus:outline-none"
              >
                <option value="recommended">Recommended</option>

                <option value="price-low">Price: Low to High</option>

                <option value="price-high">Price: High to Low</option>

                <option value="model">Model</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3 ">
            {dummyCarData.map((car) => (
              <CarCard key={car._id} car={car} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Cars;
