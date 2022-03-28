import React from 'react'
import Image from 'next/image'

const WhyUsComponent = (props) => {
  return (
    <div className='container py-5 px-8 pb-0 h-full bg-white flex flex-col items-center drop-shadow-xl'>
        <Image src={props.image} alt="Handpicked tutor image"  width="150" height = "150"/>
        
        <h1 className='text-blue-900 text-sm lg:text-lg text-center font-bold font-serif mt-3'>{props.title}</h1>
        <p className='text-blue-900 text-xs lg:text-base font-serif'>{props.description}</p>
    
    </div>
  )
}

export default WhyUsComponent