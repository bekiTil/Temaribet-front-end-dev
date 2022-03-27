
import {useState} from "react";
import React from "react";
const Header = () => {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <nav className="overflow-x-hidden fixed top-0 left-0 right-0 z-50 flex flex-wrap items-center justify-between px-2 py-0 bg-yellow-300 ">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                    <a
                        className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-blue-900"
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
                            <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                        </svg>
                    </button>
                </div>
                <div
                    className={
                        "lg:flex flex-grow items-center" +
                        (navbarOpen ? " flex" : " hidden")
                    }
                    
                >
                    <ul className="pt-4 flex flex-col lg:flex-row list-none lg:ml-auto">
                        <li className="nav-item h-full">
                            <a
                                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                                href="#"
                            >
                                Home
                            </a>
                        </li>
                        <li className="nav-item h-full">
                        <a
                                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                                href="#"
                            >
                                About Us
                            </a>
                        </li>
                        <li className="nav-item h-full">
                        <a
                                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                                href="#"
                            >
                                Pricing
                            </a>
                        </li>
                        <li className="nav-item h-full">
                        <a
                                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                                href="#"
                            >
                                Login
                            </a>
                        </li>
                        <li className="pl-2  nav-item h-full">
                        <button className="rounded-full px-10 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-900  hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
        Register
    </button>
                        </li>
                    </ul>
                    
    
                    
                </div>
            </div>
        </nav>

    )
}
export default Header;