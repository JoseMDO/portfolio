import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-[#A0FFE3] via-white to-[#ffffff] text-black dark:from-[#323232] dark:to-[#000000] dark:text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full sm:h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500 dark:border-[#14FECC]'>About</p>
            </div>
            <p className='text-xl sm:mt-20'>
                Hello, I'm Jose Montes De Oca Morfin, a recent college graduate with a passion for software engineering. With a Bachelor's degree in Computer Science from Lewis University, I have honed my problem-solving skills, attention to detail, and dedication to producing high-quality software. What sets me apart as a software engineer is my commitment to lifelong learning and adaptability. Throughout my academic journey, I've embraced new technologies, languages, and methodologies, which have equipped me to thrive in a rapidly evolving tech landscape. I have hands-on experience with a variety of programming languages and have completed various projects using a varitey of technologies.
            </p>
            <br />
            <p className='text-xl'>
                 I'm excited to join a dynamic team where I can continue to grow as a software engineer and make a positive impact in the world of technology. Thank you for visiting my portfolio, and I look forward to connecting with you.
            </p>
        </div>
    </div>
  )
}

export default About