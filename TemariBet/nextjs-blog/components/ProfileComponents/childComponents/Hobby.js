import React from 'react'

const Hobby = (props) => {
  return (
    <div className='mt-4'>
        {props.hobbies.map((item, idx) => (
            <p className="text-[#1a3765] md:text-base inline-block mx-2" key={idx}>{item}</p>
        ))}
    </div>
  )
}

export default Hobby