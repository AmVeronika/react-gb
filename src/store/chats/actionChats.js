export const ADD_CHATS_ACTION = "ADD_CHATS_ACTION";
export const ADD_NEW_USER_CHATS_ACTION = "ADD_NEW_USER_CHATS_ACTION";

export const addChatAction = (payload)=> ({
   type: ADD_CHATS_ACTION,
   payload: payload
})
export const addNewUserChatAction = (payload)=> ({
   type: ADD_NEW_USER_CHATS_ACTION,
   payload: payload
})
