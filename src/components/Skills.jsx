import { motion } from "framer-motion";
import colabsvg from "../assets/colab.svg"
const fadeInUp = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1 }
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Skills() {
  const webDevSkills = [
    { name: "HTML", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "Django", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
    { name: "PHP", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
    { name: "React", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Vite", svg: "https://vitejs.dev/logo.svg" },
    { name: "Tailwind", svg: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" }
  ];

  const dataSkills = [
    { name: "Python", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Pandas", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
    { name: "NumPy", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
    { name: "Power BI", svg: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" },
    { name: "Excel", svg: "https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg" },
    { name: "Matplotlib", svg: "https://matplotlib.org/_static/images/logo2.svg" },
    { name: "Seaborn", svg: "https://seaborn.pydata.org/_static/logo-wide-lightbg.svg" },
    { name: "SQL", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" }
  ];

  const tools = [
    { name: "GitHub", svg: "https://www.svgrepo.com/show/303615/github-icon-1-logo.svg" },
    { name: "MySQL", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "VS Code", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: "Google Colab", svg: colabsvg },
    { name: "Linux", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" }
  ];

  const SkillGrid = ({ title, skills }) => (
    <div>
      <h3 className="text-2xl font-semibold mb-6 text-center ">{title}</h3>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 place-items-center"
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            variants={fadeInUp}
            whileHover={{ scale: 1.35 }}
            whileTap={{scale: 1.15}}
            className="flex flex-col items-center cursor-pointer"
          >
            <img src={skill.svg} alt={skill.name} className="w-12 h-12 mb-2" />
            <span className="text-sm text-center">{skill.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );

  return (
    <section
      id="skills"
      className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white py-16 px-6"
    >
      <div className="max-w-6xl mx-auto ">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-blue-600 dark:text-blue-400"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          My Skills
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-16">
          <SkillGrid title="Web Development" skills={webDevSkills} />
          <SkillGrid title="Data Analysis" skills={dataSkills} />
        </div>

        <div className="mt-20">
          <SkillGrid title="Tools & Platforms" skills={tools} />
        </div>
      </div>
    </section>
  );
}
