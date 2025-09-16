import { motion } from "framer-motion";
import { Megaphone, Briefcase, BookOpen, Users, MapPin } from "lucide-react"; // sleek modern icons

const AboutPage = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section
      id="about-page"
      className="px-8 py-16 mx-2 sm:10 md:mx-20 lg:mx-40 text-gray-800 dark:text-gray-200"
    >
      <motion.h2
        className="text-4xl font-extrabold mb-16 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={fadeUp}
      >
        {/* Get to Know Me Better  */}
      </motion.h2>

      <div className="">
      <motion.div
  className="p-8 my-10 rounded-2xl shadow-lg bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:border-indigo-400 transition-all duration-300"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  variants={fadeUp}
>
  {/* Section title */}
  <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent text-center sm:text-left">
    Education
  </h3>

  {/* Timeline */}
  <div className="relative border-l border-indigo-400 dark:border-indigo-500 pl-6 space-y-8">
   
    <motion.div
      className="relative"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute -left-[20px] w-5 h-5 rounded-full bg-indigo-500 border-4 border-white dark:border-gray-800"></div>
      <p>
        Currently pursuing{" "}
        <span className="font-semibold text-indigo-600 dark:text-indigo-400">
          Frontend Developer
        </span>{" "}
        at <span className="font-medium">Chas Academy</span>, having completed:
      </p>
      <ul className="list-disc pl-5 mt-2 space-y-1">
        <li>IT Tech & Operations</li>
        <li>Web Development & Web Technology</li>
        <li>UX & Accessibility (WCAG)</li>
        <li>React</li>
        <li>Backend & DevOps</li>
        <li>Project Methodology & Agile Methods</li>
        <li>React Native</li>
        <li>TypeScript</li>
      </ul>
    </motion.div>

 
    <motion.div
      className="relative"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <div className="absolute -left-[20px] w-5 h-5 rounded-full bg-indigo-500 border-4 border-white dark:border-gray-800"></div>
      <p>
        Over the coming months I will be deepening my skills with{" "}
        <span className="font-medium">Advanced Frontend Development</span>{" "}
        before my internship 17th of November 2025 until 3rd of May 2026.
      </p>
    </motion.div>


    <motion.div
      className="relative"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="absolute -left-[20px] w-5 h-5 rounded-full bg-indigo-500 border-4 border-white dark:border-gray-800"></div>
      <p>
        Completed a course in{" "}
        <span className="font-medium">C#</span> and{" "}
        <span className="font-medium">Mathematics for Engineers</span>,
        building strong programming logic and problem-solving foundations.
      </p>
    </motion.div>

  
    <motion.div
      className="relative"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <div className="absolute -left-[20px] w-5 h-5 rounded-full bg-indigo-500 border-4 border-white dark:border-gray-800"></div>
      <p>
        Studied Korean for{" "}
        <span className="font-medium">six months in South Korea</span>,
        gaining cultural adaptability and a global perspective.
      </p>
    </motion.div>
  </div>
</motion.div>


<motion.div
  className="p-8 rounded-2xl shadow-xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg border border-gray-200 dark:border-gray-700 flex flex-col lg:flex-row items-start gap-10"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: 0.2 }}
  variants={fadeUp}
>
  <div className="flex-1 flex flex-col justify-start space-y-4 w-full">
    <div>
      <h3 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 text-center md:text-left mb-4">
        Professional Background
      </h3>
      <p className="leading-relaxed text-center md:text-left">
        Experienced in event operations and coordination with a strong focus on accuracy, security, and service in international and high-profile settings.
      </p>
    </div>

    {/* List Items */}
    <ul className="space-y-3 text-gray-700 dark:text-gray-300 w-full">
      <li className="flex items-start">
        <span className="flex-shrink-0 flex items-center justify-center w-5 h-5">
          <MapPin className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
        </span>
        <span className="ml-2">
          Badge Operator at the UN Climate Change Conference - managing digital registration, photo editing, and secure accreditation badge production.
        </span>
      </li>
      <li className="flex items-start">
        <span className="flex-shrink-0 flex items-center justify-center w-5 h-5">
          <MapPin className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
        </span>
        <span className="ml-2">
          Cloakroom attendant at Stockholmsmässan - logistics handling and cashier.
        </span>
      </li>
      <li className="flex items-start">
        <span className="flex-shrink-0 flex items-center justify-center w-5 h-5">
          <MapPin className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
        </span>
        <span className="ml-2">
          Worked large-scale events such as AWS and Google, applying systematic problem-solving approaches.
        </span>
      </li>
      <li className="flex items-start">
        <span className="flex-shrink-0 flex items-center justify-center w-5 h-5">
          <MapPin className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
        </span>
        <span className="ml-2">
          Extensive experience across diverse events - adaptability and professionalism in varied environments.
        </span>
      </li>
    </ul>

    {/* Download CV Button */}
    <motion.a
      href="/assets/Sofia Backeholt CV.pdf"
      download
      whileHover={{
        boxShadow: "0 0 20px rgba(99, 102, 241, 0.6)",
        scale: 1.05
      }}
      whileTap={{ scale: 0.97 }}
      className="block w-fit mx-auto md:mx-0 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-5 py-2 rounded-lg transition-all duration-300 shadow-md font-semibold"
    >
      Download My CV
    </motion.a>
  </div>
</motion.div>

{/* Volunteer Work */}
<motion.div
  className="p-8 my-10 rounded-2xl shadow-xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg border border-gray-200 dark:border-gray-700"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: 0.3 }}
  variants={fadeUp}
>
  <h3 className="text-3xl font-bold mb-8 text-indigo-600 dark:text-indigo-400 text-center sm:text-left">
    Extracurricular & Volunteer Work
  </h3>

  <div className="relative border-l-4 border-indigo-500 dark:border-indigo-400 pl-6 space-y-8">
    {/* Class Representative */}
    <motion.div whileHover={{ scale: 1.02 }} className="bg-white/50 dark:bg-gray-700/50 rounded-lg p-5 shadow-md">
      <h4 className="font-bold text-lg flex items-center gap-3">
        <Megaphone className="w-5 h-5 text-indigo-500" /> Class Representative 
        <span className="text-sm text-gray-500 ml-auto"></span>
      </h4>
      <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700 dark:text-gray-300">
        <li>Represent class in meetings with education management team.</li>
        <li>Gather and consolidate feedback from students.</li>
        <li>Ensure student perspectives are communicated in decisions.</li>
      </ul>
    </motion.div>

    {/* Chas Career Project Manager */}
    <motion.div whileHover={{ scale: 1.02 }} className="bg-white/50 dark:bg-gray-700/50 rounded-lg p-5 shadow-md">
      <h4 className="font-bold text-lg flex items-center gap-3">
        <Briefcase className="w-5 h-5 text-indigo-500" /> Chas Career Project Manager 
        <span className="text-sm text-gray-500 ml-auto"></span>
      </h4>
      <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700 dark:text-gray-300">
        <li>Lead and coordinate student career development project.</li>
        <li>Set goals, plan tasks, and track progress.</li>
        <li>Motivate team for successful project delivery.</li>
      </ul>
    </motion.div>

    {/* Homework Mentor */}
    <motion.div whileHover={{ scale: 1.02 }} className="bg-white/50 dark:bg-gray-700/50 rounded-lg p-5 shadow-md">
      <h4 className="font-bold text-lg flex items-center gap-3">
        <BookOpen className="w-5 h-5 text-indigo-500" /> Homework Mentor – Red Cross
      </h4>
      <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700 dark:text-gray-300">
        <li>Helped unaccompanied teenage refugees with schoolwork.</li>
        <li>Provided language learning and academic support.</li>
        <li>Assisted integration into local community.</li>
      </ul>
    </motion.div>

    {/* Event Volunteer */}
    <motion.div whileHover={{ scale: 1.02 }} className="bg-white/50 dark:bg-gray-700/50 rounded-lg p-5 shadow-md">
      <h4 className="font-bold text-lg flex items-center gap-3">
        <Users className="w-5 h-5 text-indigo-500" /> Event Volunteer – NärCon
      </h4>
      <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700 dark:text-gray-300">
        <li>Took orders and cashier-handling.</li>
        <li>Maintained a welcoming and efficient environment.</li>
      </ul>
    </motion.div>
  </div>
</motion.div>
 </div>
</section>
  );
};

export default AboutPage;

