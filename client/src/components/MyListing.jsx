import React, { useState } from "react";
import {
  Search,
  Plus,
  MoreVertical,
  Edit,
  Trash2,
  Eye,
  Car,
  CircleCheck,
  CircleX,
  ClipboardList,
} from "lucide-react";

const MyListing = () => {
  const [search, setSearch] = useState("");

  const cars = [
    {
      id: 1,
      name: "Toyota Corolla",
      brand: "Toyota",
      year: 2024,
      seats: 5,
      transmission: "Automatic",
      price: 45,
      status: "Available",
      image: "/src/assets/car_image1.png",
    },
    {
      id: 2,
      name: "BMW X5",
      brand: "BMW",
      year: 2023,
      seats: 5,
      transmission: "Automatic",
      price: 85,
      status: "Rented",
      image: "/src/assets/car_image2.png",
    },
    {
      id: 3,
      name: "Mercedes C-Class",
      brand: "Mercedes",
      year: 2024,
      seats: 5,
      transmission: "Automatic",
      price: 75,
      status: "Available",
      image: "/src/assets/car_image3.png",
    },
    {
      id: 4,
      name: "Audi A4",
      brand: "Audi",
      year: 2022,
      seats: 5,
      transmission: "Automatic",
      price: 65,
      status: "Maintenance",
      image: "/src/assets/car_image4.png",
    },
  ];

  const filteredCars = cars.filter((car) =>
    car.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            My Listings
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Manage your cars and rental listings.
          </p>
        </div>

        <button
          className="flex w-fit items-center gap-2 rounded-lg bg-black px-5 py-2.5
          text-sm font-medium text-white transition hover:bg-gray-800"
        >
          <Plus size={18} />
          Add New Car
        </button>
      </div>

      {/* Summary cards */}
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {/* Total */}
        <div className="rounded-xl border border-gray-200 bg-white p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Listings</p>

              <h2 className="mt-2 text-2xl font-bold text-gray-900">24</h2>
            </div>

            <div className="rounded-lg bg-gray-100 p-3">
              <Car size={22} />
            </div>
          </div>
        </div>

        {/* Available */}
        <div className="rounded-xl border border-gray-200 bg-white p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Available</p>

              <h2 className="mt-2 text-2xl font-bold text-gray-900">14</h2>
            </div>

            <div className="rounded-lg bg-green-50 p-3">
              <CircleCheck size={22} className="text-green-600" />
            </div>
          </div>
        </div>

        {/* Rented */}
        <div className="rounded-xl border border-gray-200 bg-white p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Currently Rented</p>

              <h2 className="mt-2 text-2xl font-bold text-gray-900">7</h2>
            </div>

            <div className="rounded-lg bg-orange-50 p-3">
              <ClipboardList size={22} className="text-orange-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Listings container */}
      <div className="rounded-xl border border-gray-200 bg-white">
        {/* Toolbar */}
        <div className="flex flex-col gap-4 border-b border-gray-200 p-5 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-semibold text-gray-900">All Cars</h2>

            <p className="mt-1 text-sm text-gray-500">
              {filteredCars.length} cars listed
            </p>
          </div>

          {/* Search */}
          <div className="relative w-full md:max-w-sm">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search your cars..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-lg border border-gray-200 bg-gray-50
              py-2.5 pl-10 pr-4 text-sm outline-none transition
              focus:border-gray-400 focus:bg-white"
            />
          </div>
        </div>

        {/* Desktop table */}
        <div className="hidden overflow-x-auto lg:block">
          <table className="w-full text-left">
            <thead className="bg-gray-50 text-xs uppercase text-gray-500">
              <tr>
                <th className="px-5 py-4">Vehicle</th>

                <th className="px-5 py-4">Details</th>

                <th className="px-5 py-4">Price</th>

                <th className="px-5 py-4">Status</th>

                <th className="px-5 py-4">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {filteredCars.map((car) => (
                <tr
                  key={car.id}
                  className="text-sm transition hover:bg-gray-50"
                >
                  {/* Vehicle */}
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-4">
                      <div className="h-16 w-24 overflow-hidden rounded-lg bg-gray-100">
                        <img
                          src={car.image}
                          alt={car.name}
                          className="h-full w-full object-cover"
                        />
                      </div>

                      <div>
                        <p className="font-semibold text-gray-900">
                          {car.name}
                        </p>

                        <p className="mt-1 text-xs text-gray-500">
                          {car.brand} · {car.year}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* Details */}
                  <td className="px-5 py-4">
                    <div className="space-y-1 text-xs text-gray-500">
                      <p>{car.seats} Seats</p>
                      <p>{car.transmission}</p>
                    </div>
                  </td>

                  {/* Price */}
                  <td className="px-5 py-4">
                    <p className="font-semibold text-gray-900">${car.price}</p>

                    <p className="text-xs text-gray-400">per day</p>
                  </td>

                  {/* Status */}
                  <td className="px-5 py-4">
                    <StatusBadge status={car.status} />
                  </td>

                  {/* Actions */}
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2">
                      <button
                        title="View"
                        className="rounded-lg p-2 text-gray-500 transition
                        hover:bg-gray-100 hover:text-gray-900"
                      >
                        <Eye size={17} />
                      </button>

                      <button
                        title="Edit"
                        className="rounded-lg p-2 text-gray-500 transition
                        hover:bg-gray-100 hover:text-gray-900"
                      >
                        <Edit size={17} />
                      </button>

                      <button
                        title="Delete"
                        className="rounded-lg p-2 text-gray-500 transition
                        hover:bg-red-50 hover:text-red-600"
                      >
                        <Trash2 size={17} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="divide-y divide-gray-100 lg:hidden">
          {filteredCars.map((car) => (
            <div key={car.id} className="p-5">
              <div className="flex gap-4">
                {/* Image */}
                <div className="h-20 w-28 shrink-0 overflow-hidden rounded-lg bg-gray-100">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Info */}
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {car.name}
                      </h3>

                      <p className="mt-1 text-xs text-gray-500">
                        {car.brand} · {car.year}
                      </p>
                    </div>

                    <button className="text-gray-400">
                      <MoreVertical size={18} />
                    </button>
                  </div>

                  <div className="mt-3 flex items-center justify-between">
                    <div>
                      <span className="font-semibold text-gray-900">
                        ${car.price}
                      </span>

                      <span className="ml-1 text-xs text-gray-400">/ day</span>
                    </div>

                    <StatusBadge status={car.status} />
                  </div>
                </div>
              </div>

              {/* Mobile actions */}
              <div className="mt-4 flex gap-2">
                <button
                  className="flex flex-1 items-center justify-center gap-2
                  rounded-lg border border-gray-200 py-2 text-sm
                  font-medium text-gray-700 hover:bg-gray-50"
                >
                  <Eye size={16} />
                  View
                </button>

                <button
                  className="flex flex-1 items-center justify-center gap-2
                  rounded-lg border border-gray-200 py-2 text-sm
                  font-medium text-gray-700 hover:bg-gray-50"
                >
                  <Edit size={16} />
                  Edit
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filteredCars.length === 0 && (
          <div className="px-5 py-16 text-center">
            <Car size={40} className="mx-auto text-gray-300" />

            <h3 className="mt-4 font-semibold text-gray-900">No cars found</h3>

            <p className="mt-1 text-sm text-gray-500">
              Try searching for another vehicle.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

/* Status badge */
const StatusBadge = ({ status }) => {
  const styles = {
    Available: "bg-green-50 text-green-600",
    Rented: "bg-orange-50 text-orange-600",
    Maintenance: "bg-red-50 text-red-600",
  };

  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${
        styles[status] || "bg-gray-100 text-gray-600"
      }`}
    >
      {status}
    </span>
  );
};

export default MyListing;
