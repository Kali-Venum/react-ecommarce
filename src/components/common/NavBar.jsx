import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <header className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">Nav-Bar</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <NavLink to="/" className="mr-5 hover:text-white">
            Home
          </NavLink>
          <NavLink to="/about" className="mr-5 hover:text-white">
            About
          </NavLink>
          <NavLink to="/products" className="mr-5 hover:text-white">
            Products
          </NavLink>
          <NavLink to="/contact" className="mr-5 hover:text-white">
            Contact
          </NavLink>
        </nav>
        <NavLink to="/register">
          <button class="inline-flex text-white items-center border-0 py-1 px-3 bg-[#6A64F1] focus:outline-none rounded text-base mt-4 md:mt-0 font-bold">
            Register
          </button>
        </NavLink>
        <NavLink to="/login">
          <button class="inline-flex text-white items-center border-0 ml-2 py-1 px-3 bg-[#6A64F1] focus:outline-none rounded text-base mt-4 md:mt-0 font-bold">
            Login
          </button>
        </NavLink>
      </div>
    </header>
  );
}

export default NavBar;
