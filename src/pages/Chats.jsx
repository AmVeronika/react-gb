import React from 'react';
import { ChatList } from "../components/persons/ChatList";
import { AddNewChat } from "../components/addNewChat/AddNewChat"
export const Chats = () => {
   return (
      <>
         <AddNewChat />
         <ChatList />
      </>
   );
};
