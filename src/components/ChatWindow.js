import React, { useState } from "react";

import ReactModal from "react-modal";
import bulb from "../images/bulb.png";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import "./Rating.css";
import ChatLine from "./ChatLine";
const ChatWindow = ({ chat, setChat }) => {
  const [showModal, setShowModal] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [showRating, setShowRating] = useState(false);
  const submitFeedback = () => {
    if (!feedback) return;
    setChat({ ...chat, feedback });
    setFeedback("");
    setShowModal(false);
  };

  return (
    <div className="flex-grow flex-col-reverse flex px-4 pb-4 gap-4 overflow-y-auto">
      {chat.feedback && (
        <div className="ml-20">
          <span className="font-semibold">Feedback : </span>
          {chat.feedback}
        </div>
      )}
      {showRating && (
        <div className="ml-20">
          <p>Rate this Response</p>
          <Rating
            className="!w-[7rem]"
            value={chat.rating}
            onChange={(val) => setChat({ ...chat, rating: val })}
          />
        </div>
      )}
      {chat.chatLines.map((line, i) => (
        <ChatLine
          type="new"
          key={i}
          line={line}
          setShowModal={setShowModal}
          setShowRating={setShowRating}
        />
      ))}
      <ReactModal
        ariaHideApp={false}
        isOpen={showModal}
        contentLabel="Feedback"
        className="left-[50%] top-[50%] w-[70vw] md:w-fit bg-[#faf7ff] p-5 flex flex-col gap-4 rounded-lg absolute -translate-x-1/2 -translate-y-1/2 shadow-md"
        onRequestClose={() => setShowModal(false)}
      >
        <div className="flex gap-4">
          <img src={bulb} alt="" />
          <p className="flex-grow self-end text-xl">
            Provide Additional Feedback
          </p>
          <button className="text-xl" onClick={() => setShowModal(false)}>
            X
          </button>
        </div>
        <textarea
          onChange={(e) => setFeedback(e.target.value)}
          value={feedback}
          cols="55"
          rows="6"
          className="border-2 border-slate-400  rounded-lg block p-4"
        ></textarea>
        <button
          className="bg-[#d7c7f4] px-10 py-2 text-xl self-end rounded-md"
          onClick={submitFeedback}
        >
          Submit
        </button>
      </ReactModal>
    </div>
  );
};

export default ChatWindow;
