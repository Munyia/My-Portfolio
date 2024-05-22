import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({  }) => {
  return (
    <nav className="fixed top-0 w-full h-[12%] bg-sec1 text-white p-4 z-20">
      <div className='flex font-playfair gap-5  text-white justify-between items-center mx-auto'>
        <div className="w-[15%]">
        <p className="text-2xl ">Web Developer</p>
        </div>
        <div className="flex w-[50%] justify-between"> 
        <Link to={'/'}   className={`flex bg-sec text-pry p-2 rounded-md  `}>
          Home
        </Link>
        <Link to={'/about'} className={`flex bg-sec text-pry p-2 rounded-md  `}>
          About
        </Link>
        <Link to={'/education'} className={`flex bg-sec text-pry p-2 rounded-md  `}>
          Education
        </Link>
        <Link to={"/experience"} className={`flex bg-sec text-pry p-2 rounded-md  `}>
          Experience
        </Link>
        <Link to={'/projects'}  className={`flex bg-sec text-pry p-2 rounded-md  `}>
          Projects
        </Link>
        <Link to={'/tools'} className={`flex bg-sec text-pry p-2 rounded-md `}>
          Tools and Platforms
        </Link>
        <Link to={'/skills'} className={`flex bg-sec text-pry p-2 rounded-md  `}>
          Skills
        </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
