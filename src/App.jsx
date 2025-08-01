import { useState,useEffect} from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/Scrolltop'



function App() {
   const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "light";
    return true; // default
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      // localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      // localStorage.setItem("theme", "light");
    }
  }, [darkMode]);
  return (
    <>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
      <Home darkMode={darkMode}/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
      <Footer/>
      <ScrollToTop/>
     </>
  )
}

export default App
