import React from "react";
import './message.scss'

export const Message = ({text})=> {
    return (
        <p className='message-text'> Hello { text }</p>
    )
}