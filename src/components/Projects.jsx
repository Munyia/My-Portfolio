import React, { useRef, useEffect, useState } from "react";
import Navbar from "./Navbar";
import Contact from "./Contact";
import { bg3 } from "../assets/res";

const Projects = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 100); // Delay to ensure smooth transition after component mounts

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative flex flex-col pt-[5%] h-screen overflow-hidden scroll-m-0">
      <img className="absolute inset-0 w-full h-full object-cover z-0" src={bg3} alt="" />
      <div className="relative z-10 w-full bg-[rgba(0,0,0,0.5)] h-full">
        <Navbar />
        <div className="flex flex-col ml-[15%]  overflow-y-auto h-full pt-16">
        <section
            className="flex w-full  justify-center items-center relative "
          >
            <div className="w-[85%] mb-14 flex flex-col text-2xl font-extralight  gap-5 justify-center items-center text-white">
            <div className={`transform transition-transform duration-1000 ease-in-out ${visible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
              <p className="item-center font-bold flex justify-center">
                Projects
              </p>
              <div className="flex flex-col gap-5">
                <p className="flex font-bold text-center justify-center mt-5">Book Web Application</p>
                <p>
                  <span className=" font-bold ">Technologies Used: </span>React,
                  Tailwind CSS, MongoDB, Express.js, Node.js
                </p>
                <div className=" inline-flex gap-4">
                <a href="https://word-smitters.vercel.app/" className="relative flex items-center p-2 justify-center h-10 bg-sec text-black font-bold rounded-2xl overflow-hidden transition duration-500 cursor-pointer hover:bg-black hover:text-white" target="_blank" rel="noopener noreferrer">View Live</a>
                <a href="https://github.com/Munyia/WordSmitters" className="relative flex items-center p-2 justify-center h-10 bg-sec text-black font-bold rounded-2xl overflow-hidden transition duration-500 cursor-pointer hover:bg-black hover:text-white" target="_blank" rel="noopener noreferrer">View Code</a>
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
                <p className="flex font-bold text-center justify-center mt-5">Portfolio Website</p>
                <p>
                  {" "}
                  <span className="font-bold">Technologies Used: </span>React,
                  Tailwind CSS
                </p>
                <div className=" inline-flex gap-4">
                <a href="https://my-portfolio-omega-six-48.vercel.app/" className="relative flex items-center p-2 justify-center h-10 bg-sec text-black font-bold rounded-2xl overflow-hidden transition duration-500 cursor-pointer hover:bg-black hover:text-white" target="_blank" rel="noopener noreferrer">View Live</a>
                <a href="https://github.com/Munyia/My-Portfolio" className="relative flex items-center p-2 justify-center h-10 bg-sec text-black font-bold rounded-2xl overflow-hidden transition duration-500 cursor-pointer hover:bg-black hover:text-white" target="_blank" rel="noopener noreferrer">View Code</a>
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
                <p className="flex font-bold text-center justify-center mt-5">Farming Connect</p>
                <p >
                <span className=" font-bold ">Technologies Used: </span>React, Tailwind CSS, MongoDB, Express.js,
                  Node.js
                </p>
                <div className=" inline-flex gap-4">
                <a href="https://my-portfolio-omega-six-48.vercel.app/" className=" relative flex items-center p-2 justify-center h-10 bg-sec text-black font-bold rounded-2xl overflow-hidden transition duration-500 cursor-pointer hover:bg-black hover:text-white " target="_blank" rel="noopener noreferrer">View Live</a>
                <a href="https://github.com/Munyia/My-Portfolio" className="relative flex items-center p-2 justify-center h-10 bg-sec text-black font-bold rounded-2xl overflow-hidden transition duration-500 cursor-pointer hover:bg-black hover:text-white" target="_blank" rel="noopener noreferrer">View Code</a>
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
                <p className="flex font-bold mt-5  text-center justify-center">Apple Landing Page Clone</p>
                <p>
                <span className=" font-bold ">Technologies Used: </span>React and Tailwind CSS{" "}
                </p>
                <div className=" inline-flex gap-4">
                <a href="https://apple-coral-two.vercel.app/" className=" relative flex items-center p-2 justify-center h-10 bg-sec text-black font-bold rounded-2xl overflow-hidden transition duration-500 cursor-pointer hover:bg-black hover:text-white" target="_blank" rel="noopener noreferrer">View Live</a>
                <a href="https://github.com/shilohex/Apple" className="relative flex items-center p-2 justify-center h-10 bg-sec text-black font-bold rounded-2xl overflow-hidden transition duration-500 cursor-pointer hover:bg-black hover:text-white" target="_blank" rel="noopener noreferrer">View Code</a>
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
                <p className="flex font-bold  text-center justify-center mt-5">Coffee Page</p>
                <p>
                  <span className="flex font-bold ">Technologies Used:</span>{" "}
                  HTML and CSS
                </p>
                <div className=" inline-flex gap-4">
                <a href="https://coffee-page-react.vercel.app/" className="relative flex items-center p-2 justify-center h-10 bg-sec text-black font-bold rounded-2xl overflow-hidden transition duration-500 cursor-pointer hover:bg-black hover:text-white" target="_blank" rel="noopener noreferrer">View Live</a>
                <a href="https://github.com/Munyia/Coffee-Page-React" className="relative flex items-center p-2 justify-center h-10 bg-sec text-black font-bold rounded-2xl overflow-hidden transition duration-500 cursor-pointer hover:bg-black hover:text-white" target="_blank" rel="noopener noreferrer">View Code</a>
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
                <p className="flex font-bold text-center justify-center mt-5">DocPlanner clone Page</p>
                <p>
                  <span className="flex font-bold ">Technologies Used:</span>{" "}
                  HTML and CSS
                </p>
                <div className=" inline-flex gap-4">
                <a href="https://github.com/Munyia/DocPlanner" className=" relative flex items-center p-2 justify-center h-10 bg-sec text-black font-bold rounded-2xl overflow-hidden transition duration-500 cursor-pointer hover:bg-black hover:text-white" target="_blank" rel="noopener noreferrer">View Live</a>
                <a href="https://doc-planner-two.vercel.app/t" className="relative flex items-center p-2 justify-center h-10 bg-sec text-black font-bold rounded-2xl overflow-hidden transition duration-500 cursor-pointer hover:bg-black hover:text-white" target="_blank" rel="noopener noreferrer">View Code</a>
                </div>
                <p>
                  <span className=" font-bold mr-3 "> Description:</span>
                  The DocPlanner Page is clone of the original DocPlanner page, the page was developed using HTML and CSS to create a
                  clean, modern layout emphasizing design aesthetics and
                  usability.
                </p>
              </div>
              <div className="flex flex-col gap-5">
                <p className="flex font-bold text-center justify-center mt-5">Dom</p>
                <p>
                  <span className="flex font-bold ">Technologies Used:</span>{" "}
                  HTML and CSS
                </p>
                <div className=" inline-flex gap-4">
                <a href="https://github.com/Munyia/DOM" className=" relative flex items-center p-2 justify-center h-10 bg-sec text-black font-bold rounded-2xl overflow-hidden transition duration-500 cursor-pointer hover:bg-black hover:text-white" target="_blank" rel="noopener noreferrer">View Live</a>
                <a href="https://dom-smoky.vercel.app/" className="relative flex items-center p-2 justify-center h-10 bg-sec text-black font-bold rounded-2xl overflow-hidden transition duration-500 cursor-pointer hover:bg-black hover:text-white" target="_blank" rel="noopener noreferrer">View Code</a>
                </div>
                <p>
                  <span className=" font-bold mr-3 "> Description:</span>
                  The Dom Page is a project showing how JavaScript is used to increase and decrease total amount and quantity of goods that are stored in a cart.
                </p>
              </div>
              <p>Check out my Github for more projects i have done</p>
            </div>
            </div>
          </section>
        
        </div>
        <Contact />
      </div>
    </div>
  );
};

export default Projects;
