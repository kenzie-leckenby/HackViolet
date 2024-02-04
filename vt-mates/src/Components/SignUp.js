import React, {useState} from "react";
import users from '../users.json';

function SignUp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

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
        Sign Up
        <input id="username" value={username} onChange={(e) => setUsername(e.target.value)}></input>
        <input id="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
        <button id="submit" onClick={addUser} >
          Submit
        </button>
      </div>
    )
  }
  

export default SignUp;