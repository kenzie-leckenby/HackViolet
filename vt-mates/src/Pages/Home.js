import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return(
    <div class="page-width">
        <h2>Welcome to VTMates!</h2>
        <p1>VTMates is an app made to help those living in off campus housing rekindle the community that they used to have while staying on campus.</p1>
        <h2>How it Works</h2>
        <p1>All you have to do is make a profile and choose some interests and our algorithms will handle the rest. Connecting you with like minded individuals and reccomending potential places to meet up based on your location and interests.</p1>
        <h2>Sign-up Today</h2>
        <button id="sign-up-button" class="button-big" onClick={() => navigate('/Profile/SignUp')}>Sign-up</button>
    </div>
  )
}

export default Home;