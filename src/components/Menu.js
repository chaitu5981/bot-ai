import React from "react";
import { BiSolidEdit } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import logo from "../images/logo.png";

const Menu = ({ setOpenDrawer }) => {
  const navigate = useNavigate("/");
  const goToNewChat = () => {
    if (setOpenDrawer) setOpenDrawer(false);
    navigate("/");
  };
  const goToPastChats = () => {
    if (setOpenDrawer) setOpenDrawer(false);
    navigate("/past-chats");
  };
  return (
    <div className="w-[12rem] h-full  flex-col items-center flex">
      <div className="flex p-2 items-center bg-[#d7c7f4] w-full justify-around">
        <img src={logo} alt="logo" className="w-[2rem] h-[2rem]" />
        <button
          className=" flex items-center text-xl gap-2"
          onClick={goToNewChat}
        >
          <p className="font-semibold">New Chat</p>
          <BiSolidEdit className="text-2xl" />
        </button>
      </div>
      <button
        className="rounded-lg bg-[#d7c7f4] mx-auto p-2 my-4 font-semibold"
        onClick={goToPastChats}
      >
        Past Conversations
      </button>
    </div>
  );
};

export default Menu;
