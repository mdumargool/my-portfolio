// src/components/Hero.jsx
import { motion } from 'framer-motion';
import React from 'react';

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white px-6 text-center"
    >
      <motion.img
        src="public/profile_pic.jpg"
        alt="Your Profile"
        className="w-36 h-36 rounded-full border-4 border-white shadow-lg mb-6"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      />

      <motion.h1
        className="text-4xl md:text-5xl font-bold mb-3"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Hi, I'm Md Umar Gool
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl mb-6 max-w-xl"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        MERN Stack Developer passionate about building full-stack web applications with beautiful UI & clean code.
      </motion.p>

      <motion.a
        href="https://drive.google.com/file/d/1Puoon_p1XNbcp_VhjBMpANLwViIaR68u/view?usp=drive_link"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-white text-indigo-700 font-semibold py-2 px-6 rounded-full shadow-md hover:scale-105 hover:bg-indigo-100 transition"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        View Resume
      </motion.a>
    </section>
  );
};

export default Hero;
