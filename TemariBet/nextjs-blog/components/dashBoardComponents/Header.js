import React from 'react'
import Image from 'next/image'

const Header = () => {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <nav className="pb-14 opacity-100 mx-12 overflow-x-hidden sticky top-0 left-0 right-0 z-50 flex  items-center justify-between py-5 -m-2 bg-white">
      <div className="container mx-auto  flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <a
            className="text-3xl md:text-5xl px-0  py-1 font-fugasOne font-thin leading-relaxed inline-block mr-4  whitespace-nowrap  text-yellow-300"
            href="#"
          >
            temaribet
          </a>
          <button
            className=" text-gray-500 cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
              <path
                fillRule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              ></path>
            </svg>
          </button>
        </div>

        <div
          className={
            "lg:flex flex-grow items-center" +
            (navbarOpen ? " flex" : " hidden")
          }
        >
        <div className="flex flex-col md:flex-row list-none ml-auto">
          <Image className='rounded-full' src={"/another.jpg"} alt ={"profile image"} width = {80} height = {80} />
          <div className='flex flex-col ml-4 justify-center font-serif'>
            <h1 className='text-xl mb-0 font-bold'>Selam Getu</h1>
            <p className='text-sm'>Student</p>
          </div>
        </div>
        </div>
      </div>
    </nav>
  )
}

export default Header