export default function Container() {
    return (
        <>
            <div className=" h-screen font-minionPro flex justify-center items-center bg-white sm:bg-white md:bg-white lg:bg-[#f1f1f1] md:px-0">
                <div className=" w-full">
                    <div className="max-w-lg mx-auto">
                        <a href="#">
                            <h1 className="text-4xl lg:text-5xl  2xl:text-7xl font-typograhica text-[#FED607]  text-center">temaribet</h1>
                        </a>
                    </div>
                    <div className="max-w-lg mx-auto text-center  mb-2">
                        <p className="">Don't have an account? <a href="#" className="font-bold pl-5 text-[#1A3765] hover:underline">Sign up</a>.</p>
                    </div>

                    <div className="  bg-white max-w-lg mx-auto p-8 md:p-10 md:px-20 my-2 rounded-3xl lg:shadow-2xl ">

                        <div className="mt-2">
                            <form className="flex flex-col  " method="POST" action="#">
                                <div className="mb-2 pt-1 rounded ">
                                    <label className="block text-gray-500 text-xl 2xl:text-2xl mb-1 " htmlFor="email">Email</label>
                                    <input type="text" id="email" className="bg-gray-200  w-full text-gray-700 focus:outline-none  border border-gray-400 focus:border-gray-900 transition duration-500 px-3 pb-3" />
                                </div>
                                <div className="mb-2 pt-1 rounded ">
                                    <label className="block text-gray-500 text-xl  2xl:text-2xl mb-1 " htmlFor="password">Password</label>
                                    <input type="password" id="password" className="bg-gray-200  w-full text-gray-700 focus:outline-none border border-gray-400 focus:border-gray-900 transition duration-500 px-3 pb-3" />
                                </div>
                                <div className="flex justify-start">
                                    <a href="#" className="text-md 2xl:text-lg text-[#1A3765]  hover:text-gray-600  mb-2">Forgot your password?</a>
                                </div>
                                <button className=" text-xl 2xl:text-2xl h-12 mt-2 text-white w-full bg-[#1A3765] hover:bg-blue-900">Log in</button>
                                <div className="flex justify-between items-center mt-2">
                                    <hr className="w-full" /> <span className="p-2 text-2xl 2xl:text-3xl text-gray-400 mb-1">or</span>
                                    <hr className="w-full" />
                                </div>
                                <button className=" border-2 flex flex-row items-center  h-12 mt-2 text-[#1A3765] w-full  bg-white hover:bg-blue-900 hover:text-white">
                                    <span className="flex-none px-3" >
                                        <i className="fab fa-facebook-f"></i></span>
                                    <span className="grow text-xl 2xl:text-2xl justify-center">Sign in with Facebook</span></button>
                                <button className=" border-2 flex flex-row items-center  h-12 mt-2 text-[#1A3765] w-full  bg-white hover:bg-blue-900 hover:text-white">
                                    <span className="flex-none px-3"><i className="fa-brands fa-google"></i></span><span className="grow text-xl 2xl:text-2xl justify-center"> Sign in with Google</span></button>

                            </form>
                        </div>
                    </div>



                    <div className="max-w-lg mx-auto mt-5 flex justify-center ">
                        <p className=" text-center text-xl 2xl:text-2xl">
                            &copy;2022 Temaribet. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}