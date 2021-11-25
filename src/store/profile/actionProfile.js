export const ADD_PROFILE_ACTION = "ADD_PROFILE_ACTION";
export const DELETE_PROFILE_ACTION = "DELETE_PROFILE_ACTION"
export const ADD_NEW_PROFILE_ACTION = "ADD_NEW_PROFILE_ACTION";

export const addProfileAction = (payload)=> ({
    type: ADD_PROFILE_ACTION,
    payload: payload
})
export const deleteProfileAction = (payload)=> ({
    type: DELETE_PROFILE_ACTION,
    payload: payload
})
export const addNewProfileAction = (payload)=> ({
   type: ADD_NEW_PROFILE_ACTION,
   payload: payload
})