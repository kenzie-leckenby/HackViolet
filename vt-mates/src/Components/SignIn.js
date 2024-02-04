import React from 'react';
import { useNavigate } from 'react-router-dom';

function SignIn() {
const navigate = useNavigate();

    return(
        <div id="sign-in-window">
        Sign In
        <input id="username"></input>
        <input id="password"></input>
        <button id="submit" >
            Submit
        </button>
        <div onClick={() => navigate('/Profile/SignUp')}> Create new account </div>
        </div>
    )
}

export default SignIn;