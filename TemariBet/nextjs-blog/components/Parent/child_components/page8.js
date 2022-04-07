const Page8 = () => {
  return (
    <div className = "bg-[#FED607]">
      <div>
        <h1>In what area does your child</h1>
        <p>need tutoring</p>
      </div>

      <div>
        <input type="radio" value="" name="" id="all" />

        <label for="all">All subjectsin grade 6 </label>
        <br></br>
      </div>

      <div>
        <div className = "mt-4">
          <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 ">
            Math
          </button>

          <button className="mx-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 ">
            Phyiscs
          </button>

          <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 ">
            Chemistry
          </button>
        </div>

        <div className="my-4">
          <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 ">
            Biology
          </button>

          <button className="mx-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 ">
            History
          </button>

          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 ">
            Geography
          </button>
        </div>

        <div>
          <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 ">
            Economics
          </button>

          <button className="mx-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 ">
            Civics
          </button>

          <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 ">
            SAT
          </button>
        </div>
      </div>

      <div>
        <button className=" my-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 ">
          + Add subject
        </button>
      </div>

      <div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 ">
          CONTINUE
        </button>
      </div>
    </div>
  );
};

export default Page8;
