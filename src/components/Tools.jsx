import React, { useRef, useEffect, useState } from "react";
import Navbar from "./Navbar";
import Contact from "./Contact";
import { bg3 } from "../assets/res";

const Tools = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const educationRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const toolsAndPlatformsRef = useRef(null);
  const skillsRef = useRef(null);

  const [activeSection, setActiveSection] = useState("");

  const refs = {
    homeRef,
    aboutRef,
    educationRef,
    experienceRef,
    projectsRef,
    toolsAndPlatformsRef,
    skillsRef,
  };

  

  const handleScroll = () => {
    const homeTop = homeRef.current.getBoundingClientRect().top;
    const aboutTop = aboutRef.current.getBoundingClientRect().top;
    const educationTop = educationRef.current.getBoundingClientRect().top;
    const experienceTop = experienceRef.current.getBoundingClientRect().top;
    const projectsTop = projectsRef.current.getBoundingClientRect().top;
    const toolsAndPlatformsTop = toolsAndPlatformsRef.current.getBoundingClientRect().top;
    const skillsTop = skillsRef.current.getBoundingClientRect().top;
    
    const offset = window.innerHeight / 2;

    if (skillsTop <= offset) {
      setActiveSection("Skills");
    } else if (projectsTop <= offset) {
      setActiveSection("Projects");
    } else if (toolsAndPlatformsTop <= offset) {
      setActiveSection("Tools And Platforms");
    } else if (experienceTop <= offset) {
      setActiveSection("Experience");
    } else if (educationTop <= offset) {
      setActiveSection("Education");
    } else if (aboutTop <= offset) {
      setActiveSection("About");
    } else if (homeTop <= offset) {
      setActiveSection("Home");
    } else {
      setActiveSection("");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.getAttribute("data-section"));
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    Object.values(refs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      Object.values(refs).forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [refs]);

  const scrollToSection = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative flex flex-col pt-[5%] h-screen overflow-hidden scroll-m-0">
      <img className="absolute inset-0 w-full h-full object-cover z-0" src={bg3} alt="" />
      <div className="relative z-10 w-full bg-[rgba(0,0,0,0.5)] h-full">
        <Navbar
          scrollToSection={scrollToSection}
          refs={{ homeRef, aboutRef, educationRef, experienceRef, projectsRef, toolsAndPlatformsRef, skillsRef }}
          activeSection={activeSection}
        />
        <div className="flex flex-col ml-[15%]  overflow-y-auto h-full pt-16">
        <section
            ref={toolsAndPlatformsRef}
            data-section="Tools And Platforms"
            className="flex w-full  justify-center items-center relative"
          >
            <div className="w-[85%] mb-14 flex flex-col text-2xl font-extralight  gap-5 justify-center items-center text-white">
              <p className="item-center font-bold flex justify-center">
              Tools and Platforms
              </p>
              <p>I rely on a select set of tools and platforms to streamline my development process:</p>
              <div>
              <p className="font-bold">Postman</p>
              <p>Postman simplifies API testing and documentation, ensuring the reliability and efficiency of my APIs.</p>
              </div>
              <div>
              <p  className="font-bold">Render</p>
              <p>Render provides hassle-free deployment for web applications, allowing me to focus on building exceptional products.</p>
              </div>
              <div>
              <p  className="font-bold">Vercel</p>
              <p>Vercel offers lightning-fast hosting for front-end projects, ensuring optimal performance and global availability.</p>
              </div>
              <div>
                <p  className="font-bold">Git & GitHub</p>
                <p>Git and GitHub facilitate seamless version control and collaboration, enhancing my workflow and project management.</p>
              </div>
              <div>
                <p  className="font-bold">Visual Studio Code</p>
                <p>Visual Studio Code is my go-to code editor, offering a rich feature set and unparalleled performance for all my development needs.</p>
              </div>
              <div>
                <p  className="font-bold">Sublime Text</p>
                <p>Sublime Text provides a lightweight and versatile text editing experience, ideal for quick edits and smaller projects.</p>
              </div>
            </div>
          </section>
        
        </div>
        <Contact />
      </div>
    </div>
  );
};

export default Tools;
