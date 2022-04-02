import React from 'react'
import { Button} from 'antd';

const ProfileCard = () => {
  return (
    <div className='flex flex-col rounded-2xl bg-[#fcfcfc] mb-5 p-5 text-[#1a3465]' style={{border: "1px solid lightgray"}}>
        <p className='font-serif font-bold text-2xl  uppercase'>Bole Michael</p>
        <div className='flex'>
            <button className="rounded-full px-1 font-serif tracking-wide text-sm transition-colors duration-200 transform bg-[#dfe1e4]  hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                choice1
            </button>
            <button className="rounded-full px-1 font-serif tracking-wide text-sm transition-colors duration-200 transform bg-[#dfe1e4]  hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                choice1
            </button>         
            <button className="rounded-full px-1 font-serif tracking-wide text-sm transition-colors duration-200 transform bg-[#dfe1e4]  hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                choice1
            </button>
            <button className="rounded-full px-1 font-serif tracking-wide text-sm transition-colors duration-200 transform bg-[#dfe1e4]  hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                choice1
            </button>
        </div>

        <p>asjhfla sdkfhlaksfjh sdjfhlaksjhsd jfhd lajsdhf sh fs sjdfh sdjfh ljsf kjsdjf jfj lasjdf ljskdjf lsjls</p>

        <div className='flex'>
            <button className="rounded-full mx-1 px-4 py-1 font-serif tracking-wide text-xl text-white capitalize transition-colors duration-200 transform bg-[#1A3765]  hover:bg-white hover:text-[#1A3765] focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                Apply
            </button>
            <button style={{border: "1px solid gray"}} className="rounded-full mx-1 px-4 py-1 font-serif tracking-wide text-xl capitalize transition-colors duration-200 transform bg-white  hover:bg-[#1A3765] hover:text-white focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                More
            </button>
        </div>
    </div>
  )
}

export default ProfileCard