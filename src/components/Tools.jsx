import React, { useRef, useEffect, useState } from "react";
import Navbar from "./Navbar";
import Contact from "./Contact";
import { bg3 } from "../assets/res";

const Tools = () => {
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
            className="flex w-full  justify-center items-center relative"
          >
            <div className="w-[85%] mb-14 flex flex-col text-2xl font-extralight  gap-5 justify-center items-center text-white">
            <div className={`transform transition-transform duration-1000 ease-in-out ${visible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
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
            </div>
          </section>
        
        </div>
        <Contact />
      </div>
    </div>
  );
};

export default Tools;
