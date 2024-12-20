import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import NewChat from "./pages/NewChat";
import PastChats from "./pages/PastChats";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <NewChat />,
      },
      {
        path: "past-chats",
        element: <PastChats />,
      },
    ],
  },
]);

export default router;
