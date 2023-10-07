import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import reactImage from '../assets/react.png'
import python from '../assets/python.webp'
import java from '../assets/java.png'
import github from '../assets/github.png'
import tailwind from '../assets/tailwind.png'
import firebase from '../assets/firebase.png'
import mongodb from '../assets/mongodb.webp'

const Experience = () => {

    const techs = [
        {
            id: 1,
            tech: "HTML",
            src: html,
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            tech: "CSS",
            src: css,
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            tech: "JavaScript",
            src: javascript,
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            tech: "Python",
            src: python,
            style: 'shadow-yellow-300'
        },
        {
            id: 5,
            tech: "Java",
            src: java,
            style: 'shadow-red-600'
        },
        {
            id: 6,
            tech: "React",
            src: reactImage,
            style: 'shadow-blue-600'
        },
        {
            id: 7,
            tech: "GitHub",
            src: github,
            style: 'shadow-gray-400'
        },
        {
            id: 8,
            tech: "Tailwind",
            src: tailwind,
            style: 'shadow-sky-400'
        },
        {
            id: 9,
            tech: "Firebase",
            src: firebase,
            style: 'shadow-orange-300'
        },
        {
            id: 10,
            tech: "MongoDB",
            src: mongodb,
            style: 'shadow-green-400'
        },

    ]


  return (
    <div name="experience" className='bg-gradient-to-b from-[#A0FFE3] via-[white] to-[#ffffff] dark:from-[#323232] dark:to-[black] w-full h-screen pt-40'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <div>
                <p className='text-4xl font-bold border-b-4 border-black dark:border-[#14FECC] dark:text-white inline p-2 text-black'>Experience</p>
                <p className='py-6 text-black dark:text-white'>These are some of the Technologies that I have had some experience with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0 overflow-y-auto sm:overflow-visible'>
                {
                    techs.map(({id, tech, src, style}) => (
                        <div key={id} className={`shadow-lg hover:scale-110 duration-500 py-2 rounded-lg ${style}`}>
                            <img src={src} alt="" className='w-20 mx-auto' />
                            <p className='text-black dark:text-white'>{tech}</p>
                        </div>  
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Experience