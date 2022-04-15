import React from 'react'

const BestAt = (props) => {
  return (
    <div className='mt-4'>
        {props.subjects.map((item, idx) => (
            <p key={idx} className="text-[#1a3765] md:text-base">{item}</p>
        ))}
    </div>
  )
}

export default BestAt