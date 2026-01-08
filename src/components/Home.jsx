import { motion } from "framer-motion";
import logoDark from "../assets/logo_dark.png";
import logoLight from "../assets/logo_light.png";
import heroDarkVideo from "../assets/hero-bg.mp4";
import heroLightVideo from "../assets/hero-bg-light.mp4";
import { useEffect, useState } from "react";
import cv from "../assets/kunal_shrimal.pdf";
import { useTheme } from "../context/ThemeContext";

export default function Home() {
  const { darkMode } = useTheme();

  // 🔹 Typing animation states
  const text = "Full Stack Developer";
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 40 : 80;
    const timeout = setTimeout(() => {
      if (!isDeleting && index < text.length) {
        setDisplayText(text.slice(0, index + 1));
        setIndex(index + 1);
      } else if (isDeleting && index > 0) {
        setDisplayText(text.slice(0, index - 1));
        setIndex(index - 1);
      } else if (!isDeleting && index === text.length) {
        setTimeout(() => setIsDeleting(true), 1200);
      } else if (isDeleting && index === 0) {
        setIsDeleting(false);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [index, isDeleting]);

  // 🔹 Preload logos
  useEffect(() => {
    const imgLight = new Image();
    const imgDark = new Image();
    imgLight.src = logoLight;
    imgDark.src = logoDark;
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col lg:flex-row
      items-center justify-center px-6 py-12 gap-12
      text-gray-900 dark:text-white overflow-hidden"
    >
      {/* 🎥 Background Video */}
      <video
        key={darkMode ? "dark-video" : "light-video"}
        className="absolute inset-0 w-full h-full object-cover z-0 "
        src={darkMode ? heroDarkVideo : heroLightVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay */}
      <div
        className={` ${darkMode ? "absolute inset-0 z-10 bg-black/60" : "hidden" }`}
      />

      {/* Logo */}
      <motion.img
        src={darkMode ? logoDark : logoLight}
        alt="Kunal Shrimal Full Stack Developer Logo"
        className="relative z-20 w-56 h-56 sm:w-64 sm:h-64 object-contain drop-shadow-xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        whileHover={{ scale: 1.05 }}
      />

      {/* Hero Content */}
      <motion.div
        className="relative z-20 w-full lg:w-1/2 flex flex-col
        items-center lg:items-start text-center lg:text-left"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {/* Name */}
        <motion.h1
          className="text-4xl sm:text-5xl font-extrabold mb-4 text-white"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-blue-400">Hi, I’m{" "}</span>
          <span className="text-gray-600 dark:text-gray-200">
            Kunal Shrimal
          </span>
        </motion.h1>

        {/* Typing Role */}
        <motion.h2
          className="text-xl sm:text-2xl font-semibold mb-4
          text-blue-400 min-h-[32px]"
        >
          {displayText}
          <motion.span
            className="ml-1"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
          >
            |
          </motion.span>
        </motion.h2>

        {/* Description */}
        <motion.p
          className="max-w-2xl text-base sm:text-lg mb-8
          text-gray-600  dark:text-gray-200"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          I build scalable web applications, APIs, and data-driven dashboards
          using modern frontend and backend technologies.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex gap-4 flex-wrap justify-center lg:justify-start"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <motion.a
            href={cv}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-blue-600  text-black dark:text-gray-200 rounded-full
            hover:bg-blue-700 transition"
          >
            View Resume
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 border border-blue-500 text-black dark:text-blue-300
            rounded-full hover:bg-blue-500/20 transition"
          >
            Contact Me
          </motion.a>
        </motion.div>

        {/* Scroll Hint */}
        <motion.div
          className="mt-12 text-sm text-gray-300"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          ↓ Scroll to explore
        </motion.div>
      </motion.div>
    </section>
  );
}
