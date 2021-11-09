import React, {useEffect, useRef, useState} from 'react';
import {List, ListItem, ListItemButton, ListItemText} from "@mui/material";
import {useStyles} from "../styles/styles";

const ChatList = () => {
    const styles = useStyles();
    const [chatList, setChatList] = useState([])

    useEffect(() => {
        let isMounted = true;
        const fetchChatList = async () => {
            try {
                const response = await fetch("https://rickandmortyapi.com/api/character/?page=17");
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

    const chats = chatList.map(chat => {
        return (
            <ListItem disablePadding key={chat.id}>
                <img className="list-avatar" src={chat.image} alt="фото пользователя"/>
                <ListItemButton>
                    <ListItemText primary={chat.name}/>
                </ListItemButton>
            </ListItem>
        )
    });

    return (
        <div className="castom__scroll list-wrap">
            <List className={styles.list}>
                {chats}
            </List>
        </div>

)
};

export default ChatList;