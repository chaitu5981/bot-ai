import React, { useContext, useEffect, useState } from "react";
import { ChatContext } from "../App";
import ChatLine from "../components/ChatLine";
import { Rating } from "@smastrom/react-rating";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../images/logo.png";
import { Drawer } from "@mui/material";
import Menu from "../components/Menu";

const PastChats = () => {
  const { chats } = useContext(ChatContext);
  const [openDrawer, setOpenDrawer] = useState(false);

  const [filteredChats, setFilteredChats] = useState([]);
  const [stars, setStars] = useState("all");
  useEffect(() => {
    if (stars === "all") setFilteredChats(chats);
    else
      setFilteredChats(chats.filter((chat) => chat.rating === Number(stars)));
  }, [chats, stars]);

  const getDate = (chat) => {
    const date = new Date(chat.chatLines[0].date);
    return date.toLocaleDateString("en-in", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };
  return (
    <div className="w-full xl:w-[87%] bg-[#f5f2fb] h-full flex p-6 flex-col overflow-y-auto gap-5">
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
      <p className="text-xl font-semibold self-center">Conversation History</p>
      <select
        className="bg-white p-2 rounded-2xl w-fit self-center"
        value={stars}
        onChange={(e) => setStars(e.target.value)}
      >
        <option value="all">All Ratings</option>
        <option value="1">1 Star</option>
        <option value="2">2 Star</option>
        <option value="3">3 Star</option>
        <option value="4">4 Star</option>
        <option value="5">5 Star</option>
      </select>
      {filteredChats.length > 0 &&
        filteredChats.map((chat, i) => (
          <div key={i} className="my-6">
            <p className="my-6">{getDate(chat)}</p>
            {chat.chatLines?.toReversed().map((line, i) => (
              <ChatLine
                key={i}
                line={line}
                type="view"
                feedback={chat.feedback}
                rating={chat.rating}
                show={i === chat.chatLines.length - 1}
              />
            ))}
          </div>
        ))}
    </div>
  );
};

export default PastChats;
