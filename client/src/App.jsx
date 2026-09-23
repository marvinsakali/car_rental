import React from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Cars from "./pages/Cars";
import CarDetails from "./pages/CarDetails";
import Login from "./pages/Login";

const App = () => {
  return (
    <div>
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/cars" element={<Cars/>}/>
        <Route path="/car-details" element={<CarDetails/>}/>
      </Routes>
    </div>
  );
};

export default App;
