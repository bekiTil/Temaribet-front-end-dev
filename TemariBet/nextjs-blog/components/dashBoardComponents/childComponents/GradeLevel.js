import React from 'react'

const GradeLevel = () => {
  return (
    <div className='fixed z-50'>
        <h1 className="font-serif text-xl opacity-60 fixed">Details</h1>
        <h1 className="mt-24 pt-10 font-serif opacity-30 text-base md:text-2xl">
        Grade Level
        </h1>
        <form>
        <input type={"checkbox"} name="KG" id="kg" />
        <label htmlFor='kg' className='ml-3 font-bold opacity-70 font-serif'>KG</label>
        <br />
        <input type={"checkbox"} name="1to5" id="1to5" className=''/>
        <label htmlFor="1to5" className='ml-3 font-bold opacity-70 font-serif'>1 - 5</label>
        <br />
        <input type={"checkbox"} name="6to8" id="6to8" />
        <label htmlFor="6to8" className='ml-3 font-bold opacity-70 font-serif'>6 - 8</label>
        <br />
        <input type={"checkbox"} name="9to10" id="9to10" />
        <label htmlFor="9to10" className='ml-3 font-bold opacity-70 font-serif'>9 - 10</label>
        <br />
        <input type={"checkbox"} name="11to12" id="11to12" />
        <label htmlFor="11to12" className='ml-3 font-bold opacity-70 font-serif'>11 - 12</label>
        <br />
        </form>
    </div>
  )
}

export default GradeLevel