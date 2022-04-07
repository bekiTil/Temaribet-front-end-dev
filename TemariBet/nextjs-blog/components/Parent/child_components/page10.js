const Page10 = () => {
  return (
    <div className = "bg-[#FED607]">
      <div>
        <h1>In what area does your child</h1>
        <p>need tutoring</p>
      </div>

      <div className="mt-5">
        <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 ">
          English
        </button>

        <button className="mx-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 ">
          Amharic
        </button>

        <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 ">
          Afan Oromo
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

export default Page10;
