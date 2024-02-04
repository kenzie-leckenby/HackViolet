import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import users from '../users.json';


function SignIn() {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const navigate = useNavigate();

const longin = () => {
       for (let i = 0; i < users.length; i++){
        if(users[i].username === username && users[i].password === password){
            navigate('/Profile');
            return;
        }
    }

    console.log("Invalid username or password");
}

    return(
        <div id="sign-in-window">
        Sign In
        <input id="username" value={username} onChange={(e) => setUsername(e.target.value)}></input>
        <input id="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
        <button id="submit" onClick={longin}>
            Submit
        </button>
        <div onClick={() => navigate('/Profile/SignUp')}> Create new account </div>
        </div>
    )
}

export default SignIn;