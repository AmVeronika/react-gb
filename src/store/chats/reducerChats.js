import {ADD_CHATS_ACTION} from "./actionChats";

const initialState = {
    chats: []
}

export const chatsReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ADD_CHATS_ACTION:
            return {
                ...state,
                chats: [...payload]
            }
        default:
            return state
    }
}
