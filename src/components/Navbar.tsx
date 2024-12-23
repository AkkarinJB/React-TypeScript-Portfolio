import React, { useState } from "react";
import { Link } from "react-router-dom";


const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }
  return (
    <nav className="bg-gradient-to-r from-black to-black shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Link to="/" className="text-white text-2xl font-bold flex items-center space-x-2">
              <img src="/assets/akkarin-logo32.png" alt="Logo" className="h-8 w-8" />
              <span>Aekarin</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-white hover:text-gray-200">
              Home
            </Link>
            <Link to="/about" className="text-white hover:text-gray-200">
              About
            </Link>
            <Link to="/project" className="text-white hover:text-gray-200">
              Projects
            </Link>
            <Link to="/contact" className="text-white hover:text-gray-200">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-gray-200 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-b from-black to- space-y-2 px-4 py-2">
          <Link to="/" className="block text-white hover:text-gray-200">
            Home
          </Link>
          <Link to="/about" className="block text-white hover:text-gray-200">
            About
          </Link>
          <Link to="/project" className="block text-white hover:text-gray-200">
            Projects
          </Link>
          <Link to="/contact" className="block text-white hover:text-gray-200">
            Contact
          </Link>
        </div>
      )}
    </nav>
  )
}
export default Navbar