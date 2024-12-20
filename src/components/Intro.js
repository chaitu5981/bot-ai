import React from "react";
import logo from "../images/logo.png";
const introTitles = [
  "Hi, what is the weather",
  "Hi, what is my location",
  "Hi, what is the temperature",
  "Hi, how are you",
];

const message = "Get immediate AI generated response";
const Intro = () => {
  return (
    <div className="flex flex-col flex-grow pb-12 gap-14 overflow-y-auto">
      <div className=" self-center w-full">
        <p className="text-center text-xl mb-2 font-bold">
          How can I help you today?
        </p>
        <img src={logo} alt="" className="w-[4rem] h-[4rem] mx-auto" />
      </div>
      <div className="flex flex-col md:flex-row flex-wrap gap-4 justify-center">
        {introTitles.map((title, i) => (
          <div key={i} className="bg-white w-full md:w-[45%] p-3">
            <p className="font-bold">{title}</p>
            <p className="text-slate-400">{message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Intro;
