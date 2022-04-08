export default function SuccessMain() {
    return (<header>
        <div class="w-full hidden sm:block  bg-center max-h-screen bg-cover h-[40rem]"  style={{
                background: `url("/parents.jpg")`,
                backgroundPosition: "bottom right",
                            }}>
            <div class="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
                <div className="text-center p-6 mt-80" style={{
                backgroundColor: "rgba(0, 5, 1, 0.40)",
                            }}>
                    <h1 class="text-2xl text-[#FED607] font-bold text-white uppercase lg:text-5xl">ORDER SUCCESSFULL!</h1>
                    <p className="text-center text-2xl  text-neutral-300 ">We will contact you in two days!</p>
                    <p className="text-center text-xl text-gray-400">Phone: +251940120591</p>
                </div>
            </div>
        </div>
        <div class=" flex  sm:hidden mt-72  mb-80 items-center justify-center w-full h-full  ">
                <div className="text-center p-12 " style={{
                backgroundColor: "rgba(0, 5, 1, 0.40)",
                            }}>
                    <h1 class="text-4xl text-[#FED607] pb-3 font-bold text-white uppercase lg:text-5xl">ORDER SUCCESSFULL!</h1>
                    <p className="text-center text-2xl  text-neutral-300 ">We will contact you in two days!</p>
                    <p className="text-center text-xl text-gray-600">Phone: +251940120591</p>
                </div>
            </div>

        <h1 className="text-center text-lg pt-3 font-semibold">Back to Home</h1>
    </header>
    

  );
}
