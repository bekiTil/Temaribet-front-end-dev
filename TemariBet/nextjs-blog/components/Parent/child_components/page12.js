const Page12 = () => {
  return (
    <div className = "bg-[#FED607] font-minionPro">
      <div >
        <h1 className="text-3xl text-[#1A3765] font-bold ">Tell us how much hour do you </h1>
        <p className="text-2xl text-[#5A5A5A] font-semibold  pl-0 p-2">want your child to be tutored</p>
      </div>

      <div className = "flex flex-row mt-5 mb-16">
        <div>
          <label className="text-lg block text-[#5A5A5A] font-semibold  pl-0 py-2" for="price">How many days per week</label>
          <input  className="h-12 text-lg" type="text" id="days" placeHolder = "Days"></input>
          <label className=" text-[#5A5A5A] text-sm font-semibold  pl-0 p-2" for="price"> Recommended: 3 days</label>
        </div>

        <div className = "mx-3">
          <label className="text-lg block text-[#5A5A5A] font-semibold  pl-0 py-2" for="price">How many hours per day</label>
          <input className="h-12 text-lg" type="text" id="price" placeHolder = "Hour"></input>
          <label  className=" text-[#5A5A5A]  text-sm font-semibold  pl-0 p-2"  for="price">Recommended: 1:30 hr</label>
        </div>
      </div>

      <div className = " flex flex-row mt-13">
        <div className="mr-2">
      <button className=" bg-[#1A3765] hover:bg-blue-700 text-white text-2xl font-semibold py-2 px-6 ">
          Show Price
        </button>
        </div>
       <div className="mr-6">
        <input className="block h-12" type="text" id="price"></input>
        <label className="text-[#5A5A5A] text-sm" for="price">Registration fee: 500 ETB</label>
        </div>
      </div>

      <div className = "mt-8 text-center md:text-left">
        <button className=" bg-[#1A3765] hover:bg-blue-700 text-white text-3xl font-semibold py-3 px-6 ">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Page12;
