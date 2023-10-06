import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-[#A0FFE3] to-[#14FECC] text-black dark:from-[#323232] dark:to-[#000000] dark:text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500 dark:border-[#14FECC]'>About</p>
            </div>

            <p className='text-xl mt-20'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, corrupti. Voluptate minima similique, nemo reprehenderit ducimus accusantium eligendi id omnis fuga, aperiam deserunt! Porro dolorem mollitia fuga obcaecati incidunt ullam optio quos nobis sequi. Consectetur nesciunt vel dolores optio, quis, itaque ea eos soluta velit, laudantium quod maiores reiciendis possimus?
            </p>
            <br />
            <p className='text-xl'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias fugiat ipsa quidem. Quod libero obcaecati voluptas ipsam, expedita cupiditate odit omnis id veniam adipisci quam rerum voluptates, officia, eius commodi? Alias autem corrupti quam rem qui? Sit dolorum beatae aspernatur, assumenda error reiciendis aliquam eveniet unde? Nulla laboriosam eligendi nobis.
            </p>
        </div>
    </div>
  )
}

export default About