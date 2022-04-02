import React from "react";
const Header = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <nav className="opacity-100 overflow-x-hidden fixed top-0 left-0 right-0 z-50 flex  items-center justify-between px-2 py-0 bg-[#FED607] -m-2 ">
      <div className="container  mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <a
            className="text-3xl md:text-4xl px-0  py-1 font-fugasOne font-thin leading-relaxed inline-block mr-4  whitespace-nowrap  text-white"
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
          <ul className="pt-4 flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="nav-item h-full">
              <a
                className="px-3 py-1  font-serif flex items-center  text-2xl text-blue-900 opacity-40 font-semibold leading-snug  hover:opacity-75"
                href="#"
              >
                Home
              </a>
            </li>
            <li className="nav-item h-full">
              <a
                className="px-3 py-1 font-serif flex items-center  text-2xl text-blue-900 opacity-40 font-semibold leading-snug  hover:opacity-75"
                href="#"
              >
                About Us
              </a>
            </li>
            <li className="nav-item h-full">
              <a
                className="px-3 py-1 font-serif flex items-center  text-2xl text-blue-900 opacity-40 font-semibold leading-snug  hover:opacity-75"
                href="#"
              >
                Pricing
              </a>
            </li>
            <li className="nav-item h-full">
              <a
                className="px-3 py-1 font-serif flex items-center  text-2xl text-blue-900 opacity-40 font-semibold leading-snug  hover:opacity-75"
                href="#"
              >
                Log In
              </a>
            </li>
            <li className="pl-2  nav-item h-full">
              <button className="rounded-full px-10 py-1 font-serif tracking-wide text-2xl text-white capitalize transition-colors duration-200 transform bg-[#1A3765]  hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                Register
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Header;
