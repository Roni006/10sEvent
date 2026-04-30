import React from "react";
import Navbar from "../Common/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../pages/Footer";

const RootLayOut = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer/>
    </div>
  );
};

export default RootLayOut;
