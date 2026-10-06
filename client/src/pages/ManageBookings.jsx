
import React, { useState } from "react";
import {
  Search,
  CalendarDays,
  CheckCircle2,
  Clock3,
  XCircle,
  Eye,
  MoreVertical,
} from "lucide-react";

const ManageBookings = () => {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const bookings = [
    {
      id: "BK001",
      customer: "John Doe",
      email: "john@example.com",
      car: "Toyota Corolla",
      date: "Oct 06, 2026",
      startDate: "Oct 06, 2026",
      endDate: "Oct 09, 2026",
      amount: 135,
      payment: "Paid",
      status: "Confirmed",
      image: "/src/assets/car_image1.png",
    },
    {
      id: "BK002",
      customer: "Sarah Smith",
      email: "sarah@example.com",
      car: "BMW X5",
      date: "Oct 07, 2026",
      startDate: "Oct 07, 2026",
      endDate: "Oct 11, 2026",
      amount: 340,
      payment: "Paid",
      status: "Pending",
      image: "/src/assets/car_image2.png",
    },
    {
      id: "BK003",
      customer: "Michael Kim",
      email: "michael@example.com",
      car: "Mercedes C-Class",
      date: "Oct 08, 2026",
      startDate: "Oct 08, 2026",
      endDate: "Oct 12, 2026",
      amount: 300,
      payment: "Paid",
      status: "Confirmed",
      image: "/src/assets/car_image3.png",
    },
    {
      id: "BK004",
      customer: "David Wilson",
      email: "david@example.com",
      car: "Audi A4",
      date: "Sep 28, 2026",
      startDate: "Sep 28, 2026",
      endDate: "Oct 01, 2026",
      amount: 195,
      payment: "Paid",
      status: "Completed",
      image: "/src/assets/car_image4.png",
    },
    {
      id: "BK005",
      customer: "James Brown",
      email: "james@example.com",
      car: "Toyota Camry",
      date: "Sep 25, 2026",
      startDate: "Sep 25, 2026",
      endDate: "Sep 27, 2026",
      amount: 110,
      payment: "Refunded",
      status: "Cancelled",
      image: "/src/assets/car_image5.png",
    },
  ];

  const filters = [
    "All",
    "Pending",
    "Confirmed",
    "Completed",
    "Cancelled",
  ];

  const filteredBookings = bookings.filter((booking) => {
    const matchesSearch =
      booking.customer.toLowerCase().includes(search.toLowerCase()) ||
      booking.car.toLowerCase().includes(search.toLowerCase()) ||
      booking.id.toLowerCase().includes(search.toLowerCase());

    const matchesFilter =
      activeFilter === "All" ||
      booking.status === activeFilter;

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">

      {/* Header */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Manage Bookings
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            View and manage all your car rental bookings.
          </p>
        </div>

        <div className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-600">
          <CalendarDays size={17} />
          <span>October 2026</span>
        </div>
      </div>

      {/* Statistics */}
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

        {/* Total */}
        <div className="rounded-xl border border-gray-200 bg-white p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">
                Total Bookings
              </p>

              <h2 className="mt-2 text-2xl font-bold text-gray-900">
                156
              </h2>
            </div>

            <div className="rounded-lg bg-gray-100 p-3">
              <CalendarDays size={21} />
            </div>
          </div>
        </div>

        {/* Pending */}
        <div className="rounded-xl border border-gray-200 bg-white p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">
                Pending
              </p>

              <h2 className="mt-2 text-2xl font-bold text-gray-900">
                12
              </h2>
            </div>

            <div className="rounded-lg bg-yellow-50 p-3">
              <Clock3
                size={21}
                className="text-yellow-600"
              />
            </div>
          </div>
        </div>

        {/* Confirmed */}
        <div className="rounded-xl border border-gray-200 bg-white p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">
                Confirmed
              </p>

              <h2 className="mt-2 text-2xl font-bold text-gray-900">
                87
              </h2>
            </div>

            <div className="rounded-lg bg-green-50 p-3">
              <CheckCircle2
                size={21}
                className="text-green-600"
              />
            </div>
          </div>
        </div>

        {/* Cancelled */}
        <div className="rounded-xl border border-gray-200 bg-white p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">
                Cancelled
              </p>

              <h2 className="mt-2 text-2xl font-bold text-gray-900">
                8
              </h2>
            </div>

            <div className="rounded-lg bg-red-50 p-3">
              <XCircle
                size={21}
                className="text-red-500"
              />
            </div>
          </div>
        </div>

      </div>

      {/* Booking container */}
      <div className="rounded-xl border border-gray-200 bg-white">

        {/* Toolbar */}
        <div className="border-b border-gray-200 p-5">

          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

            {/* Title */}
            <div>
              <h2 className="font-semibold text-gray-900">
                All Bookings
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                {filteredBookings.length} bookings found
              </p>
            </div>

            {/* Search */}
            <div className="relative w-full lg:max-w-sm">
              <Search
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="text"
                placeholder="Search bookings..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-lg border border-gray-200 bg-gray-50
                py-2.5 pl-10 pr-4 text-sm outline-none
                focus:border-gray-400 focus:bg-white"
              />
            </div>

          </div>

          {/* Filters */}
          <div className="mt-5 flex gap-2 overflow-x-auto pb-1">

            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`whitespace-nowrap rounded-lg px-4 py-2 text-sm
                font-medium transition ${
                  activeFilter === filter
                    ? "bg-black text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {filter}
              </button>
            ))}

          </div>
        </div>

        {/* Desktop table */}
        <div className="hidden overflow-x-auto lg:block">

          <table className="w-full text-left">

            <thead className="bg-gray-50 text-xs uppercase text-gray-500">
              <tr>
                <th className="px-5 py-4">
                  Booking
                </th>

                <th className="px-5 py-4">
                  Customer
                </th>

                <th className="px-5 py-4">
                  Vehicle
                </th>

                <th className="px-5 py-4">
                  Rental Period
                </th>

                <th className="px-5 py-4">
                  Amount
                </th>

                <th className="px-5 py-4">
                  Status
                </th>

                <th className="px-5 py-4">
                  Action
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">

              {filteredBookings.map((booking) => (
                <tr
                  key={booking.id}
                  className="text-sm hover:bg-gray-50"
                >

                  {/* Booking */}
                  <td className="px-5 py-4">
                    <p className="font-semibold text-gray-900">
                      #{booking.id}
                    </p>

                    <p className="mt-1 text-xs text-gray-400">
                      {booking.date}
                    </p>
                  </td>

                  {/* Customer */}
                  <td className="px-5 py-4">
                    <p className="font-medium text-gray-900">
                      {booking.customer}
                    </p>

                    <p className="mt-1 text-xs text-gray-400">
                      {booking.email}
                    </p>
                  </td>

                  {/* Vehicle */}
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">

                      <div className="h-12 w-16 overflow-hidden rounded-lg bg-gray-100">
                        <img
                          src={booking.image}
                          alt={booking.car}
                          className="h-full w-full object-cover"
                        />
                      </div>

                      <span className="font-medium text-gray-700">
                        {booking.car}
                      </span>

                    </div>
                  </td>

                  {/* Rental period */}
                  <td className="px-5 py-4">
                    <p className="text-gray-700">
                      {booking.startDate}
                    </p>

                    <p className="mt-1 text-xs text-gray-400">
                      to {booking.endDate}
                    </p>
                  </td>

                  {/* Amount */}
                  <td className="px-5 py-4">
                    <p className="font-semibold text-gray-900">
                      ${booking.amount}
                    </p>

                    <p
                      className={`mt-1 text-xs ${
                        booking.payment === "Paid"
                          ? "text-green-600"
                          : "text-gray-400"
                      }`}
                    >
                      {booking.payment}
                    </p>
                  </td>

                  {/* Status */}
                  <td className="px-5 py-4">
                    <StatusBadge status={booking.status} />
                  </td>

                  {/* Action */}
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2">

                      <button
                        title="View booking"
                        className="rounded-lg p-2 text-gray-500
                        hover:bg-gray-100 hover:text-gray-900"
                      >
                        <Eye size={17} />
                      </button>

                      <button
                        title="More options"
                        className="rounded-lg p-2 text-gray-500
                        hover:bg-gray-100 hover:text-gray-900"
                      >
                        <MoreVertical size={17} />
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

          {filteredBookings.map((booking) => (
            <div
              key={booking.id}
              className="p-5"
            >

              {/* Top */}
              <div className="flex items-start justify-between">

                <div>
                  <p className="font-semibold text-gray-900">
                    #{booking.id}
                  </p>

                  <p className="mt-1 text-xs text-gray-400">
                    {booking.date}
                  </p>
                </div>

                <StatusBadge status={booking.status} />

              </div>

              {/* Customer */}
              <div className="mt-4">
                <p className="font-medium text-gray-900">
                  {booking.customer}
                </p>

                <p className="text-xs text-gray-400">
                  {booking.email}
                </p>
              </div>

              {/* Car */}
              <div className="mt-4 flex items-center gap-3">

                <div className="h-14 w-20 overflow-hidden rounded-lg bg-gray-100">
                  <img
                    src={booking.image}
                    alt={booking.car}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div>
                  <p className="font-medium text-gray-800">
                    {booking.car}
                  </p>

                  <p className="mt-1 text-xs text-gray-400">
                    {booking.startDate} → {booking.endDate}
                  </p>
                </div>

              </div>

              {/* Bottom */}
              <div className="mt-4 flex items-center justify-between">

                <div>
                  <span className="font-semibold text-gray-900">
                    ${booking.amount}
                  </span>

                  <span
                    className={`ml-2 text-xs ${
                      booking.payment === "Paid"
                        ? "text-green-600"
                        : "text-gray-400"
                    }`}
                  >
                    {booking.payment}
                  </span>
                </div>

                <button
                  className="flex items-center gap-2 rounded-lg
                  border border-gray-200 px-3 py-2 text-sm
                  font-medium text-gray-700 hover:bg-gray-50"
                >
                  <Eye size={16} />
                  View
                </button>

              </div>

            </div>
          ))}

        </div>

        {/* Empty state */}
        {filteredBookings.length === 0 && (
          <div className="px-5 py-16 text-center">

            <CalendarDays
              size={40}
              className="mx-auto text-gray-300"
            />

            <h3 className="mt-4 font-semibold text-gray-900">
              No bookings found
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              Try changing your search or filter.
            </p>

          </div>
        )}

      </div>
    </div>
  );
};


/* Status Badge */
const StatusBadge = ({ status }) => {

  const styles = {
    Pending: "bg-yellow-50 text-yellow-600",
    Confirmed: "bg-green-50 text-green-600",
    Completed: "bg-gray-100 text-gray-600",
    Cancelled: "bg-red-50 text-red-600",
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

export default ManageBookings;

