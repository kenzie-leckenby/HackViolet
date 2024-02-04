import React, {useState} from "react";
import users from '../users.json';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const addUser = async () => {
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
    try{
      const response = await fetch('http://localhost:3001/writeFile', {
        method: 'POST',
          // sets the type of data stream
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ newUser }),
      });

      if(response.ok){
        console.log("User Added");
      }
      else{
        console.log("Failed to add User");
      }
    } catch (error){
      console.log(error);
    }
    
    }

    return(
      <div id="sign-up-window">
        <div class="sub-window">
            <div class="title">Sign Up</div>
            <input id="username" class="text-input" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}></input>
            <input id="password" class="text-input" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
            <button class="button-big" id="Login" onClick={addUser}>Submit</button>
            <div class="borderline"> </div>
            <div class="button" onClick={() => navigate('/Profile/SignIn')}> Already have an Account </div>
        </div>
      </div>
    )
  }
  

export default SignUp;