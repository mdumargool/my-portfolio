// src/components/Navbar.jsx
import { useState } from 'react';
import React from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false); // close menu on click (mobile)
  };

  return (
    <nav className="fixed w-full z-50 bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
        <h1 className="text-xl font-bold text-indigo-600">Md Umar Gool</h1>

        <div className="hidden md:flex gap-6 text-gray-700 font-medium">
          {['about', 'skills', 'projects', 'contact'].map((link) => (
            <button key={link} onClick={() => scrollTo(link)} className="hover:text-indigo-600 capitalize">
              {link}
            </button>
          ))}
          <a
            href="https://drive.google.com/file/d/1Puoon_p1XNbcp_VhjBMpANLwViIaR68u/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-indigo-600 text-white px-4 py-1.5 rounded hover:bg-indigo-700"
          >
            Resume
          </a>
        </div>

        {/* Hamburger Menu */}
        <button className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4 shadow">
          {['about', 'skills', 'projects', 'contact'].map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="block w-full text-left py-2 text-gray-700 hover:text-indigo-600 capitalize"
            >
              {link}
            </button>
          ))}
          <a
            href="https://drive.google.com/YOUR_RESUME_LINK"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 w-full text-center bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
