import React, { useState } from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Cars from "./pages/Cars";
import CarDetails from "./pages/CarDetails";
import Login from "./pages/Login";
import MyBookings from "./pages/MyBookings";
import Layout from "./pages/Layout";
import Listing from "./pages/Listing";
import MyListing from "./components/MyListing";
import AddCar from "./pages/AddCar";
import Support from "./pages/Support";
import Dashboard from "./components/Dashboard";
import ManageBookings from "./pages/ManageBookings";
import Settings from "./pages/Settiings";

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

        <Route path="/owner" element={<Listing />}>
          <Route path="" element={<Dashboard />} />
          <Route path="my-listings" element={<MyListing />} />
          <Route path="add-car" element={<AddCar />} />
          {/* <Route path="search" element={<Search />} /> */}
          <Route path="my-bookings" element={<ManageBookings />} />
          <Route path="support" element={<Support />} />
          <Route path="settings" element={<Settings/>}/>  
        </Route>
      </Routes>
    </div>
  );
};

export default App;
