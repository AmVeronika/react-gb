import {PROFILE_ACTION} from "./actionProfile";

const initialState = {
    showName: false,
    name: 'Default'
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case PROFILE_ACTION:
            return {
                ...state,
                showName: !state.showName
            }
        default:
            return state
    }
}
