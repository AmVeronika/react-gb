import {onValue, push} from "firebase/database";
import {getChatMsgsListRefById} from "../../firebase";

export const ADD_MESSAGES_ACTION = "ADD_MESSAGES_ACTION";
export const SET_MESSAGES_ACTION = "SET_MESSAGES_ACTION";

export const addMessagesAction = (payload) => ({
    type: ADD_MESSAGES_ACTION,
    payload: payload
})
export const setMessagesAction = (payload) => ({
    type: SET_MESSAGES_ACTION,
    payload: payload
})

export const setMessageListWithThunk = (id) => async (dispatch) => {
    try {
        await onValue(getChatMsgsListRefById(id), (snapshot) => {
            const messageList = snapshot.val();
            if (messageList) {
                const chats = Object.keys(messageList).map(obj => {
                    return messageList[obj]
                })
                dispatch(setMessagesAction(chats))
            }
        });
    } catch (e) {
        console.error(e.message)
    }
}

export const addMessageWithThunk = (id, message) => async (dispatch) => {
    try {
        await push(getChatMsgsListRefById(id), message);
    } catch (e) {
        console.error(e.message)
    }
}

