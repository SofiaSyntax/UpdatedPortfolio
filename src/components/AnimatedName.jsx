import React from "react";
import { motion } from "framer-motion";

const AnimatedName = () => {
  const name = "Sofia Backeholt";

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.05, type: "spring", stiffness: 200 },
    }),
  };

  return (
    <motion.h3
      className="text-2xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent animate-gradient"
      style={{
        backgroundSize: "200% auto",
      }}
    >
      {name.split("").map((char, i) => (
        <motion.span
          key={i}
          custom={i}
          initial="hidden"
          animate="visible"
          variants={letterVariants}
        >
          {char}
        </motion.span>
      ))}
    </motion.h3>
  );
};

export default AnimatedName;
