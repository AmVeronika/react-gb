import React, {useEffect} from 'react';
import {Message} from "../components/message/Message";
import {FormForMessage} from "../components/message/FormForMessage";
import {useNavigate, useParams} from "react-router-dom";
import { useSelector } from 'react-redux';
import { getProfiles } from '../store/profile/selectorProfile'

export const Dialogs = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const profiles = useSelector(getProfiles)
    useEffect(() => {
        if (id > profiles.length) {
            navigate('/chats', {replace: true})
        }
    }, []);

    return (
        <section className={"message"}>
            <p className='message__text'> Secret Chat</p>
            <Message/>
            <FormForMessage/>
        </section>
    );
};
