import React, { useRef, useEffect, useState } from "react";
import Navbar from "./Navbar";
import Contact from "./Contact";
import { bg3 } from "../assets/res";

const Projects = () => {
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
            ref={projectsRef}
            data-section="Projects"
            className="flex w-full  justify-center items-center relative "
          >
            <div className="w-[85%] mb-14 flex flex-col text-2xl font-extralight  gap-5 justify-center items-center text-white">
              <p className="item-center font-bold flex justify-center">
                Projects
              </p>
              <div className="flex flex-col gap-5">
                <p className="flex font-bold ">Book Web Application</p>
                <p>
                  <span className=" font-bold ">Technologies Used: </span>React,
                  Tailwind CSS, MongoDB, Express.js, Node.js
                </p>
                <div className=" inline-flex gap-4">
                <a href="https://word-smitters.vercel.app/" className=" bg-pry text-sec px-4 py-2 rounded " target="_blank" rel="noopener noreferrer">View Live</a>
                <a href="https://github.com/Munyia/WordSmitters" className="bg-pry text-sec   px-4 py-2  rounded" target="_blank" rel="noopener noreferrer">View Code</a>
                </div>
                <p>
                  <span className=" font-bold mr-3 "> Description:</span>
                  Developed a comprehensive book web application using the MERN
                  stack. Implemented CRUD operations to manage book data
                  effectively. Utilized Tailwind CSS for rapid and efficient
                  styling, ensuring a responsive and visually appealing user
                  interface.
                </p>
              </div>
              <div className="flex flex-col gap-5">
                <p className="flex font-bold ">Portfolio Website</p>
                <p>
                  {" "}
                  <span className="font-bold">Technologies Used: </span>React,
                  Tailwind CSS
                </p>
                <div className=" inline-flex gap-4">
                <a href="https://my-portfolio-omega-six-48.vercel.app/" className=" bg-pry text-sec px-4 py-2 rounded " target="_blank" rel="noopener noreferrer">View Live</a>
                <a href="https://github.com/Munyia/My-Portfolio" className="bg-pry text-sec   px-4 py-2  rounded" target="_blank" rel="noopener noreferrer">View Code</a>
                </div>
                <p>
                  <span className=" font-bold mr-3 "> Description:</span>{" "}
                  Designed and developed a personal portfolio website to
                  showcase projects and professional experience. Used React for
                  the frontend and Tailwind CSS for styling, ensuring a modern
                  and responsive design. The website highlights skills,
                  projects, and contact information, providing a comprehensive
                  overview of capabilities and accomplishments.
                </p>
              </div>
              {/* <div className="flex flex-col gap-5">
                <p className="flex font-bold ">Farming Connect</p>
                <p >
                <span className=" font-bold ">Technologies Used: </span>React, Tailwind CSS, MongoDB, Express.js,
                  Node.js
                </p>
                <div className=" inline-flex gap-4">
                <a href="https://my-portfolio-omega-six-48.vercel.app/" className=" bg-pry text-sec px-4 py-2 rounded " target="_blank" rel="noopener noreferrer">View Live</a>
                <a href="https://github.com/Munyia/My-Portfolio" className="bg-pry text-sec   px-4 py-2  rounded" target="_blank" rel="noopener noreferrer">View Code</a>
                </div>
                <p>
                  <span className=" font-bold mr-3 "> Description:</span>{" "}
                  Farming Connect is an innovative platform designed to foster
                  communication and information sharing among farmers. This
                  project creates a digital community where farmers can post
                  news, share updates, and exchange knowledge about agricultural
                  practices, market trends, and innovative farming techniques.
                </p>
              </div> */}
              <div className="flex flex-col gap-5">
                <p className="flex font-bold ">Apple Landing Page Clone</p>
                <p>
                <span className=" font-bold ">Technologies Used: </span>React and Tailwind CSS{" "}
                </p>
                <div className=" inline-flex gap-4">
                <a href="https://apple-coral-two.vercel.app/" className=" bg-pry text-sec px-4 py-2 rounded " target="_blank" rel="noopener noreferrer">View Live</a>
                <a href="https://github.com/shilohex/Apple" className="bg-pry text-sec   px-4 py-2  rounded" target="_blank" rel="noopener noreferrer">View Code</a>
                </div>
                <p>
                  <span className=" font-bold mr-3 "> Description:</span>
                  The Apple Landing Page Clone replicates the official Nigerian
                  Apple website's landing page, showcasing proficiency in modern
                  front-end technologies, particularly React and Tailwind CSS.
                  This project was undertaken to practice and demonstrate
                  advanced front-end development skills.
                </p>
              </div>
              <div className="flex flex-col gap-5">
                <p className="flex font-bold ">Coffee Page</p>
                <p>
                  <span className="flex font-bold ">Technologies Used:</span>{" "}
                  HTML and CSS
                </p>
                <div className=" inline-flex gap-4">
                <a href="https://coffee-page-react.vercel.app/" className=" bg-pry text-sec px-4 py-2 rounded " target="_blank" rel="noopener noreferrer">View Live</a>
                <a href="https://github.com/Munyia/Coffee-Page-React" className="bg-pry text-sec   px-4 py-2  rounded" target="_blank" rel="noopener noreferrer">View Code</a>
                </div>
                <p>
                  <span className=" font-bold mr-3 "> Description:</span>
                  The Coffee Page is a visually appealing web page that
                  showcases various types of coffee. Initially designed in
                  Figma, the page was developed using HTML and CSS to create a
                  clean, modern layout emphasizing design aesthetics and
                  usability.
                </p>
              </div>
              <div className="flex flex-col gap-5">
                <p className="flex font-bold ">DocPlanner clone Page</p>
                <p>
                  <span className="flex font-bold ">Technologies Used:</span>{" "}
                  HTML and CSS
                </p>
                <div className=" inline-flex gap-4">
                <a href="https://github.com/Munyia/DocPlanner" className=" bg-pry text-sec px-4 py-2 rounded " target="_blank" rel="noopener noreferrer">View Live</a>
                <a href="https://doc-planner-two.vercel.app/t" className="bg-pry text-sec   px-4 py-2  rounded" target="_blank" rel="noopener noreferrer">View Code</a>
                </div>
                <p>
                  <span className=" font-bold mr-3 "> Description:</span>
                  The DocPlanner Page is clone of the original DocPlanner page, the page was developed using HTML and CSS to create a
                  clean, modern layout emphasizing design aesthetics and
                  usability.
                </p>
              </div>
              <div className="flex flex-col gap-5">
                <p className="flex font-bold ">Dom</p>
                <p>
                  <span className="flex font-bold ">Technologies Used:</span>{" "}
                  HTML and CSS
                </p>
                <div className=" inline-flex gap-4">
                <a href="https://github.com/Munyia/DOM" className=" bg-pry text-sec px-4 py-2 rounded " target="_blank" rel="noopener noreferrer">View Live</a>
                <a href="https://dom-smoky.vercel.app/" className="bg-pry text-sec   px-4 py-2  rounded" target="_blank" rel="noopener noreferrer">View Code</a>
                </div>
                <p>
                  <span className=" font-bold mr-3 "> Description:</span>
                  The Dom Page is a project showing how JavaScript is used to increase and decrease total amount and quantity of goods that are stored in a cart.
                </p>
              </div>
              <p>Check out my Github for more projects i have done</p>
            </div>
          </section>
        
        </div>
        <Contact />
      </div>
    </div>
  );
};

export default Projects;
