import React, { createContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Menu from "./components/Menu";
export const ChatContext = createContext();
const App = () => {
  const [chats, setChats] = useState(() => {
    const chats = localStorage.getItem("chats");
    return chats ? JSON.parse(chats) : [];
  });
  useEffect(() => {
    localStorage.setItem("chats", JSON.stringify(chats));
  }, [chats]);
  return (
    <ChatContext.Provider value={{ chats, setChats }}>
      <div className="flex" style={{ minHeight: "100vh", height: "100vh" }}>
        <div className="hidden xl:block">
          <Menu />
        </div>
        <Outlet />
      </div>
    </ChatContext.Provider>
  );
};

export default App;
