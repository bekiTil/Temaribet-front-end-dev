import React from 'react'
import Image from 'next/image'

const WhyUsComponent = (props) => {
  return (
    <div className='container py-5 px-8 pb-0 h-full bg-white flex flex-col items-center drop-shadow-xl'>
        <Image src={props.image} alt="Handpicked tutor image"  width="150" height = "150"/>
        
        <h1 className='text-[#1A3765] text-base lg:text-xl text-center font-bold font-serif mt-3'>{props.title}</h1>
        <p className='text-[#1A3765] text-sm text-center lg:text-base
         font-serif'>{props.description}</p>
    
    </div>
  )
}

export default WhyUsComponent