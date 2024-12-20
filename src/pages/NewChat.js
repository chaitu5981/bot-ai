import React, { useContext, useState } from "react";
import ChatWindow from "../components/ChatWindow";
import { ChatContext } from "../App";
import sampleData from "../data/sampleData.json";
import Intro from "../components/Intro";
import logo from "../images/logo.png";

import { GiHamburgerMenu } from "react-icons/gi";
import { Drawer } from "@mui/material";
import Menu from "../components/Menu";
const NewChat = () => {
  const defaultChat = { chatLines: [], feedback: "", rating: 0 };
  const [openDrawer, setOpenDrawer] = useState(false);
  const { chats, setChats } = useContext(ChatContext);
  const [chat, setChat] = useState(defaultChat);
  const [question, setQuestion] = useState("");
  const submitQuestion = () => {
    if (!question) return;
    let response = sampleData.find((d) => d.question === question)?.response;
    if (!response)
      response =
        "As an AI language model, I don't have access to these details.Therefore, How can I assist you further?";
    const date = new Date();

    setChat({
      ...chat,
      chatLines: [{ question, response, date }, ...chat.chatLines],
    });
    setQuestion("");
  };
  const addToChats = () => {
    setChats([...chats, chat]);
    setChat(defaultChat);
  };

  return (
    <div className="w-full xl:w-[87%] bg-[#f5f2fb] flex h-full flex-col p-4">
      <div className="flex gap-2 items-center ">
        <GiHamburgerMenu
          className="xl:hidden"
          onClick={() => setOpenDrawer(true)}
        />
        <img src={logo} alt="logo" className="w-[2rem] h-[2rem] xl:hidden" />
        <p className="text-[#9785ba] text-2xl font-bold">Bot AI</p>
      </div>
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <Menu setOpenDrawer={setOpenDrawer} />
      </Drawer>
      {chat?.chatLines?.length === 0 ? (
        <Intro />
      ) : (
        <ChatWindow chat={chat} setChat={setChat} />
      )}
      <div className="flex gap-4">
        <input
          value={question}
          onKeyDown={(e) => {
            if (e.key === "Enter") submitQuestion();
          }}
          onChange={(e) => setQuestion(e.target.value)}
          type="text"
          className="flex-grow rounded-md outline-none border-2 px-2 border-[#d7c7f4]"
        />
        <button
          className="bg-[#d7c7f4] p-2 rounded-md w-[3.5rem]"
          onClick={submitQuestion}
        >
          Ask
        </button>
        <button
          className="bg-[#d7c7f4] p-2 rounded-md w-[3.5rem]"
          onClick={addToChats}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default NewChat;
