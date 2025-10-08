import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // For hamburger and close icons (install with: npm i lucide-react)

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);
  const handleLinkClick = () => setIsOpen(false);

  return (
    <nav className="w-full fixed top-0 left-0 bg-[#1E1E23] text-gray-200 shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-gray-200"></div>
          <span className="font-bold text-lg">Shivam</span>
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium">
          <li>
            <a href="#hero" className="hover:text-purple-400 transition">home</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-purple-400 transition">projects</a>
          </li>
          <li>
            <a href="#skills" className="hover:text-purple-400 transition">skills</a>
          </li>
          <li>
            <a href="#about" className="hover:text-purple-400 transition">about-me</a>
          </li>
          <li>
            <a href="#contacts" className="hover:text-purple-400 transition">contacts</a>
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
            <a onClick={handleLinkClick} href="#hero" className="hover:text-purple-400 transition">home</a>
          </li>
          <li>
            <a onClick={handleLinkClick} href="#projects" className="hover:text-purple-400 transition">projects</a>
          </li>
          <li>
            <a onClick={handleLinkClick} href="#skills" className="hover:text-purple-400 transition">skills</a>
          </li>
          <li>
            <a onClick={handleLinkClick} href="#about" className="hover:text-purple-400 transition">about-me</a>
          </li>
          <li>
            <a onClick={handleLinkClick} href="#contacts" className="hover:text-purple-400 transition">contacts</a>
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
