import React from 'react'
import { Button} from 'antd';

const ProfileCard = (props) => {
  return (
    <div className='flex flex-col rounded-2xl bg-[#fcfcfc] mb-5 p-5 text-[#1a3465]' style={{border: "1px solid lightgray"}}>
        <p className='font-serif font-bold text-lg md:text-xl lg:text-2xl uppercase mb-3'>{props.place}</p>
        <div className='flex'>
            <button className="rounded-full mx-1 flex-auto px-1 md:mx-0 lg:mx-1 font-serif tracking-wide text-sm transition-colors duration-200 transform bg-[#dfe1e4]  hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                choice1
            </button>
            <button className="rounded-full mx-1 flex-auto px-1 md:mx-0 lg:mx-1 font-serif tracking-wide text-sm transition-colors duration-200 transform bg-[#dfe1e4]  hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                choice1
            </button>         
            <button className="rounded-full mx-1 flex-auto px-1 md:mx-0 lg:mx-1 font-serif tracking-wide text-sm transition-colors duration-200 transform bg-[#dfe1e4]  hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                choice1
            </button>
            <button className="rounded-full mx-1 flex-auto px-1 md:mx-0 lg:mx-1 font-serif tracking-wide text-sm transition-colors duration-200 transform bg-[#dfe1e4]  hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                choice1
            </button>
        </div>

        <p className='text-base mt-4'>{props.description}</p>

        <div className='flex '>
            <button className="flex-auto rounded-full mx-1 px-6 py-1 font-serif tracking-wide text-xl text-white capitalize transition-colors duration-200 transform bg-[#1A3765]  hover:bg-white hover:text-[#1A3765] focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                Apply
            </button>
            <button style={{border: "1px solid gray"}} className="flex-auto rounded-full mx-1 px-6 py-1 font-serif tracking-wide text-xl capitalize transition-colors duration-200 transform bg-white  hover:bg-[#1A3765] hover:text-white focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                More
            </button>
        </div>
    </div>
  )
}

export default ProfileCard