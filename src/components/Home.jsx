import React from 'react'
import Image from '../assets/jose.jpg'
import { LuArrowRightCircle } from 'react-icons/lu'
import { Link } from 'react-scroll'


const Home = () => {
  return (
    <div name="home" className='h-screen w-full overflow-hidden mt-20 bg-gradient-to-b from-[#ffffff] via-[#ffffff] to-[#A0FFE3] text-white dark:bg-gradient-to-b  dark:from-[#000000] dark:via-[#000000] dark:to-[#323232] dark:text-white'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-5xl sm:text-7xl font-bold text-black dark:text-white'>
                    I'm a Software <span className='text-gray-500 dark:text-[#14FECC]'>Engineer</span>
                </h2>
                <p className='dark:text-gray-300 py-4 max-w-md text-black'>
                    Welcome to My Portfolio
                    I'm Jose Montes De Oca Morfin, and I'm on a journey to become a Software Engineer. Passionate about the world of code and problem-solving, I'm here to showcase my projects and experiences. Explore my work and discover how I'm turning my coding skills into solutions. Let's connect, innovate, and shape the future together.
                </p>
                <div>
                    <Link to="projects" smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-[#4b4949] to-[#b0b0b0] dark:from-[#14FFEC] dark:to-[#A0FFE3] dark:text-black cursor-pointer'>
                        Projects<span className='group-hover:rotate-90 group-hover:-translate-y-1 duration-300'><LuArrowRightCircle size={25} className='ml-3'/></span>
                    </Link>
                </div>
            </div>

            <div>
                <a href="https://www.linkedin.com/in/josemontesdeocamorfin/"><img src={Image} alt="Jose" className='rounded-3xl mx-auto w-2/3 shadow-2xl hover:scale-105 duration-200' /></a>
            </div>
        </div>
    </div>
  )
}

export default Home