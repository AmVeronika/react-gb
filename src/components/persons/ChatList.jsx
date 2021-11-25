import React, {useEffect} from 'react';
import {useStyles} from "../styles/styles";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addProfileWithThunk, deleteProfileAction} from "../../store/profile/actionProfile"
import {getLoading, getProfiles} from '../../store/profile/selectorProfile';
import {deleteChatAction} from "../../store/chats/actionChats";
import {CircularProgress} from "@mui/material";

export const ChatList = () => {
    const styles = useStyles();
    const dispatch = useDispatch();
    const chatList = useSelector(getProfiles)
    const isLoading = useSelector(getLoading)
    const handleDelete = (id) => {
        dispatch(deleteProfileAction(id))
        dispatch(deleteChatAction(id))
    }

    useEffect(() => {
        dispatch(addProfileWithThunk())
    }, [])
    const chats = chatList.map((chat, ind) => {
        return (
            <li key={chat.id} className="chat-list">
                <Link to={`/chats/dialogs/${chat.id}`} className="chat-link">
                    <img className="list-avatar" src={chat.image} alt="фото пользователя"/>
                    {chat.name}
                </Link>
                <button onClick={() => handleDelete(chat.id)}>
                    <img className="list-cart" src="https://img.icons8.com/cute-clipart/64/000000/delete-sign.png"/>
                </button>
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
