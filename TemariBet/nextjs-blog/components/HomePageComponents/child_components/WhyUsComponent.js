import React from 'react'
import Image from 'next/image'

const WhyUsComponent = (props) => {
  return (
    <div className='container py-5 px-8 pb-0 h-full bg-white flex flex-col items-center drop-shadow-xl'>
        <Image src={props.image} alt="Handpicked tutor image"  width="200" height = "200"/>
        
        <h1 className='text-[#1A3765] text-base lg:text-xl xl:text-3xl text-center font-bold font-serif mt-3'>{props.title}</h1>
        <p className='text-[#1A3765] text-sm xl:text-2xl text-center lg:text-base
         font-serif'>{props.description}</p>
    
    </div>
  )
}

export default WhyUsComponent