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

        {/* Intro */}
        <motion.p
          className="max-w-3xl mx-auto text-lg text-center mb-14
          text-gray-700 dark:text-gray-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          I’m <strong>Kunal</strong>, a <strong>Full Stack Developer</strong> with a
          strong interest in <strong>Data Analytics</strong>. I enjoy building
          scalable web applications, APIs, and dashboards that solve real-world
          problems.
        </motion.p>

        {/* Cards */}
        <motion.div
          className="grid sm:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            variants={item}
            whileHover={{ y: -6 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold mb-3 text-blue-600 dark:text-blue-400">
              🚀 Full Stack Development
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Building responsive frontend interfaces and robust backend systems
              using React, Django, REST APIs, and modern web technologies.
            </p>
          </motion.div>

          <motion.div
            variants={item}
            whileHover={{ y: -6 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold mb-3 text-blue-600 dark:text-blue-400">
              📊 Data Analytics
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Transforming raw data into actionable insights using Python, SQL,
              Power BI, and interactive dashboards.
            </p>
          </motion.div>

          <motion.div
            variants={item}
            whileHover={{ y: -6 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold mb-3 text-blue-600 dark:text-blue-400">
              🎯 Career Goal
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              To work as a Full Stack Developer where I can combine problem-
              solving, system design, and data-driven thinking.
            </p>
          </motion.div>

          <motion.div
            variants={item}
            whileHover={{ y: -6 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold mb-3 text-blue-600 dark:text-blue-400">
              💡 Learning & Growth
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Continuously improving skills in Angular, Next.js, advanced SQL,
              and backend architecture.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
