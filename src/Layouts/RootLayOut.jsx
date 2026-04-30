import React from "react";
import Navbar from "../Common/Navbar/Navbar";
import { Outlet } from "react-router";

const RootLayOut = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default RootLayOut;
