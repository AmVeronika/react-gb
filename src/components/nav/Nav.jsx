import React from 'react';
import {NavLink} from "react-router-dom";

export const Nav = () => {
    return (
        <nav className="navigation">
            <NavLink to="/" className="navigation__link">HOME</NavLink>
            <NavLink to="/profiles" className="navigation__link">PROFILES</NavLink>
            <NavLink to="/chats" className="navigation__link">CHATS</NavLink>
        </nav>
    );
};
