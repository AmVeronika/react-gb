import { ADD_CHATS_ACTION, ADD_NEW_USER_CHATS_ACTION } from "./actionChats";
import { v4 as uuidv4 } from "uuid";


const initialState = {
   chat1: [
      { text: 'Привет!', author: 'Я', id: uuidv4() }, {
         text: 'Меня бесит гугл!!',
         author: 'bot',
         id: uuidv4(),
      }],
   chat2: [
      { text: 'Привет!', author: 'Я', id: uuidv4() }, {
         text: 'Меня бесит Яндекс!!',
         author: 'bot',
         id: uuidv4(),
      }
   ],
   chat3:
      [
         { text: 'Привет!', author: 'Я', id: uuidv4() }, {
            text: 'Меня бесит Мозила!!',
            author: 'bot',
            id: uuidv4(),
         }
      ],
   chat4: [
      { text: 'Привет!', author: 'Я', id: uuidv4() }, {
         text: 'Меня бесит Сафари!!',
         author: 'bot',
         id: uuidv4(),
      }
   ],
   chat5: [
      { text: 'Привет!', author: 'Я', id: uuidv4() }, {
         text: 'Меня бесит Опера!!',
         author: 'bot',
         id: uuidv4(),
      }
   ],
   chat6: [
      { text: 'Привет!', author: 'Я', id: uuidv4() }, {
         text: 'Меня бесит Опера!!',
         author: 'bot',
         id: uuidv4(),
      }
   ],
   chat7: [
      { text: 'Привет!', author: 'Я', id: uuidv4() }, {
         text: 'Меня бесит Опера!!',
         author: 'bot',
         id: uuidv4(),
      }
   ],
   chat8: [
      { text: 'Привет!', author: 'Я', id: uuidv4() }, {
         text: 'Меня бесит Опера!!',
         author: 'bot',
         id: uuidv4(),
      }
   ],
   chat9: [
   ],
   chat10: [
   ],
   chat11: [
   ],
   chat12: [
   ],
   chat13: [
   ],
   chat14: [
   ],
   chat15: [
   ],
   chat16: [
   ],
   chat17: [
   ],
   chat18: [
   ],
   chat19: [
   ],
   chat20: [
   ],
}

export const chatsReducer = (state = initialState, action) => {
   const { type, payload } = action;
   switch (type) {
      case ADD_CHATS_ACTION:
         return {
            ...state,
            [`chat${payload.id}`]: [...state[`chat${payload.id}`], payload.message]
         }
      case ADD_NEW_USER_CHATS_ACTION:
         return {
            ...state,
            [`chat${payload}`]: []

         }
      default:
         return state
   }
}
