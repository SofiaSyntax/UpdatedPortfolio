import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Personal Dashboard",
      description: "A dashboard with current weather, todolist and notes.",
      link: "https://personal-dashboard-phi-rosy.vercel.app/",
      tags: ["LocalStorage", "OpenWeatherAPI", "TypeScript", "React", "TailwindCSS", "Next.js"],
    },
    {
      id: 2,
      title: "Ask the Oracle",
      description:
        "Find out your fortune by asking the Oracle anything your heart desires.",
      link: "https://fortuneteller-oracle.vercel.app/",
      tags: ["React", "TypeScript", "TailwindCSS", "Framer Motion", "Gemini API","Next.js"],
    },
    {
      id: 3,
      title: "Zoom Website re-design",
      description:
        "Re-designing a more simple version of Zoom.com with more focus on clean UI.",
      link: "https://zoom-redesign-mu.vercel.app/",
      tags: ["JavaScript", "Vanilla CSS", "HTML"],
    },
  ];

  return (
    <section className="relative px-8 py-16 mx-2 sm:mx-10 md:10 lg:mx-40 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-14 relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
          My Projects
        </h2>
        <p className="mt-3 text-gray-600 dark:text-gray-300 text-lg">
          A selection of my work showcasing design, development, and creativity.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            whileHover={{ y: -5, scale: 1.02 }}
            viewport={{ once: true }}
            className="border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col"
          >
      
            <div className="h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-t-2xl"></div>

            {/* Project Content */}
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 flex-1">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs font-medium px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Link */}
              <a
                href={project.link}
                className="inline-block mt-auto text-indigo-600 dark:text-indigo-400 font-semibold hover:underline"
              >
                View Project →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;


// import React from "react";
// import { motion } from "framer-motion";

// const Projects = () => {
//   const projects = [
//     {
//       id: 1,
//       title: "Zoom Website re-design",
//       description: "A modern e-commerce platform built with React, Redux, and Stripe integration.",
//       link: "https://zoom-redesign-mu.vercel.app/",
//       image: "https://via.placeholder.com/400x250",
//       tags: ["JavaScript", "CSS", "HTML"],
//     },
//     {
//       id: 2,
//       title: "Personal Dashboard",
//       description: ".",
//       link: "https://personal-dashboard-phi-rosy.vercel.app/",
//       // image: "https://via.placeholder.com/400x250",
//       tags: ["Node.js", "Express", "MongoDB"],
//     },
//     {
//       id: 3,
//       title: "Portfolio Website",
//       description: "Responsive personal portfolio site built with React and Tailwind CSS.",
//       link: "#",
//       image: "https://via.placeholder.com/400x250",
//       tags: ["React", "TailwindCSS", "Framer Motion"],
//     },
//   ];

//   return (
//     <section className="relative px-8 py-16 mx-2 sm:10 md:mx-20 lg:mx-40  from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white">
//       {/* Heading */}
//       <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.5 }}
//         className="text-center mb-14 relative z-10"
//       >
//         <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
//           My Projects
//         </h2>
//         <p className="mt-3 text-gray-600 dark:text-gray-300 text-lg">
//           A selection of my work showcasing design, development, and creativity.
//         </p>
//       </motion.div>

//       {/* Projects Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
//         {projects.map((project, index) => (
//           <motion.div
//             key={project.id}
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: index * 0.15, duration: 0.6 }}
//             whileHover={{ y: -5 }}
//             viewport={{ once: true }}
//             className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
//           >
//             {/* Project Image */}
//             <div className="h-48 overflow-hidden">
//               {/* <img 
//                 src={project.image} 
//                 alt={project.title} 
//                 className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
//               /> */}
//             </div>

//             {/* Project Content */}
//             <div className="p-6">
//               <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
//               <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>

//               {/* Tags */}
//               <div className="flex flex-wrap gap-2 mb-4">
//                 {project.tags.map((tag, i) => (
//                   <span 
//                     key={i} 
//                     className="text-xs font-medium px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-300"
//                   >
//                     {tag}
//                   </span>
//                 ))}
//               </div>

//               {/* Link */}
//               <a
//                 href={project.link}
//                 className="inline-block mt-auto text-indigo-600 dark:text-indigo-400 font-semibold hover:underline"
//               >
//                 View Project →
//               </a>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Projects;




