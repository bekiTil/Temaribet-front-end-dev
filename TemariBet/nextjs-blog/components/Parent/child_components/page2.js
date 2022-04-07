const Page2 = () => {
  return (
    <div className = "bg-[#FED607]">
      <div>
        <h1>Let us Know you a little bit.</h1>
        <p>So that we give you the service you deserve.</p>
      </div>

      <div>
        <label for="phoneN">Your phone number?</label>
        <br></br>
        <input type="text" id="phoneN" placeHolder="Phone no"></input>
      </div>

      <div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 ">
          CONTINUE
        </button>
      </div>
    </div>
  );
};

export default Page2;
