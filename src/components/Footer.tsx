import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-black to-black shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 justify-center items-center">
          {/* Logo and Description */}
          <div className="text-center">
            <h3 className="text-white text-2xl font-bold">Aekarin</h3>
            <p className="mt-4 text-white">
              Showcase your work and tell your story with a beautiful portfolio.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white hover:text-gray-400">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white hover:text-gray-400">
                  About
                </Link>
              </li>
              <li>
                <Link to="/project" className="text-white hover:text-gray-400">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white hover:text-gray-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
            <div className="flex justify-center space-x-4">
              <a
                href="https://www.facebook.com/no.xek.ri.nthr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://x.com/aekarin9959"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="linkedin.com/in/aekarin-jujaibun-95b242343"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://github.com/AkkarinJB"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 border-t border-gray-700 pt-6 text-center">
          <p className="text-sm text-white">
            © {new Date().getFullYear()} Aekarin. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;