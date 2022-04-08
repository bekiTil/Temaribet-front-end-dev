import React from 'react'
import {List, Button} from "antd"
import Image from "next/image"

const ServiceCard = (props) => {
  return (
    <div className='drop-shadow-lg bg-[#E5EFFF] h-full flex flex-col justify-between'>
      <div className='w-full px-11 py-9 '>
          <h1 className="text-[#1A3765]  font-bold text-3xl 2xl:text-5xl">{props.title}</h1>
          <p className="text-gray-500  font-sans text-lg 2xl:text-2xl  border-gray-500">{props.description}</p>
          <hr style={{border: "1px solid lightgray"}} />
          {
            props.subjects.map(item => (<li key={item} className = "text-[#1A3765] text-lg  lg:text-2xl 2xl:text-4xl m-5 ml-0" style={{ listStyleType: 'none', listStyleImage:"url('../../../public/right.png')"}}><Image src="/right.png" width="40" height="40"/> {item}</li>))
          }
          
        </div>
        <button className='w-full bg-[#1A3765] text-white text-xl 2xl:text-3xl py-3'>Get a Tutor</button> 
    </div>
  )
}
export default ServiceCard