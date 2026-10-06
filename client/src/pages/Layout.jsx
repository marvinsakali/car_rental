import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Layout = () => {
  const [searchQuery, setSearchQuery] = useState("")
  return (
    <>
      <NavBar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
      <main>
        <Outlet context={{searchQuery}} />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
