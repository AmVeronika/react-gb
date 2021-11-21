import { ADD_PROFILE_ACTION, DELETE_PROFILE_ACTION, ADD_NEW_PROFILE_ACTION } from "./actionProfile";

const initialState = {
   profilesList: []
}

export const profileReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_PROFILE_ACTION:
         return {
            ...state,
            profilesList: [...state.profilesList, ...action.payload]
         }
         case ADD_NEW_PROFILE_ACTION: 
         return {
            ...state,
            profilesList: [...state.profilesList, action.payload]
         }
      case DELETE_PROFILE_ACTION:
         return {
            ...state,
            profilesList: state.profilesList.filter(profile => profile.id !== action.payload)
         }
      default:
         return state
   }
}
