import React from "react";
import {useSelector} from "react-redux";
import './message.scss'
import {getMessageList} from "../../store/messages/selectorMessages";
import {getUserName} from "../../store/profile/selectorProfile";

export const Message = () => {
    const userName = useSelector(getUserName)
    const messagesList = useSelector(getMessageList)
    const messages = messagesList ? messagesList.map(msg => {
        return (
            <p className={msg.author === userName ? "user" : 'bot'} key={msg.id}>
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
