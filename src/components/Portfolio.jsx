import React from 'react'
import reactWeather from '../assets/portfolio/reactWeather.jpg'
import arrayDestruct from '../assets/portfolio/arrayDestruct.jpg'
import installNode from '../assets/portfolio/installNode.jpg'

const Portfolio = () => {

    const projects = [
        {
            id:1,
            src: reactWeather,
        },
        {
            id:2,
            src: arrayDestruct,
        },
        {
            id:3,
            src: installNode,
        },
    ]


  return (
    <div name="portfolio" className='bg-gradient-to-b from-[#14FECC] to-[#A0FFE3] dark:from-black dark:to-[#323232] dark:text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#14FECC]'>Portfolio</p>
                <p className='py-6'>Check out some of my work right here</p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                {
                projects.map(({ id, src }) => (
                        <div key={id} className='group shadow-md shadow-[#14FECC] rounded-lg hover:bg-gradient-to-t hover:scale-105 from-[#14FECC] to[#A0FFE3] overflow-hidden relative hover:transition-all'>
                            <img src={src} alt="" className='rounded-md duration-300 group-hover:scale-105 group-hover:opacity-25'/>
                            <div className='top-14 right-10 absolute hidden duration-300 group-hover:flex items-center justify-center'>
                                <button className='px-6 py-3 m-4 duration-200 hover:scale-110'>Demo</button>
                                <button className='px-6 py-3 m-4 duration-200 hover:scale-110'>Code</button>
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