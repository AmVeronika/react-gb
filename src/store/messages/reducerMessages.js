import {ADD_MESSAGES_ACTION, SET_MESSAGES_ACTION} from "./actionMessages";


const initialState = {
    messageList: []
}

export const messagesReducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case SET_MESSAGES_ACTION:
            return {
                ...state,
                messageList: [...payload]
            }
        case ADD_MESSAGES_ACTION:
            return {
                ...state,
                messageList: [...state.messageList, payload]
            }
        default:
            return state
    }
}
