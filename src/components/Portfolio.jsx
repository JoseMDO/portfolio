import React from 'react'
import reactWeather from '../assets/portfolio/reactWeather.jpg'
import arrayDestruct from '../assets/portfolio/arrayDestruct.jpg'
import installNode from '../assets/portfolio/installNode.jpg'

const Portfolio = () => {

    const projects = [
        {
            id:1,
            src: reactWeather,
            demo: 'https://proud-hill-042b4e210.3.azurestaticapps.net/',
            code: "https://gentle-dune-050b92710.3.azurestaticapps.net/"
        },
        {
            id:2,
            src: arrayDestruct,
            demo: 'https://gentle-dune-050b92710.3.azurestaticapps.net/',
            code: 'https://gentle-dune-050b92710.3.azurestaticapps.net/'
        },
        {
            id:3,
            src: installNode,
            demo: 'https://proud-hill-042b4e210.3.azurestaticapps.net/',
            code: 'https://gentle-dune-050b92710.3.azurestaticapps.net/'
        },
    ]


  return (
    <div name="portfolio" className='bg-gradient-to-b from-[#14FECC] to-[#A0FFE3] dark:from-black dark:to-[#323232] dark:text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-black dark:border-[#14FECC]'>Projects</p>
                <p className='text-2xl py-6'>Test out some of my projects here!</p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                {
                projects.map(({ id, src, demo, code }) => (
                        <div key={id} className='group shadow-lg shadow-black dark:shadow-[#14FECC] rounded-lg text-white hover:bg-gradient-to-t from-[#5a5a5a] to-[#323232] hover:scale-110 dark:from-[#14FECC] dark:to[#A0FFE3] overflow-hidden relative duration-300'>
                            <img src={src} alt="" className='rounded-md duration-300 group-hover:scale-110 group-hover:opacity-25'/>
                            <div className='top-14 right-10 absolute hidden duration-300 group-hover:flex items-center justify-center'>
                                <a href={demo} target="_blank" rel="noreferrer" className='px-6 py-3 m-4 duration-200 hover:scale-110'>Demo</a>
                                <a href={code} target='_blank' rel='noreferrer' className='px-6 py-3 m-4 duration-200 hover:scale-110'>Code</a>
                            </div>
                        </div>              
                    ))
                }
            </div>  
            
        </div>
    </div>
    
  )
}

export default Portfolio