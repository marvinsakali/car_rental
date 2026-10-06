import React from "react";
import {
  Car,
  CalendarCheck,
  DollarSign,
  Users,
  ArrowUpRight,
  ArrowDownRight,
  MoreHorizontal,
} from "lucide-react";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Cars",
      value: "24",
      change: "+12.5%",
      description: "from last month",
      icon: Car,
      positive: true,
    },
    {
      title: "Total Bookings",
      value: "156",
      change: "+8.2%",
      description: "from last month",
      icon: CalendarCheck,
      positive: true,
    },
    {
      title: "Total Revenue",
      value: "$18,420",
      change: "+15.8%",
      description: "from last month",
      icon: DollarSign,
      positive: true,
    },
    {
      title: "Active Customers",
      value: "86",
      change: "-3.4%",
      description: "from last month",
      icon: Users,
      positive: false,
    },
  ];

  const bookings = [
    {
      id: "#BK001",
      customer: "John Doe",
      car: "Toyota Corolla",
      date: "Oct 06, 2026",
      amount: "$120",
      status: "Confirmed",
    },
    {
      id: "#BK002",
      customer: "Sarah Smith",
      car: "BMW X5",
      date: "Oct 07, 2026",
      amount: "$240",
      status: "Pending",
    },
    {
      id: "#BK003",
      customer: "Michael Kim",
      car: "Mercedes C-Class",
      date: "Oct 08, 2026",
      amount: "$180",
      status: "Confirmed",
    },
    {
      id: "#BK004",
      customer: "David Wilson",
      car: "Audi A4",
      date: "Oct 09, 2026",
      amount: "$150",
      status: "Completed",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Dashboard
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Welcome back! Here's what's happening with your cars.
          </p>
        </div>

        <button className="w-fit rounded-lg bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-gray-800">
          + Add New Car
        </button>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.title}
              className="rounded-xl border border-gray-200 bg-white p-5"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    {stat.title}
                  </p>

                  <h2 className="mt-2 text-2xl font-bold text-gray-900">
                    {stat.value}
                  </h2>
                </div>

                <div className="rounded-lg bg-gray-100 p-3">
                  <Icon size={21} className="text-gray-700" />
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2 text-xs">
                <span
                  className={`flex items-center gap-1 font-medium ${
                    stat.positive ? "text-green-600" : "text-red-500"
                  }`}
                >
                  {stat.positive ? (
                    <ArrowUpRight size={14} />
                  ) : (
                    <ArrowDownRight size={14} />
                  )}

                  {stat.change}
                </span>

                <span className="text-gray-400">{stat.description}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Main dashboard content */}
      <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-3">
        {/* Revenue Chart */}
        <div className="rounded-xl border border-gray-200 bg-white p-5 xl:col-span-2">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-semibold text-gray-900">Revenue Overview</h2>

              <p className="mt-1 text-sm text-gray-500">
                Your revenue performance this year
              </p>
            </div>

            <select className="rounded-lg border border-gray-200 bg-white px-3 py-0.5 text-sm text-gray-600 outline-none">
              <option>2026</option>
              <option>2025</option>
            </select>
          </div>

          {/* Simple chart placeholder */}
          <div className="mt-8 flex h-64 items-end gap-3 border-b border-l border-gray-200 px-4 pb-0">
            {[35, 50, 42, 65, 48, 72, 60, 85, 70, 92, 78, 100].map(
              (height, index) => (
                <div key={index} className="group flex h-full flex-1 items-end">
                  <div
                    style={{ height: `${height}%` }}
                    className="w-full rounded-t-md bg-black transition hover:bg-gray-700"
                  />
                </div>
              ),
            )}
          </div>

          <div className="mt-3 flex justify-between px-2 text-xs text-gray-400">
            <span>Jan</span>
            <span>Mar</span>
            <span>May</span>
            <span>Jul</span>
            <span>Sep</span>
            <span>Dec</span>
          </div>
        </div>

        {/* Car Availability */}
        <div className="rounded-xl border border-gray-200 bg-white p-5">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-semibold text-gray-900">Car Availability</h2>

              <p className="mt-1 text-sm text-gray-500">Current fleet status</p>
            </div>

            <button className="text-gray-400 hover:text-gray-700">
              <MoreHorizontal size={20} />
            </button>
          </div>

          <div className="mt-8 flex justify-center">
            <div className="flex h-40 w-40 items-center justify-center rounded-full border-[18px] border-black">
              <div className="text-center">
                <p className="text-3xl font-bold text-gray-900">24</p>
                <p className="text-xs text-gray-500">Total Cars</p>
              </div>
            </div>
          </div>

          <div className="mt-8 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-black" />
                <span className="text-sm text-gray-600">Available</span>
              </div>

              <span className="font-medium text-gray-900">14</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-gray-400" />
                <span className="text-sm text-gray-600">Rented</span>
              </div>

              <span className="font-medium text-gray-900">7</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-gray-200" />
                <span className="text-sm text-gray-600">Maintenance</span>
              </div>

              <span className="font-medium text-gray-900">3</span>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Bookings */}
      <div className="mt-6 rounded-xl border border-gray-200 bg-white">
        <div className="flex items-center justify-between border-b border-gray-200 p-5">
          <div>
            <h2 className="font-semibold text-gray-900">Recent Bookings</h2>

            <p className="mt-1 text-sm text-gray-500">
              Your latest rental activity
            </p>
          </div>

          <button className="text-sm font-medium text-gray-900 hover:underline">
            View all
          </button>
        </div>

        {/* Desktop table */}
        <div className="hidden overflow-x-auto md:block">
          <table className="w-full text-left">
            <thead className="bg-gray-50 text-xs uppercase text-gray-500">
              <tr>
                <th className="px-5 py-4">Booking</th>
                <th className="px-5 py-4">Customer</th>
                <th className="px-5 py-4">Car</th>
                <th className="px-5 py-4">Date</th>
                <th className="px-5 py-4">Amount</th>
                <th className="px-5 py-4">Status</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {bookings.map((booking) => (
                <tr key={booking.id} className="text-sm hover:bg-gray-50">
                  <td className="px-5 py-4 font-medium text-gray-900">
                    {booking.id}
                  </td>

                  <td className="px-5 py-4 text-gray-600">
                    {booking.customer}
                  </td>

                  <td className="px-5 py-4 text-gray-600">{booking.car}</td>

                  <td className="px-5 py-4 text-gray-600">{booking.date}</td>

                  <td className="px-5 py-4 font-medium text-gray-900">
                    {booking.amount}
                  </td>

                  <td className="px-5 py-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${
                        booking.status === "Confirmed"
                          ? "bg-green-50 text-green-600"
                          : booking.status === "Pending"
                            ? "bg-yellow-50 text-yellow-600"
                            : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {booking.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile bookings */}
        <div className="divide-y divide-gray-100 md:hidden">
          {bookings.map((booking) => (
            <div key={booking.id} className="p-5">
              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-900">{booking.id}</span>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    booking.status === "Confirmed"
                      ? "bg-green-50 text-green-600"
                      : booking.status === "Pending"
                        ? "bg-yellow-50 text-yellow-600"
                        : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {booking.status}
                </span>
              </div>

              <div className="mt-3 space-y-1 text-sm">
                <p className="text-gray-900">{booking.customer}</p>

                <p className="text-gray-500">{booking.car}</p>

                <div className="flex justify-between pt-2">
                  <span className="text-gray-500">{booking.date}</span>

                  <span className="font-medium text-gray-900">
                    {booking.amount}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
