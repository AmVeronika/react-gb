import React, {useEffect, useState} from 'react';
import {Message} from "../components/message/Message";
import {FormForMessage} from "../components/message/FormForMessage";
import {v4 as uuidv4} from "uuid";
import {useNavigate, useParams} from "react-router-dom";

export const Dialogs = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [messageList, setMessageList] = useState([
        [
            {text: 'Привет!', author: 'Я', id: uuidv4()}, {
            text: 'Меня бесит гугл!!',
            author: 'bot',
            id: uuidv4(),
        }
        ],
        [
            {text: 'Привет!', author: 'Я', id: uuidv4()}, {
            text: 'Меня бесит Яндекс!!',
            author: 'bot',
            id: uuidv4(),
        }
        ],
        [
            {text: 'Привет!', author: 'Я', id: uuidv4()}, {
            text: 'Меня бесит Мозила!!',
            author: 'bot',
            id: uuidv4(),
        }
        ],
        [
            {text: 'Привет!', author: 'Я', id: uuidv4()}, {
            text: 'Меня бесит Сафари!!',
            author: 'bot',
            id: uuidv4(),
        }
        ],
        [
            {text: 'Привет!', author: 'Я', id: uuidv4()}, {
            text: 'Меня бесит Опера!!',
            author: 'bot',
            id: uuidv4(),
        }
        ],
    ]);
    useEffect(() => {
        if (id > 4) {
            navigate('/chats', {replace: true})
        }
    }, []);
    const [randomMessage, setRandomMessage] = useState(['Я вас слушаю', 'Пока что у меня небольшой словарный запас', 'Я вас не понимаю', 'Всё могло бы быть лучше, если бы не эта погода', 'Какую оценку можно за это получить?', 'Пусть будет так', 'У меня вот есть кот, а у вас?', 'Это здорово', 'Думаю, пора закругляться', 'Пока пока.', 'Я думал, это была отличная идея'])
    const updateMessageList = (newMessage) => {
        setMessageList(messageList => [...messageList, messageList[id].push(newMessage)])
    };

    useEffect(() => {
        if (messageList[messageList.length - 1].author === 'Я') {
            const random = Math.floor(Math.random() * randomMessage.length);
            setMessageList(messageList => [...messageList, {text: randomMessage[random], author: 'bot', id: uuidv4()}
            ])
        }
    }, [messageList]);


    return (
        <section className={"message"}>
            <p className='message__text'> Secret Chat</p>
            <Message messageList={messageList[id]}/>
            <FormForMessage updateMessageList={updateMessageList}/>
        </section>
    );
};
