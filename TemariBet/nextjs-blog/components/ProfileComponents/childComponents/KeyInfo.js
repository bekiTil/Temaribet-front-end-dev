import React from 'react'

const KeyInfo = (props) => {
  return (
    <div className='flex flex-col items-center md:items-start bg-[#fefefe] p-5 mt-4 drop-shadow-xl text-[#1a3765] md:w-1/3 md:mr-6 xl:mr-14'>
        <h1 className='text-3xl text-[#1a3765] mb-1'>Key Info</h1>
        <p className='text-2xl md-text-lg xl:text-2xl mt-3 mb-2'>{props.name}</p>
        <p className='text-xl md:text-base xl:text-xl mb-2'>Gender: {props.gender}</p>
        <p className='text-xl md:text-base xl:text-xl mb-2'>Age: {props.age}</p> 
        <p className='text-xl md:text-base xl:text-xl mb-2'>Grad Date: {props.graddate}</p>
        <p className='text-xl md:text-base xl:text-xl mb-2'>cGPA: {props.cgpa}</p>
        <p className='text-xl md:text-base xl:text-xl mb-2'>UEE: {props.UEE}</p>
        <p className='text-xl md:text-base xl:text-xl mb-2'>SAT: {props.SAT}</p>
        <p className='text-xl md:text-base xl:text-xl mb-2'>field: {props.field}</p>
        <p className='text-xl md:text-base xl:text-xl mb-2'>Collage: {props.collage}</p>

        <h1 className='font-bold text-base md:text-xl mt-8 text-[#1a3765]'>Preffered Bank</h1>
        <div className="h-1 w-1/2 bg-gray-200"></div>
        <p className='text-lg md:text-lg mt-0 mb-0'>CBE</p>
        <p className='text-lg md:text-lg mt-0 '>1000324523443</p>
    </div>
  )
}

export default KeyInfo