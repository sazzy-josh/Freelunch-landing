import React from "react";
import {features} from "../../../db/constants";

const About = () => {
  return (
    <div className='py-24 flex flex-col items-center w-full'>
      <p className='text-darkNeutral mb-10'>Our Three Primary Features!</p>

      <div className='flex flex-col md:flex-row justify-around items-center w-full max-w-5xl'>
        {features.map((item, idx) => {
          return (
            <div
              className={`px-10 w-52 py-4 text-center mr-3 font-bold mb-3 md:mb-0 ${
                item.text === "Invites" ? "text-white" : "text-black"
              }`}
              style={{backgroundColor: item.bgColor}}
              key={idx}
            >
              {item.text}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default About;
