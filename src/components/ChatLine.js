import React from "react";
import user from "../images/user.png";
import { SlDislike, SlLike } from "react-icons/sl";

import logo from "../images/logo.png";
import { Rating } from "@smastrom/react-rating";
const fetchTime = (date) => {
  return new Date(date).toLocaleTimeString("en-in", {
    hour: "2-digit",
    minute: "2-digit",
  });
};

const ChatLine = ({
  line,
  type,
  setShowModal,
  setShowRating,
  feedback,
  rating,
  show,
}) => {
  return (
    <div className="flex flex-col gap-4 mb-4">
      <div className="flex gap-7 bg-[#d7c7f4] shadow-md rounded-lg items-center p-3">
        <img src={user} alt="user" className="w-[4rem] h-[4rem]" />
        <div className="flex flex-col gap-2">
          <p className="font-bold">You</p>
          <p>{line.question}</p>
          <p className="text-gray-400">{fetchTime(line.date)}</p>
        </div>
      </div>
      <div className="flex gap-7 bg-[#d7c7f4] shadow-md rounded-lg items-center p-3 group">
        <img src={logo} alt="user" className="w-[4rem] h-[4rem] rounded-full" />
        <div className="flex flex-col gap-2">
          <p className="font-bold">Soul AI</p>
          <p>{line.response}</p>
          <div className="flex justify-between w-full">
            <p className="text-gray-400">{fetchTime(line.date)}</p>
            {type === "new" && (
              <div className="gap-8 hidden group-hover:flex">
                <button onClick={() => setShowModal(true)}>
                  <SlDislike />
                </button>
                <button onClick={() => setShowRating(true)}>
                  <SlLike />
                </button>
              </div>
            )}
          </div>
          {show && feedback && (
            <div className="my-4">
              <span className="font-semibold">Feedback : </span>
              {feedback}
            </div>
          )}
          {show && rating > 0 && (
            <div className="flex gap-2">
              <p className="font-semibold">Rating : </p>
              <Rating className="!w-[7rem] " value={rating} readOnly />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatLine;
