import { motion } from "framer-motion";
import colabsvg from "../assets/colab.svg";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function Skills() {
  const frontend = [
    { name: "HTML", svg: "https://cdn.lordicon.com/yvaxaowk.json" },
    { name: "CSS", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Tailwind CSS", svg: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
    { name: "Vite", svg: "https://vitejs.dev/logo.svg" }
  ];

  const backend = [
    { name: "Django", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
    { name: "PHP", svg: "https://cdn.lordicon.com/keldjfda.json" },
    { name: "REST APIs", svg: "https://cdn.lordicon.com/nfuackpv.json" }
  ];

  const data = [
    { name: "Python", svg: "https://cdn.lordicon.com/mweirtfp.json" },
    { name: "SQL", svg: "https://cdn.lordicon.com/xqdfobxg.json" },
    { name: "Pandas", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
    { name: "NumPy", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
    { name: "Power BI", svg: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" },
    { name: "Excel", svg: "https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg" }
  ];

  const tools = [
    { name: "Git & GitHub", svg: "https://cdn.lordicon.com/jjxzcivr.json" },
    { name: "MySQL", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "VS Code", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: "Google Colab", svg: "https://cdn.lordicon.com/smafogdu.json" },
    { name: "Linux", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" }
  ];

  const SkillGrid = ({ title, skills }) => (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <h3 className="text-2xl font-semibold mb-6 text-center">{title}</h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 place-items-center">
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            variants={item}
            whileHover={{ y: -6, scale: 1.1 }}
            className="flex flex-col items-center gap-2 "
          >
            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-800 shadow">
              {skill.svg.endsWith(".json") ? (
                <lord-icon
                  src={skill.svg}
                  trigger="hover"
                  colors="primary:#b4b4b4,secondary:#2563eb"
                  style={{ width: "3rem", height: "3rem" }}
                ></lord-icon>
              ) : (
                <img src={skill.svg} alt={skill.name} className="w-8 h-8" />
              )}
            </div>
            <span className="text-sm text-center">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  return (
    <section
      id="skills"
      className="min-h-screen py-20 px-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-16 text-center text-blue-600 dark:text-blue-400"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Tech Stack
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-16">
          <SkillGrid title="Frontend" skills={frontend} />
          <SkillGrid title="Backend" skills={backend} />
        </div>

        <div className="mt-20 grid md:grid-cols-2 gap-16">
          <SkillGrid title="Data Analytics" skills={data} />
          <SkillGrid title="Tools & Platforms" skills={tools} />
        </div>
      </div>
    </section>
  );
}
