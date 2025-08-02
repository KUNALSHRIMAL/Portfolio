import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/Scrolltop'



function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Optional: persist theme in localStorage and apply on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <>
      <main className="bg-white dark:bg-gray-900 transition-colors duration-500">
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Home darkMode={darkMode} />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
        <ScrollToTop />
      </main>
    </>
  )
}

export default App
