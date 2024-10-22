import React from "react";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import Logo from "../assets/Logo.jpg";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-center bg-red-500 text-xl p-6 text-white font-serif">
      <div className="flex">
        <img className="h-[-300] w-24 absolute top-6 left-16" src={Logo} />
      </div>
      <div className="flex flex-col">
        <div className="mb-3 flex items-center justify-center relative">
          <input
            className="p-2 m-2 rounded-lg text-sm w-[350px]"
            type="text"
            placeholder="search"
          />
          <BiSearch className="absolute right-4 top-[17px] text-gray-500" />
        </div>
        <ul className="space-x-5">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/services">Services</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </ul>
      </div>
    </nav>
  );
}
