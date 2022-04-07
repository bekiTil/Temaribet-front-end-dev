import React from 'react'
import Availability from './Availability';

const BottomCard = (props) => {
  if (props.type == "available"){
    child == props.availability;
  }
  else if (props.type == "bestat"){
    child == props.best;
  }
  else if (props.type == "fluency"){
    child == props.fluency;
  }
  else if (props.type == "hobby"){
    child == props.hobby;
  }
  else if (props.type == "vision"){
    child == props.vision;
  }

  return (
    <div className='sm:drop-shadow-xl p-5 bg-[#fefefe]'>
        <h1 className='text-sm md:text-base xl:text-xl text-[#1a3765]'>{props.title}</h1>
        <hr />
        <Availability 
          av = {["sdf", "asdf", "Asdf", "sdfa", "asdfas", "sdfas"]}
        />
    </div>
  )
}

export default BottomCard