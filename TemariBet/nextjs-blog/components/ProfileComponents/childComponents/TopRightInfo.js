import React from 'react'

const TopRightInfo = (props) => {
  return (
    <div className='flex flex-col sm:flex-row items-center justify-between md:justify-start px-10 w-full md:w-2/3 text-base md:text-xl'>
        <div className='text-[#1a3765] mr-2'>
            <p>P: {props.phone1}</p>
            <p>P: {props.phone2}</p>
        </div>

        <div className='text-[#1a3765] ml-2'>
            <p>E: {props.email}</p>
            <p>A: {props.address}</p>
        </div>
    </div>
  )
}

export default TopRightInfo