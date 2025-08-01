import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white py-16 px-6"
    >
      <div className="max-w-4xl mx-auto text-center ">
        <motion.h2
          className="text-4xl font-bold mb-6 text-blue-600 dark:text-blue-400"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <motion.p
          className="text-lg mb-10 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Hello! I'm <strong>Kunal</strong>, a passionate <strong>Full Stack Web Developer</strong> and aspiring <strong>Data Analyst</strong> from India. I love building interactive websites, dashboards, and solving problems with clean and efficient code.
        </motion.p>

        <motion.div
          className="grid sm:grid-cols-2 gap-6 text-left"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">🚀 Web Development</h3>
            <p>
              I specialize in building fast, accessible, and responsive websites using React, Tailwind, Django, and REST APIs.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">📊 Data Analytics</h3>
            <p>
              I use Python, SQL, and Power BI to turn raw data into meaningful insights and create interactive dashboards.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">🎯 My Goal</h3>
            <p>
              To combine creative development with analytical thinking, helping businesses grow and make better decisions.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">💡 Learning & Growth</h3>
            <p>
              I'm constantly learning new tools like Next.js, Angular, and advanced SQL to stay ahead in the tech world.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
