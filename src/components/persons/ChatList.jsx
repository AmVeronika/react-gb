import React, {useEffect, useState} from 'react';
import {List, ListItem, ListItemButton, ListItemText} from "@mui/material";
import {useStyles} from "../styles/styles";
import {Link} from "react-router-dom";

export const ChatList = () => {
    const styles = useStyles();
    const [chatList, setChatList] = useState([])

    useEffect(() => {
        let isMounted = true;
        const fetchChatList = async () => {
            try {
                const response = await fetch("https://rickandmortyapi.com/api/character/?page=1");
                const data = await response.json();
                if (isMounted)
                    setChatList(data.results)
            } catch (e) {
                console.error(e.message)
            }
        };
        fetchChatList();
        return () => {
            isMounted = false
        }
    }, [])

    const chats = chatList.slice(0, 5).map((chat, ind) => {
        return (
            <li key={chat.id} className="chat-list">
                <Link to={`/chats/dialogs/${ind}`} className="chat-link">
                    <img className="list-avatar" src={chat.image} alt="фото пользователя"/>
                    {chat.name}
                </Link>

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
