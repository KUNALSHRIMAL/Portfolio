import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    name: "Ram Tent And Events",
    category: "Web Development",
    image: "./src/assets/images/ramtent.png",
    video: "./src/assets/videos/ramtent.mp4",
  },
  {
    name: "Personal Portfolio",
    category: "Web Development",
    image: "./src/assets/images/Portfolio.png",
    video: "./src/assets/videos/portfolio.mp4",
  },
  {
    name: "Student management",
    category: "Web Development",
    image: "./src/assets/images/hdfc.png",
    video: "./src/assets/videos/HDFC.mp4",
  },
  {
    name: "Canteen management",
    category: "Web Development",
    image: "./src/assets/images/piet.png",
    video: "./src/assets/videos/PIET.mp4",
  },
  {
    name: "Jhulelal ice cream parlour",
    category: "Web Development",
    image: "./src/assets/images/julelal.png",
    video: "./src/assets/videos/julelal.mp4",
  },
  {
    name: "Blinkit Data Analytics",
    category: "Data Analyst",
    image: "./src/assets/images/blinkit.png",
    video: "./src/assets/videos/blinkit.mp4",
  },
  {
    name: "Credit card transaction Analytics",
    category: "Data Analyst",
    image: "./src/assets/images/credit.png",
    video: "./src/assets/videos/credit.mp4",
  },
  {
    name: "E commerce Analysis",
    category: "Data Analyst",
    image: "./src/assets/images/sales.png",
    video: "./src/assets/videos/sales.mp4",
  },
  {
    name: "Capstone Sales Analysis",
    category: "Data Analyst",
    image: "./src/assets/images/salespy.png",
    video: "./src/assets/videos/salespy.mp4",
  },
];

export default function Projects() {
  const [activeVideo, setActiveVideo] = useState(null);
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section
      id="projects"
      className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white py-20 px-6"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <motion.h2
          className="text-4xl font-bold mb-4 text-blue-600 dark:text-blue-400"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </motion.h2>
        <motion.p
          className="mb-8 text-gray-600 dark:text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Hover or tap to preview
        </motion.p>

        {/* Filter Navbar */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {["All", "Web Development", "Data Analyst"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full font-medium border transition ${
                filter === cat
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white border-gray-300 dark:border-gray-600"
              } hover:scale-105`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.name}
                className="relative group overflow-hidden rounded-xl shadow-lg bg-white dark:bg-gray-800 transition-all duration-300"
                onMouseEnter={() => setActiveVideo(index)}
                onMouseLeave={() => setActiveVideo(null)}
                onClick={() => setActiveVideo(index)}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                {activeVideo === index ? (
                  <video
                    src={project.video}
                    autoPlay
                    muted
                    loop
                    className="w-full h-64 object-fill"
                  />
                ) : (
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-64 object-fill"
                  />
                )}
                <div className="absolute bottom-0 bg-black bg-opacity-60 text-white w-full text-center py-2 font-semibold text-sm sm:text-base">
                  {project.name}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
