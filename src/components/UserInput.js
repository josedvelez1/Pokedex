import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { changeUser } from '../store/slices/user.slice';
import { useDispatch } from 'react-redux';

const UserInput = () => {

    const [ userName, setUserName] = useState("");

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const getName = () => {
        dispatch(changeUser(userName));
        navigate("/pokedex")
    }


    return (
        <form>
            <h1>UserInput</h1>
            <input type="text" value={userName} onChange={e => setUserName(e.target.value)} />
            <button onClick={getName}>Enviar</button>
        </form>
    );
};

export default UserInput;