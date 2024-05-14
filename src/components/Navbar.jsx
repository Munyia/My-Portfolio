import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='h-[13vh] relative bg-sec1 text-white px-5 flex py-5 justify-between font-playfair '>
      <div className='flex w-20%'>
        <p className='py-5 text-black justify-center align-middle font-serif font-bold hover:text-sec flex items-center text-3xl'>Web Developer</p>
      </div>
        <div className='flex font-playfair w-[60%] text-black justify-between items-center'>
            <Link to={'/'} className='flex w-[15%] hover:text-sec hover:text-lg  hover:underline'>Home</Link>
            <Link to={'/about'} className='flex w-[15%] hover:text-sec hover:text-lg  hover:underline'>About</Link>
            <Link to={'/education'} className='flex w-[15%] hover:text-sec hover:text-lg  hover:underline'>Education</Link>
            <Link to={'/experience'} className='flex w-[15%] hover:text-sec hover:text-lg  hover:underline'>Experience</Link>
            <Link to={'/projects'} className='flex w-[15%] hover:text-sec hover:text-lg  hover:underline'>Projects</Link>
            <Link to={'/skills'} className='flex w-[15%] hover:text-sec hover:text-lg  hover:underline'>Skills</Link>
        </div>

    </div>
  )
}

export default Navbar