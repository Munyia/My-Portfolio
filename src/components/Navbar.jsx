import React from "react";

const Navbar = ({ scrollToSection, refs, activeSection }) => {
  return (
    <nav className="fixed top-0 w-full h-[12%] bg-sec1 text-white p-4 z-20">
      <div className='flex font-playfair  text-white justify-between items-center mx-auto'>
        <div className="w-[15%] gap-5">
        <p className="text-2xl ">Web Developer</p>
        </div>
        <div className="flex w-[80%] justify-between items-center text-center ">
        <button onClick={() => scrollToSection(refs.homeRef)} className={`flex w-[10%] hover:text-sec hover:text-lg hover:underline ${activeSection === "Home" ? "underline" : ""}`}>
          Home
        </button>
        <button onClick={() => scrollToSection(refs.aboutRef)} className={`flex w-[10%] hover:text-sec hover:text-lg hover:underline ${activeSection === "About" ? "underline" : ""}`}>
          About
        </button>
        <button onClick={() => scrollToSection(refs.educationRef)} className={`flex w-[10%] hover:text-sec hover:text-lg hover:underline ${activeSection === "Education" ? "underline" : ""}`}>
          Education
        </button>
        <button onClick={() => scrollToSection(refs.experienceRef)} className={`flex w-[10%] hover:text-sec hover:text-lg hover:underline ${activeSection === "Experience" ? "underline" : ""}`}>
          Experience
        </button>
        <button onClick={() => scrollToSection(refs.projectsRef)} className={`flex w-[10%] hover:text-sec hover:text-lg hover:underline ${activeSection === "Projects" ? "underline" : ""}`}>
          Projects
        </button>
        <button onClick={() => scrollToSection(refs.toolsAndPlatformsRef)} className={`flex w-[15%] hover:text-sec hover:text-lg hover:underline ${activeSection === "Tools And Platforms" ? "underline" : ""}`}>
          Tools and Platforms
        </button>
        <button onClick={() => scrollToSection(refs.skillsRef)} className={`flex w-[10%] hover:text-sec hover:text-lg hover:underline ${activeSection === "Skills" ? "underline" : ""}`}>
          Skills
        </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
