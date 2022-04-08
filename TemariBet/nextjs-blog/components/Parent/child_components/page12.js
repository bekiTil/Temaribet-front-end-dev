const Page12 = () => {
  return (
    <div className = "bg-[#FED607]">
         <div className = "text-center lg:text-left">
        <h1 className="text-2xl  md:text-3xl text-[#1A3765] font-semibold 2xl:pr-30">Tell us how much hour do you </h1>
        <p className=" text-lg md:text-2xl text-[#5A5A5A] font-semibold  pl-0 p-2">want your child to be tutored</p>
      </div>
     

      <div className = "mt-5">
        <div>
          <label for="price">How many days per week</label>
          <input type="text" id="days" placeHolder = "Days"></input>
          <label for="price"> Recommended: 3 days</label>
        </div>

        <div className = "mx-3">
          <label for="price">How many hours per day</label>
          <input type="text" id="price" placeHolder = "Hour"></input>
          <label for="price">Recommended: 1:30 hr</label>
        </div>
      </div>

      <div className = "mt-10">
      <button className=" bg-[#1A3765] hover:bg-blue-700 text-white text-3xl font-semibold py-3 px-6 ">
            Submit
          </button>

        <input type="text" id="price"></input>
        <label for="price">Registration fee: 500 ETB</label>
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
