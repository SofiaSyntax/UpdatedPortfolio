import React from "react";
import { FaGithub, FaLinkedin, FaHtml5, FaCss3, FaReact, FaFigma, FaDocker, FaEnvelope } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoTailwindCss } from "react-icons/bi";
import { TbBrandMysql } from "react-icons/tb";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const techStack = [
  { icon: <RiJavascriptFill className="text-yellow-400" />, name: "JavaScript" },
  { icon: <BiLogoTailwindCss className="text-sky-400" />, name: "Tailwind CSS" },
  { icon: <FaHtml5 className="text-orange-500" />, name: "HTML5" },
  { icon: <FaCss3 className="text-blue-500" />, name: "CSS3" },
  { icon: <FaReact className="text-cyan-400" />, name: "React" },
  { icon: <FaFigma className="text-pink-500" />, name: "Figma" },
  { icon: <TbBrandMysql className="text-blue-300" />, name: "MySQL" },
  { icon: <FaDocker className="text-blue-400" />, name: "Docker" },
];

const About = () => {
  return (
    <section className="relative overflow-hidden pt-20 bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-white transition-all duration-500">
      {/* Main about content */}
      <motion.div
        className="max-w-5xl mx-auto text-center relative z-10 px-4 md:px-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent"
        >
          Who am I?
        </motion.h2>

        <p className="text-lg md:text-xl lg:text-2xl leading-relaxed mb-8 mx-2 sm:mx-10 md:mx-20 lg:mx-40">
          Hi, I'm <span className="font-semibold">Sofia Backeholt</span> - an aspiring{" "}
          <span className="font-semibold text-indigo-500">Full Stack Developer</span> in training at{" "}
          <span className="text-indigo-600 dark:text-indigo-400 font-medium">Chas Academy</span> in Stockholm. 
          In my free time I enjoy learning new skills, working out, and exploring creative projects.
        </p>

        <Link
          to="about-page"
          smooth={true}
          duration={600}
          offset={-50}
          className="inline-block mb-6 px-8 py-4 md:px-10 md:py-5 text-lg md:text-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-full transition duration-300 shadow-md cursor-pointer hover:shadow-[0_0_15px_rgba(99,102,241,0.7)] hover:scale-105"
        >
          Get to know me better
        </Link>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mt-8 flex-wrap gap-4">
          <a
            href="https://github.com/SofiaSyntax"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-lg md:text-xl text-gray-800 dark:text-white hover:text-black dark:hover:text-gray-300 transition-all duration-200"
          >
            <FaGithub className="text-2xl md:text-3xl" />
           
          </a>
          <a
            href="https://www.linkedin.com/in/sofia-backeholt/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-lg md:text-xl text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-all duration-200"
          >
            <FaLinkedin className="text-2xl md:text-3xl" />
          </a>
         <a
            href="mailto:sbackeholt@gmail.com"
            whileHover={{ scale: 1.2, boxShadow: "0 0 8px rgba(255,255,255,0.6)" }}
            className="flex items-center space-x-2 text-lg md:text-xl text-gray-800 dark:text-white hover:text-black dark:hover:text-gray-300 transition-all duration-200"
          > 
            <FaEnvelope className="text-3xl" />
            </a>
        </div>
      </motion.div>

      {/* Tech Stack Grid */}
      <motion.div
        className="px-8 py-16 mx-2 sm:mx-10 md:mx-20 lg:mx-40 mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {techStack.map((tech, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center bg-white/10 dark:bg-black/20 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <div className="text-4xl mb-3">{tech.icon}</div>
            <p className="text-sm md:text-base font-semibold">{tech.name}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default About;


