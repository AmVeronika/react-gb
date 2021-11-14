import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {toggleAction} from "../store/profile/actionProfile";

export const Profiles = () => {
    const {name, showName} = useSelector(state => state);
    const dispatch = useDispatch();
    const handleChange = ()=> {
        dispatch(toggleAction)
    }
    return (
        <div>
            <label className='profile-check'>
                <input onChange={handleChange} type="checkbox"/>  Состояние стейта: {showName&&name}
            </label>
        </div>
    );
};
