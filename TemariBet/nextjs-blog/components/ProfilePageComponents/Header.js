import React from 'react'
import Image from 'next/image'

const Header = () => {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <nav className="opacity-100 overflow-x-hidden fixed top-0 left-0 right-0 z-50 flex  items-center justify-between px-2 py-5 -m-2 ">
      <div className="container  mx-10 flex flex-wrap items-center justify-between">
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
        <div className="pt-4 flex flex-col lg:flex-row list-none lg:ml-auto">
          <Image className='nav-item rounded-full' src={"/another.jpg"} alt ={"profile image"} width = {70} height = {70} />
          <div className='nav-item mx-5 flex flex-col justify-center'>
            <h1 className='text-xl'>Selam Getu</h1>
            <p className='text-base'>Student</p>
          </div>
        </div>
        </div>
      </div>
    </nav>
  )
}

export default Header