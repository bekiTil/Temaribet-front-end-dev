export default function Container() {
    return (
        <>


            <div className="min-h-screen font-minionPro mx-auto p-6  bg-white sm:bg-white md:bg-white lg:bg-[#f1f1f1]">
                <div className="">
                    <div className="max-w-lg mx-auto">
                        <a href="#">
                            <h1 className="text-4xl lg:text-5xl 2xl:text-7xl font-typograhica text-[#FED607] text-center">temaribet</h1>
                        </a>
                    </div>
                    <div className="max-w-lg mx-auto text-center  mb-2">
                        <p className="">Have an account? <a href="#" className="font-bold pl-5 text-[#1A3765] hover:underline">Log in</a>.</p>
                    </div>

                    <div className=" max-w-4xl  mx-auto    dark:bg-gray-800 bg-white   p-8 md:p-10 md:px-20 my-2 rounded-3xl lg:shadow-2xl ">

                        <div className="mt-2">
                            <form method="POST" action="#">
                                <div className="text-gray-400 grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                                    <div>
                                        <label className="block text-xl 2xl:text-2xl mb-1 " htmlFor="firstName">First Name</label>
                                        <input id="firstName" type="text" className="block bg-[#f3f5f8]  w-full text-gray-700 focus:outline-none  border border-[#cfd5df] focus:border-gray-900 transition duration-500 px-3 pb-3" />
                                    </div>

                                    <div>
                                        <label className="block text-xl 2xl:text-2xl mb-1" htmlFor="lastName">Last Name</label>
                                        <input id="lastName" type="text" className="block bg-[#f3f5f8]  w-full text-gray-700 focus:outline-none  border border-[#cfd5df] focus:border-gray-900 transition duration-500 px-3 pb-3" />
                                    </div>

                                    <div>
                                        <label className="block text-xl 2xl:text-2xl  mb-1" htmlFor="email">Email</label>
                                        <input id="email" type="email" className="bg-[#f3f5f8]  w-full text-gray-700 focus:outline-none  border border-[#cfd5df] focus:border-gray-900 transition duration-500 px-3 pb-3" />
                                    </div>
                                    <div>
                                    </div>
                                    <div>
                                        <label className="block text-xl 2xl:text-2xl mb-1" htmlFor="password">Password</label>
                                        <input id="password" type="password" className="bg-[#f3f5f8]  w-full text-gray-700 focus:outline-none  border border-[#cfd5df] focus:border-gray-900 transition duration-500 px-3 pb-3" />
                                    </div>
                                    <div>
                                        <label className="block text-xl 2xl:text-2xl  mb-1" htmlFor="password confirm">Password Confirmation </label>
                                        <input id="password confirm" type="password" className="bg-[#f3f5f8]  w-full text-gray-700 focus:outline-none  border border-[#cfd5df] focus:border-gray-900 transition duration-500 px-3 pb-3" />
                                    </div> 
                                </div>
                                <div className="lg:max-w-xs lg:mx-auto pt-5">
                                    <div>
                                <button className=" h-12 mt-2 text-xl 2xl:text-2xl text-white w-full bg-[#1A3765]  hover:bg-blue-900">Log in</button>
                                
                                </div><div className="flex justify-between items-center mt-2">
                                    <hr className="w-full" /> <span className="p-2 text-2xl 2xl:text-3xl text-gray-400 mb-1">or</span>
                                    <hr className="w-full" />
                                </div>

                                <div><button className=" border-2 flex flex-row items-center  h-12 mt-2 text-[#1A3765] w-full  bg-white hover:bg-blue-900 hover:text-white">
                                    <span className="flex-none px-3" >
                                        <i className="fab fa-facebook-f"></i></span>
                                    <span className="grow text-xl 2xl:text-2xl justify-center">Sign in with Facebook</span></button>
                                    </div>
                                <div><button className=" border-2 flex flex-row items-center  h-12 mt-2 text-[#1A3765] w-full  bg-white hover:bg-blue-900 hover:text-white">
                                    <span className="flex-none px-3"><i className="fa-brands fa-google"></i></span><span className="grow text-xl 2xl:text-2xl justify-center"> Sign in with Google</span></button>
                                </div>
                                </div>
                            </form>
                        </div>
                    </div>



                    <div className="max-w-lg mx-auto mt-5 flex justify-center ">
                        <p className=" text-center text-xl">
                            &copy;2022 Temaribet. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </>

    );
}

