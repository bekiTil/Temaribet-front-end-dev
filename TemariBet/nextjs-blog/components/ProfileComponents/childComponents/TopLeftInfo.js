import React from 'react'
import Image from 'next/image'

const TopLeftInfo = (props) => {
  return (
    <div className='flex md:flex-col justify-between md:w-1/3 w-full mb-6 md:mb-0'>
        <h1 className='text-[#fdd507] text-xl md:text-4xl 2xl:text-5xl my-3 2xl:my-7'>temaribet</h1>
        <div className='ml-2'>
          <Image className='rounded-full' src={"/another.jpg"} alt = "profile photo" width={150} height={150} objectFit ={"cover"}></Image>
        </div>
          <h1 className='text-xl md:text-4xl 2xl:text-5xl mt-2'>{props.name}</h1>
          <p className='m-1 md:mt-0 text-base 2xl:text-lg'>{props.status}</p>
    </div>
  )
}

export default TopLeftInfo