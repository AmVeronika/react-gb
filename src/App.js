import './nullstyle.scss';
import './App.scss';
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home";
import {Chats} from "./pages/Chats";
import {Dialogs} from "./pages/Dialogs";
import {Profiles} from "./pages/Profiles";
import {Nav} from "./components/nav/Nav";
import {Provider} from "react-redux";
import {store} from "./store";

function App() {

    return (
        <Provider store={store}>
            <BrowserRouter>
                <div className="app">
                    <Nav/>
                    <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path="/chats" element={<Chats/>}/>
                        <Route path="/chats/dialogs/:id" element={<Dialogs/>}/>
                        <Route path="/profiles" element={<Profiles/>}/>
                        <Route path="*" element={<Home/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </Provider>

    );
}

export default App;
