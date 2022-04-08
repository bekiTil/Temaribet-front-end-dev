import React from "react";
import Availability from "./Availability";
import BestAt from "./BestAt";
import Fluency from "./Fluency";
import Hobby from "./Hobby";
import Vision from "./Vision";

const BottomCard = (props) => {
  let child = null;
  if (props.type == "available") {
    child = (
      <Availability av={["Ayat", "CMC", "Summit", "Gorro", "Megenagna"]} />
    );
  } else if (props.type == "bestat") {
    child = <BestAt subjects={["Maths", "Physics", "Chemistry"]} />;
  } else if (props.type == "fluency") {
    child = (
      <Fluency
        langs={[
          ["English", "Pro"],
          ["Amharic", "Native"],
          ["Afan Oromo", "Pro"],
        ]}
      />
    );
  } else if (props.type == "hobby") {
    child = <Hobby hobbies={["Movie", "Reading", "Biking"]} />;
  } else if (props.type == "vision") {
    child = (
      <Vision vision="It's not only writers who can benefit from this free online tool. If you're a programmer who's working on a project where blocks of text are needed," />
    );
  }

  return (
    <div className="drop-shadow-xl p-5 bg-[#fefefe] h-full">
      <h1 className="text-sm md:text-base xl:text-xl text-[#1a3765]">
        {props.title}
      </h1>
      <div className="h-1 bg-gray-200"></div>
      {child}
    </div>
  );
};

export default BottomCard;
