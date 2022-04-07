const Page6 = () => {
  return (
    <div className = "bg-[#FED607]">
      <div>
        <h1 className="text-3xl text-[#1A3765] font-semibold ">I AM YONATAN.</h1>
        <p className="text-2xl text-[#5A5A5A] font-semibold  pl-0 p-2">I am coordinator at Temaribet</p>
      </div>
      <div className=" flex justify-start">
        <button className=" text-5xl bg-white text-white text-[#1A3765] font-bold mr-4 my-6 px-10 py-6">
          Girl
        </button>

        <button className="text-5xl bg-white text-white text-[#707070] font-bold ml-4 my-6  px-10 py-6">
          Boy
        </button>
      </div>
      <div className="text-[#1A3765] text-2xl  font-bold">
        <label  for="name">What is child's name?</label>
        <br></br>
        <input type="text" id="name" placeHolder="name"></input>
      </div>

      <div>
        <button className=" text-3xl bg-[#1A3765] text-white font-bold my-6 py-4 px-6 ">
          CONTINUE
        </button>
      </div>
    </div>
  );
};

export default Page6;
