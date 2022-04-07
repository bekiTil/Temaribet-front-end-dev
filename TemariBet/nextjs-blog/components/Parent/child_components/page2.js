const Page2 = () => {
    return (
      <div className = "bg-[#FED607]">
        <div>
          <h1>I AM YONATAN</h1>
          <p>I am coordinator at Temaribet</p>
        </div>
  
        <div>
          <label for="phoneN">What is your name?</label>
          <br></br>
          <input type="text" id="phoneN" placeHolder="name"></input>
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
  