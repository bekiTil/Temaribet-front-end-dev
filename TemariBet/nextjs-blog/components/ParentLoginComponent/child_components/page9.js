const Page9 = () => {
  return (
    <div className = "bg-[#FED607]">
      <div>
        <h1>In what area does your child</h1>
        <p>need tutoring</p>
      </div>

      <div className="mt-5">
        <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 ">
          Academic
        </button>

        <button className="mx-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 ">
          Coding
        </button>

        <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 ">
          Language
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

export default Page9;
