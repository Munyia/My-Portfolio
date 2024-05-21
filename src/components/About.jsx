import React, { useRef, useEffect, useState } from "react";
import Navbar from "./Navbar";
import Contact from "./Contact";
import { bg3 } from "../assets/res";

const About = () => {
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
        <div className="w-[85%] pb-[4%] mb-2 text-2xl font-extralight  px-10 flex flex-col gap-3 justify-center items-center text-white">
              <p>
                Hello, I'm Amaranjo Ndidi Vivian, a passionate Full Stack
                JavaScript Web Developer based in Abuja, Nigeria. With a
                background in Geography and Environment from Imo State
                University, I bring a unique blend of analytical thinking and
                creative problem-solving skills to the world of web development.
              </p>
              <p>
                As a Full Stack JavaScript Developer, I specialize in building
                robust and dynamic web applications using the MERN stack
                (MongoDB, Express.js, React, and Node.js). My journey into web
                development began with comprehensive technical training at
                GoMyCode, where I honed my skills in frontend technologies like
                React.js, JavaScript, Tailwind CSS, HTML, and CSS, ensuring
                responsive and intuitive user interfaces.
              </p>
              <p>
                During my time at GoMyCode, I delved into backend development,
                mastering Node.js and Express.js to create scalable APIs and
                integrate complex database solutions with MongoDB. Through
                hands-on projects, I gained expertise in implementing CRUD
                operations, authentication, and authorization mechanisms,
                ensuring data security and integrity in web applications.
              </p>
              <p>
                Prior to my transition into tech, I gained valuable leadership
                and project management experience while working as a Supervisor
                at Magic City. There, I led a team of staff members, implemented
                performance management strategies, and leveraged data analytics
                tools like Google Analytics to drive informed decision-making
                and optimize business processes.
              </p>
              <p>
                Additionally, my background in urban planning as an Urban
                Planner at Blue Libra Concept equipped me with research and
                analytical skills, which I apply to understand user behavior and
                design user-centric web experiences.
              </p>
              <p>
                I'm committed to continuous learning and professional growth,
                staying updated with the latest technologies and industry
                trends. When I'm not coding, you can find me exploring new
                technologies, collaborating on open-source projects, or enjoying
                outdoor adventures.
              </p>
            </div>
        </div>
        <Contact />
      </div>
    </div>
  );
};

export default About;
