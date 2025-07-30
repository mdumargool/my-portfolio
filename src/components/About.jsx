// src/components/About.jsx
import { motion } from 'framer-motion';
import React from 'react';

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center bg-gray-50 text-gray-800 px-6 py-12 text-center"
    >
      <motion.h2
        className="text-4xl font-bold mb-6 text-indigo-600"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>

      <motion.p
        className="text-lg max-w-2xl text-gray-700 leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        I'm <span className="font-semibold text-indigo-600">Md Umar Gool</span>, a passionate <strong>MERN Stack Developer</strong> based in Kolkata. 
        With experience in frontend development using React.js and backend with Node.js, I enjoy building full-stack web apps that solve real-world problems.
        Currently working as a <em>Technical Research Associate</em>, I’m open to exciting opportunities in tech.
      </motion.p>
    </section>
  );
};

export default About;
