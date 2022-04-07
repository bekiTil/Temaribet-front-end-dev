const Page6 = () => {
  return (
    <div className = "bg-[#FED607]">
      <div>
        <h1>I AM YONATAN</h1>
        <p>I am coordinator at Temaribet</p>
      </div>
      <div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ">
          Girl
        </button>

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-5">
          Boy
        </button>
      </div>
      <div>
        <label for="name">What is child's name?</label>
        <br></br>
        <input type="text" id="name" placeHolder="name"></input>
      </div>

      <div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 ">
          CONTINUE
        </button>
      </div>
    </div>
  );
};

export default Page6;
