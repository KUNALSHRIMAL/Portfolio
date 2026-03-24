import { motion } from "framer-motion";

export default function About() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="about"
      className="min-h-screen py-20 px-6
      bg-gray-100 dark:bg-gray-900
      text-gray-900 dark:text-white"
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.h2
          className="text-4xl font-bold mb-6 text-center
          text-blue-600 dark:text-blue-400"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        {/* Intro (FULL STACK POSITIONING) */}
        <motion.p
          className="max-w-3xl mx-auto text-lg text-center mb-14
          text-gray-700 dark:text-gray-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          I’m <strong>Kunal</strong>, a <strong>Full Stack Developer</strong> who
          enjoys building complete web applications — from designing responsive
          user interfaces to developing backend APIs and working with databases.
          I focus on writing clean, scalable code and solving real-world problems
          through end-to-end solutions.
        </motion.p>

        {/* Cards */}
        <motion.div
          className="grid sm:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Frontend */}
          <motion.div
            variants={item}
            whileHover={{ y: -6 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-2xl
            shadow-md hover:shadow-xl transition"
          >
            <div className="flex items-center gap-2 mb-3">
              <lord-icon
                src="https://cdn.lordicon.com/gvtjlyjf.json"
                trigger="hover"
                colors="primary:#2563eb,secondary:#d9d9d9"
                style={{ width: "24px", height: "24px" }}
              ></lord-icon>

              <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                Frontend Engineering
              </h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300">
              Crafting responsive and interactive user interfaces using React,
              Tailwind CSS, and modern JavaScript, with a strong focus on
              performance and user experience.
            </p>
          </motion.div>

          {/* Backend */}
          <motion.div
            variants={item}
            whileHover={{ y: -6 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-2xl
            shadow-md hover:shadow-xl transition"
          >

            <h3 className="text-xl font-semibold mb-3 text-blue-600 dark:text-blue-400">
              <lord-icon
                src="https://cdn.lordicon.com/nfuackpv.json"
                trigger="hover"
                stroke="bold"
                colors="primary:#b4b4b4,secondary:#2563eb"
                style={{ width: "1.5rem", height: "1.5rem" }}>
              </lord-icon> Backend & APIs
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Designing and building backend systems using Django, PHP, and REST
              APIs, handling authentication, business logic, and secure data
              flow.
            </p>
          </motion.div>

          {/* Database */}
          <motion.div
            variants={item}
            whileHover={{ y: -6 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-2xl
            shadow-md hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold mb-3 text-blue-600 dark:text-blue-400 align-middle">
              <lord-icon
                src="https://cdn.lordicon.com/xqdfobxg.json"
                trigger="hover"
                colors="primary:#2563eb,secondary:#b4b4b4"
                style={{ width: "1.5rem", height: "1.5rem" }}>
              </lord-icon> <span>Databases & Data Handling</span>
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Working with relational databases like MySQL and writing efficient
              SQL queries to manage, optimize, and analyze application data.
            </p>
          </motion.div>

          {/* Engineering Mindset */}
          <motion.div
            variants={item}
            whileHover={{ y: -6 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-2xl
            shadow-md hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold mb-3 text-blue-600 dark:text-blue-400">
              <lord-icon
                src="https://cdn.lordicon.com/srupsmbe.json"
                trigger="hover"
                colors="primary:#2563eb,secondary:#b4b4b4"
                style={{ width: "1.5rem", height: "1.5rem" }}>
              </lord-icon> Engineering Mindset
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              I approach development with a problem-solving mindset — breaking
              down requirements, designing systems, and continuously improving
              code quality, scalability, and maintainability.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
