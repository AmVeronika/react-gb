import React from 'react';
import {sign_out} from "../firebase";

export const Exit = () => {
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await sign_out()
        } catch (error) {
            console.log(error.message);
        }
    }
    return (
        <div>
            <button className="exit navigation__link" onClick={handleSubmit}>Выйти</button>
        </div>
    );
};
