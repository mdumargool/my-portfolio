// src/components/Contact.jsx
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';
import React from 'react';

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-16 px-6 bg-gray-50 text-center text-gray-800"
    >
      <motion.h2
        className="text-4xl font-bold mb-10 text-indigo-600"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Contact
      </motion.h2>

      <div className="max-w-xl mx-auto grid grid-cols-1 gap-6 text-left">
        <motion.div
          className="flex items-center gap-4 bg-white p-4 rounded shadow hover:bg-indigo-50 transition"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <FaEnvelope className="text-indigo-600 text-xl" />
          <a href="mailto:mdumarbaghauni@gmail.com" className="text-base text-gray-700 hover:text-indigo-600">
            mdumarbaghauni@gmail.com
          </a>
        </motion.div>

        <motion.div
          className="flex items-center gap-4 bg-white p-4 rounded shadow hover:bg-indigo-50 transition"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <FaMapMarkerAlt className="text-indigo-600 text-xl" />
          <span>Kolkata, India</span>
        </motion.div>

        <motion.div
          className="flex items-center gap-4 bg-white p-4 rounded shadow hover:bg-indigo-50 transition"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <FaLinkedin className="text-indigo-600 text-xl" />
          <a
            href="https://www.linkedin.com/in/md-umar-gool-aa4848210/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base text-gray-700 hover:text-indigo-600"
          >
            linkedin.com/in/md-umar-gool
          </a>
        </motion.div>

        <motion.div
          className="flex items-center gap-4 bg-white p-4 rounded shadow hover:bg-indigo-50 transition"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <FaGithub className="text-indigo-600 text-xl" />
          <a
            href="https://github.com/mdumargool"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base text-gray-700 hover:text-indigo-600"
          >
            github.com/mdumargool
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
