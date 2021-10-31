import './nullstyle.scss';
import './App.scss';

import {Message} from './components/message/Message'
import {useEffect,  useState} from "react";
import {FormForMessage} from "./components/message/FormForMessage";


function App() {
    const [messageList, setMessageList] = useState([{text: 'Привет!', author: 'Я'}, {
        text: 'Меня бесит гугл!!',
        author: 'bot'
    }]);
    const [randomMessage, setRandomMessage] = useState(['Я вас слушаю', 'Пока что у меня небольшой словарный запас', 'Я вас не понимаю', 'Всё могло бы быть лучше, если бы не эта погода', 'Какую оценку можно за это получить?', 'Пусть будет так', 'У меня вот есть кот, а у вас?','Это здорово', 'Думаю, пора закругляться', 'Пока пока.', 'Я думал, это была отличная идея'])
    const updateMessageList = (newMessage) => {
        setMessageList(messageList => [...messageList, newMessage])
    };
    useEffect(() => {
       if( messageList[messageList.length-1].author === 'Я' ) {
           const random = Math.floor(Math.random() * randomMessage.length);
           setMessageList(messageList =>[...messageList, { text: randomMessage[random], author: 'bot' }
           ] )
       }
    }, [messageList])

    return (
        <div className="app">
            <header className="app-header">
                <img src='https://irl.by/wp-content/uploads/2017/08/52_nc7DbtMU-850x607.jpg' className="App-logo"
                     alt="logo"/>
                <h1 className="app-header__title">CHAT</h1>
            </header>
            <main className={"main"}>
                <section className={"message"}>
                    <p className='message__text'> Secret Chat</p>
                    <Message messageList={messageList}/>
                    <FormForMessage updateMessageList={ updateMessageList }/>
                </section>

            </main>
        </div>
    );
}

export default App;
