import React from "react";
import './message.scss'


export const Message = ({messageList}) => {
    const messages = messageList.map(msg => {
        return (
            <p className={msg.author === "bot" ? 'bot' : "user"} key={Math.random()} >
                {msg.text}
                <span className="message__wrap-name"> {msg.author}</span>
            </p>)
    })
    return (
        <div className="message__wrap castom__scroll">
            {messages}
        </div>
    )
}