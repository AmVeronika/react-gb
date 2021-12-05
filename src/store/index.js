import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import { chatsReducer } from "./chats/reducerChats";
import {profileReducer} from "./profile/reduceProfile";
import {persistReducer, persistStore} from "redux-persist";
import thunk from "redux-thunk";
import storage from 'redux-persist/lib/storage';
import {messagesReducer} from "./messages/reducerMessages";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    profile: profileReducer,
    chats: chatsReducer,
    messageList: messagesReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk))
)
export const persistor = persistStore(store);
