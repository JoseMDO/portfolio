import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'

const SocialLinks = () => {

    const links = [
        {
            id: 1,
            child: (<>LinkedIn <FaLinkedin size={30}/></>),
            href: "https://www.linkedin.com/in/josemontesdeocamorfin/",
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (<>GitHub <FaGithub size={30}/></>),
            href: "https://github.com/JoseMDO",
        },
        {
            id: 3,
            child: (<>Mail <HiOutlineMail size={30}/></>),
            href: "mailto:josemontesdeocamorfin@gmail.com",
        },
        {
            id: 4,
            child: (<>Resume <BsFillPersonLinesFill size={30}/></>),
            href: "/jose-montes-de-oca-morfin-resume.pdf",
            style: 'rounded-br-md',
            download: true
        },
    ]



  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>
            {links.map(({id, child, href, style, download}) => (
                // eslint-disable-next-line no-useless-concat
                <li key={id} className={'flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300' + " " + style}>
                    <a href={href} download={download} target='_blank' className='flex justify-between items-center w-full text-white dark:text-[#14ffcc]' rel="noreferrer"> {child} </a>
                </li>
            ))}

            
        </ul>
    </div>
    
  )
}

export default SocialLinks