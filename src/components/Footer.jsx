import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const socialHover = {
    whileHover: { scale: 1.2, y: -4 },
    transition: { type: "spring", stiffness: 300 },
  };

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200
      pt-20 pb-8 border-t border-gray-200 dark:border-gray-700">
      <motion.div
        className="max-w-6xl mx-auto px-6 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* Name */}
        <h2 className="text-3xl font-extrabold mb-2
          text-transparent bg-clip-text
          bg-gradient-to-r from-blue-600 to-purple-500">
          Kunal Shrimal
        </h2>

        {/* Subtitle */}
        <p className="mb-8 text-sm text-gray-600 dark:text-gray-400">
          Full Stack Developer & Data Analyst — Building with code, driven by data.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-8">
          <motion.a
            href="https://github.com/KUNALSHRIMAL"
            target="_blank"
            rel="noopener noreferrer"
            {...socialHover}
            className="hover:text-blue-600 dark:hover:text-blue-400"
          >
            <Github size={20} />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/kunalshrimal"
            target="_blank"
            rel="noopener noreferrer"
            {...socialHover}
            className="hover:text-blue-600 dark:hover:text-blue-400"
          >
            <Linkedin size={20} />
          </motion.a>

          <motion.a
            href="mailto:2019pietcskunal86@gmail.com"
            {...socialHover}
            className="hover:text-blue-600 dark:hover:text-blue-400"
          >
            <Mail size={20} />
          </motion.a>
        </div>

        {/* Navigation */}
        <div className="flex justify-center gap-6 text-sm mb-6 flex-wrap">
          {["home", "about", "projects", "skills", "contact"].map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className="relative text-gray-600 dark:text-gray-400
                hover:text-blue-600 dark:hover:text-blue-400
                after:absolute after:left-0 after:-bottom-1
                after:h-[2px] after:w-0
                after:bg-gradient-to-r after:from-blue-500 after:to-purple-500
                after:transition-all after:duration-300
                hover:after:w-full"
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Kunal Shrimal. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
}
