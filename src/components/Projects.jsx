import { useState } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    name: "Ecommerce Dashboard",
    image: "/src/assets/myproject1.png",
    video: "/src/assets/myproject1.mp4",
  },
  {
    name: "Blinkit Data Visual",
    image: "/src/assets/myproject2.png",
    video: "/src/assets/myproject2.mp4",
  },
  {
    name: "Blinkit Data Visual",
    image: "/src/assets/myproject2.png",
    video: "/src/assets/myproject2.mp4",
  },
  {
    name: "Blinkit Data Visual",
    image: "/src/assets/myproject2.png",
    video: "/src/assets/myproject2.mp4",
  },
  {
    name: "Blinkit Data Visual",
    image: "/src/assets/myproject2.png",
    video: "/src/assets/myproject2.mp4",
  },
  {
    name: "Blinkit Data Visual",
    image: "/src/assets/myproject2.png",
    video: "/src/assets/myproject2.mp4",
  },
  // Add more projects here
];

export default function Projects() {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section
      id="projects"
      className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white py-20 px-6"
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-4 text-blue-600 dark:text-blue-400"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </motion.h2>
        <motion.p
          className="mb-12 text-gray-600 dark:text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Hover or tap to preview
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative group overflow-hidden rounded-xl shadow-lg bg-white dark:bg-gray-800 transition-all duration-300"
              onMouseEnter={() => setActiveVideo(index)}
              onMouseLeave={() => setActiveVideo(null)}
              onClick={() => setActiveVideo(index)}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.15 }}
            >
              {activeVideo === index ? (
                <video
                  src={project.video}
                  autoPlay
                  muted
                  loop
                  className="w-full h-64 object-cover"
                />
              ) : (
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-64 object-cover"
                />
              )}
              <div className="absolute bottom-0 bg-black bg-opacity-60 text-white w-full text-center py-2 font-semibold text-sm sm:text-base ">
                {project.name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
