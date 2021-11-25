import {v4 as uuidv4} from "uuid";

export const ADD_CHATS_ACTION = "ADD_CHATS_ACTION";
export const ADD_NEW_USER_CHATS_ACTION = "ADD_NEW_USER_CHATS_ACTION";
export const DELETE_CHATS_ACTION = "DELETE_CHATS_ACTION";

export const addChatAction = (payload)=> ({
   type: ADD_CHATS_ACTION,
   payload: payload
})
export const addNewUserChatAction = (payload)=> ({
   type: ADD_NEW_USER_CHATS_ACTION,
   payload: payload
})
export const deleteChatAction = (payload)=> ({
   type: DELETE_CHATS_ACTION,
   payload: payload
})

export const addMessageWithThunk = (msgValue,id) => (dispatch) => {
   if (msgValue !== '') {
      dispatch(addChatAction({message: {text:msgValue, author: 'Я', id:uuidv4()}, id: id}))
      const fetchChatList = async () => {
         try {
            const response = await fetch("https://geek-jokes.sameerkumar.website/api?format=json");
            const data = await response.json();
            dispatch(addChatAction({message: {text:data.joke, author: 'bot', id:uuidv4()}, id: id}))
         }   catch (e) {
            console.error(e.message)
         }
      };
      setTimeout(fetchChatList, 300)
   }
}
