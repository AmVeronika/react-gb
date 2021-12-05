import {onValue} from "firebase/database";
import {getUserRefById} from "../../firebase";

export const ADD_USER_ACTION = "ADD_USER_ACTION";
export const LOADING_PROFILE_ACTION = "LOADING_PROFILE_ACTION";

export const setUserAction = (payload) => ({
    type: ADD_USER_ACTION,
    payload: payload
})
export const loadingProfileAction = {
    type: LOADING_PROFILE_ACTION
}
export const addProfileWithThunk = () => (dispatch) => {
    dispatch(loadingProfileAction)
}
export const setUserWithThunk = (id) => async (dispatch) => {
    try {
        await onValue(getUserRefById(id), snapshot => {
            dispatch(setUserAction({name: snapshot.val().user_name, id: snapshot.val().user_id}))
        })
    } catch (e) {
        console.log(e.message)
    }
}
