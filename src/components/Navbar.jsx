import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom"; // <-- import Link
import navLogo from "../assets/image/nav-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);
  const handleLinkClick = () => setIsOpen(false);

  return (
    <nav className="w-full fixed top-0 left-0 bg-[#1E1E23] text-gray-200 shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={navLogo} alt="" className="w-7 text-purple-500" />
          <span className="font-bold text-lg">Shivam</span>
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium">
          <li>
            <Link to="/#hero" className="hover:text-purple-400 transition">
              home
            </Link>
          </li>
          <li>
            <Link to="/#projects" className="hover:text-purple-400 transition">
              projects
            </Link>
          </li>
          <li>
            <Link to="/#skills" className="hover:text-purple-400 transition">
              skills
            </Link>
          </li>
          <li>
            <Link to="/#about" className="hover:text-purple-400 transition">
              about-me
            </Link>
          </li>
          <li>
            <Link to="/#contacts" className="hover:text-purple-400 transition">
              contacts
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={handleToggle}
          className="md:hidden text-gray-200 focus:outline-none"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 sm:w-1/2 bg-[#1E1E23] border-l border-purple-400/30 transform transition-transform duration-300 ease-in-out z-40 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-6 py-4 border-b border-slate-700">
          <span className="font-bold text-lg text-white">Menu</span>
          <button onClick={handleToggle} className="text-gray-200">
            <X size={24} />
          </button>
        </div>

        <ul className="flex flex-col px-6 py-6 space-y-5 text-lg font-medium">
          <li>
            <Link onClick={handleLinkClick} to="/#hero" className="hover:text-purple-400 transition">
              home
            </Link>
          </li>
          <li>
            <Link onClick={handleLinkClick} to="/#projects" className="hover:text-purple-400 transition">
              projects
            </Link>
          </li>
          <li>
            <Link onClick={handleLinkClick} to="/#skills" className="hover:text-purple-400 transition">
              skills
            </Link>
          </li>
          <li>
            <Link onClick={handleLinkClick} to="/#about" className="hover:text-purple-400 transition">
              about-me
            </Link>
          </li>
          <li>
            <Link onClick={handleLinkClick} to="/#contacts" className="hover:text-purple-400 transition">
              contacts
            </Link>
          </li>
        </ul>
      </div>

      {/* Overlay background when menu open */}
      {isOpen && (
        <div
          onClick={handleToggle}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 md:hidden"
        />
      )}
    </nav>
  );
};

export default Navbar;
