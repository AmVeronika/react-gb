import React, {useState} from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import {getUserRefById, sign_up} from "../firebase";
import {set} from "firebase/database";
import {setUserAction, setUserWithThunk} from "../store/profile/actionProfile";
import {useDispatch} from "react-redux";

export const SignUp = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [name, setAuthName] = useState("");
    const [email, setAuthEmail] = useState("");
    const [pass, setAuthPassW] = useState("");
    const handleChangeName = (e) => {
        setAuthName(e.target.value)
    }
    const handleChangeEmail = (e) => {
        setAuthEmail(e.target.value)
    }
    const handleChangePassW = (e) => {
        setAuthPassW(e.target.value)
    }


    const [error, setError] = useState("");
    const handleSubmit = async (e, email, pass) => {
        e.preventDefault()
        try {
            await sign_up(email, pass).then(result => {
                set(getUserRefById(result.user.uid), {
                    user_name: name,
                    user_email: email,
                    user_id: result.user.uid
                })
                dispatch(setUserWithThunk(result.user.uid))
            });
            navigate('/', {replace: true})
        } catch (error) {
            setError(error.message);
        }
    }
    return (
        <div className="sing-up">
            <form className="sing-up__form" onSubmit={e => handleSubmit(e, email, pass)}>
                <h2 className="sing-up__form-title">Регистрация</h2>
                <label className="sing-up__label">
                    Введите имя и фамилию
                    <input className="sing-up__input" type="text" value={name} onChange={handleChangeName}/>
                </label>
                <label className="sing-up__label">
                    Введите почту
                    <input className="sing-up__input" type="email" value={email} onChange={handleChangeEmail}/>
                </label>
                <label className="sing-up__label">
                    Придумайте пароль
                    <input className="sing-up__input" type="password" value={pass} onChange={handleChangePassW}/>
                </label>
                {error && <p>{error}</p>}
                <button className="sing-up__form-btn">Зарегистрироваться</button>
                <NavLink to="/sign-in" className="sing-up__link">Войти по паролю</NavLink>
            </form>
        </div>
    );
};
