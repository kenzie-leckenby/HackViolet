import React from 'react';

const SignIn = () => {
  return(
    <div id="sign-in-window">
      Sign In
      <input id="username"></input>
      <input id="password"></input>
      <button id="submit" >
        Submit
      </button>
    </div>
  )
}

const SignUp = () => {
  return(
    <div id="sign-up-window">
      Sign Up
      <input id="username"></input>
      <input id="password"></input>
      <button id="submit" >
        Submit
      </button>
    </div>
  )
}

function Profile() {
  return(
    <div>
      <SignUp />
    </div>
  )
}

export default Profile;