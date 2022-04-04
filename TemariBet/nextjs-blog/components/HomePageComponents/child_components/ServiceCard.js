import React from 'react'
import {List, Button} from "antd"
import Image from "next/image"

const ServiceCard = (props) => {
  return (
    <div className='drop-shadow-lg bg-[#E5EFFF] h-full flex flex-col justify-between'>
      <div className='w-full px-9 py-5 '>
          <h1 className="text-[#1A3765]  font-bold text-3xl">{props.title}</h1>
          <p className="text-gray-500  font-sans text-lg  border-gray-500">{props.description}</p>
          <hr style={{border: "1px solid lightgray"}} />
          {
            props.subjects.map(item => (<li key={item} className = "text-[#1A3765] text-lg  lg:text-2xl m-5" style={{ listStyleType: 'none'}}><Image src="/right.png" width="25" height="25"/> {item}</li>))
          }
          
        </div>
        <Button style={{ width: "100%", background: "#1A3765", borderColor: "#1E2F97" }} type="primary" size="large" ><span className='text-xl'>Get a Tutor</span></Button>       
    </div>
  )
}

export default ServiceCard