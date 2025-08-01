import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 pt-16 pb-8  border-t border-gray-200 dark:border-gray-700">
      <motion.div
        className="max-w-6xl mx-auto px-6 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* Name */}
        <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-purple-500 mb-2">
          Kunal Shrimal
        </h2>

        {/* Subtitle */}
        <p className="mb-6 text-sm text-gray-600 dark:text-gray-400">
          Full Stack Developer & Data Analyst — Building with code, driven by data.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-6">
          <motion.a
            href="https://github.com/KUNALSHRIMAL"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition transform hover:-translate-y-1"
            whileHover={{ scale: 1.2 }}
          >
            <Github className="w-5 h-5" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/kunalshrimal"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition transform hover:-translate-y-1"
            whileHover={{ scale: 1.2 }}
          >
            <Linkedin className="w-5 h-5" />
          </motion.a>
          <motion.a
            href="mailto:2019pietcskunal86@gmail.com"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition transform hover:-translate-y-1"
            whileHover={{ scale: 1.2 }}
          >
            <Mail className="w-5 h-5" />
          </motion.a>
        </div>

        {/* Nav Links */}
        <div className="flex justify-center gap-4 text-sm mb-4 flex-wrap">
          {["home", "about", "projects", "skills", "contact"].map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className="relative text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              <span className="hover-underline">{id.charAt(0).toUpperCase() + id.slice(1)}</span>
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">
          &copy; {new Date().getFullYear()} Kunal Shrimal. All rights reserved.
        </p>
      </motion.div>

      {/* Add hover underline effect */}
      <style>{`
        .hover-underline {
          position: relative;
          display: inline-block;
        }
        .hover-underline::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -2px;
          width: 0%;
          height: 2px;
          background: linear-gradient(to right, #3b82f6, #9333ea);
          transition: width 0.3s ease;
        }
        .hover-underline:hover::after {
          width: 100%;
        }
      `}</style>
    </footer>
  );
}
