const Page6 = () => {
  return (
    <div className = "bg-[#FED607]">
      <div>
        <h1>Now let me know the details</h1>
        <p>So that we give the sweetest service</p>
      </div>
      <div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ">
          Age
        </button>

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-5">
          Grade
        </button>
      </div>
      <div>
        <label for="name">What is your child's school?</label>
        <br></br>
        <input type="text" id="name" placeHolder="School"></input>
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
