import React from "react"; 
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Components/Home/Home.jsx";
import AboutUs from "./Components/AboutUs/AboutUs.jsx";
import OurService from "./Components/OurService/OurService.jsx";
import OurWork from "./Components/OurWork/OurWork.jsx";
import ContactUs from "./Components/ContactUs/ContactUs.jsx";

import RootLayOut from "./Layouts/RootLayOut.jsx";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootLayOut />}>
            <Route index element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/our-service" element={<OurService />} />
            <Route path="/our-work" element={<OurWork />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
