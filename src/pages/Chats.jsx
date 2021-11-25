import React from 'react';
import { ChatList } from "../components/persons/ChatList";
import { AddNewUser } from "../components/addNewUser/AddNewUser"
export const Chats = () => {
   return (
      <>
         <AddNewUser />
         <ChatList />
      </>
   );
};
