import { React, useRef, useState } from 'react'
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef()
    const [message, setMessage] = useState("")

    const sendEmail = (e) => {
        e.preventDefault();
      
        emailjs.sendForm('service_2ztt1xe', 'template_numduto', form.current, 'top1LR8VHBn9B118Z')
          .then((result) => {
                setMessage("Sent Succesfully!")
                setTimeout(() => {
                    setMessage("");
                }, 5000);
          }, (error) => {
                setMessage("Failed to Send")
                setTimeout(() => {
                    setMessage("");
                }, 5000);
          });
          e.target.reset()
      };

  return (
    <div name="contact" className='w-full h-screen bg-gradient-to-b from-[#ffffff] via-white to-[#A0FFE3] dark:from-black dark:to-[#323232] p-4 text-white '>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
            <div className='pb-8'>
                <p className='text-4xl text-black font-bold inline border-b-4 border-gray-500 dark:border-[#14FECC] dark:text-white'>Contact</p>
                <p className='py-6 text-black dark:text-white'>Submit the form below to get in touch with me!</p>
            </div>
            <div className='flex justify-center items-center'>
                <form ref={form} onSubmit={sendEmail} className='flex flex-col w-full md:w-1/2'>
                    <input type="text" required name="user_name" placeholder='Enter your name' className='p-2 bg-transparent border-2 border-black dark:border-[#14FECC] rounded-sm text-black dark:text-white focus:outline-none focus:scale-105 duration-200'/>
                    <input type="text" required name="user_email" placeholder='Enter your email' className='my-4 p-2 bg-transparent border-2 border-black dark:border-[#14FECC] rounded-sm text-black dark:text-white focus:outline-none focus:scale-105 duration-200'/>
                    <textarea name="message" required placeholder='Enter your message' rows="10" className='text-black p-2 bg-transparent border-2 border-black dark:border-[#14FECC] rounded-md dark:text-white focus:outline-none focus:scale-105 duration-200'></textarea>
                    <p className='mt-4'>{message}</p>
                    <button type='submit' className='text-white dark:text-black bg-gradient-to-b from-black to-[#898989] dark:from-[#14FECC] dark:to-[#A0FFE3] px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Lets Talk</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact