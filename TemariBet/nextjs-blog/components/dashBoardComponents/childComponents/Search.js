import React from 'react'

const Search = () => {
  return (
    <div className='bg-white sticky top-36 z-50 w-full shadow-sm'>
        <form>
              <input type={"search"} name = "search" placeholder="Search by location" 
                  style = {{border:"1px solid lightgray"}} className="w-3/4 lg:w-3/5 py-4 px-6 md:text-lg rounded-lg shadow-[1px_1px_1px_1px_rgba(0,0,0,0.1)] focus:outline-none focus:shadow-[2px_2px_2px_2px_rgba(0,0,0,0.3)]"/>
            </form>
            <div className="text-right mt-4">
              <p className="text-base md:text-lg opacity-70 font-bold mr-20">Sort by last period</p>
            </div>
    </div>
  )
}

export default Search