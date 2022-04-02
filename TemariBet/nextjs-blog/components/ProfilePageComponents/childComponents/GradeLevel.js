import React from 'react'

const GradeLevel = () => {
  return (
    <div>
        <h1 className="mt-16 font-serif opacity-30 text-2xl">
        Grade Level
        </h1>
        <form>
        <input type={"checkbox"} name="KG" id="kg" />
        <label for="kg">KG</label>
        <br />
        <input type={"checkbox"} name="1to5" id="1to5" />
        <label for="1to5">1 - 5</label>
        <br />
        <input type={"checkbox"} name="6to8" id="6to8" />
        <label for="6to8">6 - 8</label>
        <br />
        <input type={"checkbox"} name="9to10" id="9to10" />
        <label for="9to10">9 - 10</label>
        <br />
        <input type={"checkbox"} name="11to12" id="11to12" />
        <label for="11to12">11 - 12</label>
        <br />
        </form>
    </div>
  )
}

export default GradeLevel