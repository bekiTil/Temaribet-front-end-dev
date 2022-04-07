const Page11 = () => {
  return (
    <div className = "bg-[#FED607]">
      <div>
        <h1>In what area does your child</h1>
        <p>need tutoring</p>
      </div>

      <div>
        <button className="my-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 ">
          Computer Basics
        </button>
        <br></br>
        <button className="my-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 ">
          Website Development
        </button>
        <br></br>
        <button className="my-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 ">
          App Development
        </button>
        <br></br>
      </div>

      <div className = "mt-10">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 ">
          CONTINUE
        </button>
      </div>
    </div>
  );
};

export default Page11;
