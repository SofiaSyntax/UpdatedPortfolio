import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import AnimatedName from "./AnimatedName"; 


const Footer = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={fadeUp}
      className="bg-gradient-to-br from-gray-100 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-700 dark:text-gray-300 border-t border-gray-300 dark:border-gray-700"
    >
      <div className="mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left Section */}
        <div className="text-center md:text-left">
        <AnimatedName />
          <p className="text-xs italic text-gray-500 dark:text-gray-400 ">
            Building the web, one pixel at a time ✨
          </p>
          <p className="text-xs opacity-80">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

    
        <div className="flex flex-wrap justify-center gap-3 text-sm">
        
        </div>

        {/* Social Icons */}
        <div className="flex space-x-5">
         
          <motion.a
            href="https://github.com/SofiaSyntax"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, boxShadow: "0 0 8px rgba(255,255,255,0.6)" }}
            className="dark:text-white"
          >
            <FaGithub className="text-2xl" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/sofia-backeholt/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, boxShadow: "0 0 8px rgba(0 0 8px rgba(255,255,255,0.6)" }}
            className="text-blue-600 dark:text-blue-400"
          >
            <FaLinkedin className="text-2xl" />
          </motion.a>
          <motion.a
            href="mailto:sbackeholt@gmail.com"
            whileHover={{ scale: 1.2, boxShadow: "0 0 8px rgba(255,255,255,0.6)" }}
            className="text-gray-950"
          >
            <FaEnvelope className="text-2xl" />
          </motion.a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;

