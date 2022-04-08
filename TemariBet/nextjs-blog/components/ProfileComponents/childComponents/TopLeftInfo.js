import React from 'react'
import Image from 'next/image'

const TopLeftInfo = (props) => {
  return (
    <div className='flex md:flex-col justify-between md:w-1/3 w-full mb-6 md:mb-0'>
        <h1 className='text-[#fdd507] text-xl md:text-4xl my-3'>temaribet</h1>
        <div className='ml-2'>
          <Image className='rounded-full' src={"/another.jpg"} alt = "profile photo" width={100} height={100} ></Image>
        </div>
          <h1 className='text-xl md:text-4xl mt-2'>{props.name}</h1>
          <p className='m-1 md:mt-0 text-base'>{props.status}</p>
    </div>
  )
}

export default TopLeftInfo