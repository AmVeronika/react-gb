import React, {useEffect, useState} from 'react';
import {useStyles} from "../styles/styles";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getChatsWithThunk} from "../../store/chats/actionChats";
import {CircularProgress} from "@mui/material";
import {getChats} from "../../store/chats/selectorChat";

export const ChatList = () => {
    const styles = useStyles();
    const dispatch = useDispatch();
    const chatList = useSelector(getChats)
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        dispatch(getChatsWithThunk)
    }, [])

    const chats = chatList.map((chat, ind) => {
        return (
            <li key={chat.id_chat} className="chat-list">
                <Link to={`/chats/dialogs/${chat.id_chat}`} className="chat-link">
                    {chat.name_chat}
                </Link>
            </li>
        )
    });

    return (
        <div className="castom__scroll list-wrap">
            {isLoading ? <CircularProgress/> : <ul className={styles.list}>
                {chats}
            </ul>}
        </div>

    )
};
