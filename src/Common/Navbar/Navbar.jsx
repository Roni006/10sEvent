import React from "react";
import Container from "../Container/Container";

import logo from "../../assets/img/logo.png";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <section>
        <Container>
          <div className="flex items-center justify-between gap-75 bg-[#ddd] p-[15px_15px_15px_15px] rounded-[15px]">
            <div>
              <Link to="/">
                <img className="w-20" src={logo} alt="logo image" />
              </Link>
            </div>

            <div className="flex items-center gap-14">
              <nav>
                <ul className="flex items-center gap-14">
                  <li className="text-[18px] font-semibold font-raleway leading-6.5 text-[#0D0600] hover:text-[#f16722] duration-300 ">
                    <Link to="/">Home</Link>
                  </li>
                  {/* 
                  <NavLink
                    to="/home"
                    className={({ isActive }) =>
                      isActive ? "text-[#f16722]" : "text-[#0D0600]"
                    }
                  >
                    <li className="text-[18px] font-semibold font-raleway leading-6.5 text-[#0D0600] hover:text-[#f16722] duration-300 ">
                      <a href="#">Home</a>
                    </li>
                  </NavLink> */}
                  <li className="text-[18px] font-semibold font-raleway leading-6.5 text-[#0D0600] hover:text-[#f16722] duration-300 ">
                    <Link to="/about-us">About Us</Link>
                  </li>
                  <li className="text-[18px] font-semibold font-raleway leading-6.5 text-[#0D0600] hover:text-[#f16722] duration-300 ">
                    <Link to="/our-service">Our Service</Link>
                  </li>
                  <li className="text-[18px] font-semibold font-raleway leading-6.5 text-[#0D0600] hover:text-[#f16722] duration-300 ">
                    <Link to="/our-work">Our Work</Link>
                  </li>
                  <li className="text-[18px] font-semibold font-raleway leading-6.5 text-[#0D0600] hover:text-[#f16722] duration-300 ">
                    <Link to="/contact-us">Contact Us</Link>
                  </li>
                </ul>
              </nav>
              <div>
                <button className="text-white text-[18px] font-bold leading-6.25 bg-[#f16722] py-2 px-8 rounded-[30px] cursor-pointer border border-[#f16722] hover:bg-transparent hover:text-[#f16722] duration-300 ">
                  <Link to="/contact-us">Get A Quote</Link>
                </button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Navbar;
