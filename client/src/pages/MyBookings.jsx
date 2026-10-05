import React, { useState } from "react";
import {
  CalendarDays,
  MapPin,
  Clock,
  ChevronRight,
  Car,
  XCircle,
} from "lucide-react";

import NavBar from "../components/NavBar";

const MyBookings = () => {
  const [activeTab, setActiveTab] = useState("Upcoming");

  const bookings = [
    {
      id: "BK-10245",
      car: "Toyota Corolla",
      category: "Sedan",
      image: "/src/assets/car_image2.png",
      pickupDate: "Sep 30, 2026",
      dropoffDate: "Oct 04, 2026",
      pickupLocation: "Nairobi CBD",
      price: 520,
      status: "Confirmed",
    },
    {
      id: "BK-10221",
      car: "BMW 3 Series",
      category: "Luxury Sedan",
      image: "/src/assets/car_image2.png",
      pickupDate: "Oct 12, 2026",
      dropoffDate: "Oct 15, 2026",
      pickupLocation: "Westlands",
      price: 450,
      status: "Confirmed",
    },
    {
      id: "BK-10198",
      car: "Toyota RAV4",
      category: "SUV",
      image: "/src/assets/car_image2.png",
      pickupDate: "Aug 12, 2026",
      dropoffDate: "Aug 15, 2026",
      pickupLocation: "JKIA",
      price: 390,
      status: "Completed",
    },
  ];

  const filteredBookings = bookings.filter((booking) => {
    if (activeTab === "Upcoming") {
      return booking.status === "Confirmed";
    }

    if (activeTab === "Completed") {
      return booking.status === "Completed";
    }

    return booking.status === "Cancelled";
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/*  HEADER  */}
        <div className="mb-8">
          <p className="text-sm text-gray-500 mb-2">Dashboard</p>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">My Bookings</h1>

              <p className="mt-2 text-gray-500">
                Manage your current and previous car rentals.
              </p>
            </div>

            <button
              type="button"
              className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-dull text-white px-5 py-3 rounded-lg font-medium transition-colors  cursor-pointer"
            >
              <Car className="w-5 h-5" />
              Book a car
            </button>
          </div>
        </div>

        {/*  TABS  */}
        <div className="bg-white border border-gray-100 rounded-xl p-1 mb-6 flex gap-1 w-full sm:w-fit">
          {["Upcoming", "Completed", "Cancelled"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2.5 rounded-lg text-sm font-medium transition ${
                activeTab === tab
                  ? "bg-primary text-white"
                  : "text-gray-500 hover:bg-gray-50"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/*  BOOKINGS  */}
        <div className="space-y-5">
          {filteredBookings.length > 0 ? (
            filteredBookings.map((booking) => (
              <div
                key={booking.id}
                className="bg-white border border-gray-100 rounded-2xl p-4 sm:p-5 hover:shadow-sm transition"
              >
                <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_auto] gap-5">
                  {/*  CAR IMAGE  */}
                  <div className="h-44 lg:h-36 rounded-xl overflow-hidden bg-gray-100">
                    <img
                      src={booking.image}
                      alt={booking.car}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/*  BOOKING INFO  */}
                  <div className="flex flex-col justify-between">
                    <div>
                      {/* Booking ID + Status */}
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <span className="text-xs font-medium text-gray-400">
                          Booking #{booking.id}
                        </span>

                        <span
                          className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                            booking.status === "Confirmed"
                              ? "bg-green-100 text-green-700"
                              : booking.status === "Completed"
                                ? "bg-blue-100 text-blue-700"
                                : "bg-red-100 text-red-600"
                          }`}
                        >
                          {booking.status}
                        </span>
                      </div>

                      {/* Car */}
                      <h2 className="text-xl font-bold text-gray-900">
                        {booking.car}
                      </h2>

                      <p className="text-sm text-gray-500 mt-1">
                        {booking.category}
                      </p>
                    </div>

                    {/* Details */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-5">
                      <div className="flex items-start gap-2">
                        <CalendarDays className="w-4 h-4 text-green-600 mt-0.5" />

                        <div>
                          <p className="text-xs text-gray-400">Rental period</p>

                          <p className="text-sm font-medium text-gray-700">
                            {booking.pickupDate}
                          </p>

                          <p className="text-xs text-gray-400">
                            to {booking.dropoffDate}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 text-green-600 mt-0.5" />

                        <div>
                          <p className="text-xs text-gray-400">
                            Pickup location
                          </p>

                          <p className="text-sm font-medium text-gray-700">
                            {booking.pickupLocation}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/*  PRICE + ACTIONS */}
                  <div className="lg:min-w-[150px] flex lg:flex-col justify-between lg:items-end gap-4">
                    <div className="text-left lg:text-right">
                      <p className="text-xs text-gray-400">Total</p>

                      <p className="text-2xl font-bold text-gray-900">
                        ${booking.price}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      {booking.status === "Confirmed" && (
                        <button
                          type="button"
                          className="px-4 py-2 rounded-lg border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50 transition"
                        >
                          Cancel
                        </button>
                      )}

                      <button
                        type="button"
                        className="flex items-center gap-1 px-4 py-2 rounded-lg bg-primary hover:bg-primary-dull text-white text-sm font-medium transition"
                      >
                        Details
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            /*  EMPTY STATE  */
            <div className="bg-white border border-gray-100 rounded-2xl py-20 px-6 text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-5">
                {activeTab === "Cancelled" ? (
                  <XCircle className="w-7 h-7 text-gray-400" />
                ) : (
                  <Car className="w-7 h-7 text-gray-400" />
                )}
              </div>

              <h2 className="text-xl font-bold text-gray-900">
                No {activeTab.toLowerCase()} bookings
              </h2>

              <p className="text-gray-500 mt-2 max-w-md mx-auto">
                {activeTab === "Upcoming"
                  ? "You don't have any upcoming car rentals."
                  : activeTab === "Completed"
                    ? "You haven't completed any rentals yet."
                    : "You don't have any cancelled bookings."}
              </p>

              {activeTab === "Upcoming" && (
                <button
                  type="button"
                  className="mt-6 bg-green-700 hover:bg-green-800 text-white px-5 py-3 rounded-lg font-medium"
                >
                  Find a car
                </button>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default MyBookings;
