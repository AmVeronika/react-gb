import {onValue} from "firebase/database";
import {chatsRef} from "../../firebase";

export const ADD_CHATS_ACTION = "ADD_CHATS_ACTION";

export const addChatAction = (payload) => ({
    type: ADD_CHATS_ACTION,
    payload: payload
})
export const getChatsWithThunk = async (dispatch) => {
        try {
            await onValue(chatsRef, (snapshot) => {
                const chatsData = snapshot.val();
                if (chatsData) {
                    const chats = Object.keys(chatsData).map(obj => {
                        return {id_chat: chatsData[obj].id_chat, name_chat: chatsData[obj].name_chat}
                    })
                    dispatch(addChatAction(chats))
                }
            });
        } catch (e) {
            console.error(e.message)
        }
}
