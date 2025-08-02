
import logoLight from '../assets/logo_light.png';
import logoDark from '../assets/logo_dark.png';
import { useTheme } from "../context/ThemeContext";

import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X, Github, Linkedin } from "lucide-react";

export default function Navbar() {
  
  const [menuOpen, setMenuOpen] = useState(false);
  const { darkMode, toggleTheme } = useTheme();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav
      className='bg-white dark:bg-gray-900 text-gray-900 dark:text-white fixed w-full top-0 z-50 shadow'
    >

      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={darkMode ? logoDark : logoLight} alt="Logo" className="w-10 h-10 object-contain transition-all duration-300"/>


          <span className="text-lg font-semibold">Kunal Shrimal</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 items-center">
          <a href="#home" className="hover:text-blue-600 dark:hover:text-blue-400">Home</a>
          <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400">About</a>
          <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400">Projects</a>
          <a href="#skills" className="hover:text-blue-600 dark:hover:text-blue-400">Skills</a>
          <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400">Contact</a>

          {/* Icons */}
          

          {/* Dark Mode Toggle */}
          <button onClick={toggleTheme} className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition">
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-3">
          <button onClick={toggleTheme}>
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button onClick={toggleMenu}>
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          <div className="flex gap-4 mt-2">
            <a href="https://github.com/KUNALSHRIMAL" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/kunalshrimal" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
