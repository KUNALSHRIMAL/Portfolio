import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    name: "Ram Tent & Events",
    category: "Web Development",
    image: "./images/ramtent.png",
    video: "./videos/ramtent.mp4",
    description: "Business website with dynamic pages and contact workflow.",
    tech: ["React", "Vite", "Tailwind"],
  },
  {
    name: "Personal Portfolio",
    category: "Web Development",
    image: "./images/Portfolio.png",
    video: "./videos/portfolio.mp4",
    description: "Animated developer portfolio built with React & Framer Motion.",
    tech: ["React", "Tailwind", "Framer Motion"],
  },
  {
    name: "Student Management System",
    category: "Web Development",
    image: "./images/hdfc.png",
    video: "./videos/HDFC.mp4",
    description: "CRUD-based system with authentication and database integration.",
    tech: ["PHP", "MySQL", "Bootstrap"],
  },
  {
    name: "Canteen Management System",
    category: "Web Development",
    image: "./images/piet.png",
    video: "./videos/PIET.mp4",
    description: "Online ordering & payment-enabled canteen system.",
    tech: ["PHP", "MySQL", "Payment Gateway"],
  },
  {
    name: "Blinkit Data Analytics",
    category: "Data Analyst",
    image: "./images/blinkit.png",
    video: "./videos/blinkit.mp4",
    description: "Sales & operations dashboard with business insights.",
    tech: ["Python", "SQL", "Power BI"],
  },
  {
    name: "Credit Card Transaction Analysis",
    category: "Data Analyst",
    image: "./images/credit.png",
    video: "./videos/credit.mp4",
    description: "Fraud & spending pattern analysis using real datasets.",
    tech: ["Python", "Pandas", "SQL"],
  },
];

export default function Projects() {
  const [activeVideo, setActiveVideo] = useState(null);
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section
      id="projects"
      className="min-h-screen py-20 px-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h2
          className="text-4xl font-bold mb-4 text-center text-blue-600 dark:text-blue-400"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>

        <motion.p
          className="text-center mb-10 text-gray-600 dark:text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          Real-world projects showcasing full stack & analytics skills
        </motion.p>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {["All", "Web Development", "Data Analyst"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full border transition ${
                filter === cat
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.name}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.4 }}
                className="group bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl overflow-hidden"
                onMouseEnter={() => setActiveVideo(index)}
                onMouseLeave={() => setActiveVideo(null)}
                onClick={() => setActiveVideo(index)}
              >
                {/* Media */}
                {activeVideo === index ? (
                  <video
                    src={project.video}
                    autoPlay
                    muted
                    loop
                    className="w-full h-52 object-cover"
                  />
                ) : (
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-52 object-cover"
                  />
                )}

                {/* Content */}
                <div className="p-5 text-left">
                  <h3 className="text-lg font-semibold mb-1">
                    {project.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2 py-1 rounded bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
