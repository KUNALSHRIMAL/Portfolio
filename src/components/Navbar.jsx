import logoLight from "../assets/logo_light.png";
import logoDark from "../assets/logo_dark.png";
import { useTheme } from "../context/ThemeContext";

import { useState } from "react";
import { Moon, Sun, Menu, X, Github, Linkedin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { darkMode, toggleTheme } = useTheme();

  const navItem = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-white/80 dark:bg-transparent backdrop-blur-0 fixed w-full top-0 z-50 shadow"
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          className="flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
        >
          <img
            src={darkMode ? logoDark : logoLight}
            alt="Logo"
            className="w-10 h-10 object-contain"
          />
          <span className="text-lg font-semibold">Kunal Shrimal</span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 items-center">
          {["Home", "About", "Projects", "Skills", "Contact"].map(
            (item, index) => (
              <motion.a
                key={index}
                href={`#${item.toLowerCase()}`}
                variants={navItem}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.1 }}
                className="relative hover:text-blue-600 dark:hover:text-blue-400"
                whileHover={{ y: -2 }}
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all duration-300 hover:w-full" />
              </motion.a>
            )
          )}

          {/* Dark Mode Toggle */}
          <motion.button
            onClick={toggleTheme}
            whileHover={{ rotate: 15, scale: 1.1 }}
            className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-3">
          <motion.button
            onClick={toggleTheme}
            whileTap={{ scale: 0.9 }}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </motion.button>

          <motion.button
            onClick={() => setMenuOpen(!menuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="md:hidden px-4 pb-4 flex flex-col gap-4 bg-white dark:bg-gray-800"
          >
            {["Home", "About", "Projects", "Skills", "Contact"].map(
              (item, index) => (
                <motion.a
                  key={index}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.08 }}
                >
                  {item}
                </motion.a>
              )
            )}

            <div className="flex gap-4 mt-2">
              <motion.a
                href="https://github.com/KUNALSHRIMAL"
                target="_blank"
                whileHover={{ scale: 1.2 }}
              >
                <Github />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/kunalshrimal"
                target="_blank"
                whileHover={{ scale: 1.2 }}
              >
                <Linkedin />
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
