import { initializeApp } from "firebase/app";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "firebase/auth"
import {getDatabase, ref} from "firebase/database"

const firebaseConfig = {
    apiKey: "AIzaSyAWNfFUJ2sgcOUBtE-5dIlwFn7SKA5cw7Q",
    authDomain: "secret-chat-36b19.firebaseapp.com",
    projectId: "secret-chat-36b19",
    storageBucket: "secret-chat-36b19.appspot.com",
    messagingSenderId: "976457483885",
    appId: "1:976457483885:web:3b92674e8aa1b30f176164"
};

const app = initializeApp(firebaseConfig);


const auth = getAuth(app)

export const sign_up = async (email, pass) => await createUserWithEmailAndPassword(auth, email, pass)
export const sign_in = async (email, pass) => await signInWithEmailAndPassword(auth, email, pass)
export const sign_out = async () => await signOut(auth)
export const status = async (user) => await onAuthStateChanged(auth, user)

export const db = getDatabase(app)
export const userRef = ref(db, 'users')
export const chatsRef = ref(db, 'chats');
export const messagesRef = ref(db, 'messages');
export const getChatRefById = (id) => ref(db, `chats/chat_${id}`);
export const getChatMsgsRefById = (id) => ref(db, `messages/message_list_${id}`);
export const getChatMsgsListRefById = (chatId) => ref(db, `messages/message_list_${chatId}/messages_list`);
export const getUserRefById = (id) => ref(db, `users/user_${id}`);
