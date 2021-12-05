import './nullstyle.scss';
import './App.scss';
import React, {useEffect} from "react";
import {Route, Routes, useNavigate} from "react-router-dom";
import {Home} from "./pages/Home";
import {Chats} from "./pages/Chats";
import {Dialogs} from "./pages/Dialogs";
import {Profiles} from "./pages/Profiles";
import {Nav} from "./components/nav/Nav";
import {SignIn} from "./pages/SignIn";
import {SignUp} from "./pages/SignUp";
import {status} from "./firebase";
import {Exit} from "./components/exit";

function App() {
const navigate = useNavigate();
    useEffect(async () => {
        try {
            await status((user) => {
                if (!user) {
                    navigate('/sign-up', {replace: true})
                }
            })
        } catch (error) {
            console.log(error.message);
        }
    }, [status]);

    return (
                <div className="app">
                    <Nav/>
                    <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path="/chats" element={<Chats/>}/>
                        <Route path="/chats/dialogs/:id" element={<Dialogs/>}/>
                        <Route path="/profiles" element={<Profiles/>}/>
                        <Route path="/sign-in" element={<SignIn/>}/>
                        <Route path="/sign-up" element={<SignUp/>}/>
                        <Route path="*" element={<Home/>}/>
                    </Routes>
                    <Exit></Exit>
                </div>
    );
}

export default App;
