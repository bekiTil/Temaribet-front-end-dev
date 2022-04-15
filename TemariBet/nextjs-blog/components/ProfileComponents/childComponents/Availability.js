import React from 'react'

const Availability = (props) => {
  return (
    <div className='mt-4'>
        {props.av.map((item, idx)=>(
            <p className='md:max-w-1/3 inline-block mx-2 text-[#1a3765] md:text-base' key={idx}>{item}</p>
        ))}
    </div>
  )
}

export default Availability