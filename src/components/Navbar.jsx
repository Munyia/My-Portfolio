import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ scrollToSection, refs, activeSection }) => {
  return (
    <nav className="fixed top-0 w-full h-[12%] bg-sec1 text-white p-4 z-20">
      <div className='flex font-playfair gap-5  text-white justify-between items-center mx-auto'>
        <div className="w-[15%]">
        <p className="text-2xl ">Web Developer</p>
        </div>
        <div className="flex w-[50%] justify-between"> 
        <Link to={'/'} onClick={() => scrollToSection(refs.homeRef)} className={`flex bg-sec text-pry p-2 rounded-md  ${activeSection === "Home" ? "underline" : ""}`}>
          Home
        </Link>
        <Link to={'/about'} onClick={() => scrollToSection(refs.aboutRef)} className={`flex bg-sec text-pry p-2 rounded-md  ${activeSection === "About" ? "underline" : ""}`}>
          About
        </Link>
        <Link to={'/education'} onClick={() => scrollToSection(refs.educationRef)} className={`flex bg-sec text-pry p-2 rounded-md   ${activeSection === "Education" ? "underline" : ""}`}>
          Education
        </Link>
        <Link to={"/experience"} onClick={() => scrollToSection(refs.experienceRef)} className={`flex bg-sec text-pry p-2 rounded-md  ${activeSection === "Experience" ? "underline" : ""}`}>
          Experience
        </Link>
        <Link to={'/projects'} onClick={() => scrollToSection(refs.projectsRef)} className={`flex bg-sec text-pry p-2 rounded-md   ${activeSection === "Projects" ? "underline" : ""}`}>
          Projects
        </Link>
        <Link to={'/tools'} onClick={() => scrollToSection(refs.toolsAndPlatformsRef)} className={`flex bg-sec text-pry p-2 rounded-md ${activeSection === "Tools And Platforms" ? "underline" : ""}`}>
          Tools and Platforms
        </Link>
        <Link to={'/skills'} onClick={() => scrollToSection(refs.skillsRef)} className={`flex bg-sec text-pry p-2 rounded-md   ${activeSection === "Skills" ? "underline" : ""}`}>
          Skills
        </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
