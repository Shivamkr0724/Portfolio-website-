import React from 'react'

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 left-0 bg-[#1E1E23] text-gray-200 shadow-md z-50">
         <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center space-x-2">
          {/* Dummy square icon */}
          <div className="w-4 h-4 bg-gray-200"></div>
          <span className="font-bold text-lg">Shivam</span>
        </div>

        {/* Nav Links */}
        <ul className="flex space-x-6 text-sm font-medium">
          <li>
            <a href="#hero" className="text-white">home</a>
          </li>
          <li>
            <a href="#projects" className="text-purple-400 hover:text-white">projects</a>
          </li>
          <li>
            <a href="#skills" className="text-purple-400 hover:text-white">skills</a>
          </li>
          <li>
            <a href="#about" className="text-purple-400 hover:text-white">about-me</a>
          </li>
          <li>
            <a href="#contacts" className="text-purple-400 hover:text-white">contacts</a>
          </li>
        </ul>

      </div>
    </nav>
  )
}

export default Navbar