import React, {useEffect} from 'react';
import {Message} from "../components/message/Message";
import {FormForMessage} from "../components/message/FormForMessage";
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import { getProfiles } from '../store/profile/selectorProfile'
import {setMessageListWithThunk} from "../store/messages/actionMessages";

export const Dialogs = () => {
    const {id} = useParams();
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(setMessageListWithThunk(id))
    },[])

    return (
        <section className={"message"}>
            <p className='message__text'> Secret Chat</p>
            <Message/>
            <FormForMessage/>
        </section>
    );
};
