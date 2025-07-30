// src/components/Footer.jsx
import { FaArrowUp } from 'react-icons/fa';
import React from 'react';

const scrollTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-center py-6 mt-10 relative">
      <p className="text-sm text-gray-600">
        © {new Date().getFullYear()} Md Umar Gool. All rights reserved.
      </p>

      <button
        onClick={scrollTop}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-indigo-600 text-white p-2 rounded-full shadow hover:bg-indigo-700 transition"
        aria-label="Scroll to top"
      >
        <FaArrowUp />
      </button>
    </footer>
  );
};

export default Footer;
