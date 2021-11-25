import React, { useEffect } from 'react';
import { useStyles } from "../styles/styles";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addProfileAction, deleteProfileAction } from "../../store/profile/actionProfile"
import { getProfiles } from '../../store/profile/selectorProfile';
import {deleteChatAction} from "../../store/chats/actionChats";

export const ChatList = () => {
   const styles = useStyles();
   const dispatch = useDispatch();
   const chatList = useSelector(getProfiles)
   const handleDelete = (id) => {
      dispatch(deleteProfileAction(id))
      dispatch(deleteChatAction(id))
   }

   useEffect(() => {
      let isMounted = true;
      const fetchChatList = async () => {
         try {
            const response = await fetch("https://rickandmortyapi.com/api/character/?page=1");
            const data = await response.json();
            if (isMounted)
               dispatch(addProfileAction(data.results))
         } catch (e) {
            console.error(e.message)
         }
      };
      fetchChatList();
      return () => {
         isMounted = false
      }
   }, [])
   const chats = chatList.map((chat, ind) => {
      return (
         <li key={chat.id} className="chat-list">
            <Link to={`/chats/dialogs/${chat.id}`} className="chat-link">
               <img className="list-avatar" src={chat.image} alt="фото пользователя" />
               {chat.name}
            </Link>
            <button onClick={() => handleDelete(chat.id)}>
               <img className="list-cart" src="https://img.icons8.com/cute-clipart/64/000000/delete-sign.png" />
            </button>
         </li>
      )
   });

   return (
      <div className="castom__scroll list-wrap">
         <ul className={styles.list}>
            {chats}
         </ul>
      </div>

   )
};
