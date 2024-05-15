import React from "react";

const Navbar = ({ scrollToSection, refs, activeSection }) => {
  return (
    <nav className="fixed top-0 w-full h-[12%] bg-sec1 text-white p-4 z-20">
      <div className='flex font-playfair gap-5  text-white justify-between items-center mx-auto'>
        <div className="w-[15%]">
        <p className="text-2xl ">Web Developer</p>
        </div>
        <div className="flex w-[50%] justify-between"> 
        <button onClick={() => scrollToSection(refs.homeRef)} className={`flex bg-sec text-pry p-2 rounded-md  ${activeSection === "Home" ? "underline" : ""}`}>
          Home
        </button>
        <button onClick={() => scrollToSection(refs.aboutRef)} className={`flex bg-sec text-pry p-2 rounded-md  ${activeSection === "About" ? "underline" : ""}`}>
          About
        </button>
        <button onClick={() => scrollToSection(refs.educationRef)} className={`flex bg-sec text-pry p-2 rounded-md   ${activeSection === "Education" ? "underline" : ""}`}>
          Education
        </button>
        <button onClick={() => scrollToSection(refs.experienceRef)} className={`flex bg-sec text-pry p-2 rounded-md  ${activeSection === "Experience" ? "underline" : ""}`}>
          Experience
        </button>
        <button onClick={() => scrollToSection(refs.projectsRef)} className={`flex bg-sec text-pry p-2 rounded-md   ${activeSection === "Projects" ? "underline" : ""}`}>
          Projects
        </button>
        <button onClick={() => scrollToSection(refs.toolsAndPlatformsRef)} className={`flex bg-sec text-pry p-2 rounded-md ${activeSection === "Tools And Platforms" ? "underline" : ""}`}>
          Tools and Platforms
        </button>
        <button onClick={() => scrollToSection(refs.skillsRef)} className={`flex bg-sec text-pry p-2 rounded-md   ${activeSection === "Skills" ? "underline" : ""}`}>
          Skills
        </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
