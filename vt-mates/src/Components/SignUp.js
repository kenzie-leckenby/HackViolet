import React, {useState} from "react";
import users from '../users.json';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const addUser = () => {
    for(let i = 0;i < users.length; i++){
      if(users[i].username === username || users[i].password === password){
        console.log("Username or password already exists")
        return;
      }
    }

    const newUser = {
      username: username,
      password: password
    }

    
  }

    return(
      <div id="sign-up-window">
        <div class="sub-window">
            <div class="title">Sign Up</div>
            <input id="username" class="text-input" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}></input>
            <input id="password" class="text-input" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
            <button class="button-span" id="Login" onClick={addUser}>Submit</button>
            <hr class="borderline" />
            <div class="highlight" onClick={() => navigate('/Profile/SignIn')}> Already have an Account </div>
        </div>
      </div>
    )
  }
  

export default SignUp;