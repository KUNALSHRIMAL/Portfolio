import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/Scrolltop';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // On mount: Apply saved theme or system default
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);

    if (newMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Kunal Shrimal | Full Stack Developer & Data Analyst</title>
        <meta
          name="description"
          content="Full Stack Developer & Data Analyst – Building dynamic websites, dashboards, and solving data problems."
        />
        <meta
          name="keywords"
          content="Kunal Shrimal, portfolio, react developer, web development, data analytics, full stack, django, power bi"
        />
        <meta name="author" content="Kunal Shrimal" />
        <link rel="canonical" href="https://kunalshrimal.github.io/Portfolio/" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kunalshrimal.github.io/Portfolio/" />
        <meta property="og:title" content="Kunal Shrimal | Full Stack Developer & Analyst" />
        <meta property="og:description" content="Explore Kunal's portfolio with dynamic websites and data dashboards." />
        <meta property="og:image" content="https://kunalshrimal.github.io/Portfolio/preview.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://kunalshrimal.github.io/Portfolio/" />
        <meta name="twitter:title" content="Kunal Shrimal | Portfolio" />
        <meta name="twitter:description" content="Explore Kunal's projects and skills as a developer and analyst." />
        <meta name="twitter:image" content="https://kunalshrimal.github.io/Portfolio/preview.jpg" />
      </Helmet>

      {/* Main Site */}
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
  );
}

export default App;
