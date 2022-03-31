import React from 'react'
import {List, Button} from "antd"

const ServiceCard = (props) => {
  return (
    <div className='drop-shadow-lg bg-[#e9f5f9] h-full flex flex-col justify-between'>
      <div className='w-full px-9 py-5 '>
          <h1 className="text-blue-900  font-bold text-3xl">{props.title}</h1>
          <p className="text-gray-500  font-sans text-lg  border-gray-500">{props.description}</p>
          <hr style={{border: "1px solid lightgray"}} />
          {
            props.subjects.map(item => (<li className = "text-blue-900 text-lg  lg:text-2xl m-5" style={{listStyleImage: "url('/right .png')", listStyleType: 'none'}}>{item}</li>))
          }
          
        </div>
        <Button style={{ width: "100%", background: "#0E185F", borderColor: "#1E2F97" }} type="primary" size="large" ><span className='text-xl'>Get a Tutor</span></Button>       
    </div>
  )
}

export default ServiceCard