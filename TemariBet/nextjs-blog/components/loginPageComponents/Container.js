export default function Container() {
    return (
        <>

            <div className="font-serif overflow-y-hidden">
                <div className=" h-screen p-4 py-0 flex justify-center items-center">
                    <div className="p-3 items-center sm:w-2/5 md:w-2/5 lg:w-1/3 xl:w-1/4 2xl:w-1/4 bg-white  max-w-6xl pb-10">
                        <div className="flex justify-center mb-3 ">
                            <h1 className="font-fugasOne  text-4xl text-[#FED607]">temaribet</h1>
                        </div>
                        <div className="flex justify-center mb-3">
                            <h2> don't have an account? <a className="text-[#1A3765] p-2 font-semibold text-lg"href="">Sign up</a></h2>
                        </div>
                        <label className="justify-start my-6  ">Email</label>
                        <input type="text" className="h-12 mt-3 w-full border border-slate-500 px-3 my-3 bg-slate-200 back focus:border-blue-100" placeholder="Email" />
                        <label className="justify-start my-6">Password</label>
                        <input type="text" className="h-12 mt-3  w-full border px-3 my-3 border-slate-500 bg-slate-200 focus:border-blue-100" placeholder="Password" />
                        <div className="flex justify-start items-center mt-2">
                            <a href="#" className="text-gray-400 hover:text-gray-600">Forgot password?</a> </div>
                        <button className="uppercase h-12 mt-3 text-white w-full bg-[#1A3765] hover:bg-blue-900">login</button>
                        <div className="flex justify-between items-center mt-3">
                            <hr className="w-full" /> <span className="p-2 text-gray-400 mb-1">or</span>
                            <hr className="w-full" />
                        </div>
                        <button className=" border-2 flex flex-row items-center  h-12 mt-3 text-[#1A3765] w-full  bg-white hover:bg-blue-900 hover:text-white">
                            <span className="flex-none px-3" >
                                <i className="fab fa-facebook-f"></i></span>
                            <span className="grow justify-center">Sign in with Facebook</span></button>
                        <button className=" border-2 flex flex-row items-center  h-12 mt-3 text-[#1A3765] w-full  bg-white hover:bg-blue-900 hover:text-white">
                            <span className="flex-none px-3"><i className="fa-brands fa-google"></i></span><span className="grow justify-center"> Sign in with Google</span></button>
                        <p className="mt-10 flex justify-center text-center text-gray-500 text-xs">
                            &copy;2020 Acme Corp. All rights reserved.
                        </p>
                    </div>

                </div>
            </div>
        </>
    )
}