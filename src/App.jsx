import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import About from "./components/About"
import Contact from "./components/Contact"
import Education from "./components/Education"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import LandingPage from "./components/LandingPage"
import Tools from "./components/Tools"


function App() {
  

  return (
    <>
     <BrowserRouter>
     <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/about" element={<About/>} />
       <Route path="/contact" element={<Contact/>} />
       <Route path="/education" element={<Education/>} />
       <Route path="/experience" element={<Experience/>} />
       <Route path="/navbar" element={<Navbar/>} />
       <Route path="/projects" element={<Projects/>} />
       <Route path="/skills" element={<Skills/>} />
       <Route path="/tools" element={<Tools/>} />
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
