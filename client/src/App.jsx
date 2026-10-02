import React from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Cars from "./pages/Cars";
import CarDetails from "./pages/CarDetails";
import Login from "./pages/Login";
import MyBookings from "./pages/MyBookings";
import Layout from "./pages/Layout";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/cars" element={<Cars />} />

        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/car-details/:id" element={<CarDetails />} />
          <Route path="/my-bookings/" element={<MyBookings />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
