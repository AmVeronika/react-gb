export const ADD_PROFILE_ACTION = "ADD_PROFILE_ACTION";
export const DELETE_PROFILE_ACTION = "DELETE_PROFILE_ACTION"
export const ADD_NEW_PROFILE_ACTION = "ADD_NEW_PROFILE_ACTION";
export const LOADING_PROFILE_ACTION = "LOADING_PROFILE_ACTION";

export const addProfileAction = (payload) => ({
    type: ADD_PROFILE_ACTION,
    payload: payload
})
export const deleteProfileAction = (payload) => ({
    type: DELETE_PROFILE_ACTION,
    payload: payload
})
export const addNewProfileAction = (payload) => ({
    type: ADD_NEW_PROFILE_ACTION,
    payload: payload
})
export const loadingProfileAction = {
    type: LOADING_PROFILE_ACTION
}
export const addProfileWithThunk = () => (dispatch) => {
    dispatch(loadingProfileAction)
    const fetchChatList = async () => {
        try {
            const response = await fetch("https://rickandmortyapi.com/api/character/?page=1");
            const data = await response.json();
            console.log(response)
            if (!response.ok) {
                throw new Error('Ошибка соединения')
            }
            dispatch(addProfileAction(data.results))
        } catch (err) {
            alert(err)
        } finally {
            dispatch(loadingProfileAction)
        }
    };
    fetchChatList();
}
