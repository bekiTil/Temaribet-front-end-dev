const Page11 = () => {
  return (
    <div className = "bg-[#FED607]">
      <div>
        <h1>Tell us how much hour do you </h1>
        <p>want your child to be tutored</p>
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
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 ">
          Show Price
        </button>

        <input type="text" id="price"></input>
        <label for="price">Registration fee: 500 ETB</label>
      </div>

      <div className="mt-5">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 ">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Page11;
