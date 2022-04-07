const Page4 = () => {
  return (
    <div className = "bg-[#FED607]">
      <div>
        <h1>Our office is located at</h1>
        <p>Office number, 206 Dream bldg.CMC</p>
      </div>

      <div>
        <label for="address">Your location</label>
        <br></br>
        <input type="text" id="address" placeHolder="Adress"></input>
      </div>

      <div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 ">
          CONTINUE
        </button>
      </div>
    </div>
  );
};

export default Page4;
