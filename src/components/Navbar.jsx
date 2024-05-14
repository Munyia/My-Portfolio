import React from 'react'

const Navbar = () => {
  return (
    <div className='h-[13vh] relative bg-pry text-white px-5 flex py-5 justify-between font-playfair '>
      <div className='flex w-20%'>
        <p className='py-5 text-sec1 justify-center align-middle font-serif font-bold hover:text-white flex items-center text-3xl'>Web Developer</p>
      </div>
        <div className='flex font-playfair w-[50%] text-sec1 justify-between items-center'>
            <p className='flex w-[15%] hover:text-white hover:text-2xl hover:text-underline'>About</p>
            <p className='flex w-[15%] hover:text-white hover:text-2xl hover:text-underline'>Education</p>
            <p className='flex w-[15%] hover:text-white hover:text-2xl hover:text-underline'>Experience</p>
            <p className='flex w-[15%] hover:text-white hover:text-2xl hover:text-underline'>Projects</p>
            <p className='flex w-[15%] hover:text-white hover:text-2xl hover:text-underline'>Skills</p>
        </div>

    </div>
  )
}

export default Navbar