import React from 'react'
import Navbar from './Navbar';
import Contact from './Contact';
import { bg3 } from "../assets/res";

const Education = () => {
  return (
    <div className="relative flex h-screen overflow-hidden scroll-m-0">
    <img
      className="absolute inset-0 w-full h-full object-cover z-0"
      src={bg3}
      alt=""
    />
    <div className="relative z-10 w-full bg-[rgba(0,0,0,0.7)]">
      <Navbar />
      <div className="flex h-full">
        <Contact />
        <div className="flex w-full justify-center items-center relative">
          <div className="w-[85%] mb-14 flex flex-col   justify-center items-center text-white">
              <h1 className="text-3xl font-bold my-3">Education and Training</h1>
              <div className="w-full">
                <h2 className="text-2xl font-bold mt-3 mb-4">Technical Training</h2>
                <p>
                  <strong>GoMyCode, Wuse 2, Abuja</strong>
                  <br />
                  Full-Stack JavaScript
                  <br />
                  2023-2024
                </p>
              </div>

              <div className="w-full">
                <h2 className="text-2xl font-bold mt-3 mb-4">Professional Training</h2>
                <p>
                  <strong>Clemads Global Consulting Ltd, Garki 1, Abuja</strong>
                  <br />
                  Human Resource Management
                  <br />
                  Project Management
                  <br />
                  International Relations & Diplomacy
                  <br />
                  2021
                </p>
              </div>

              <div className="w-full">
                <h2 className="text-2xl font-bold mb-3">Education</h2>
                <p>
                  <strong>Imo State University, Owerri, Nigeria</strong>
                  <br />
                  Bachelor of Science (BSc) in Geography & Environmental Management
                  <br />
                  2014-2018
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education