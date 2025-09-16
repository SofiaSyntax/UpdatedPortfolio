import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const Banner = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const controls = useAnimation();
  const [distance, setDistance] = useState(0);

  const text = "Seeking Internship from 17 Nov 2025 - 3 May 2026";

  useEffect(() => {
    const updateDistance = () => {
      if (containerRef.current && textRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const textWidth = textRef.current.offsetWidth;
        setDistance(containerWidth + textWidth);
      }
    };

    updateDistance();
    window.addEventListener("resize", updateDistance);
    return () => window.removeEventListener("resize", updateDistance);
  }, []);

  useEffect(() => {
    const animateText = async () => {
      if (!distance) return;
      while (true) {
        await controls.start({
          x: -textRef.current.offsetWidth,
          transition: { duration: 10, ease: "linear" }, 
        });
        await controls.set({ x: containerRef.current.offsetWidth });
      }
    };

    animateText();
  }, [distance, controls]);

  return (
    <div
      ref={containerRef}
      className="w-full overflow-hidden bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-sm border-y border-white/20 dark:border-gray-700"
    >
      <motion.div
        ref={textRef}
        className="inline-block whitespace-nowrap py-3"
        initial={{ x: containerRef.current ? containerRef.current.offsetWidth : 0 }}
        animate={controls}
      >
        <p className="text-lg font-semibold text-indigo-700 dark:text-white bg-gradient-to-r bg-clip-text drop-shadow-md">
          {text}
        </p>
      </motion.div>
    </div>
  );
};

export default Banner;

