import React, {useState} from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import { sign_in} from "../firebase";
import {useDispatch} from "react-redux";
import {setUserWithThunk} from "../store/profile/actionProfile";

export const SignIn = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [email, setUserEmail] = useState("");
    const [pass, setUserPassW] = useState("");

    const handleChangeEmail = (e) => {
        setUserEmail(e.target.value)
    }
    const handleChangePassW = (e) => {
        setUserPassW(e.target.value)
    }
    const [error, setError] = useState("");
    const handleSubmit = async (e, email, pass) => {
        e.preventDefault()
        try {
            await sign_in(email, pass).then(result => {
                dispatch(setUserWithThunk(result.user.uid))
            });
            navigate('/profile', {replace: true})
        } catch (error) {
            setError(error.message);
        }
    }
    return (
        <div className="sing-up">
            <form className="sing-up__form" onSubmit={e => handleSubmit(e, email, pass)}>
                <h2 className="sing-up__form-title">Войти в личный кабинет</h2>
                <label className="sing-up__label">
                    Введите почту
                    <input className="sing-up__input" type="email" value={email} onChange={handleChangeEmail}/>
                </label>
                <label className="sing-up__label">
                    Введите пароль
                    <input className="sing-up__input" type="password" value={pass} onChange={handleChangePassW}/>
                </label>
                {error && <p>{error}</p>}
                <button className="sing-up__form-btn">Войти</button>
                <NavLink to="/sign-up" className="sing-up__link">Вернуться к регистрации</NavLink>
            </form>
        </div>
    );
};
