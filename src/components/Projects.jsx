// src/components/Projects.jsx
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import projects from '../data/projects';
import React from 'react';

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-16 px-6 bg-white text-center text-gray-800"
    >
      <motion.h2
        className="text-4xl font-bold mb-10 text-indigo-600"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-100 rounded-lg p-6 shadow hover:shadow-lg transition-all"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-indigo-700 mb-2">{project.title}</h3>
            <p className="text-gray-700 mb-3">{project.description}</p>
            <p className="text-sm text-gray-500 mb-4">{project.tech}</p>
            <div className="flex gap-4 justify-center text-indigo-600">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub size={20} className="hover:text-indigo-800" />
                </a>
              )}
              {project.live && (
                <a href={project.live} target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt size={18} className="hover:text-indigo-800" />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
