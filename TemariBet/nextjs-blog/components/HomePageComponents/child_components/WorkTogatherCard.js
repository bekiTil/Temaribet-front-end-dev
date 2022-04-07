import React from 'react'
import Image from 'next/image'
import 'antd/dist/antd.css';

const WorkTogatherCard = (props) => {
  return (
    <div className='flex flex-col items-center font-serif mt-10'>
        <Image src={props.image} alt="me"  width="300" height = "250" />
        <div className='px-12'>
          <h1 className='text-[#1A3765] text-xl lg:text-3xl 2xl:text-5xl font-bold mt-5'>{props.title}</h1>
          <p className='text-[#1A3765] text-lg lg:text-xl 2xl:text-3xl'>{props.description}</p>
        </div>
        
         
    </div>
  )
}

export default WorkTogatherCard