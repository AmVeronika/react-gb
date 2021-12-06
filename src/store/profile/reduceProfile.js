import {
    ADD_USER_ACTION,
    LOADING_PROFILE_ACTION
} from "./actionProfile";

const initialState = {
    user_name: '',
    user_id: null,
    isLoading: false
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER_ACTION:
            return {
                ...state,
                user_name: action.payload.name,
                user_id: action.payload.id
            }
        case LOADING_PROFILE_ACTION:
            return {
                ...state,
                isLoading: !state.isLoading
            }
        default:
            return state
    }
}
