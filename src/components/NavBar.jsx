import React from 'react'
import { FaBars, FaTimes } from "react-icons/fa"
import { useState } from 'react';
import { Link } from 'react-scroll'

const NavBar = () => {

    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'about'
        },
        {
            id: 3,
            link: 'projects'
        },
        {
            id: 4,
            link: 'experience'
        },
        {
            id: 5,
            link: 'contact'
        },
    ];

  return (
    <div className='flex justify-between items-center w-full h-20 px-4 bg-[#14FECC] text-white dark:text-white dark:bg-[#000000] fixed top-0'>
        <div>
            <h1 className='text-5xl font-signture ml-2'>Jose</h1>
        </div>

        <ul className='hidden md:flex'>
            {links.map(({id, link}) => (
                <li key={id} className='px-4 cursor-pointer capitalize font-medium text-black dark:text-[#ffffff] hover:scale-105 duration-200'>
                    <Link to={link} smooth duration={500}>{link}</Link>
                </li>
            ))}
        </ul>

        <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-black dark:text-[#ffffff] md:hidden'>
            {nav ? <FaTimes size={30} />: <FaBars size={30} />}
        </div>

        {nav && (
            <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen text-black bg-gradient-to-b from-[#14FECC] to-[#A0FFE3] dark:from-[#000000] dark:to-[#323232] dark:text-[#ffffff]'>
                {links.map(({id, link}) => (
                    <li key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl'>
                        <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>{link}</Link>
                    </li>
                ))}
            </ul>
        )}        
    </div>
  )
}

export default NavBar