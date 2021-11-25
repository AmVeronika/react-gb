import {ADD_CHATS_ACTION, ADD_NEW_USER_CHATS_ACTION, DELETE_CHATS_ACTION} from "./actionChats";

const initialState = {
    chat1: [],
    chat2: [],
    chat3: [],
    chat4: [],
    chat5: [],
    chat6: [],
    chat7: [],
    chat8: [],
    chat9: [],
    chat10: [],
    chat11: [],
    chat12: [],
    chat13: [],
    chat14: [],
    chat15: [],
    chat16: [],
    chat17: [],
    chat18: [],
    chat19: [],
    chat20: [],
}

export const chatsReducer = (state = initialState, action) => {
    const {type, payload} = action;
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
        case DELETE_CHATS_ACTION:
            const chatsList = {...state}
            delete chatsList[`chat${payload}`]
            return chatsList
        default:
            return state
    }
}
