import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  return (
    <section
      id="education"
      className="px-6 py-12 max-w-5xl mx-auto text-gray-800 dark:text-gray-200"
    >
      <motion.h2
        className="text-3xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
       
      </motion.h2>

      <motion.div
        className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
         <h3 className="text-2xl font-semibold mb-3 text-indigo-600 dark:text-indigo-400">
            Education
          </h3>
        <p className="mb-4">
          I’m currently pursuing my education as a{' '}
          <span className="font-semibold text-indigo-600 dark:text-indigo-400">
            Frontend Developer
          </span>{' '}
          at <span className="font-medium">Chas Academy</span>, where I’ve
          already completed courses in:
        </p>

        <ul className="list-disc pl-5 mb-4 space-y-1">
          <li>IT Tech & Operations</li>
          <li>Web Development & Web Technology</li>
          <li>UX & Accessibility (WCAG)</li>
          <li>React</li>
          <li>Backend & DevOps</li>
          <li>Project Methodology & Agile Methods</li>
          <li>React Native</li>
          <li>TypeScript</li>
        </ul>

        <p className="mb-4">
          Over the coming months, I’ll deepen my skills with{' '}
          <span className="font-medium">Advanced Frontend Development</span>{' '}
          before starting my internship in November.
        </p>

        <p className="mb-4">
          Before this program, I completed a course in{' '}
          <span className="font-medium">C#</span> and{' '}
          <span className="font-medium">Mathematics for Engineers</span>,
          building a strong foundation in programming logic and problem-solving.
        </p>

        <p>
          My learning journey has also taken me abroad — I spent{' '}
          <span className="font-medium">six months in Seoul, South Korea</span>,
          studying the Korean language and immersing myself in a new culture,
          which strengthened my adaptability and global perspective.
        </p>
      </motion.div>
    </section>
  );
};

export default Education;
