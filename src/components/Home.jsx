import { motion } from "framer-motion";
import logoDark from "../assets/logo_dark.png"
import logoLight from "../assets/logo_light.png"
import cv from "../assets/kunal_shrimal.pdf"

const darkMode=true
export default function Home({darkMode}) {
  
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 py-10 gap-10
      bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-950
      text-gray-900 dark:text-white transition-colors duration-300"
    >
      {/* Left: Animated Logo */}
      <motion.div
        className="w-full lg:w-1/2 flex justify-center"
        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={darkMode ? logoDark : logoLight}
          alt="Kunal Logo"
          className="w-56 h-56 sm:w-64 sm:h-64 object-contain drop-shadow-md"
        />
      </motion.div>

      {/* Right: Text Content */}
      <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
        <motion.h1
          className="text-4xl sm:text-5xl font-extrabold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I'm <span className="text-blue-600 dark:text-blue-400">Kunal</span>
        </motion.h1>

        <motion.p
          className="max-w-2xl text-lg sm:text-xl mb-6 text-gray-700 dark:text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          I'm a <strong className="">Full Stack Developer</strong> & <strong className="">Data Analyst</strong> crafting
          clean, responsive web apps and transforming raw data into valuable insights.
        </motion.p>

        <motion.div
          className="flex gap-4 flex-wrap justify-center lg:justify-start"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <a
            href={cv}
            className="px-6 py-3 bg-blue-600 text-white rounded-full text-sm sm:text-base font-medium 
            hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition"
          >
            View Resume
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-blue-600 text-blue-600 rounded-full text-sm sm:text-base font-medium
            hover:bg-blue-50 dark:text-blue-400 dark:border-blue-400 dark:hover:bg-blue-800 transition"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}
