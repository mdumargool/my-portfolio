// src/components/Skills.jsx
import { motion } from 'framer-motion';
import React from 'react';

const skills = [
    { name: 'HTML5', level: 'Advanced' },
    { name: 'CSS3', level: 'Advanced' },
    { name: 'JavaScript', level: 'Advanced' },
    { name: 'MongoDB', level: 'Intermediate' },
    { name: 'Express.js', level: 'Intermediate' },
    { name: 'React.js', level: 'Advanced' },
    { name: 'Node.js', level: 'Advanced' },
    { name: 'Tailwind CSS', level: 'Intermediate' },
    { name: 'Git & GitHub', level: 'Intermediate' },
    { name: 'EJS', level: 'Intermediate' },
    { name: 'Stripe API', level: 'Basic' },
    { name: 'Java', level: 'Intermediate' },
    { name: 'SQL', level: 'Intermediate' },
];

const Skills = () => {
    return (
        <section
            id="skills"
            className="py-16 px-6 bg-white text-center text-gray-800"
        >
            <motion.h2
                className="text-4xl font-bold mb-10 text-indigo-600"
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                Skills
            </motion.h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        className="bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-medium py-4 px-6 rounded shadow-md transition-all duration-300"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05, duration: 0.4 }}
                        viewport={{ once: true }}
                    >
                        {skill.name}
                        <div className="text-sm text-gray-500">{skill.level}</div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
