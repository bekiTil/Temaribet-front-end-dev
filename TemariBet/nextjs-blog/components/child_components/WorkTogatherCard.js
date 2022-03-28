import React from 'react'
import Image from 'next/image'
import 'antd/dist/antd.css';

const WorkTogatherCard = (props) => {
  return (
    <div className='flex flex-col items-center font-serif mt-10'>
        <Image src={props.image} alt="me"  width="300" height = "250" />
        <div className='px-12'>
          <h1 className='text-blue-900 text-xl font-bold mt-5'>{props.title}</h1>
          <p className='text-blue-900 text-base'>{props.description}</p>
        </div>
        
         
    </div>
  )
}

export default WorkTogatherCard