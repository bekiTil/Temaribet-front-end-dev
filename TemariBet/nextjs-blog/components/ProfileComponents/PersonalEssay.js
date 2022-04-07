import React from 'react'

const PersonalEssay = (props) => {
  return (
    <div className='w-full md:w-2/3 bg-[#fefefe] px-10 py-5 mt-5 drop-shadow-xl text-[#1a3765]'>
        <h1 className='text-xl md:text-3xl bg-[#fefefe] text-[#1a3765]'>Personal Essay</h1>
        <p className='text-justify md:text-left mt-3 md:text-base'>
            {props.essay}
        </p>
    </div>
  )
}

export default PersonalEssay