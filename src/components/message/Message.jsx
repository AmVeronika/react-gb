import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import './message.scss'
import { getChat } from "../../store/chats/selectorChat";

export const Message = () => {
   const { id } = useParams();
   const chat = useSelector(getChat(id))
   const messages = chat ? chat.map(msg => {
      return (
         <p className={msg.author === "bot" ? 'bot' : "user"} key={msg.id}>
            {msg.text}
            <span className="message__wrap-name"> {msg.author}</span>
         </p>)
   }) : []
   return (
      <div className="message__wrap castom__scroll">
         {messages}
      </div>
   )
}